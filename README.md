# Handoff: Tim Brown — One-Page Marketing Site

## Overview
A single-page marketing website for **Tim Brown** — a freelance website designer & technology specialist for small businesses across the UK (based in Exeter, Devon). The page introduces Tim, explains his benefits and services, shows a bit about him, showcases recent work, displays testimonials, and provides a contact section with a form.

The page is **one continuous scroll** with these sections in order:
1. Fixed navigation (transparent over the hero, solidifies on scroll)
2. Hero (full-bleed background image, text on the left)
3. Benefits ("Why work with me" — 3 cards)
4. Services ("What I do" — 4 stacking cards)
5. About ("Hi, I'm Tim.")
6. Recent projects (dark section, full-width one-at-a-time slideshow)
7. Testimonials (3 cards)
8. Contact (details + form)
9. Footer

## About the Design Files
The file in this bundle (`index.html`) is a **design reference created in HTML/CSS/vanilla JS** — a working prototype showing the intended look, layout and behaviour. It is **not necessarily meant to be shipped as-is**.

The task is to **recreate this design in the target codebase's environment** using its established patterns and libraries. If there is no existing codebase yet, choose the most appropriate stack for a fast, SEO-friendly marketing site (e.g. **Astro**, **Next.js**, or **Eleventy** — this is a static marketing page, so a static-site generator is ideal) and implement the design there.

That said, the prototype is clean, dependency-free vanilla HTML/CSS/JS, so it *can* be used directly or lightly adapted if a no-framework static site is preferred.

## Fidelity
**High-fidelity (hifi).** Final colours, typography, spacing, and interactions are all defined. Recreate the UI faithfully. All design tokens are defined as CSS custom properties in the `:root` block at the top of the `<style>` tag in `index.html` — use these as the source of truth.

---

## Design Tokens

All tokens live in `:root` in `index.html`. Colours are authored in **oklch**.

### Colours
| Token | Value (oklch) | Approx hex | Use |
|---|---|---|---|
| `--bg` | `#ffffff` | `#ffffff` | Page background |
| `--bg-alt` | `oklch(0.984 0.004 75)` | `~#fbfaf9` | Alternating section tint (services, work text, contact) |
| `--paper` | `#ffffff` | `#ffffff` | Cards, form |
| `--coral` (accent) | `oklch(0.645 0.170 33)` | `~#e0613f` | **Primary accent** — buttons, links, icons |
| `--coral-deep` | `oklch(0.550 0.160 31)` | `~#c0492f` | Accent hover / darker accent text |
| `--coral-tint` | `oklch(0.966 0.024 45)` | `~#fdeee9` | Soft accent background (icon chips, number tags) |
| `--coral-soft` | `oklch(0.850 0.100 48)` | `~#f0b48a` | Light accent for dark sections (eyebrows/kickers on dark bg) |
| `--ink` | `oklch(0.245 0.018 262)` | `~#2b2f38` | Primary text (warm slate near-black) |
| `--ink-soft` | `oklch(0.505 0.014 260)` | `~#6c7079` | Secondary text |
| `--line` | `oklch(0.916 0.006 260)` | `~#e6e7ea` | Hairline borders |
| `--line-strong` | `oklch(0.860 0.008 260)` | `~#d4d6da` | Stronger borders (button outline, inputs) |
| Dark section bg | `linear-gradient(125deg, oklch(0.235 0.025 262), oklch(0.165 0.02 262))` | `~#2a2f3a → #1c2029` | Recent projects section + hero overlay base |

> **Note on the accent:** The client is still deciding on the final accent colour. The prototype ships with a **palette preview switcher** (bottom-left, fixed) offering 6 options: Coral (default), Cobalt, Emerald, Violet, Amber, Slate. Each is a `:root[data-palette="..."]` block that overrides the 4 `--coral*` variables. **For production, the switcher (its markup, CSS, and JS — all marked with REMOVE comments) should be removed and a single accent baked in once the client confirms.** Until then, keep the accent fully token-driven so it's a one-line change.

