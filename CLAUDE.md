# Linda Hamed — Portfolio Site

Personal portfolio for Linda Hamed, Experience Design Director based in Dubai / Bucharest.

---

## Project Structure

```
linda-hamed-site/
├── index.html              ← Homepage (live)
├── brand-guidelines.html   ← Living brand reference doc
├── CLAUDE.md               ← This file
└── README.md               ← Setup instructions
```

Next pages to build:
- `work/omantel.html` — Case study: Omantel Bill Payment Journey
- `work/axa.html` — Case study: AXA Design System
- `work/neom.html` — Case study: NEOM Digital Experience Vision
- `work/ecommerce.html` — Case study: Branded eCommerce
- `writing.html` — Writing / thought leadership archive

---

## Brand Tokens

All CSS custom properties are defined in `:root` on every page. Never hardcode these values.

```css
:root {
  /* Palette */
  --bg:         #F0F0F0;   /* off-white background */
  --ink:        #0D0D0D;   /* near-black text */
  --ink-60:     rgba(13,13,13,0.60);
  --ink-40:     rgba(13,13,13,0.40);
  --ink-15:     rgba(13,13,13,0.15);
  --ink-08:     rgba(13,13,13,0.08);

  /* Scribble accents — each has a LOCKED semantic role, do not swap */
  --terracotta: #C4673A;   /* hero underlines, CTA scribbles, primary energy */
  --ink-blue:   #1B3A5C;   /* pull quotes, dark-section scribbles */
  --sage:       #4A6741;   /* stats, proof-point scribbles */

  /* Typography */
  --display: 'Gloock', Georgia, serif;          /* headings, name, buttons */
  --sans:    'Cabinet Grotesk', 'DM Sans', Helvetica, sans-serif; /* body, labels, UI */
}
```

---

## Typography Rules

| Role | Font | Weight | Style |
|------|------|--------|-------|
| Display / Name | Gloock | 400 | roman |
| Subheadings | Gloock | 400 | italic for emphasis only |
| Body copy | Cabinet Grotesk | 300–400 | — |
| Labels / caps | Cabinet Grotesk | 700 | uppercase, tracked |
| Buttons | Gloock | 400 | italic |

**Name mark**: always `font-style: normal` (no italic, no outline). Plain roman Gloock with `letter-spacing: -0.02em`.

Font loading — always include both sources, Cabinet Grotesk is not on Google Fonts main:
```html
<link href="https://fonts.googleapis.com/css2?family=Gloock:ital@0;1&display=swap" rel="stylesheet">
<link href="https://fonts.cdnfonts.com/css/cabinet-grotesk" rel="stylesheet">
```

---

## Background System

Every page uses the same grain + gradient layering on `body::before` and `body::after`.

```css
/* Grain texture */
body::before {
  content: '';
  position: fixed; inset: 0; z-index: 0;
  pointer-events: none; opacity: 0.5;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  mix-blend-mode: multiply;
}

/* Subtle radial gradient — cool top-left, warm bottom-right */
body::after {
  content: '';
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background:
    radial-gradient(ellipse at 8% 0%, rgba(205,210,224,0.32) 0%, transparent 52%),
    radial-gradient(ellipse at 92% 100%, rgba(224,215,205,0.28) 0%, transparent 52%);
}
```

All page content must be `position: relative; z-index: 1` to sit above the grain layers.

---

## Button — Only One Style

The site uses exactly one button pattern: the **lined Gloock italic** button.
No filled buttons, no outline buttons, no ghost buttons.

```css
.btn-lined {
  font-family: var(--display);
  font-style: italic;
  font-size: 1.125rem;
  letter-spacing: -0.01em;
  color: var(--ink);
  padding: 0.65rem 0;
  /* top + bottom 1px rules via ::before / ::after */
}
.btn-lined:hover { color: var(--terracotta); }
/* lines also turn terracotta on hover */
/* arrow ↗ translates translate(3px, -3px) on hover */
```

Inverted variant (`.btn-lined-inv`) for dark sections: same rules but `color: #F0F0F0` at rest, lines at `rgba(240,240,240,0.4)`.

