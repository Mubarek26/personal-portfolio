import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-stack e-commerce solution with real-time inventory management, Stripe payments, admin dashboard, and AI-powered product recommendations. Serving 50K+ monthly users.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    color: "from-primary/20 to-primary/5",
    featured: true,
  },
  {
    title: "AI Analytics Dashboard",
    desc: "Enterprise analytics dashboard with ML-powered insights, interactive data visualizations, automated reporting, and real-time data processing pipelines.",
    tags: ["TypeScript", "Python", "D3.js", "TensorFlow"],
    color: "from-glow-muted/20 to-glow-muted/5",
    featured: true,
  },
  {
    title: "Social Media App",
    desc: "Real-time social platform with messaging, stories, content feed, and recommendation engine. Built for scale with microservices architecture.",
    tags: ["Next.js", "WebSocket", "Redis", "AWS"],
    color: "from-primary/15 to-primary/5",
    featured: false,
  },
  {
    title: "Design System Library",
    desc: "Comprehensive component library with 50+ accessible components, interactive documentation, theme builder, and Figma integration.",
    tags: ["React", "Storybook", "Figma", "Radix UI"],
    color: "from-glow-muted/15 to-glow-muted/5",
    featured: false,
  },
  {
    title: "Fintech Mobile App",
    desc: "Banking app with biometric auth, real-time transaction tracking, budget analytics, and peer-to-peer transfers. Processed $2M+ in transactions.",
    tags: ["React Native", "Node.js", "Plaid", "MongoDB"],
    color: "from-primary/20 to-glow-muted/5",
    featured: false,
  },
  {
    title: "Healthcare Portal",
    desc: "HIPAA-compliant patient management system with appointment scheduling, telemedicine integration, and secure medical records.",
    tags: ["Next.js", "GraphQL", "AWS", "FHIR"],
    color: "from-glow-muted/20 to-primary/5",
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 section-padding" ref={ref}>
      <div className="max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4 block">
            Featured Work
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Selected <span className="text-gradient">projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A curated showcase of my best work — from complex web applications to design systems and mobile apps.
          </p>
        </motion.div>

        {/* Featured projects - large */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {projects.filter(p => p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative rounded-2xl overflow-hidden glow-border hover:glow-box transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
              <div className="relative p-10 md:p-12 min-h-[320px] flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="font-display text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a href="#" className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                        <Github size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed max-w-lg">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 text-xs rounded-full bg-secondary text-secondary-foreground font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects - grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + 0.1 * i }}
              className="group p-6 rounded-xl bg-card glow-border hover:bg-surface-hover hover:glow-box transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-display font-bold text-lg group-hover:text-primary transition-colors">{project.title}</h4>
                <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-[11px] rounded-full bg-secondary text-secondary-foreground font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
