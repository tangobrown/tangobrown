"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Service = {
  num: string;
  title: string;
  desc: ReactNode;
  list: string[];
};

const services: Service[] = [
  {
    num: "01",
    title: "Website & App Builds",
    desc: "Bespoke, beautiful websites designed to convert visitors into customers — fast, responsive and built around your goals.",
    list: [
      "Custom design, no cookie-cutter templates",
      "Built to be fast & mobile-first",
      "Easy for you to update",
    ],
  },
  {
    num: "02",
    title: "Optimisation",
    desc: (
      <>
        Better rankings in Google <em>and</em> AI search. I make sure people — and
        the new wave of AI assistants — can actually find you.
      </>
    ),
    list: [
      "Technical & on-page SEO",
      "AI / answer-engine ready content",
      "Speed & Core Web Vitals tuning",
    ],
  },
  {
    num: "03",
    title: "Hosting",
    desc: "Safe, secure and speedy website hosting with ongoing support — so your site stays online, updated and protected without you lifting a finger.",
    list: [
      "Fast, secure UK-friendly hosting",
      "Backups, updates & monitoring",
      "A real person to call",
    ],
  },
  {
    num: "04",
    title: "AI & automation",
    desc: "Smart systems that free up your time — automating the repetitive stuff so you can focus on the work only you can do.",
    list: [
      "Workflow & admin automation",
      "AI assistants & chatbots",
      "Tools tailored to your business",
    ],
  },
];

export default function Services() {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !stackRef.current) return;

    const cards = Array.from(
      stackRef.current.querySelectorAll<HTMLElement>(".card-wrap .scard")
    );
    if (!cards.length) return;

    let raf: number | null = null;
    const update = () => {
      raf = null;
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        const rect = card.getBoundingClientRect();
        const parent = card.parentElement as HTMLElement;
        const wrap = parent.getBoundingClientRect();
        const stuckTop = parseFloat(getComputedStyle(parent).top) || 90;
        let progress = (stuckTop - wrap.top) / (rect.height * 0.9);
        progress = Math.max(0, Math.min(1, progress));
        const scale = 1 - progress * 0.05;
        const fade = 1 - progress * 0.35;
        card.style.transform = `scale(${scale.toFixed(4)})`;
        card.style.opacity = fade.toFixed(3);
      });
    };
    const request = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    update();
    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow eyebrow--center">What I do</span>
          <h2 className="section__title">
            Everything your website needs, in one place.
          </h2>
          <p className="section__sub">
            Four services that work together — from first build to long-term care.
          </p>
        </div>
      </div>

      <div className="stack" id="stack" ref={stackRef}>
        {services.map((s) => (
          <article className="card-wrap" key={s.num}>
            <div className="scard">
              <div className="scard__text">
                <div className="scard__head">
                  <span className="scard__num">{s.num}</span>
                </div>
                <h3 className="scard__title">{s.title}</h3>
                <p className="scard__desc">{s.desc}</p>
                <ul className="scard__list">
                  {s.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              </div>
              <div className="scard__visual">
                <div className="ph ph--card">
                  <span className="ph__label">illustration / mockup</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
