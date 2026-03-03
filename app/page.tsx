import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Expertise />
      <Projects />
      <Contact />
    </main>
  );
}
