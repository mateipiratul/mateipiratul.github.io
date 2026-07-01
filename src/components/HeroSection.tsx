import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl w-full"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-display text-primary text-sm tracking-widest uppercase mb-4"
        >
          Hey, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold font-display text-gradient mb-6 leading-tight"
        >
          Matei-Iulian
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-8 max-w-2xl"
        >
          2nd year Computer Science Student @ UB-FMI · Problem Solver · Analytical Thinker
          <br />
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4 text-sm text-muted-foreground"
        >
          <a href="mailto:matei.piratul@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={16} /> matei.piratul@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} /> Bucharest, Romania
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { label: "Experience", value: "2 Years" },
            { label: "Projects", value: "10+" },
            { label: "Technologies", value: "5+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-border rounded-lg p-4 bg-card/50 border-glow text-center"
            >
              <p className="text-2xl font-display font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
