import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2022 — Present",
    desc: "Leading the frontend team in building scalable web applications. Architected a design system used across 12 products, improving development speed by 40%.",
    tags: ["React", "TypeScript", "Next.js", "Design Systems"],
  },
  {
    role: "Full Stack Developer",
    company: "StartupHub",
    period: "2020 — 2022",
    desc: "Built and maintained multiple client-facing applications. Developed real-time features serving 100K+ daily active users with 99.9% uptime.",
    tags: ["Node.js", "React", "PostgreSQL", "AWS"],
  },
  {
    role: "UI/UX Developer",
    company: "Creative Agency",
    period: "2019 — 2020",
    desc: "Designed and implemented responsive web experiences for Fortune 500 clients. Increased conversion rates by an average of 35% through UX optimization.",
    tags: ["Figma", "CSS", "JavaScript", "A/B Testing"],
  },
  {
    role: "Junior Web Developer",
    company: "Digital Studio",
    period: "2018 — 2019",
    desc: "Developed custom WordPress themes and plugins. Built interactive landing pages and email campaigns for diverse client portfolios.",
    tags: ["HTML/CSS", "JavaScript", "WordPress", "PHP"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 section-padding relative" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="relative max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4 block">
            Career Journey
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`relative pl-10 md:pl-0 mb-12 last:mb-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <div className={`absolute top-2 w-4 h-4 rounded-full bg-primary glow-box z-10 left-0 md:left-auto ${
                i % 2 === 0 ? "md:-right-2" : "md:-left-2"
              }`} />

              <div className="p-6 rounded-xl bg-card glow-border hover:bg-surface-hover transition-colors">
                <div className={`flex items-center gap-2 text-primary text-sm font-medium mb-2 ${
                  i % 2 === 0 ? "md:justify-end" : ""
                }`}>
                  <Calendar size={14} />
                  {exp.period}
                </div>
                <h3 className="font-display text-xl font-bold mb-1">{exp.role}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Briefcase size={14} />
                  {exp.company}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.desc}</p>
                <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
