"use client";

import React from 'react';
import { Search } from 'lucide-react';

interface HeroSectionProps {
  title?: string;
  description?: string;
  brandColor?: string;
  accentColor?: string;
  showMockups?: boolean;
  logoComponent?: React.ReactNode;
}

export function HeroSection({
  title = "Transform your digital experience",
  description = "Streamline your daily tasks with fewer distractions and more focus.",
  brandColor = "blue",
  accentColor = "purple",
  showMockups = true,
  logoComponent
}: HeroSectionProps) {
  return (
    <div className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] bg-gradient-to-br from-background to-muted/20 pt-40 md:pt-48 pb-12 md:pb-16">
      {/* Container matching header alignment */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-y-16 md:gap-12 lg:gap-16">
        {/* Text Content - Left Side */}
        <div className="flex-1 space-y-4 sm:space-y-6 max-w-lg w-full text-center md:text-left">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
              {title}
            </h1>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed font-normal">
            {description}
          </p>

        </div>

        {/* Product Mockups - Right Side */}
        {showMockups && (
          <div className="flex-1 relative max-w-md mx-auto px-4 md:px-0 w-full flex-shrink-0">
          {/* Desktop Application Window */}
          <div className="relative bg-background rounded-2xl shadow-2xl border overflow-visible transform rotate-2 hover:rotate-1 transition-transform duration-300">
            {/* Application Header */}
            <div className="bg-muted/50 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 border-b">
              <div className="flex items-center justify-between gap-1 sm:gap-2">
                <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-4">
                  <div className="flex space-x-1 sm:space-x-1.5 md:space-x-2">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none">
                      <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none">
                      <path d="m14 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 max-w-[80px] sm:max-w-[120px] md:max-w-md mx-1.5 sm:mx-2 md:mx-6 hidden xs:block">
                  <div className="bg-background rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-[10px] sm:text-xs md:text-sm text-muted-foreground border">
                    <Search size={10} className="inline mr-1 sm:mr-1.5 md:mr-2" /> <span className="hidden sm:inline">Search</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground font-bold text-[9px] sm:text-[10px] md:text-xs">⭐</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Content */}
            <div className="p-3 sm:p-4 md:p-6 lg:p-8 bg-background min-h-[140px] sm:min-h-[180px] md:min-h-[260px] lg:min-h-[320px]">
              <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                {logoComponent || (
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg">
                    <span className="text-primary-foreground font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                      V
                    </span>
                  </div>
                )}
                <span className="font-semibold text-foreground text-xs sm:text-sm md:text-base lg:text-lg">Vaib</span>
              </div>

              <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
                <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                  <h3 className="text-muted-foreground font-medium text-[10px] sm:text-xs md:text-sm">Quick Actions</h3>
                  <div className="h-1 sm:h-1.5 md:h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-3/4 rounded-full"></div>
                  </div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-6 gap-1 sm:gap-2 md:gap-3 lg:gap-4">
                  {[
                    { name: 'Dashboard', color: 'bg-blue-500', icon: '📊' },
                    { name: 'Analytics', color: 'bg-green-500', icon: '📈' },
                    { name: 'Settings', color: 'bg-purple-500', icon: '⚙️' },
                    { name: 'Messages', color: 'bg-orange-500', icon: '💬' },
                    { name: 'Calendar', color: 'bg-red-500', icon: '📅' },
                    { name: 'More', color: 'bg-muted', icon: '+' }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center space-y-0.5 sm:space-y-1 md:space-y-2 group cursor-pointer">
                      <div className={`w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 lg:w-12 lg:h-12 ${item.color} rounded-md sm:rounded-lg md:rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200`}>
                        <span className="text-white font-bold text-[9px] sm:text-xs md:text-sm lg:text-sm">{item.icon}</span>
                      </div>
                      <span className="text-[8px] sm:text-[9px] md:text-xs lg:text-xs text-muted-foreground text-center font-medium hidden sm:block">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stacked Windows Behind */}
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 lg:-top-4 lg:-left-4 w-full h-full bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl shadow-xl transform rotate-6 -z-10"></div>
            <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 md:-top-7 md:-left-7 lg:-top-8 lg:-left-8 w-full h-full bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl shadow-xl transform rotate-12 -z-20"></div>

            {/* Mobile App Mockup - Only show on larger screens */}
            <div className="hidden md:block absolute bottom-0 right-0 lg:-bottom-8 lg:-right-8 xl:-bottom-4 xl:-right-4 w-40 h-80 lg:w-48 lg:h-96 xl:w-52 xl:h-[28rem] bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl transform -rotate-12 hover:-rotate-6 transition-transform duration-300 z-10">
              <div className="w-full h-full bg-background rounded-[2rem] overflow-hidden border">
                {/* Phone Header */}
                <div className="bg-muted/30 px-4 py-3 flex justify-between items-center text-xs border-b">
                  <span className="font-semibold text-foreground">9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-1.5 bg-green-500 rounded-sm"></div>
                    <span className="text-muted-foreground font-medium">100%</span>
                  </div>
                </div>

                {/* Phone Content */}
                <div className="p-4 space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-xl shadow-md"></div>
                    <span className="text-sm font-semibold text-foreground">Vaib</span>
                  </div>

                  <div className="grid grid-cols-4 gap-3">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="aspect-square bg-muted rounded-xl hover:bg-muted/80 transition-colors cursor-pointer"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
