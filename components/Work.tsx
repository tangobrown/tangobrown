"use client";

import { useEffect, useRef, useState } from "react";

type Project = { kicker: string; title: string; body: string; href: string };

const projects: Project[] = [
  {
    kicker: "Project 01 · Sector",
    title: "Project name goes here",
    body: "A short line about the brief, what you built and the result you got for the client. Swap this for a real case study.",
    href: "#",
  },
  {
    kicker: "Project 02 · Sector",
    title: "Project name goes here",
    body: "A short line about the brief, what you built and the result you got for the client. Swap this for a real case study.",
    href: "#",
  },
  {
    kicker: "Project 03 · Sector",
    title: "Project name goes here",
    body: "A short line about the brief, what you built and the result you got for the client. Swap this for a real case study.",
    href: "#",
  },
];

export default function Work() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touch = useRef({ startX: 0, dx: 0, dragging: false });

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const start = () => {
    stop();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % projects.length);
    }, 6000);
  };

  const go = (i: number) => {
    const n = projects.length;
    setIndex(((i % n) + n) % n);
    start();
  };

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touch.current = { startX: e.touches[0].clientX, dx: 0, dragging: true };
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touch.current.dragging) {
      touch.current.dx = e.touches[0].clientX - touch.current.startX;
    }
  };
  const onTouchEnd = () => {
    const { dragging, dx } = touch.current;
    if (dragging && Math.abs(dx) > 50) {
      go(index + (dx < 0 ? 1 : -1));
    }
    touch.current = { startX: 0, dx: 0, dragging: false };
  };

  return (
    <section className="work section" id="work">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow eyebrow--center">A snapshot of my work</span>
          <h2 className="section__title">Recent projects.</h2>
        </div>
      </div>

      <div className="slider reveal" id="slider">
        <div
          className="slider__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
          onMouseEnter={stop}
          onMouseLeave={start}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {projects.map((p, i) => (
            <div className="slide" role="group" aria-roledescription="slide" key={i}>
              <div className="slide__shot">
                <div className="ph ph--shot">
                  <span className="ph__label">project screenshot 0{i + 1}</span>
                </div>
              </div>
              <div className="slide__text">
                <span className="slide__kicker">{p.kicker}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <a href={p.href} className="link-arrow">
                  View project
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="slider__controls container">
          <button
            className="slider__btn"
            aria-label="Previous project"
            onClick={() => go(index - 1)}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 5l-7 7 7 7"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="slider__dots">
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                className={i === index ? "is-active" : ""}
                aria-label={`Go to project ${i + 1}`}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <button
            className="slider__btn"
            aria-label="Next project"
            onClick={() => go(index + 1)}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
