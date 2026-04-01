"use client";

import { Code, Smartphone, Database, Braces } from "lucide-react";

export default function AModernHeroSection() {
  return (
    <section className="bg-background pt-32 pb-12 sm:pb-16 lg:pb-24 relative overflow-hidden">
      {/* Subtle geometric accents - grayscale */}
      <div className="hidden md:block absolute top-32 right-20 w-2 h-2 bg-muted/40 rounded-full"></div>
      <div className="hidden md:block absolute top-40 right-32 w-1 h-1 bg-muted/30 rounded-sm transform rotate-45"></div>
      <div className="hidden md:block absolute top-48 right-16 w-0.5 h-4 bg-muted/20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
              Specialized Development
              <br className="hidden sm:block" />
              <span className="block sm:inline"> Solutions</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              At Loomify Enterprises, we specialize in full-stack web development, native mobile applications,
              and high-performance backend systems. From concept to deployment, we build scalable solutions
              tailored to your needs.
            </p>

            {/* Tech Stack Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Code className="w-5 h-5" />
                <span className="text-sm font-medium">Full-Stack Web</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Smartphone className="w-5 h-5" />
                <span className="text-sm font-medium">Mobile Apps</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Database className="w-5 h-5" />
                <span className="text-sm font-medium">Backend Systems</span>
              </div>
            </div>
          </div>

          {/* Right Side - Code Editor Mockup */}
          <div className="relative mt-8 lg:mt-0">
            {/* Code Editor Card */}
            <div className="relative bg-muted/50 border border-border rounded-xl sm:rounded-2xl shadow-xl overflow-hidden max-w-sm mx-auto lg:max-w-none">
              {/* Window controls */}
              <div className="bg-muted/80 px-4 py-3 flex items-center gap-2 border-b border-border/50">
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20"></div>
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20"></div>
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20"></div>
                <span className="ml-4 text-xs text-muted-foreground">loomify.tsx</span>
              </div>

              {/* Code content */}
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
                <div className="space-y-2 sm:space-y-3">
                  {/* Line 1 */}
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground/50 w-4">1</span>
                    <span className="text-blue-500">import</span>
                    <span className="text-foreground"> {`{`}</span>
                    <span className="text-green-500">React</span>
                    <span className="text-foreground"> {`}`}</span>
                    <span className="text-blue-500">from</span>
                    <span className="text-orange-400">{' "react"'}</span>
                  </div>

                  {/* Line 2 */}
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground/50 w-4">2</span>
                    <span className="text-blue-500">import</span>
                    <span className="text-foreground"> {`{`}</span>
                    <span className="text-green-500">Next</span>
                    <span className="text-foreground"> {`}`}</span>
                    <span className="text-blue-500">from</span>
                    <span className="text-orange-400">{' "next"'}</span>
                  </div>

                  {/* Line 3 */}
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground/50 w-4">3</span>
                    <span className="text-blue-500">import</span>
                    <span className="text-foreground"> {`{`}</span>
                    <Braces className="w-3 h-3 inline text-yellow-500" />
                    <span className="text-foreground"> {`}`}</span>
                    <span className="text-blue-500">from</span>
                    <span className="text-orange-400">{' "lucide"'}</span>
                  </div>

                  {/* Line 4 - blank */}
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground/50 w-4">4</span>
                  </div>

                  {/* Line 5 */}
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground/50 w-4">5</span>
                    <span className="text-blue-500">export</span>
                    <span className="text-blue-500">default</span>
                    <span className="text-blue-500">function</span>
                    <span className="text-yellow-400">App</span>
                    <span className="text-foreground">() {`{`}</span>
                  </div>

                  {/* Line 6 */}
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground/50 w-4">6</span>
                    <span className="text-muted-foreground/50">  </span>
                    <span className="text-blue-500">return</span>
                    <span className="text-foreground"> (</span>
                  </div>

                  {/* Line 7 */}
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground/50 w-4">7</span>
                    <span className="text-muted-foreground/50">    </span>
                    <span className="text-green-400">{'<'}</span>
                    <span className="text-blue-400">section</span>
                    <span className="text-foreground"> className=</span>
                    <span className="text-orange-400">"container"</span>
                    <span className="text-green-400">{'>'}</span>
                  </div>

                  {/* Line 8 */}
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground/50 w-4">8</span>
                    <span className="text-muted-foreground/50">      </span>
                    <span className="text-green-400">{'<'}</span>
                    <span className="text-blue-400">Header</span>
                    <span className="text-green-400">{' />'}</span>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="bg-muted/80 px-4 py-2 flex items-center justify-between text-xs text-muted-foreground border-t border-border/50">
                <span>Ready</span>
                <div className="flex items-center gap-2">
                  <span>TypeScript</span>
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                </div>
              </div>
            </div>

            {/* Subtle floating accent - grayscale */}
            <div className="hidden sm:block absolute -top-3 -left-3 w-16 h-16 border border-border/30 rounded-2xl transform rotate-6"></div>
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-12 h-12 bg-muted/20 rounded-lg transform -rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
