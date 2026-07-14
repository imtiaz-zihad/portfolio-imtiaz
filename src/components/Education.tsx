"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educations = [
  {
    degree: "BSc in Software Engineering",
    institution: "Daffodil International University",
    period: "2024 – 2028 (expected)",
    description: "Currently pursuing a Bachelor's degree focused on software engineering, algorithms, and web technologies.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Hamdard Public College",
    period: "2022 – 2023",
    description: "Completed higher secondary education with a focus on science.",
  },
];

const Education = () => (
  <section id="education" className="py-24 relative">
    <div className="absolute inset-0 dot-pattern opacity-20" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          My <span className="gradient-text">Education</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />
      </motion.div>

      <div className="max-w-2xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

        {educations.map((edu, i) => (
          <motion.div
            key={edu.degree}
            className="relative pl-16 pb-12 last:pb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            {/* Dot */}
            <div className="absolute left-4 top-1 w-5 h-5 rounded-full border-2 border-primary bg-background flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>

            <div className="glass-card p-5 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap size={16} className="text-primary" />
                <span className="text-xs font-mono text-primary">{edu.period}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
              <p className="text-sm text-accent mb-2">{edu.institution}</p>
              <p className="text-sm text-muted-foreground">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
