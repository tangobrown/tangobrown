import Image from "next/image";
import portrait from "@/public/tim-portrait.jpg";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner container">
        <div className="hero__copy">
          <span className="eyebrow reveal">Websites, Optimisation &amp; Automation</span>
          <h1 className="hero__title reveal">
            Your website, Marketing <span className="hl">&amp;</span> Technology guy
          </h1>
          <p className="hero__lead reveal">
            I use AI and automation strategies to supercharge your growth, then back
            it with hands-on work to make sure everything&apos;s done right. All without
            the big agency price tag.
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
