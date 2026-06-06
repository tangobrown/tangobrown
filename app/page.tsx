import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import About from "@/components/About";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PaletteSwitch from "@/components/PaletteSwitch";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Benefits />
        <Services />
        <About />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      {/* REMOVE the PaletteSwitch and its component once the client confirms the accent colour */}
      <PaletteSwitch />
      <Reveal />
    </>
  );
}
