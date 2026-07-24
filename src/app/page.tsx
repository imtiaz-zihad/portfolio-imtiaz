import About from "@/components/About";
import Contact from "@/components/Contact";
import CP from "@/components/CP";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skill";


export default function Home() {
  return (
    <div className="min-h-screen px-5">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <CP />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
