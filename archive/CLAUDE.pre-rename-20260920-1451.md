# Linda Hamed — Portfolio Site

Personal portfolio for Linda Hamed, Experience Design Director, Dubai / Bucharest.
Deployed to Netlify at lindahamed.com. Plain HTML and CSS, no build step.

---

## Project Structure

```
linda-hamed-site/
├── index.html                ← Homepage (live)
├── coming-soon.html          ← Placeholder for unfinished case studies
├── CLAUDE.md                 ← This file
├── CV_LindaHamed_2026.pdf    ← Download CV target
├── fonts/                    ← Self-hosted DM Serif Display + Manrope (woff2)
├── work/
│   ├── Case Study 01 - Telco Payment Revamp/
│   │   ├── omantel.html      ← Case study (fonts at ../../fonts/)
│   │   ├── img/
│   │   └── archive/          ← Timestamped backups, not deployed
│   └── Case Study 02 - AIOBP/
└── archive/                  ← Old versions, not deployed
```

Before editing any page, copy it to a timestamped file in the nearest `archive/`.

---

## Colour

One palette across the site. Never hardcode a new hue.

```css
:root {
  --cream:       #FAF9F6;  /* page background, near-white */
  --cream-lift:  #FFFFFF;  /* cards, raised surfaces */
  --navy:        #14143D;  /* all text, dark bands */
  --navy-deep:   #14143D;  /* footer, quote band */
  --navy-lift:   #2D2C7A;  /* hover on navy */
  --terracotta:  #CD533B;  /* the one accent: links, section numbers, hovers */
  --terracotta-deep: #B0432D; /* small accent text and white-on-accent (AA) */
  --coral:       #F48668;  /* accent text on navy backgrounds only */
  --ochre:       #E2AC7E;  /* accent on navy backgrounds only */

  /* text opacity steps, all navy */
  --ink-78: rgba(20,20,61,.78);
  --ink-62: rgba(20,20,61,.62);
  --ink-45: rgba(20,20,61,.45);
  --ink-22: rgba(20,20,61,.22);
  --ink-12: rgba(20,20,61,.12);  /* rules and borders */
}
```

Rules:
- Terracotta is an accent, not a fill. Use it for links, section numbers, labels and hover states.
- `--terracotta` (4.1:1 on the page) is for large text, headings, arrows and rules. Small accent text and white-on-accent use `--terracotta-deep`.
- Orange sentences on navy use `--coral` (7.1:1). Never use coral on the light background (2.4:1).
- Ochre only appears on navy.
- Stats and cards are white with a thin `--ink-12` border and navy numbers. No filled accent blocks.
- The palette above is live on index.html and omantel.html.
- The homepage halo (cursor light and portrait wash) is tinted coral.

---

## Typography

Two families, both self-hosted from `/fonts` (SIL OFL). No Google Fonts at runtime.

| Role | Font | Weight |
|------|------|--------|
| Display, headings, pull quotes | DM Serif Display | 400 |
| Body, UI, labels, nav | Manrope | 400 / 600 / 700 / 800 |

```css
--display: 'DM Serif Display', Georgia, serif;
--sans:    'Manrope', 'Helvetica Neue', Helvetica, sans-serif;
```

- Only weights 400/600/700/800 of Manrope are shipped. Adding another weight means adding its woff2 and @font-face.
- Labels: Manrope 700, uppercase, tracked (~.14em), 11px.
- Body copy: 16px, line-height 1.65.

---

## Layout

- Content max width 1270px, side padding `clamp(1.5rem, 5.9vw, 85px)`.
- Editorial rail: section heading in a left column (`clamp(210px, 21vw, 290px)`), content in the right. Collapses to one column below 900px.
- The first item in a right-hand column is optically aligned to the section title's cap height, not its box top.
- One mobile layer, appended last in the stylesheet at `max-width: 760px`.

---

## Components in use

- **Nav**: centred floating pill, cream, blurred. Logo "lh." in DM Serif italic. Last item is the navy "Let's talk" pill.
- **Buttons**: rounded pill (`border-radius: 999px`). Cream on navy, navy on cream. Hover turns terracotta.
- **Chips**: one shared rule, 12px Manrope 600, terracotta outline. Chips inside app screenshots are product UI and are not restyled.
- **Cursor**: 7px navy dot, cream over dark sections. Hidden on touch devices.
- **Reveal**: fade up 22px over 0.8s on scroll, once. Everything respects `prefers-reduced-motion`.

---

## Pending

- **Logo mark**: final mark to come from Linda. Currently "lh." in DM Serif Display.
- **Case studies**: Case Study 02 (All-in-One Bill Payment) not yet live; its links go to `coming-soon.html`.

---

## Preview locally

Open `index.html` in Chrome, or run `npx serve .` from the project root.
