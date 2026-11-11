"use client";
import { motion } from "framer-motion";
import { Monitor, Server, Wrench, Binary, Network } from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiFirebase,
  SiGooglegemini,
  SiGit,
  SiVite,
  SiPostman,
  SiFigma,
  SiVercel,
  SiCplusplus,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ElementType;
}

interface Category {
  title: string;
  caption: string;
  icon: React.ElementType;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: "Frontend",
    caption: "Interfaces that feel fast and look sharp",
    icon: Monitor,
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
    ],
  },
  {
    title: "Backend & Data",
    caption: "APIs, databases and AI integrations",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "REST APIs", icon: Network },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Tools & Deployment",
    caption: "Shipping and working with a team",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", icon: SiGit },
      { name: "Vercel", icon: SiVercel },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: SiFigma },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    title: "Problem Solving",
    caption: "400+ problems across Codeforces, CodeChef and LeetCode",
    icon: Binary,
    skills: [
      { name: "C++", icon: SiCplusplus },
      { name: "Data Structures", icon: Binary },
      { name: "Algorithms", icon: Network },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-16 sm:py-20 lg:py-24 relative">
    <div className="absolute inset-0 dot-pattern opacity-20" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
        <p className="text-center text-sm text-muted-foreground max-w-xl mx-auto mb-12">
          The tools I use to design, build and ship full-stack products.
        </p>
      </motion.div>

      <div className="space-y-4">
        {categories.map((cat, i) => {
          const CategoryIcon = cat.icon;

          return (
            <motion.div
              key={cat.title}
              className="glass-card rounded-2xl p-5 sm:p-6 grid gap-5 md:grid-cols-[14rem_1fr] md:items-center hover:glow-border transition-shadow duration-500"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <CategoryIcon
                    size={20}
                    aria-hidden="true"
                    className="text-primary"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground font-mono">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                    {cat.caption}
                  </p>
                </div>
              </div>

              <ul className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, j) => {
                  const SkillIcon = skill.icon;
                  return (
                    <motion.li
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-muted/30 px-3.5 py-2 text-xs sm:text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-colors duration-300 cursor-default"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: i * 0.05 + j * 0.04 }}
                      whileHover={{ y: -2 }}
                    >
                      <SkillIcon
                        size={16}
                        aria-hidden="true"
                        className="text-primary shrink-0"
                      />
                      {skill.name}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;