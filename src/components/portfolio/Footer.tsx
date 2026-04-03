import { Github, Linkedin, Heart } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/mubarek26/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mubarekjemal1", label: "LinkedIn" },
];

const Footer = () => (
  <footer className="py-12 section-padding border-t border-border">
    <div className="max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
        <a href="#" className="font-display text-2xl font-bold text-gradient">
          Portfolio
        </a>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
        © {new Date().getFullYear()} Made with <Heart size={12} className="text-primary" /> All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
