import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServicesIntro from "@/components/ServicesIntro";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesIntro />
      <FeaturedProjects />
    </main>
  );
}
