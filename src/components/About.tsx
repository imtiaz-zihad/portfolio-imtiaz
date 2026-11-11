"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Briefcase,
  FlaskConical,
  MapPin,
  Calendar,
  Download,
} from "lucide-react";

const tabs = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "research", label: "Research", icon: FlaskConical },
];

const aboutContent = {
  about: {
    paragraphs: [
      <>
        I&apos;m a{" "}
        <span className="text-primary font-semibold">Full Stack Developer</span>{" "}
        who transforms ideas into scalable, beautiful web applications. I work
        across the entire stack — from crafting pixel-perfect UIs to designing
        robust APIs and databases.
      </>,
      <>
        My core stack is <span className="text-primary">React</span>,{" "}
        <span className="text-primary">NextJS</span>,{" "}
        <span className="text-primary">Node.js</span>,{" "}
        <span className="text-primary">Express</span> &{" "}
        <span className="text-primary">PostgreSQL</span>,{" "}
        <span className="text-primary">MongoDB</span>. I&apos;m also an active
        competitive programmer with 400+ problems solved across multiple
        platforms.
      </>,
    ],
    details: [
      { label: "Name", value: "Imtiaz Hossen" },
      { label: "Location", value: "Dhaka, Bangladesh", icon: MapPin },
      { label: "Languages", value: "Bangla, English" },
      { label: "Available", value: "Open to Work", highlight: true },
    ],
  },
  experience: [
    {
      role: "Full Stack Developer",
      type: "Freelance / Personal Projects",
      period: "2023 — Present",
      points: [
        "Built 10+ full-stack projects with MERN, Next.js, TypeScript and PostgreSQL/Prisma",
        "Launched a live e-commerce store (kickwear.shop) and built AI-powered apps with Gemini",
        "Implemented authentication, REST APIs & payment flows",
        "Optimized performance and responsive design across devices",
      ],
    },
    {
      role: "Competitive Programmer",
      type: "Codeforces / CodeChef / LeetCode",
      period: "2024 — Present",
      points: [
        "400+ problems solved across platforms",
        "Codeforces max rating 1096, CodeChef highest rating 1436 (2-star)",
        "LeetCode 100+ solved with 92.75% acceptance rate",
        "Strong DSA skills: Trees, Graphs, DP, Union-Find",
      ],
    },
  ],
  research: {
    title: "Bangla NLP & Machine Learning",
    points: [
      "Exploring Bangla Natural Language Processing as my main research direction",
      "Working toward publishing peer-reviewed research papers during my undergraduate years",
      "Interested in applying NLP to low-resource language problems and building tools around the results",
      "Aiming for a fully-funded Master's program after my BSc",
    ],
  },
};

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-14" />
        </motion.div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          {/* Left — Photo + quick stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 space-y-6">
              {/* Photo */}
              <div className="relative mx-auto w-48 h-48 rounded-2xl overflow-hidden border-2 border-primary/20">

                <Image
                  src="/imtiaz.jpg"
                  alt="Imtiaz Hossen"
                  fill
                  className="object-cover"
                  sizes="12rem"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
              </div>

              {/* Name & title */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground">
                  Imtiaz Hossen
                </h3>
                <p className="text-sm text-primary font-mono">
                  Full Stack Developer
                </p>
                <p className="text-sm text-primary font-mono">
                  Competitive Programmer
                </p>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "10+", label: "Projects" },
                  { value: "400+", label: "Problems" },
                  { value: "2+", label: "Years" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center bg-muted/30 rounded-lg py-2.5"
                  >
                    <p className="text-lg font-bold text-primary font-mono">
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-muted-foreground uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://drive.google.com/file/d/1ZKTNGcqFb8jcZmUZ_raGN02aWoeRwdXA/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                <Download size={14} /> Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right — Tabbed content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 mb-6" role="tablist">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-primary/10 border border-primary/30 text-primary glow-border"
                        : "text-muted-foreground hover:text-foreground border border-transparent"
                    }`}
                  >
                    <Icon size={16} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="glass-card rounded-xl p-6 min-h-85">
              <AnimatePresence mode="wait">
                {activeTab === "about" && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    {aboutContent.about.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {aboutContent.about.details.map((d) => (
                        <div
                          key={d.label}
                          className="bg-muted/20 rounded-lg p-3"
                        >
                          <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
                            {d.label}
                          </p>
                          <p
                            className={`text-sm font-medium ${d.highlight ? "text-primary" : "text-foreground"}`}
                          >
                            {d.highlight && (
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-1.5 animate-pulse" />
                            )}
                            {d.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "experience" && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {aboutContent.experience.map((exp, i) => (
                      <div
                        key={i}
                        className="relative pl-6 border-l border-primary/20"
                      >
                        <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full border-2 border-primary bg-background -translate-x-[5.5px]" />
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-semibold text-foreground">
                            {exp.role}
                          </h4>
                        </div>
                        <p className="text-xs text-primary mb-1">{exp.type}</p>
                        <p className="text-[10px] text-muted-foreground flex items-center gap-1 mb-3">
                          <Calendar size={10} /> {exp.period}
                        </p>
                        <ul className="space-y-1.5">
                          {exp.points.map((point, j) => (
                            <li
                              key={j}
                              className="text-xs text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "research" && (
                  <motion.div
                    key="research"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h4 className="text-sm font-semibold text-foreground">
                      {aboutContent.research.title}
                    </h4>
                    <ul className="space-y-1.5">
                      {aboutContent.research.points.map((point, j) => (
                        <li
                          key={j}
                          className="text-xs text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;