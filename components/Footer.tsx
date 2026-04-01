"use client";

import { Mail, Copy, Check, Facebook, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "loomifyenterprises@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61583739864614.",
      ariaLabel: "Facebook Profile",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/loomifyenterprises/",
      ariaLabel: "Instagram Profile",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/loomify-enterprises-08b7b13b4/",
      ariaLabel: "LinkedIn Profile",
    },
  ];

  // Use scroll for 1:1 parallax tracking
  const { scrollY } = useScroll();

  // Calculate scroll progress through the last 20% of the page
  const scrollProgress = useTransform(scrollY, (value) => {
    const scrollHeight = typeof window !== 'undefined' ? document.documentElement.scrollHeight : 0;
    const clientHeight = typeof window !== 'undefined' ? document.documentElement.clientHeight : 0;

    // Calculate how far into the last 20% we are
    const last20Percent = scrollHeight * 0.2;
    const scrollTriggerPoint = scrollHeight - clientHeight - last20Percent;

    // Clamp value between 0 and 1
    const progress = Math.max(0, Math.min(1, (value - scrollTriggerPoint) / last20Percent));

    return progress;
  });

  // Parallax: y goes from 100 to 0 based on scroll progress
  const y = useTransform(scrollProgress, [0, 1], [100, 0]);

  // Scale: goes from 0.95 to 1
  const scale = useTransform(scrollProgress, [0, 1], [0.95, 1]);

  // Opacity: goes from 0 to 1
  const opacity = useTransform(scrollProgress, [0, 1], [0, 1]);

  // Z-index: 0 when hidden, 50 when visible
  const zIndex = useTransform(scrollProgress, [0.15, 1], [0, 50]);

  // Delayed animations for inner content
  const h2Opacity = useTransform(scrollProgress, [0.3, 1], [0, 1]);
  const h2Y = useTransform(scrollProgress, [0.3, 1], [20, 0]);

  const pOpacity = useTransform(scrollProgress, [0.4, 1], [0, 1]);
  const pY = useTransform(scrollProgress, [0.4, 1], [20, 0]);

  const ctaOpacity = useTransform(scrollProgress, [0.5, 1], [0, 1]);
  const ctaY = useTransform(scrollProgress, [0.5, 1], [20, 0]);

  const emailOpacity = useTransform(scrollProgress, [0.6, 1], [0, 1]);

  const socialOpacity = useTransform(scrollProgress, [0.7, 1], [0, 1]);

  return (
    <motion.footer
      style={{
        y,
        scale,
        opacity,
        zIndex,
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border/50"
    >
      <div className="py-16 sm:py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            style={{
              opacity: h2Opacity,
              y: h2Y,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-3xl font-semibold tracking-tight"
          >
            Let&apos;s Connect
          </motion.h2>

          <motion.p
            style={{
              opacity: pOpacity,
              y: pY,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-muted-foreground text-sm sm:text-base max-w-lg mx-auto"
          >
            We&apos;re always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </motion.p>

          <motion.div
            style={{
              opacity: ctaOpacity,
              y: ctaY,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="mailto:loomifyenterprises@gmail.com"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </motion.div>

          {/* Email Display with Copy */}
          <motion.div
            style={{
              opacity: emailOpacity,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 flex items-center justify-center gap-3"
          >
            <span className="text-sm text-muted-foreground">{email}</span>
            <button
              onClick={copyEmail}
              className="p-1.5 rounded-full hover:bg-muted transition-colors"
              title="Copy email"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              )}
            </button>
          </motion.div>

          {/* Social Links & Copyright */}
          <motion.div
            style={{
              opacity: socialOpacity,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 pt-6 border-t border-border/50"
          >
            <div className="flex items-center justify-center gap-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5 text-foreground/70 hover:text-foreground" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              © {new Date().getFullYear()}. Crafted with care.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
