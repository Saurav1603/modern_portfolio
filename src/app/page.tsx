import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import ThreeBackground from "@/components/ui/ThreeBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ThreeBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
