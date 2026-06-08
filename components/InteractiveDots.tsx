"use client";

import { useEffect, useRef } from "react";

/**
 * Canvas-rendered dot grid. Dots near the cursor displace outward
 * with a smooth falloff, like ripples on water, and tint toward
 * the accent colour as they're pushed. The cursor position is
 * lerped for fluid follow; once mouse leaves, dots ease back.
 * On touch / reduced-motion the grid renders static.
 */
export default function InteractiveDots() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    // Tunables
    const SPACING = 42;
    const PLUS_ARM = 4; // half-arm length; plus is (PLUS_ARM*2 + 1)px wide and tall
    const INFLUENCE = 160;
    const MAX_PUSH = 14;
    const BASE_ALPHA = 0.06;
    const TINT_ALPHA = 0.22;

    // Resolve --coral at runtime so the tint always matches the live accent
    const probe = document.createElement("div");
    probe.style.color = "var(--coral)";
    probe.style.display = "none";
    document.body.appendChild(probe);
    const accent = getComputedStyle(probe).color;
    document.body.removeChild(probe);
    const m = accent.match(/[\d.]+/g);
    const TINT_R = m ? parseFloat(m[0]) : 99;
    const TINT_G = m ? parseFloat(m[1]) : 200;
    const TINT_B = m ? parseFloat(m[2]) : 222;

    const BASE_COLOR = `rgba(255, 255, 255, ${BASE_ALPHA})`;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let targetX = -9999;
    let targetY = -9999;
    let mouseX = -9999;
    let mouseY = -9999;
    let raf: number | null = null;

    function setSize() {
      width = parent!.offsetWidth;
      height = parent!.offsetHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = width + "px";
      canvas!.style.height = height + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      raf = null;

      // Smoothly follow target (lerp for fluid feel)
      mouseX += (targetX - mouseX) * 0.18;
      mouseY += (targetY - mouseY) * 0.18;

      ctx!.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;
      const inf2 = INFLUENCE * INFLUENCE;
      let lastStyle = "";

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * SPACING;
          const baseY = j * SPACING;
          let x = baseX;
          let y = baseY;
          let style = BASE_COLOR;

          if (!reduce) {
            const dx = baseX - mouseX;
            const dy = baseY - mouseY;
            const d2 = dx * dx + dy * dy;
            if (d2 < inf2 && d2 > 0) {
              const dist = Math.sqrt(d2);
              const f = 1 - dist / INFLUENCE;
              const push = f * f * MAX_PUSH; // ease-out squared
              x += (dx / dist) * push;
              y += (dy / dist) * push;

              // Tint white -> accent and brighten with intensity
              const t = f * f;
              const r = 255 + (TINT_R - 255) * t;
              const g = 255 + (TINT_G - 255) * t;
              const b = 255 + (TINT_B - 255) * t;
              const a = BASE_ALPHA + (TINT_ALPHA - BASE_ALPHA) * t;
              style = `rgba(${r | 0}, ${g | 0}, ${b | 0}, ${a.toFixed(3)})`;
            }
          }

          // Only update fillStyle when it changes (most plus marks share BASE_COLOR)
          if (style !== lastStyle) {
            ctx!.fillStyle = style;
            lastStyle = style;
          }
          // Draw a small + sign: horizontal arm + vertical arm, both 1px thick
          ctx!.fillRect(x - PLUS_ARM, y, PLUS_ARM * 2 + 1, 1);
          ctx!.fillRect(x, y - PLUS_ARM, 1, PLUS_ARM * 2 + 1);
        }
      }

      // Keep animating until the lerp settles
      if (
        Math.abs(mouseX - targetX) > 0.3 ||
        Math.abs(mouseY - targetY) > 0.3
      ) {
        raf = requestAnimationFrame(draw);
      }
    }

    function request() {
      if (raf == null) raf = requestAnimationFrame(draw);
    }

    function onMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      request();
    }
    function onLeave() {
      targetX = -9999;
      targetY = -9999;
      request();
    }

    setSize();
    draw();

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);

    const ro = new ResizeObserver(() => {
      setSize();
      request();
    });
    ro.observe(parent);

    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      ro.disconnect();
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} className="dots-canvas" aria-hidden="true" />;
}
