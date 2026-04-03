import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    text: "Absolutely exceptional work. The attention to detail and creative problem-solving transformed our platform. Our user engagement increased by 60% within the first month of launch.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    text: "One of the most talented developers I've worked with. They delivered a complex dashboard ahead of schedule with stunning visual design and flawless performance.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, DesignLab",
    text: "The perfect blend of technical expertise and creative vision. Our e-commerce platform exceeded every expectation — revenue increased 45% in Q1 after the redesign.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "CTO, ScaleUp",
    text: "Incredible work ethic and communication throughout the project. The codebase is clean, well-documented, and a joy to maintain. Highly recommend for any serious project.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 section-padding" ref={ref}>
      <div className="max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            What clients <span className="text-gradient">say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="p-8 rounded-xl bg-card glow-border hover:bg-surface-hover transition-colors relative"
            >
              <Quote size={32} className="text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-[15px]">"{t.text}"</p>
              <div>
                <div className="font-display font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
