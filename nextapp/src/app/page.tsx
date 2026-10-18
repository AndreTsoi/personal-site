import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import About from "@/components/About";
import Film from "@/components/Film";
import Favorites from "@/components/Favorites";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="mx-auto px-6" style={{ maxWidth: 960 }}>
        <Hero />
        <Projects />
        <Resume />
        <About />
        <Film />
        <Favorites />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
