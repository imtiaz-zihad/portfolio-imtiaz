"use client";
import { motion } from "framer-motion";
import { ExternalLink, Trophy, Code, Target, Flame } from "lucide-react";

const platforms = [
  {
    name: "Codeforces",
    handle: "imtiazzihad",
    url: "https://codeforces.com/profile/imtiazzihad",
    color: "from-[hsl(0,70%,55%)] to-[hsl(30,80%,55%)]",
    stats: [
      { label: "Problems Solved", value: "300+" },
      { label: "Max Rating", value: "1096" },
      { label: "Rank", value: "Newbie" },
      { label: "Contests", value: "20+" },
    ],
    icon: Flame,
  },
  {
    name: "CodeChef",
    handle: "imtiaz_hossen",
    url: "https://www.codechef.com/users/imtiaz_hossen",
    color: "from-[hsl(30,60%,45%)] to-[hsl(45,80%,50%)]",
    stats: [
      { label: "Problems Solved", value: "56" },
      { label: "Contests", value: "14" },
      { label: "Highest Rating", value: "1436" },
      { label: "Rating", value: "2 ⭐⭐ " },
    ],
    icon: Code,
  },
  {
    name: "LeetCode",
    handle: "imtiaz-hossen",
    url: "https://leetcode.com/u/imtiaz-hossen",
    color: "from-[hsl(35,90%,50%)] to-[hsl(45,100%,55%)]",
    stats: [
      { label: "Problems Solved", value: "100+" },
      { label: "Acceptance Rate", value: "92.75%" },
      { label: "Contest Rating", value: "1,625" },
      { label: "Top", value: "20.54%" },
    ],
    icon: Target,
  },
];

const CP = () => (
  <section id="competitive" className="py-24 relative">
    <div className="absolute inset-0 dot-pattern opacity-20" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Competitive <span className="gradient-text">Programming</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
        <p className="text-center text-muted-foreground text-sm mb-12 max-w-lg mx-auto">
          Sharpening problem-solving skills through competitive programming across multiple platforms.
        </p>
      </motion.div>

      {/* Summary stats */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {[
          { icon: Trophy, label: "Total Solved", value: "400+" },
          { icon: Target, label: "Acceptance Rate", value: "90%+" },
          { icon: Flame, label: "Contests Attended", value: "30+" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="glass-card px-6 py-3 rounded-xl flex items-center gap-3">
            <Icon size={20} className="text-primary" />
            <div>
              <p className="text-lg font-bold text-foreground font-mono">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Platform cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {platforms.map((platform, i) => {
          const Icon = platform.icon;
          return (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl overflow-hidden group hover:glow-border transition-all duration-500 block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Header gradient bar */}
              <div className={`h-1.5 bg-linear-to-r ${platform.color}`} />

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${platform.color} flex items-center justify-center`}>
                      <Icon size={20} className="text-background" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{platform.name}</h3>
                      <p className="text-xs text-muted-foreground font-mono">@{platform.handle}</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {platform.stats.map((stat) => (
                    <div key={stat.label} className="bg-muted/30 rounded-lg p-3">
                      <p className="text-sm font-bold text-foreground font-mono">{stat.value}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  </section>
);

export default CP;