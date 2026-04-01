import Expertise from "@/components/Expertise";
import AModernHeroSection from "@/components/ui/a-modern-hero-section";

export const metadata = {
  title: "About | Portfolio",
  description: "Learn about my expertise and skills across web, backend, and mobile development",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AModernHeroSection />
      <Expertise />
    </main>
  );
}