### Accent palette options (override `--coral`, `--coral-deep`, `--coral-tint`, `--coral-soft`)
- **Coral** (default): `0.645 0.170 33` / `0.550 0.160 31` / `0.966 0.024 45` / `0.850 0.100 48`
- **Cobalt**: `0.575 0.165 255` / `0.490 0.150 257` / `0.966 0.020 255` / `0.820 0.095 250`
- **Emerald**: `0.620 0.130 165` / `0.520 0.120 167` / `0.964 0.022 165` / `0.840 0.085 168`
- **Violet**: `0.575 0.170 290` / `0.490 0.160 292` / `0.965 0.022 292` / `0.830 0.095 292`
- **Amber**: `0.700 0.140 70` / `0.560 0.125 62` / `0.968 0.030 80` / `0.860 0.105 82`
- **Slate**: `0.520 0.045 250` / `0.420 0.045 252` / `0.962 0.008 250` / `0.800 0.040 248`

### Typography
- **Headings (`h1, h2, h3`):** `"Hanken Grotesk", system-ui, sans-serif` — weight **800**, line-height `1.1`, letter-spacing `-0.02em`
- **Body / everything else:** `"Inter", system-ui, sans-serif` — base weight 400
- Loaded from Google Fonts (Hanken Grotesk 400–800 + italic, Inter 400–700 + italic)
- Base body: `17px`, line-height `1.65`
- Section titles: `clamp(1.95rem, 3.8vw, 2.85rem)`
- Hero H1: `clamp(2.6rem, 5.6vw, 4.2rem)`

### Radius
**Zero radius everywhere** — `--radius`, `--radius-sm`, `--radius-lg` are all `0px`. Buttons, cards, inputs, logo mark, placeholders all have square corners. (This is intentional and was an explicit client request — do not add rounding.)

### Shadows
| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 2px oklch(0.2 0.02 260 / 0.05), 0 1px 3px oklch(0.2 0.02 260 / 0.07)` |
| `--shadow-md` | `0 6px 16px -4px oklch(0.2 0.02 260 / 0.10), 0 2px 6px -2px oklch(0.2 0.02 260 / 0.06)` |
| `--shadow-lg` | `0 22px 50px -18px oklch(0.2 0.02 260 / 0.20)` |

### Layout
- Content max width: `--maxw: 1180px`, with `28px` inline padding (`.container`)
- Section vertical padding: `clamp(76px, 8vw, 120px)`
- Standard easing: `--ease: cubic-bezier(0.22, 1, 0.36, 1)`

---

## Screens / Sections

### 1. Navigation (`.nav`)
- **Layout:** Fixed top, full width, flex row: logo left, links pushed right (`margin-left: auto`), "Let's talk" primary button, mobile burger.
- **Logo (`.brand`):** A `20×20px` square accent-colour block (`.brand__dot`) + "Tim Brown" wordmark (Hanken Grotesk 800).
- **Links:** "Why me", "Services", "About", "Work" — anchor links to section IDs. Animated underline on hover (accent, expands from left).
- **Behaviour:** Starts **transparent** over the hero with **white** logo/links. On scroll past 24px, adds `.is-scrolled`: translucent white background (`oklch(1 0 0 / 0.82)`), `backdrop-filter: blur(14px) saturate(1.4)`, bottom hairline border, reduced padding, and dark text returns.
- **Mobile (≤980px):** Links + CTA hidden; burger appears. Tapping burger toggles `.is-open` → dropdown panel (white, bordered) below the bar. Burger animates to an X.

### 2. Hero (`.hero`)
- **Layout:** `min-height: 100svh`, full-bleed. A `.hero__bg` layer (z0) holds the background image; a `.hero__overlay` (z1) holds readability gradients; `.hero__inner` (z2) holds the copy, constrained to `max-width: 640px`, left-aligned.
- **Background image:** `.hero__bg .ph.ph--hero` — **PLACEHOLDER**. Replace with a full-width photo of Tim positioned to the **right** of frame (copy sits on the left). Set as a `background-image` or swap for an `<img>` that covers the area.
- **Overlay gradients** (keep these for legibility over any photo):
  - `linear-gradient(90deg, oklch(0.17 0.02 262 / 0.80) 0%, /0.48 42%, /0.06 72%, transparent 100%)`
  - `linear-gradient(0deg, oklch(0.17 0.02 262 / 0.42) 0%, transparent 36%)`
- **Content (white text):**
  - Eyebrow (`.eyebrow`, accent-soft colour): **"Hey, I'm Tim Brown..."**
  - H1 (`.hero__title`): **"Your website & technology guy"** — the `&` is wrapped in `.hl` and rendered in the accent colour.
  - Lead (`.hero__lead`): "The digital landscape is constantly changing. I make sure that you're ahead of your competition with modern, smart digital solutions & support."
  - Actions: **"Start a project"** (primary button → `#contact`) and **"See what I do"** (ghost button → `#services`).
  - Proof row (`.hero__proof`, top hairline border): three stat pairs — **UK based** / Exeter, Devon · **Human + AI** / search ready · **End to end** / build & hosting.

