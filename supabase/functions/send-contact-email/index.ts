import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const RECIPIENT_EMAIL = "mubarekjemal630@gmail.com";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, budget, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Use Lovable AI to compose a nicely formatted email response
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr><td style="padding: 10px; font-weight: bold; color: #555; width: 120px;">Name:</td><td style="padding: 10px;">${escapeHtml(name)}</td></tr>
          <tr style="background: #f9fafb;"><td style="padding: 10px; font-weight: bold; color: #555;">Email:</td><td style="padding: 10px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding: 10px; font-weight: bold; color: #555;">Subject:</td><td style="padding: 10px;">${escapeHtml(subject || "No subject")}</td></tr>
          <tr style="background: #f9fafb;"><td style="padding: 10px; font-weight: bold; color: #555;">Budget:</td><td style="padding: 10px;">${escapeHtml(budget || "Not specified")}</td></tr>
        </table>
        <div style="margin-top: 20px; padding: 15px; background: #f3f4f6; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 20px;">Sent from your portfolio contact form</p>
      </div>
    `;

    // Send email using Supabase's built-in email via the REST API
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    // Use the edge function to send via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (resendApiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: `Portfolio Contact <onboarding@resend.dev>`,
          to: [RECIPIENT_EMAIL],
          subject: `Portfolio Contact: ${subject || "New Message"} from ${name}`,
          html: emailHtml,
          reply_to: email,
        }),
      });

      if (!resendRes.ok) {
        const err = await resendRes.text();
        throw new Error(`Resend error: ${err}`);
      }
    } else {
      // Fallback: store the message and notify via console
      console.log("No RESEND_API_KEY found. Storing contact submission.");
      // We'll store it in the database instead
      const { createClient } = await import("https://esm.sh/@supabase/supabase-js@2");
      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

      const { error } = await supabase.from("contact_submissions").insert({
        name,
        email,
        subject: subject || null,
        budget: budget || null,
        message,
      });

      if (error) throw error;
    }

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully!" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send message" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
