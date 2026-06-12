import Image from "next/image";
import portrait from "@/public/tim-portrait.jpg";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner container">
        <div className="hero__copy">
          <span className="eyebrow reveal">Websites, Optimisation &amp; Automation</span>
          <h1 className="hero__title reveal">
            Your Website <span className="hl">&amp;</span> Technology Guy
          </h1>
          <p className="hero__lead reveal">
            With me in your corner, you&apos;ve got 18+ years of experience helping
            businesses grow online + smart AI &amp; Automation strategies = growth
            for your business 🚀
          </p>
          <div className="hero__actions reveal">
            <a href="#contact" className="btn btn--primary btn--lg">Start a project</a>
            <a href="#services" className="btn btn--ghost btn--lg">See what I do</a>
          </div>
        </div>
        <div className="hero__photo reveal">
          <Image
            src={portrait}
            alt="Tim Brown"
            priority
            sizes="(max-width: 980px) 320px, 480px"
            placeholder="blur"
          />
          <span className="hero__photo-tag">Tim Brown | Exeter, Devon</span>
        </div>
      </div>
    </section>
  );
}
