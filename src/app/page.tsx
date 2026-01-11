import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Global Background Elements */}
      <div className="glow-mesh pointer-events-none">
        <div className="glow-blob bg-indigo-500/10 w-[800px] h-[800px] -top-96 -left-96" />
        <div className="glow-blob bg-purple-500/10 w-[600px] h-[600px] top-1/2 -right-48" />
        <div className="glow-blob bg-blue-500/5 w-[1000px] h-[1000px] -bottom-96 left-1/4" />
      </div>

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