### 3. Benefits (`.benefits` — "Why work with me")
- **Section head (centered, max 680px):** eyebrow "Why work with me", title "A partner in your corner — not just another supplier.", sub-paragraph.
- **Grid:** 3 equal columns (`repeat(3, 1fr)`, gap 22px), collapses to 1 column ≤980px (max 480px, centered).
- **Each card (`.benefit`):** white, hairline border, 34×30px padding, left-aligned. Contains a `52×52px` icon chip (accent-tint background, accent border, accent-coloured SVG icon), an `h3`, and a paragraph.
  - Card 1 — **True partnership** — icon: two overlapping circles.
  - Card 2 — **Driven by results** — icon: upward trend arrow.
  - Card 3 — **Modern & forward-thinking** — icon: sparkle.
- **Hover:** lift `translateY(-3px)`, medium shadow, stronger border.

### 4. Services (`.services` — "What I do") — STACKING CARDS
- **Background:** `--bg-alt`. Generous bottom padding `clamp(90px, 9vw, 130px)`.
- **Section head (centered):** eyebrow "What I do", title "Everything your website needs, in one place.", sub "Four services that work together — from first build to long-term care."
- **Stacking effect:** Each card is in a `.card-wrap` with `position: sticky` and a stepped `top` value (96/112/128/144px) so as you scroll, each card sticks under the nav and the next card scrolls up to cover it. JS (`updateStack()`) additionally scales each covered card down to `0.95` and fades to `0.65` opacity based on scroll progress, for depth.
- **Card (`.scard`):** white, hairline border, medium shadow, **max-width 960px, centered**. Two-column grid (text left `1.05fr`, visual right `0.95fr`, gap 44px), min-height 360px, square corners. Collapses to single column ≤980px (visual moves below, `order: 2`).
  - Each card has a square accent number tag (`.scard__num`: "01"–"04", accent text on accent-tint, accent border), an `h3` title, a description paragraph, and a 3-item checklist (`.scard__list` — accent-coloured check icons via CSS mask).
  - Visual area (`.scard__visual .ph--card`) is a **PLACEHOLDER** for an optional illustration/mockup per service.
- **The 4 services (exact copy):**
  1. **Website builds** — "Bespoke, beautiful websites designed to convert visitors into customers — fast, responsive and built around your goals." List: Custom design, no cookie-cutter templates / Built to be fast & mobile-first / Easy for you to update.
  2. **Optimisation** — "Better rankings in Google *and* AI search. I make sure people — and the new wave of AI assistants — can actually find you." List: Technical & on-page SEO / AI / answer-engine ready content / Speed & Core Web Vitals tuning.
  3. **Hosting** — "Safe, secure and speedy website hosting with ongoing support — so your site stays online, updated and protected without you lifting a finger." List: Fast, secure UK-friendly hosting / Backups, updates & monitoring / A real person to call.
  4. **AI & automation** — "Smart systems that free up your time — automating the repetitive stuff so you can focus on the work only you can do." List: Workflow & admin automation / AI assistants & chatbots / Tools tailored to your business.

