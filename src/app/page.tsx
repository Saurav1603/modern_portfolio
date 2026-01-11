import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Glow Mesh */}
      <div className="glow-mesh pointer-events-none">
        <div className="glow-blob bg-indigo-500/20 w-[600px] h-[600px] -top-48 -left-48" />
        <div className="glow-blob bg-purple-500/20 w-[500px] h-[500px] top-1/2 -right-24" />
        <div className="glow-blob bg-blue-500/10 w-[800px] h-[800px] -bottom-48 left-1/4" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
