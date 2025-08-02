import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

import Projects from "@/components/Projects";
import Demo from "@/components/VideoShowcase";


export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* <Navbar /> */}
      <section id="home"> <Hero /> </section>
      <section id="about"> <About /> </section>
      <section id="projects"> <Projects /> </section>
      <section id="demo"><Demo /> </section>
      <section id="contact"> <Contact /> </section>
    </main>
  );
}
