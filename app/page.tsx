import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Benefits />
        <Services />
        <Pricing />
        <About />
        <Work />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
