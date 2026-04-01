"use client";

import { Globe, Smartphone, Server, ArrowRight, Search, PenTool, Code, Rocket, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";

export default function ServicesIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stages = [
    { icon: Search, label: "Discovery & Strategy", delay: 0 },
    { icon: PenTool, label: "Design & Architecture", delay: 0.2, branch: "left" },
    { icon: Code, label: "Agile Development", delay: 0.2, branch: "right" },
    { icon: Rocket, label: "Launch & DevOps", delay: 0.5 },
    { icon: ShieldCheck, label: "Ongoing Support", delay: 0.7, highlight: true },
  ];

  return (
    <section className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Scalable Solutions for
                <br className="hidden sm:block" />
                <span className="block sm:inline"> the Modern Web</span>
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                At Loomify Enterprises, we provide end-to-end development services — from initial concept
                and design to cloud deployment and ongoing maintenance. We build robust, scalable solutions
                tailored to your unique business needs.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-border transition-colors">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Globe className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Full-Stack Web</h3>
                  <p className="text-sm text-muted-foreground">Next.js, React, TypeScript</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-border transition-colors">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Mobile Apps</h3>
                  <p className="text-sm text-muted-foreground">React Native, Android</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-border transition-colors">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Server className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Backend Systems</h3>
                  <p className="text-sm text-muted-foreground">FastAPI, PostgreSQL, Cloud</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              View Expertise
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Side - Organic Workflow Tree */}
          <div ref={sectionRef} className="relative flex items-center justify-center min-h-[400px]">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
              {/* Main trunk from Discovery to Design/Dev */}
              <motion.path
                d="M 200 60 L 200 120"
                stroke="currentColor"
                strokeWidth="2"
                strokeOpacity="0.15"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isVisible ? { pathLength: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
              />

              {/* Branch to Design (left) */}
              <motion.path
                d="M 200 120 Q 200 140 120 150"
                stroke="currentColor"
                strokeWidth="2"
                strokeOpacity="0.15"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isVisible ? { pathLength: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              />

              {/* Branch to Dev (right) */}
              <motion.path
                d="M 200 120 Q 200 140 280 150"
                stroke="currentColor"
                strokeWidth="2"
                strokeOpacity="0.15"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isVisible ? { pathLength: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              />

              {/* Converge from Design to Launch */}
              <motion.path
                d="M 120 150 Q 120 220 180 260"
                stroke="currentColor"
                strokeWidth="2"
                strokeOpacity="0.15"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isVisible ? { pathLength: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
              />

              {/* Converge from Dev to Launch */}
              <motion.path
                d="M 280 150 Q 280 220 220 260"
                stroke="currentColor"
                strokeWidth="2"
                strokeOpacity="0.15"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isVisible ? { pathLength: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
              />

              {/* From Launch to Support */}
              <motion.path
                d="M 200 260 L 200 320"
                stroke="currentColor"
                strokeWidth="2"
                strokeOpacity="0.15"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isVisible ? { pathLength: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9, ease: "easeInOut" }}
              />
            </svg>

            {/* Nodes */}
            {/* Top Node - Discovery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute top-0 left-1/2 -translate-x-1/2"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-background shadow-lg flex items-center justify-center border border-border/50">
                  <Search className="w-6 h-6 text-foreground" />
                </div>
                <span className="text-xs font-medium text-foreground">Discovery & Strategy</span>
              </div>
            </motion.div>

            {/* Left Branch - Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-[35%] left-[15%]"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-background shadow-md flex items-center justify-center border border-border/50">
                  <PenTool className="w-5 h-5 text-foreground" />
                </div>
                <span className="text-[10px] font-medium text-muted-foreground whitespace-nowrap">Design & Architecture</span>
              </div>
            </motion.div>

            {/* Right Branch - Dev */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-[35%] right-[15%]"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-background shadow-md flex items-center justify-center border border-border/50">
                  <Code className="w-5 h-5 text-foreground" />
                </div>
                <span className="text-[10px] font-medium text-muted-foreground whitespace-nowrap">Agile Development</span>
              </div>
            </motion.div>

            {/* Center Node - Launch */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute top-[60%] left-1/2 -translate-x-1/2"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-background shadow-md flex items-center justify-center border border-border/50">
                  <Rocket className="w-5 h-5 text-foreground" />
                </div>
                <span className="text-[10px] font-medium text-muted-foreground">Launch & DevOps</span>
              </div>
            </motion.div>

            {/* Bottom Node - Support (Highlighted) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-foreground shadow-lg flex items-center justify-center ring-4 ring-background">
                  <ShieldCheck className="w-6 h-6 text-background" />
                </div>
                <span className="text-xs font-semibold text-foreground">Ongoing Support</span>
              </div>
            </motion.div>

            {/* Trust Labels */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute top-[20%] right-[8%]"
            >
              <span className="text-[10px] text-muted-foreground/60 uppercase tracking-wider whitespace-nowrap">100% Transparency</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute top-[20%] left-[8%]"
            >
              <span className="text-[10px] text-muted-foreground/60 uppercase tracking-wider whitespace-nowrap">Agile Sprints</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute bottom-[15%] right-[10%]"
            >
              <span className="text-[10px] text-muted-foreground/60 uppercase tracking-wider whitespace-nowrap">24/7 Monitoring</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