### 5. About (`.about` — "Hi, I'm Tim.")
- **Layout:** 2-column grid (photo `0.82fr` left, copy `1.18fr` right, gap 60px). Collapses to single column ≤980px.
- **Photo (`.about__photo .ph--about`):** **PLACEHOLDER**, aspect ratio `4 / 4.4`. A photo of Tim (golf / hiking / family / at work).
- **Copy:** eyebrow "A little about me", title "Hi, I'm Tim.", two paragraphs (New Zealand → Exeter, Devon; wife + child; golf, hiking, sport; passionate about modern web work). Then a row of tag chips: **Golf · Hiking · Sport · Family**.

### 6. Recent projects (`.work`) — DARK SLIDESHOW
- **Background:** dark slate gradient (`linear-gradient(125deg, oklch(0.235 0.025 262), oklch(0.165 0.02 262))`), all text/controls switched to light. Eyebrows/kickers use `--coral-soft`.
- **Section head (centered, light):** eyebrow "A snapshot of my work", title "Recent projects."
- **Slideshow (`.slider`):** Shows **one project at a time**. Critical implementation detail: the track (`.slider__track`) is a flexbox; **each `.slide` must be exactly `flex: 0 0 100%` (full viewport-width)** so only one shows at a time. The project *content* inside each slide is centered and constrained: `grid-template-columns: minmax(0, 440px) minmax(0, 440px); gap: 44px; justify-content: center;` (screenshot left, text right). Do **not** put a max-width on the `.slide` itself — that causes neighbouring slides to bleed in on wide screens.
  - Screenshot (`.slide__shot .ph--shot`, 16:10) is a **PLACEHOLDER** per project.
  - Text: kicker ("Project NN · Sector"), `h3` project name, description, "View project" link with animated arrow.
  - **Currently 3 placeholder slides** with dummy copy ("Project name goes here"). Swap for real case studies.
- **Controls (`.slider__controls`):** centered prev/next square buttons (light outline, fill with accent on hover) + dot indicators (active dot widens and turns accent).
- **Behaviour:** auto-advances every 6s, pauses on hover, supports touch swipe, dots clickable. `translateX(-index * 100%)` on the track.

### 7. Testimonials (`.testimonials` — "What clients say.")
- **Section head (centered):** eyebrow "Kind words", title "What clients say.", sub noting these are placeholders.
- **Grid:** 3 equal columns (gap 22px), collapses to 1 column ≤980px.
- **Each card (`.t-card`):** white, hairline border, square. Contains a large accent-coloured opening quote mark (`::before` content `"`), the quote text, and a person block (44px avatar circle placeholder + name/business). **Currently dummy quotes** — swap for real testimonials (and real avatar images).

### 8. Contact (`.contact` — "Got a project in mind?")
- **Background:** `--bg-alt` with top hairline border.
- **Layout:** 2-column grid (intro left, form right, gap 56px). Collapses to 1 column ≤980px.
- **Intro:** eyebrow "Let's talk", title "Got a project in mind?", paragraph. Then `.contact__details` list with line-icon chips:
  - Phone: **07594 404 388** (`tel:+447594404388`)
  - Email: **tim@tangobrown.com** (`mailto:`)
  - Location: "Exeter, Devon · working with clients UK-wide"
