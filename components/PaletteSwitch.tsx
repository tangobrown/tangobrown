"use client";

import { useEffect, useState } from "react";

const palettes = [
  { p: "coral", title: "Coral" },
  { p: "cobalt", title: "Cobalt blue" },
  { p: "emerald", title: "Emerald" },
  { p: "violet", title: "Violet" },
  { p: "amber", title: "Amber" },
  { p: "slate", title: "Slate (muted)" },
] as const;

export default function PaletteSwitch() {
  const [active, setActive] = useState<string>("coral");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("tb-palette");
      if (saved) setActive(saved);
    } catch {}
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (active && active !== "coral") root.setAttribute("data-palette", active);
    else root.removeAttribute("data-palette");
  }, [active]);

  const choose = (p: string) => {
    setActive(p);
    try {
      localStorage.setItem("tb-palette", p);
    } catch {}
  };

  return (
    <div className="palette-switch" aria-label="Accent colour preview">
      <span className="palette-switch__label">Accent colour</span>
      <div className="palette-switch__row">
        {palettes.map(({ p, title }) => (
          <button
            key={p}
            type="button"
            className="palette-switch__sw"
            data-p={p}
            title={title}
            aria-pressed={active === p}
            onClick={() => choose(p)}
          />
        ))}
      </div>
    </div>
  );
}
