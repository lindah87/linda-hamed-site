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

Four colours. Nothing else anywhere in the code: not in hovers, shadows,
borders, glows, SVG icons, favicons or JavaScript strings.

```css
:root {
  --cream:  #FAF9F6;  /* background, text on navy */
  --navy:   #14143D;  /* all text, dark bands, primary buttons */
  --orange: #CD533B;  /* accent: links on hover, section numbers, tags, hover fills */
  --coral:  #F48668;  /* accent on navy only: hovers and orange text on dark bands */
}
```

Rules:
- Transparency is allowed only as an alpha of these four, e.g. `rgba(20,20,61,.12)` for rules and borders, `rgba(250,249,246,.35)` for borders on navy.
- Never use coral on the light background (2.4:1).
- Contrast note: orange on cream and cream on orange measure about 4.1:1. That passes for large text, headings and bold UI of 19px and up, but not for small body text.

---

## Typography

Two families only, self-hosted from `/fonts` (SIL OFL). No Google Fonts, no system fallbacks named.

| Role | Font | Weight |
|------|------|--------|
| Display, headings, pull quotes | DM Serif Display | 400 (roman; italic file exists) |
| Body, UI, labels, nav, links, buttons | Manrope | 400 / 600 / 700 / 800 |

```css
--display: 'DM Serif Display', serif;
--sans:    'Manrope', sans-serif;
```

- Only 400/600/700/800 of Manrope are shipped. Do not use 300 or 500.
- Headings (titles) are roman, not italic.
- Manrope does not contain the arrow characters (→ ↗) or symbols like ✦ ◆ or emoji. Never type them into the page: the browser would draw them in a system font. Use the inline SVG icons instead (`.i-arw.e`, `.i-arw.ne`, `.i-arw.s`, `.i-star`, `.i-lock`, `.i-ico`), which take the text colour.

---

## Layout

- Content max width 1270px, side padding `clamp(1.5rem, 5.9vw, 85px)`.
- Editorial rail: section heading in a left column (`clamp(210px, 21vw, 290px)`), content in the right. Collapses to one column below 900px.
- The first item in a right-hand column is optically aligned to the section title's cap height, not its box top.
- One mobile layer, appended last in the stylesheet at `max-width: 760px`.

---

## Components in use

All links and buttons are defined once, in the `DESIGN SYSTEM` block at the end
of each page's stylesheet. The block is identical in spirit on every page; add
new link or button classes to its selector lists rather than styling them locally.

- **Text links**: Manrope 600, 15px. Navy on light, hover orange. Cream on navy, hover coral.
  Exceptions by design: the logo, whole-card links, the mobile overlay menu, and the
  "Next case study" title in the case-study footer (display size, same hover colour).
- **Buttons**: pill, 48px high, 0 28px padding, Manrope 600 15px, 1.5px border.
  - Primary (light bg): navy fill, cream text. Hover: orange fill.
  - Secondary (light bg): transparent, navy text, navy 25% border. Hover: orange border and text.
  - Primary on navy: cream fill, navy text. Hover: orange fill, cream text.
  - Secondary on navy: transparent, cream text, cream 35% border. Hover: coral border and text.
  - Nav "Let's talk" is a compact primary; "Built with AI" is a compact secondary.
  - Hover is a colour change only (0.25s). Arrows nudge in their direction.
- **Nav**: floating pill. Once scrolled, frosted glass (cream 55%, blur 22px), light on
  every background including navy bands. Hides on scroll down, returns on scroll up.
- **Cursor**: small navy dot, cream over dark sections. Hidden on touch devices.
- **Halo**: soft coral light following the cursor on the homepage, case study and coming-soon page.
- **Reveal**: fade up on scroll, once. Everything respects `prefers-reduced-motion`.

---

## Pending

- **Logo mark**: final mark to come from Linda. Currently "lh." in DM Serif Display.
- **Case studies**: Case Study 02 (All-in-One Bill Payment) not yet live; its links go to `coming-soon.html`.

---

## Preview locally

Open `index.html` in Chrome, or run `npx serve .` from the project root.