- **Form (`.contact__form`):** white, bordered, medium shadow. Fields: Your name (required), Email (required), Business (optional), How can I help? (textarea, required). Submit: "Send message" (full-width primary).
  - Inputs: `--bg` background, `--line-strong` border, square; on focus → accent border + 3px accent focus ring.
  - **Validation is front-end only** (checks name, valid email regex, message). On success it shows a friendly confirmation and resets — **it does NOT send anywhere.** ⚠️ **On implementation, wire this to a real backend / form service** (e.g. Formspree, a serverless function, or the codebase's existing mail handler).

### 9. Footer (`.footer`)
- Dark (`--ink`) background. Logo (light wordmark) + tagline "Modern digital solutions for small businesses across the UK." + links (email, phone). Bottom row: "© <year> Tim Brown. Built with care in Exeter, Devon." (year auto-filled by JS).

---

## Interactions & Behavior

- **Scroll reveal:** Elements with `.reveal` start at `opacity: 0; translateY(22px)` and transition to visible. Implemented with a scroll-position check (not IntersectionObserver) plus timed failsafes that guarantee everything becomes visible. Respects `prefers-reduced-motion`. Transition: `opacity .6s, transform .6s` with the standard ease. Staggered delays on grid children.
- **Nav scroll state:** `.is-scrolled` toggles at `scrollY > 24` (see section 1).
- **Stacking cards:** sticky positioning + JS scale/fade on scroll (see section 4).
- **Slideshow:** auto-advance 6s, hover-pause, swipe, dots, arrows (see section 6).
- **Form:** front-end validation + confirmation message (see section 8).
- **All hovers:** buttons lift `translateY(-1px)` + shadow; cards lift `translateY(-3px)`; links get accent colour / animated underline or arrow.
- **Reduced motion:** all reveals shown immediately, smooth scroll disabled, stacking JS skipped.

## Responsive behaviour
- **≤980px:** nav collapses to burger menu; hero, all 2-col grids, and slideshow content collapse to single column; stacking cards become full-width single column with the visual below the text; `card-wrap` sticky `top` normalised to 88px.
- **≤540px:** tighter container padding (20px); hero buttons go full-width; service card side margins reduced.

## State Management
Minimal — this is a static marketing page. The only runtime state:
- Nav scrolled boolean (class toggle)
- Mobile menu open boolean (class toggle)
- Slideshow current index (integer) + auto-advance timer
- Form field values + validation/confirmation message
- (Prototype only) selected accent palette, persisted to `localStorage` under key `tb-palette` — **remove with the switcher in production.**

## Assets
**No real image files exist yet** — every image is a styled placeholder (`.ph` element with a dashed border and a label). The implementer (or client) must supply:

| Location | Selector | Asset needed | Suggested size |
|---|---|---|---|
| Hero | `.hero__bg .ph--hero` | Full-width photo of Tim, subject on the **right** | ≥2000px wide, landscape |
| About | `.about__photo .ph--about` | Photo of Tim | ~800×880 (4:4.4) |
| Services ×4 | `.scard__visual .ph--card` | Optional illustration/mockup per service | ~600×460 |
| Projects ×3 | `.slide__shot .ph--shot` | Project screenshot | 16:10, ≥1200px wide |
| Testimonials ×3 | `.t-card__avatar` | Optional client headshot | 88×88 (circle) |

Icons used (benefits, contact, slider arrows, checkmarks) are **inline SVGs** already in the markup — no external icon library needed. Fonts are **Google Fonts** (Hanken Grotesk + Inter).

**Placeholder copy to replace:** the 3 project slides ("Project name goes here") and 3 testimonials (dummy quotes) contain lorem-style placeholder text that must be swapped for real content.

## Files
- `index.html` — the complete design (HTML + inline `<style>` + inline `<script>`). Self-contained, no build step, no external dependencies except Google Fonts. This is the single source of truth.

## Implementation checklist
- [ ] Recreate sections in the target framework using its component patterns
- [ ] Port design tokens (colours/type/spacing/shadows) into the codebase's system
- [ ] Keep square corners (radius 0) and the serif-free Hanken Grotesk / Inter pairing
- [ ] Implement the sticky stacking-cards services section
- [ ] Implement the one-at-a-time centered slideshow (mind the `flex: 0 0 100%` note)
- [ ] Preserve the transparent→solid nav transition over the hero image
- [ ] **Wire the contact form to a real backend / form service**
- [ ] Drop in real images (see Assets table) and replace placeholder project/testimonial copy
- [ ] Confirm final accent colour with client, bake it in, and **remove the palette switcher** (markup + CSS + JS, all marked with REMOVE comments)
- [ ] Test responsive breakpoints (980px, 540px) and `prefers-reduced-motion`
