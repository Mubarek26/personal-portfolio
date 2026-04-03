import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Award, Users, Coffee } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable solutions with best practices" },
  { icon: Palette, title: "Design Eye", desc: "Pixel-perfect interfaces that delight users at every touchpoint" },
  { icon: Zap, title: "Performance", desc: "Blazing fast, optimized experiences that load instantly" },
  { icon: Award, title: "Quality First", desc: "Rigorous testing and attention to every detail" },
  { icon: Users, title: "Collaboration", desc: "Seamless teamwork with designers, PMs, and stakeholders" },
  { icon: Coffee, title: "Dedication", desc: "Passionate about continuous learning and growth" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 section-padding" ref={ref}>
      <div className="max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Passionate about building
            <br />
            <span className="text-gradient">digital excellence</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 items-start mb-24">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden glow-border aspect-[3/4]">
              <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 -right-6 glass rounded-xl p-5"
            >
              <div className="font-display text-3xl font-bold text-primary">5+</div>
              <div className="text-xs text-muted-foreground">Years of Experience</div>
            </motion.div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              With over 5 years of experience in web development and design, I specialize in creating modern, responsive, and user-centered digital products. I combine technical expertise with creative vision to deliver solutions that not only look stunning but perform flawlessly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From startups to enterprises, I've helped teams transform their ideas into reality. My approach focuses on clean architecture, intuitive UX, and attention to every pixel. I believe great software is built at the intersection of thoughtful design and robust engineering.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and mentoring junior developers. I'm always excited to take on new challenges and push the boundaries of what's possible on the web.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              {["JavaScript", "TypeScript", "React", "Node.js", "Figma", "AWS"].map((tag) => (
                <span key={tag} className="px-4 py-2 text-sm rounded-full bg-secondary text-secondary-foreground font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlight cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-5 p-6 rounded-xl bg-card glow-border hover:bg-surface-hover transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
