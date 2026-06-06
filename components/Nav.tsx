"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}
      id="nav"
    >
      <div className="nav__inner container">
        <a href="#top" className="brand" aria-label="Tim Brown home" onClick={close}>
          <span className="brand__dot"></span>
          <span className="brand__name">Tim&nbsp;Brown</span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#benefits" onClick={close}>Why me</a>
          <a href="#services" onClick={close}>Services</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#work" onClick={close}>Work</a>
        </nav>
        <a href="#contact" className="btn btn--primary nav__cta" onClick={close}>
          Let&apos;s talk
        </a>
        <button
          className="nav__burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
