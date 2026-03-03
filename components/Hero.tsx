"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 scroll-mt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground opacity-0 animate-fade-in">
          Full-Stack & Mobile Developer
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-100">
          Building seamless web apps with Next.js, robust backends with FastAPI,
          and native mobile experiences through Android development.
        </p>
        <div className="mt-10 opacity-0 animate-fade-in animation-delay-200">
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
