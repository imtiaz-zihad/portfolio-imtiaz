"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import Image from "next/image";

const titles = [
  "Full Stack Developer",
  "Competitive Programmer",
  "Web Enthusiast",
  "Software Engineering Student",
];

const stats = [
  { label: "Years Building", value: 2 },
  { label: "Projects Built", value: 10 },
  { label: "Technologies", value: 12 },
  { label: "Github Commits", value: 500 },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/imtiaz-zihad" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/imtiaz-hossen",
  },
  { icon: Twitter, label: "X (Twitter)", href: "https://x.com/MdImtiazHo74218" },
  {
    icon: SiLeetcode,
    label: "LeetCode",
    href: "https://leetcode.com/u/imtiaz-hossen",
  },
  {
    icon: SiCodeforces,
    label: "Codeforces",
    href: "https://codeforces.com/profile/imtiazzihad",
  },
];

// Starts at the final value so server-rendered HTML (and crawlers) see the
// real number, then counts up from 0 once the stat scrolls into view.
const AnimatedCounter = ({ target }: { target: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(target);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, target]);

  return <span ref={ref}>{count}+</span>;
};

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const current = titles[titleIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(pauseTimer);
    }

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = current.slice(0, displayed.length + 1);
          setDisplayed(next);
          if (next.length === current.length) {
            setIsPaused(true);
          }
        } else {
          setDisplayed(current.slice(0, displayed.length - 1));
          if (displayed.length - 1 === 0) {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex, isPaused, reduceMotion]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-16 lg:pb-0 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-muted-foreground text-sm mb-2 font-mono tracking-widest uppercase ">
              Hello, I&apos;m
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">Imtiaz Hossen</span>
            </h1>
            <div className="text-xl md:text-2xl text-primary font-mono h-8 mb-6">
              {reduceMotion ? titles[0] : displayed}
              {!reduceMotion && (
                <span className="animate-pulse text-primary">|</span>
              )}
            </div>
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Full-stack developer building scalable, user-friendly web
              applications with Next.js, TypeScript, Node.js and PostgreSQL,
              including AI-powered products.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 justify-center lg:justify-start">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg glass-card glow-border flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            className="shrink-0 lg:mr-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glowing circular image */}
              <div
                className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30"
                style={{
                  boxShadow:
                    "0 0 30px -3px hsl(var(--primary) / 0.4), 0 0 60px -10px hsl(var(--glow-purple) / 0.3)",
                  animation: "glowBorder 2s ease-in-out infinite",
                }}
              >
                <Image
                  src="/imtiaz.jpg"
                  alt="Imtiaz Hossen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 16rem, 20rem"
                  priority
                />
              </div>

              {/* Gradient overlay for soft neon effect */}
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary/10 to-accent/10 pointer-events-none" />
            </div>

            {/* Inline keyframes for pulsing glow */}
            <style jsx>{`
              @keyframes glowBorder {
                0%,
                100% {
                  box-shadow:
                    0 0 30px -3px hsl(var(--primary) / 0.4),
                    0 0 60px -10px hsl(var(--glow-purple) / 0.3);
                }
                50% {
                  box-shadow:
                    0 0 50px -3px hsl(var(--primary) / 0.7),
                    0 0 90px -10px hsl(var(--glow-purple) / 0.5);
                }
              }
            `}</style>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card glow-border p-4 text-center rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl font-bold text-primary font-mono">
                <AnimatedCounter target={stat.value} />
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;