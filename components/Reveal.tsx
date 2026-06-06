"use client";

import { useEffect } from "react";

export default function Reveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let reveals = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );

    const revealAll = () => {
      reveals.forEach((el) => el.classList.add("is-in"));
      reveals = [];
    };

    if (reduce) {
      revealAll();
      return;
    }

    const check = () => {
      const trigger = (window.innerHeight || 800) * 0.92;
      for (let i = reveals.length - 1; i >= 0; i--) {
        const el = reveals[i];
        if (el.getBoundingClientRect().top < trigger) {
          el.classList.add("is-in");
          reveals.splice(i, 1);
        }
      }
    };

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    check();
    const t1 = setTimeout(check, 250);
    const t2 = setTimeout(check, 800);
    const t3 = setTimeout(revealAll, 2500);

    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return null;
}
