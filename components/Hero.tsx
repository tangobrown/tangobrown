import Image from "next/image";
import heroImg from "@/public/hero-tim.jpg";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <Image
          src={heroImg}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          style={{ objectFit: "cover", objectPosition: "top right" }}
        />
      </div>
      <div className="hero__overlay" aria-hidden="true"></div>

      <div className="hero__inner container">
        <div className="hero__copy">
          <span className="eyebrow reveal">Hey, I&apos;m Tim Brown...</span>
          <h1 className="hero__title reveal">
            Your website <span className="hl">&amp;</span> technology guy
          </h1>
          <p className="hero__lead reveal">
            The digital landscape is constantly changing. I make sure that you&apos;re
            ahead of your competition with modern, smart digital solutions &amp; support.
          </p>
          <div className="hero__actions reveal">
            <a href="#contact" className="btn btn--primary btn--lg">Start a project</a>
            <a href="#services" className="btn btn--ghost btn--lg">See what I do</a>
          </div>
          <ul className="hero__proof reveal">
            <li><strong>UK&nbsp;based</strong><span>Exeter, Devon</span></li>
            <li><strong>Human&nbsp;+&nbsp;AI</strong><span>search ready</span></li>
            <li><strong>End&nbsp;to&nbsp;end</strong><span>build &amp; hosting</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
