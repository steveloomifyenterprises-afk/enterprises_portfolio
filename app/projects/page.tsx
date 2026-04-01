import Projects from "@/components/Projects";
import { HeroSection } from "@/components/ui/hero-with-product-mockup";

export const metadata = {
  title: "Projects | Portfolio",
  description: "View my portfolio of projects showcasing web, backend, and mobile development work",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="My Projects"
        description="A showcase of my work in web development, mobile apps, and backend systems."
        primaryButtonText="View All Work"
      />
      <Projects />
    </main>
  );
}
