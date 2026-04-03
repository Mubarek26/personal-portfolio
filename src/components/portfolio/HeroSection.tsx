import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Download, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

const socials = [
  { icon: Github, href: "https://github.com/mubarek26/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mubarekjemal1", label: "LinkedIn" },
];

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{count}{suffix}</span>;
};

const roles = ["Developer", "Designer", "Creator", "Innovator"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{ repeat: Infinity, duration: 3 + i * 0.5, delay: i * 0.4 }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-15" />

      {/* Main hero content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 pt-24 pb-16 min-h-screen">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glow-border mb-8"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-sm text-muted-foreground">Available for freelance work</span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] mb-8">
            I'm a Creative
            <br />
            <span className="relative inline-block">
              <motion.span
                key={roleIndex}
                initial={{ y: 40, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -40, opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.5 }}
                className="text-gradient glow-text inline-block"
              >
                {roles[roleIndex]}
              </motion.span>
            </span>
            <br />
            <span className="text-muted-foreground/80">& Problem Solver</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            I craft immersive digital experiences that blend stunning design with cutting-edge technology. From concept to deployment — let's build something extraordinary together.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#projects"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-all glow-box"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg glow-border text-foreground font-display font-semibold text-sm hover:bg-secondary transition-all"
            >
              Get In Touch
            </a>
            <a
              href="/mubarek-jemal-cv.pdf"
              download
              className="px-6 py-4 rounded-lg border border-border text-muted-foreground font-display font-semibold text-sm hover:text-primary hover:border-primary/50 transition-all flex items-center gap-2"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Follow me</span>
            <div className="w-8 h-px bg-border" />
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow-box transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right floating profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/10"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 3, -3, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
              />
              <motion.div
                className="absolute -inset-3 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary glow-box" />
              </motion.div>
              <div className="absolute inset-4 rounded-full bg-primary/5 animate-float" style={{ animationDelay: "1s" }} />
              <div className="absolute inset-8 rounded-full overflow-hidden glow-border">
                <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -left-4 top-1/4 glass px-4 py-2 rounded-xl"
            >
              <span className="text-xs font-display font-semibold text-primary">React Expert</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
              className="absolute -right-4 top-2/3 glass px-4 py-2 rounded-xl"
            >
              <span className="text-xs font-display font-semibold text-primary">UI/UX Pro</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar - now in flow, not absolute */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 w-full section-padding pb-8"
      >
        <div className="max-w-[1800px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center glass rounded-xl py-5 px-4">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="relative z-10 flex justify-center pb-4"
      >
        <ArrowDown className="text-muted-foreground" size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
