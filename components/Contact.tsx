import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/loomifyenterprises/",
      ariaLabel: "GitHub Profile",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/loomify-enterprises-undefined-08b7b13b4/",
      ariaLabel: "LinkedIn Profile",
    },
  ];

  return (
    <footer id="contact" className="py-24 sm:py-32 px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Let&apos;s Connect
        </h2>
        <p className="mt-6 text-muted-foreground text-base sm:text-lg max-w-lg mx-auto">
          We&apos;re always open to discussing new opportunities, interesting
          projects, or just having a chat about technology.
        </p>
        <a
          href="loomifyenterprises@gmail.com"
          className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
        >
          <Mail className="w-4 h-4" />
          Get in Touch
        </a>
        <div className="mt-16 pt-8 border-t border-border/50">
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
          <p className="mt-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()}. Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
