"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "IdeaPilot AI",
    subtitle: "AI Startup Incubator Platform",
    description:
      "AI-powered platform that helps entrepreneurs validate startup ideas, generate market research, financial forecasts, branding, and investor pitch decks in under 2 minutes.",
    image: "/ideapilot.png",
    live: "https://idea-pilot-one.vercel.app",
    github: "https://github.com/imtiaz-zihad/IdeaPilot",
    tags: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Google gemini AI"],
    accent: "200 80% 55%",
  },
  {
    id: 2,
    title: "SkillSwap",
    subtitle: "The microservice exchange platform",
    description:
      "SkillSwap is a full-stack MicroSkill Exchange Platform where users can exchange skills, post problems, offer solutions, and earn coins through collaborative learning",
    image: "/skillswap.png",
    live: "https://skill-swap-ten-pearl.vercel.app",
    github: "https://github.com/imtiaz-zihad/SkillSwap-Frontend",
    tags: ["Nextjs", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
    accent: "150 60% 50%",
  },
  {
    id: 3,
    title: "CareSync",
    subtitle: "Healthcare Platform",
    description:
      "Connecting patients with doctors for seamless appointment scheduling, medical records, and real-time health monitoring.",
    image: "/bpm_helthcre.jpg",
    live: "https://medical-manager-8561e.web.app",
    github: "https://github.com/imtiaz-zihad/CareSync-Client",
    tags: ["React", "Firebase", "Tailwind", "Auth"],
    accent: "185 80% 55%",
  },
  {
    id: 4,
    title: "Volunteer Hunter",
    subtitle: "Community Platform",
    description:
      "Find and join volunteer opportunities in your community with real-time updates, team coordination, and impact tracking.",
    image: "https://i.ibb.co/qMHtKnR/volunteer.png",
    live: "https://volunteer-hunter.web.app/",
    github: "https://github.com/imtiaz-zihad/Volunteer-Hunter",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    accent: "270 60% 60%",
  },
];

const Projects = () => {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-10 sm:mb-16" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-8 items-start">
          {/* Left side project selector */}
          <motion.div
            className="space-y-2 sm:space-y-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`w-full text-left p-3 sm:p-4 rounded-xl border transition-all duration-400 group ${
                  active === i
                    ? "glass-card border-primary/40 glow-border"
                    : "border-border/20 hover:border-border/50 bg-transparent"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className={`text-sm sm:text-lg font-semibold transition-colors ${
                        active === i
                          ? "text-primary"
                          : "text-foreground/70 group-hover:text-foreground"
                      }`}
                    >
                      {p.title}
                    </h3>

                    <p className="text-[11px] sm:text-xs text-muted-foreground">
                      {p.subtitle}
                    </p>
                  </div>

                  <ChevronRight
                    size={18}
                    className={`transition-all duration-300 ${
                      active === i
                        ? "text-primary translate-x-0 opacity-100"
                        : "text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"
                    }`}
                  />
                </div>
              </button>
            ))}
          </motion.div>

          {/* Right side showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="space-y-4 sm:space-y-5"
              >
                {/* Browser Mockup */}
                <a
                  href={current.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl overflow-hidden border border-border/30 group"
                >
                  <div className="bg-muted/50 px-3 sm:px-4 py-2 flex items-center gap-2 border-b border-border/30">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[hsl(45,80%,50%)]/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[hsl(140,60%,50%)]/60" />
                    </div>

                    <div className="flex-1 mx-2 sm:mx-4">
                      <div className="bg-background/50 rounded-md px-2 sm:px-3 py-1 text-[9px] sm:text-[10px] font-mono text-muted-foreground truncate">
                        {current.live}
                      </div>
                    </div>

                    <ExternalLink
                      size={14}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </div>

                  {/* Image */}
                  <div className="relative overflow-hidden group">
                    <Image
                      src={current.image}
                      alt={current.title}
                      width={1920}
                      height={1080}
                      className="w-full h-auto aspect-video object-cover object-top transition-transform duration-700 group-hover:scale-105 max-h-55 sm:max-h-80 lg:max-h-85 xl:max-h-100"
                    />

                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, hsl(${current.accent} / 0.15), hsl(${current.accent} / 0.05))`,
                      }}
                    >
                      <span className="glass-card px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium text-foreground flex items-center gap-2">
                        <ExternalLink size={14} />
                        View Live
                      </span>
                    </div>
                  </div>
                </a>

                {/* Project Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: `hsl(${current.accent})` }}
                    />

                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {current.title}
                    </h3>

                    <span className="text-[10px] sm:text-xs font-mono text-muted-foreground">
                      — {current.subtitle}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-4 sm:pl-5">
                    {current.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pl-4 sm:pl-5">
                    {current.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] sm:text-[10px] font-mono px-2 py-1 rounded-full border border-border/40 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pl-4 sm:pl-5 pt-1">
                    <a
                      href={current.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-primary hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>

                    <a
                      href={current.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={14} /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;