---

## Scribble System

SVGs drawn via `stroke-dasharray` / `stroke-dashoffset` animation, triggered by IntersectionObserver on scroll.

**Colour roles (do not swap):**
- `--terracotta` → hero name underline, CTA word underline, primary emphasis
- `--ink-blue` → pull quote scribble, dark-section emphasis
- `--sage` → stat number underlines, proof points

**Pattern:**
```css
.scrib path {
  stroke-dasharray: [path-length];
  stroke-dashoffset: [path-length]; /* same value = hidden */
  transition: stroke-dashoffset 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s;
}
/* When visible, set stroke-dashoffset: 0 via JS */
```

Use IntersectionObserver to trigger. Once drawn, unobserve the element.

---

## Animation Patterns

### Word-by-word reveal (Pearl Sequeira pattern)
Wrap each word in `.word > .word-inner`. Start `translateY(105%)`, transition to `translateY(0)` when `.visible` is added. Stagger delays by `0.05s` per word.

### Fade-up
Single elements: `opacity: 0; translateY(24px)` → `opacity: 1; translateY(0)` on `.visible`.

### Stagger fade
Parent gets `.stagger-fade`, children fade up with `0.1s` incremental delay.

### Hero entrance
Name words revealed via `setTimeout` at 200ms. Hero bottom fades in at 500ms. Scribble draws at 1200ms.

---

## Custom Cursor

Small 10px circle, `mix-blend-mode: multiply`. Expands to 40px ring on hoverable elements. Turns terracotta solid on links. Never use `cursor: auto` or `cursor: pointer` — set `cursor: none` on `body` and all interactive elements.

---

## Nav

Fixed, transparent at top. On scroll > 40px: `background: rgba(240,240,240,0.9)`, `backdrop-filter: blur(14px)`, bottom border appears. Logo: Gloock roman "Linda Hamed" with LH SVG scribble mark (placeholder — Linda will provide final logo). Nav links: Cabinet Grotesk 700 uppercase, tracked, `--ink-40` at rest, `--ink` active/hover.

---

## Section Structure

Every section follows this pattern:
```html
<section class="section" id="[slug]">
  <div class="section-label">0N — Title</div>
  <!-- content -->
</section>
```

Section label: Cabinet Grotesk 700 uppercase, tracked, `--ink-60`, followed by a 1px `--ink-15` rule extending to the edge.

Sections on the light background use `border-top: 1px solid var(--ink-15)`.

---

## Dark Sections

The pull-quote section inverts to `background: var(--ink)`. It gets its own grain overlay via `::before` with `mix-blend-mode: overlay`. Text is `#F0F0F0`. Scribble colour in dark sections: `--ink-blue`.

---

## Work / Case Studies

Work rows use a 3-column grid: `3rem 1fr auto` (number · title+tags · metric). Hover state: `padding-left: 1rem` with `0.3s` cubic ease. Tags are small uppercase pill-bordered labels.

Case study pages (not yet built): should follow the same brand system. Each page gets its own hero with the project name in large Gloock, a structured narrative, and outcome metrics with sage scribble underlines.

---

## Pending / Placeholders

- **Logo mark**: Linda will provide a hand-drawn mark. Currently using LH Gloock italic + terracotta scribble underline as placeholder in nav.
- **Iconography**: Linda will provide references. Currently using dashed placeholder boxes. Style direction: geometric, stamp-like.
- **Case study content**: Work row titles and metrics are real but case study pages are not yet built.
- **Writing page**: Not yet built.

---

## How to Preview Locally

```bash
cd linda-hamed-site
npx serve .
# open http://localhost:3000
```

Or just open `index.html` directly in Chrome — no build step required.

---

## Design Principles (from brand brief)

1. **Systems thinking with pixel precision** — strategic frame and execution detail simultaneously
2. **A little unexpected** — never generic, always a deliberate choice
3. **Achromatic base, three accent colours** — restraint is the point; accents earn their place
4. **Typography-led** — layout and hierarchy come from Gloock's weight and scale, not decoration
5. **Grain grounds everything** — the texture is what makes the off-white feel tactile, not clinical
