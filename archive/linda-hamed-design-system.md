# Linda Hamed — Personal Design System
**Version 2.0 · Extracted directly from Figma · June 2026**

> A design system for a senior Experience Design Director portfolio. Restrained. Confident. A little unexpected. Nothing is there by accident.
>
> **How to read this file:** Sections marked `⚠️ NEEDS CONFIRMATION` could not be fully extracted from Figma due to file size. All other sections are confirmed directly from the source file.

---

## Table of Contents

1. [Philosophy](#01--philosophy)
2. [Colour System](#02--colour-system)
3. [Typography](#03--typography)
4. [Spacing & Grid](#04--spacing--grid)
5. [Background Pattern](#05--background-pattern)
6. [Components](#06--components)
7. [Voice & Tone](#07--voice--tone)
8. [Motion & Animation](#08--motion--animation)
9. [Error & Empty States](#09--error--empty-states)
10. [Iconography & Glyphs](#10--iconography--glyphs)
11. [Responsive Behaviour](#11--responsive-behaviour)
12. [Page Template: Homepage](#12--page-template-homepage)
13. [CSS Tokens Reference](#css-tokens-reference)

---

## 01 — Philosophy

**Restrained. Confident. A little unexpected. Nothing is there by accident.**

> *"Every word is a design decision."* The same applies to every pixel.

### Four principles

| # | Principle | Description |
|---|-----------|-------------|
| 01 | **Scale + precision** | Linda works at a systems level but cares about the detail. Strategic frame and pixel, held simultaneously. |
| 02 | **Typography in action** | The surprise is spatial — weight contrast and accent colour strokes do the work. Not decoration. |
| 03 | **One unexpected detail** | The tile/grid line texture on the background. The tangerine underline. These are not decorations; each one is a considered decision that signals taste without announcing it. |
| 04 | **Controlled warmth** | `#F5ECD8` warm ivory with grid lines. Not clinical white, not cold minimalism. Atmospheric without being expressive. The background breathes. |

---

## 02 — Colour System

**Warm. Electric. Precise. 5 colours · 3 accent rules · 1 system.**

### Complete palette (confirmed from Figma)

| Token | Hex | Name | One job — and only this job |
|-------|-----|------|-----------------------------|
| `--bg` | `#F5ECD8` | Warm Ivory | Page background — all sections, all pages |
| `--primary` | `#22099F` | Navy Electric | Nav, links, body text on light, CTAs, primary UI |
| `--accent-tangerine` | `#FF6E3C` | Tangerine | Underlines and glyphs **only** |
| `--accent-mark` | `#F0B400` | Solar Gold | Decorative marks, ticker separators, subtle highlight moments |
| `--accent-tag` | `#DC3C64` | Raspberry | Work category tags, hover states on cards, active nav indicator dot |
| `--accent-ochre` | `#E2AC7E` | Ochre Sand | Grid lines, dividers, warm tone accents only |
| `--primary-mist` | `rgba(34,9,159,0.08)` | — | Table row backgrounds, card header tints |
| `--success` | `#1A8C33` | — | Do marks, confirm states |

### The one-job rule — enforced

No token ever appears in a role it wasn't assigned. Break this and the system falls apart immediately.

| Token | ONLY job | NEVER use for |
|-------|----------|---------------|
| `--bg` | Page background | Text, borders, interactive elements |
| `--primary` | Nav, links, CTAs, primary UI | Background fills on large areas, body text |
| `--accent-tangerine` | Underlines, scribble marks, glyphs | Backgrounds, body text, buttons, headings |
| `--accent-mark` | Decorative marks, ticker separators | Primary UI, text, tags |
| `--accent-tag` | Tags, hover states, active indicator dot | Page backgrounds, heading text, body text |
| `--accent-ochre` | Grid lines, dividers | Text, interactive elements, buttons |

### Colour combinations (confirmed from Figma)

| Combination | Context | Rule |
|-------------|---------|------|
| Navy heading on ivory + tangerine accents | Default/light | Primary on base — maximum contrast, full presence |
| Ivory type on navy | Dark sections — footer, contact, callouts | Clean inversion — **no accent colours on navy** (all three disappear or clash) |
| Gold separators + ivory text on navy | Ticker strip only | Gold marks only, never as text colour |
| Raspberry on card for tags | Case study cards | Never use for body text or headings |
| Tangerine number + navy heading | Section labels | Tangerine is the number only; heading stays navy |
| Navy border + navy text on ivory | Lined button | Never filled background on this button variant |

### Do / Don't (confirmed from Figma)

**DO:**
- Navy heading on ivory with tangerine accents — primary on base, maximum contrast
- Gold decorative mark + ivory text on navy — dark sections only
- Raspberry on white card for category tags only

**DON'T / NEVER:**
- Use tangerine, gold, or raspberry as heading text — accents are marks, not reading colours
- Use any accent colours on navy backgrounds — contrast fails
- Mix two accents in the same element — tags are always raspberry, never tangerine or gold

---

## 03 — Typography

**⚠️ PARTIALLY CONFIRMED — type scale values from existing MD, confirmed from Figma cover frames**

### Typefaces

| Role | Family | Fallback | Notes |
|------|--------|----------|-------|
| Display / Headings | Gloock | Georgia, serif | All display text — never in UI components |
| UI / Body / Labels | Cabinet Grotesk | DM Sans, Helvetica, sans-serif | All UI, labels, specs, navigation |
| Stat numbers | Cabinet Grotesk Bold | system-ui, sans-serif | **Note from Figma components:** "Cabinet Grotesk Bold, 30px" — the MD said Inter, Figma components spec says Cabinet Grotesk. Confirm which is correct. |

### Confirmed from Figma cover frames

| Usage | Size | Family | Weight | Colour |
|-------|------|--------|--------|--------|
| Hero name / display | 160px | Gloock | Regular | `#22099F` navy |
| Hero headline variant | 70px | Gloock | Regular | `#22099F` navy |
| Hero sub-headline | 45px | Gloock | Regular | navy |
| Body / subtitle | 28px | Cabinet Grotesk | Medium | `#22099F` navy |
| Body supporting | 22px | Cabinet Grotesk | Regular | navy |
| Section heading labels | 25px | Cabinet Grotesk | Bold | `#DC3C64` raspberry |
| Section quote / statement | 50px | Gloock | Regular | navy |

### Type scale tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--text-display-xl` | `clamp(4rem, 12vw, 10rem)` | Hero headline |
| `--text-display-l` | `clamp(2rem, 4vw, 3.25rem)` | Section titles |
| `--text-heading` | `2.25rem` | Component headings |
| `--text-body` | `1rem` | Body copy, descriptions |
| `--text-label` | `0.6875rem` | Tags, meta labels, spec bars |

### Rules

- Gloock for all display text — never in UI components
- Cabinet Grotesk for all UI, labels, specs, navigation
- Never mix display and sans in the same text element
- Letter spacing on labels: `+0.07em` minimum
- **Section labels format:** tangerine number `01 —` followed by navy heading text

### Confirmed answers
- **Stat numbers: Cabinet Grotesk Bold, 30px** (confirmed by Linda, June 2026)
- Typography frame too large to extract via API — line heights and letter spacing to be added when Figma frame is accessible

---

## 04 — Spacing & Grid

**Structure is the argument. The grid is not a constraint — it is the voice of the layout.**

### Spacing scale (base 8) — confirmed

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Tight inline gap |
| `--space-2` | `8px` | Label padding, compact elements |
| `--space-3` | `16px` | Card padding, paragraph gap |
| `--space-4` | `24px` | Component spacing, subhead gap |
| `--space-5` | `32px` | Between content groups |
| `--space-6` | `48px` | Section padding, rhythm breaks |
| `--space-7` | `64px` | Hero internal padding |
| `--space-8` | `96px` | Between major sections |
| `--space-9` | `128px` | Hero vertical padding, large screens |

### Grid system — confirmed

| Property | Value |
|----------|-------|
| Max width | `1200px` |
| Columns | `12` |
| Gutter | `20px` |
| Margin | `clamp(2rem, 6vw, 6rem)` |

**Breakpoints:**
- Desktop: `1200px+` — 12 columns, 20px gutter
- Tablet: `768px` — 8 columns, 16px gutter
- Mobile: `375px` — 4 columns, 16px gutter

### Never
- Arbitrary spacing values (no 13px, 22px, 37px — base 8 only)
- Nested grids inside grids
- Full-width text at large screens
- Horizontal scrolling layouts
- Spacing overrides in component variants

---

## 05 — Background Pattern

**The one unexpected detail. Confirmed from Figma philosophy section.**

The background `#F5ECD8` uses an underlying grid line structure — thin lines creating a subtle tile/column pattern. This is visible in every Figma frame as a group of horizontal and vertical lines at specific intervals (confirmed from Cover frame: lines at y=0, y=162, y=482, y=804 and x=290, x=864, x=1442 on a 1722px wide frame).

### CSS implementation (confirmed from valentingassend.com reference)

Valentin's technique: a fixed full-screen overlay div with two child divs — one for vertical lines, one for horizontal lines — using CSS Grid to space them evenly. Each line is a 1px `<span>` with `rgba(0,0,0,0.06)` colour. Lines animate in on page load with a scale transform.

```css
/* Grid line overlay — fixed, full viewport, pointer-events: none */
.bg-grid {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

/* Vertical lines — evenly spaced using CSS Grid */
.bg-grid-vertical {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 columns = 5 interior lines + edges */
  place-items: center;
}

.bg-grid-vertical span {
  display: block;
  width: 1px;
  height: 100%;
  background-color: var(--accent-ochre);
  opacity: 0.2;
}

/* Horizontal lines — evenly spaced using CSS Grid */
.bg-grid-horizontal {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-rows: repeat(4, 1fr); /* 4 rows = 3 interior lines + edges */
  grid-auto-flow: column;
  place-items: center;
}

.bg-grid-horizontal span {
  display: block;
  width: 100%;
  height: 1px;
  background-color: var(--accent-ochre);
  opacity: 0.2;
}
```

**HTML structure:**
```html
<div class="bg-grid" aria-hidden="true">
  <div class="bg-grid-vertical">
    <span></span><span></span><span></span>
    <span></span><span></span><span></span>
  </div>
  <div class="bg-grid-horizontal">
    <span></span><span></span><span></span><span></span>
  </div>
</div>
```

### Rules
- Grid lines use `--accent-ochre` at ~0.2 opacity — felt, not watched
- The overlay sits at `z-index: 0` — all page content sits above it at `z-index: 1`
- `aria-hidden="true"` — decorative only, screen readers ignore it
- `pointer-events: none` — never intercepts clicks
- Present on ALL pages and ALL sections including dark ones
- This is NOT a grain texture — it is a geometric grid, precise and architectural
- Matches the Figma cover frame line positions: vertical divisions at ~1/6, 2/6, 3/6, 4/6, 5/6 of width

---

## 06 — Components

**5 components. Every decision documented. This is not a UI kit — it is a set of arguments about how the system should behave.**

---

### Component 01 — Button

**The decision:** Three variants only: Primary, Secondary, Ghost. No danger, warning, or size variants — they create decision fatigue without enough distinct use cases to justify them.

| Variant | Style | Description |
|---------|-------|-------------|
| Primary | Navy fill, ivory label | `--primary` bg · ivory label · 50px radius |
| Secondary | Ivory fill, navy stroke | Ivory · navy stroke · 50px radius — "See all cases →" |
| Ghost | No fill, always underlined | No fill · always underlined · opacity 0.7 on hover |

**Spec (confirmed from Figma):**

| Property | Value |
|----------|-------|
| Height | `48px` |
| Padding | `24px` horizontal |
| Font | Cabinet Grotesk Bold 14px |
| Radius | `50px` |
| Min width | `120px` |
| Hover | `opacity 0.85 · translateY(-4px) · box-shadow: 0 8px 24px rgba(34,9,159,0.12) · 0.2s ease` |
| Focus | `2px navy offset ring` |
| Disabled | `40% opacity · no pointer` |

**Arrow glyphs on buttons:**
- Primary CTA button: `→` (right arrow, ivory coloured)
- External link button: `↗` (diagonal, tangerine coloured)
- Ghost link: `→` (right arrow, navy coloured)

---

### Component 02 — Case Study Card

**The decision:** One card type. Each case study is a single card: client name, one-line problem statement, one outcome number, and a category tag. If you need more than those four elements to make someone click, the case study isn't strong enough yet.

**Spec (confirmed from Figma):**

| Property | Value |
|----------|-------|
| Radius | `20px` |
| Padding | `44px` |
| Min height | `280px` |
| Stat font | Cabinet Grotesk Bold, 30px |
| Stat colour | `--primary` navy |
| Hover | `translateY(-4px) · shadow · 0.2s` |
| Tag | `#DC3C64` fill · white label · Bold 9px · +8% letter spacing |
| Border/stroke | Navy `--primary` 1px inside |
| Background | `--bg` ivory |

**Card structure (4 elements only):**
1. Client name + year (Cabinet Grotesk, label size, navy, uppercase)
2. Project title (Gloock, display size, navy)
3. One outcome stat (Cabinet Grotesk Bold, 30px, navy)
4. Max 2 category tags (Raspberry fill, white label, pill shape)

**Example card content from Figma:**
- "AXA Gulf Insurance UX" / "Redesigned the claims experience for 4M policyholders." / "−27%" / [INSURANCE] [SERVICE DESIGN]

---

### Component 03 — Navigation

**The decision:** Three items: Work, About, Contact. No dropdown menus, no mega-nav, no hamburger on desktop. The navigation is a declaration of confidence.

**Logo mark:** `LH.` — Cabinet Grotesk Bold, the period always in `--accent-tag` raspberry. Never italic. Never outlined.

**States (confirmed from Figma):**
- Default: Cabinet Grotesk, uppercase, navy at reduced opacity
- Active: Bold + underline in navy
- Hover: opacity 0.6
- Sticky on scroll: ivory/white background, border-bottom appears

**Desktop preview (confirmed from Figma):**
```
LH.          Work    About    Contact
```

**Mobile (confirmed from Figma node 242:172):**
- Nav bar: `--bg` ivory background, `LH.` logo left, hamburger (3 × 24px navy lines, 2px height, 1px radius) right
- On tap: full-screen overlay, background `rgb(18,18,30)` (near-black, darker than navy)
- Nav items in overlay: Cabinet Grotesk, 16px — active item Bold, others Regular, all white
- Order in overlay: Work (Bold/active) · About · Contact — stacked vertically, generous tap targets
- Close: tap anywhere on overlay

---

### Component 04 — Tag / Chip

**The decision:** Tags categorise work, not people. Three roles: Sector, Discipline, Outcome. Max 2 per card. Never link anywhere.

**Spec (confirmed from Figma):**

| Property | Value |
|----------|-------|
| Height | `19px` |
| Padding | `4px 10px` |
| Radius | `100px` (full pill) |
| Font | Cabinet Grotesk Bold 9px |
| Letter spacing | `+8%` |
| Fill | `#DC3C64` Raspberry |
| Label colour | White |
| Max per card | 2 |

**Three tag roles:**
- **Sector:** Telco, Fintech, Insurance, Gov't, eCommerce
- **Discipline:** Service Design, UX Strategy, Systems, Platform Design
- **Outcome:** Revenue, Retention, Efficiency, Conversion

---

### Component 05 — Stat Block

**The decision:** The most powerful element in the system. A stat block earns its place only when the number has been validated — no estimates, no vanity metrics. Never more than 4 in a row.

**Spec (confirmed from Figma):**

| Property | Value |
|----------|-------|
| Number font | Cabinet Grotesk Bold, 30px |
| Number colour | `--primary` navy |
| Label font | Cabinet Grotesk Medium, 14px |
| Label colour | `--primary` at reduced opacity |
| Underline | `--accent-tangerine` drawn via CSS, appears on scroll |
| Max in a row | 4 |

**Validated stats for use (confirmed from Figma):**

| Stat | Label |
|------|-------|
| −27% | Drop in friction · AXA Gulf claims |
| 4.2M | Users impacted · Omantel redesign |
| 18mo | Delivery timeline · NEOM onboarding |
| 92% | Satisfaction score · post-launch |
| 107% | Revenue target · Omantel |
| 8,002 | Utility transactions per 30 days |
| 15+ | Years leading design |
| $45M | Programme scale |

---

## 07 — Voice & Tone

**Say less. Mean more. Every word is a design decision.**

### The voice — four attributes (confirmed from Figma)

**Human. Rigour without coldness.**
The voice is precise but never clinical. Short sentences. The occasional fragment. A moment of candour where the work was hard or the answer was not obvious. The humanity is in the honesty, not in the warmth of the language.

**Precise. Specific always beats general.**
Numbers when you have them. Names when they matter. "Significant improvement" means nothing. "27% reduction in drop-off across 2.4M users" means everything. Precision signals that the work was real.

**Authoritative. State positions. Do not suggest them.**
No "perhaps", "might", "could potentially". These words transfer decision-making to the reader and signal uncertainty. A CDO candidate holds a point of view. State it. Own it. If challenged, defend it.

**Direct. No preamble. No hedging.**
The first sentence does the work. There is no warm-up, no "I am excited to share", no passive voice. Subject. Verb. Object. If the sentence needs a second read, it needs a rewrite.

### Writing rules (confirmed from Figma, in order)

1. **Lead with the outcome, not the process.** Start with what changed, not what you did. "Drop-off fell 27%" before "we ran 6 rounds of usability testing".
2. **One idea per sentence.** If a sentence has two clauses joined by "and", it is probably two sentences. Split it. Let each land.
3. **Use active voice exclusively.** "I led the redesign" not "the redesign was led". Active voice assigns responsibility. That is the point.
4. **Numbers are not decoration.** Every number must be sourced. If you cannot name the source, remove the number.
5. **Short sentences close ideas. Long ones open them.** Vary rhythm deliberately.
6. **Cut the last sentence of every paragraph.** It is almost always a summary of what you just said.

### Word list — USE (confirmed from Figma)

led · built · reduced · defined · shipped · measured · decided · cut · replaced · delivered · proved · failed · fixed · owned

### Word list — NEVER USE (confirmed from Figma)

passionate · leverage · synergy · holistic · innovative · seamless · journey · stakeholders · impactful · robust · world-class · transformative · empower · ideate · ecosystem · best-in-class · thought leader

### Before / After examples (confirmed from Figma)

**Project title:**
- BEFORE: "Seamlessly Reimagining the End-to-End Customer Journey for a Best-in-Class Digital Experience"
- AFTER: "Zero-friction onboarding: from 6 screens to 2."

**About page:**
- BEFORE: "A world-class experience designer with a holistic, human-centred approach to empowering organisations on their digital transformation journey."
- AFTER: "Experience design director. Fifteen years making complex systems feel obvious — at Talabat, Careem, AXA Gulf."

**Case study intro:**
- BEFORE: "I am passionate about leveraging design thinking to deliver innovative, user-centric solutions that create synergy across the ecosystem."
- AFTER: "I redesigned checkout for 4M users. Time-on-task dropped 34%. Here's how."

---

## 08 — Motion & Animation

**Nothing moves without reason. Every transition earns its place. Motion confirms interactions, guides attention, and communicates hierarchy — never decorates.**

### Three principles (confirmed from Figma)

**PURPOSEFUL** — Every animation communicates something: confirmation, hierarchy, or state change. If removing it loses no meaning, cut it.

**SUBTLE** — Motion should be felt, not watched. Max 300ms for UI transitions. Nothing lingers. Nothing bounces.

**CONSISTENT** — One easing function per type of action. Mix-and-match easing is visual noise.

### Motion tokens (confirmed directly from Figma)

| Token | Value | Use case | Real example from Figma |
|-------|-------|----------|------------------------|
| `--duration-fast` | `150ms` | Hover states, opacity toggles | Nav item hover, button hover opacity 0.85 |
| `--duration-base` | `200ms` | Most UI transitions | Button translateY, card shadow lift |
| `--duration-slow` | `300ms` | Page enters, modals, reveals | Section fade-in on scroll, card stagger |
| `--ease-out` | `cubic-bezier(0.0, 0, 0.2, 1)` | Elements entering the screen | Cards sliding up on load |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | State transitions | Nav sticky transition, tag hover |
| `--translate-lift` | `translateY(-4px)` | Hover lift on interactive cards | Case study card, button hover |
| `--shadow-lift` | `0 8px 24px rgba(34,9,159,0.12)` | Shadow on hover lift | Always paired with `--translate-lift` |
| `--stagger-delay` | `80ms per item` | List/grid stagger on enter | Work index cards load sequence |

### Do / Don't (confirmed from Figma)

| | Rule |
|--|------|
| ✓ DO | Use `--duration-base` (200ms) for button and card hover transitions |
| ✓ DO | Stagger list items by 80ms — gives rhythm without delay |
| ✓ DO | Combine `--translate-lift` + `--shadow-lift` together on card hover |
| ✕ DON'T | Animate layout properties (width, height, top, left) — use transform only |
| ✕ DON'T | Use bounce or spring easing — this is a professional portfolio, not a game |
| ✕ DON'T | Animate more than 2 properties simultaneously on the same element |

### Never. Ever. (confirmed from Figma)

- ✕ Auto-play animations on page load longer than 400ms
- ✕ Animate text content or font-size
- ✕ Use animation to hide important UI state changes
- ✕ Trigger motion on scroll without `prefers-reduced-motion` check

---

## 09 — Error & Empty States

**Silence is a state. Treat it like one. Every state a user can land in has a designed response. No blank screens. No broken layouts. No generic browser errors.**

### Empty states (confirmed from Figma)

| State | Glyph | Message |
|-------|-------|---------|
| Work index — no case studies | `✦` (tangerine) | "No case studies yet. Work is being selected carefully. Check back soon." |
| Loading skeleton | Navy mist bars (`--primary-mist`) | Animated placeholder at 8% fill |
| Writing — nothing published | `—` (tangerine em dash) | "Nothing published yet. Thinking happens before writing. Something is in the works." |

### Error states (confirmed from Figma)

| State | Glyph | Recovery action |
|-------|-------|-----------------|
| 404 Not found | `404` (raspberry, large) | "Page not found." → Button: "Go to Work →" |
| Email client unavailable | `⚠` (gold `--accent-mark`) | "No email client detected." → Show copyable email address |
| Network / load failure | `—` (raspberry em dash) | "Something didn't load. Check your connection." → Button: "Reload page →" |

### Rules (confirmed from Figma)

- Never leave a blank screen — always provide a message and a recovery action
- Empty states use `--accent-tangerine` glyphs — raspberry is for errors only
- Copy is direct and personal — "Page not found" not "404 Error: Resource Unavailable"
- Skeleton loaders use `--primary-mist` at 8% fills, never grey
- The `✦` four-point star: max 1 per page, empty states only — never bullets or decoration
- The `⚠` warning glyph: email error state **only**

---

## 10 — Iconography & Glyphs

**No icon library. Just marks. This system uses no icon font, no SVG library. Four categories of mark — each has one job.**

### 01 — Navigational arrows (confirmed from Figma)

| Glyph | Name | Colour | Usage | Never |
|-------|------|--------|-------|-------|
| `→` | Right arrow (filled) | Ivory on navy button | CTA buttons: "View Work →", "Case Study →" | Back navigation, decorative use |
| `→` | Right arrow (ghost) | `--primary` navy | Ghost links: "See all cases →" | Filled buttons |
| `↗` | Diagonal arrow | `--accent-tangerine` | External links, opening new tabs **only** | Internal navigation |

### 02 — Structural dashes (confirmed from Figma)

| Glyph | Name | Usage |
|-------|------|-------|
| `—` | Em dash | Section numbering: "01 — PHILOSOPHY" · Separator in meta: "2019 — 2024" |
| `·` | Middle dot | Inline spec separators: "Height 19px · padding 4px · radius 100px" |
| `—` (large, 48px) | Decorative em dash | Empty state glyph. Stands alone as visual mark, not punctuation |

### 03 — Decorative glyphs (confirmed from Figma)

| Glyph | Name | Usage | Never |
|-------|------|-------|-------|
| `✦` | Four-point star | Empty state focal mark. Max 1 per page | Lists, bullets, repeated elements |
| `.` | Brand dot | Logo mark after "LH" — always in `--accent-tag` raspberry | Body copy punctuation, headings |
| `—` underline | Tangerine underline | Text underlines via CSS `border-bottom` in `--accent-tangerine`. Not `text-decoration` | Hover states, nav underlines (those use navy) |

### 04 — UI indicators (confirmed from Figma)

| Glyph | Name | Colour | Usage | Never |
|-------|------|--------|-------|-------|
| `✕` | Reject / Never mark | `--accent-tag` raspberry | "Never. Ever." constraint lists | Close buttons, delete actions |
| `✓` | Confirm / Do mark | `--success` green | Do/Don't cards, rule confirmations | Success toasts, form validation |
| `⚠` | Warning | `--accent-mark` gold | Email error state **only** | General warnings, alert banners |

### The rule

No glyph appears outside its assigned context. Adding a `✦` to a CTA or using `→` as a list bullet breaks the system. These marks work because they are rare and precise.

---

## 11 — Responsive Behaviour

**Three breakpoints. One system. Nothing reflows by accident. Every component has a defined behavior — desktop (1200px+), tablet (768px), and mobile (375px).**

### Breakpoints

| Name | Width | Columns | Gutter |
|------|-------|---------|--------|
| Desktop | `1200px+` | 12 | `20px` |
| Tablet | `768px` | 8 | `16px` |
| Mobile | `375px` | 4 | `16px` |

### Component behaviour (confirmed from Figma)

| Component | Desktop (1200px+) | Tablet (768px) | Mobile (375px) |
|-----------|-------------------|----------------|----------------|
| Navigation | Horizontal · `LH.` logo + 3 items + CTA · sticky on scroll | Horizontal · 3 items · same as desktop | Logo + hamburger · full-screen dark navy overlay · 32px type · generous touch targets |
| Case Study Card | Horizontal split · content left · stat/tags right | Horizontal · tighter padding | Stacks vertically · stat on top · content below |
| Stat Block | 4 in a row · Cabinet Grotesk Bold 30px | 4 in a row · 18px | 2×2 grid · 22px |
| Button (Primary + Secondary) | `48px` height · min-width `120px` | No change | Full width |
| Button (Ghost) | Inline, underlined | No change | Inline |
| Tag / Chip | Max 2 per card · inline | Max 2 per card · inline | Max 2 per card · inline · wraps if needed |

---

## 12 — Page Template: Homepage

**The homepage is not a page — it is an argument. Each section earns the next.**

### Section order (confirmed from Figma homepage template)

```
Nav (sticky, fixed)
  ↓
01 — Hero
  ↓
02 — Stat Band (full width)
  ↓
03 — Work Index (case study cards)
  ↓
04 — CTA Strip (dark navy, full bleed)
  ↓
Footer (dark navy, full bleed)
```

### Section specs

| Section | Columns | Spacing above | Notes |
|---------|---------|---------------|-------|
| Nav | 12/12 | — | Fixed · z-index top · ivory bg on scroll |
| Hero | 8/12 | `--space-9` (128px) top padding | Columns 2–9 · left-aligned · `--text-display-xl` · Gloock |
| Stat band | 12/12 | `--space-8` (96px) | Full width · ivory bg with `--primary-mist` tint · 4 equal slots · Cabinet Grotesk Bold 30px |
| Work index | 6/12 each | `--space-8` (96px) | Cards · `--space-4` gap between · max 3 visible |
| CTA strip | 10/12 | `--space-8` (96px) | Columns 2–11 · centred · `--primary` navy bg · ivory text |
| Footer | 12/12 | `--space-7` (64px) | Full bleed · `--primary` navy bg · ivory text |

### Hero copy options (confirmed from Figma — multiple variants designed)

**Option A (chosen):**
- Eyebrow: "Hi, I'm Linda."
- H1 line 1: "I make" (Gloock italic)
- H1 line 2: "complicated" (Gloock regular)
- H1 line 3: "things work." (Gloock, with tangerine underline on "things work.")
- Sub: "Associate Creative Director at Publicis Sapient. Based in Dubai. Working in the gap between business ambition and shipped product."

**Option B (alternate):**
- H1: "I'm Linda." + "and I make complicated things work."
- Sub: "Currently an Associate Creative Director at Publicis Sapient. Working in the gap between business ambition and shipped product while living the sunny life in Dubai."

### Additional sections (not in original homepage template but designed)

These sections appear in the Figma file as design system documentation and inform what goes on the actual homepage:

- **Bento/About grid** — 6 fragments: Currently / The work / How I think / What I believe / Where I operate / The short version
- **Principles** — 4 statements in large Gloock italic on dark navy
- **Experience timeline** — chronological list, 2-column: period left, role right
- **Recognition** — 3-cell grid: NNG cert / UAE Insurance Award / Most Impactful Contributor

---

## CSS Tokens Reference

```css
:root {

  /* ── Colours ── */
  --bg:               #F5ECD8;  /* Warm Ivory — page background only */
  --primary:          #22099F;  /* Navy Electric — nav, links, CTAs, primary UI */
  --accent-tangerine: #FF6E3C;  /* Tangerine — underlines and glyphs ONLY */
  --accent-mark:      #F0B400;  /* Solar Gold — decorative marks, ticker */
  --accent-tag:       #DC3C64;  /* Raspberry — tags, hover states, brand dot */
  --accent-ochre:     #E2AC7E;  /* Ochre Sand — grid lines, dividers */
  --primary-mist:     rgba(34,9,159,0.08); /* card tints, stat band bg */
  --success:          #1A8C33;  /* Do marks, confirm states */

  /* ── Typography ── */
  --display: 'Gloock', Georgia, serif;
  --sans:    'Cabinet Grotesk', 'DM Sans', Helvetica, sans-serif;

  /* ── Type scale ── */
  --text-display-xl: clamp(4rem, 12vw, 10rem); /* Hero headline */
  --text-display-l:  clamp(2rem, 4vw, 3.25rem); /* Section titles */
  --text-heading:    2.25rem;                    /* Component headings */
  --text-body:       1rem;                       /* Body copy */
  --text-label:      0.6875rem;                  /* Tags, meta labels */

  /* ── Spacing (base 8) ── */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  16px;
  --space-4:  24px;
  --space-5:  32px;
  --space-6:  48px;
  --space-7:  64px;
  --space-8:  96px;
  --space-9:  128px;

  /* ── Layout ── */
  --max:  1200px;
  --pad:  clamp(2rem, 6vw, 6rem);

  /* ── Motion ── */
  --duration-fast:  150ms;
  --duration-base:  200ms;
  --duration-slow:  300ms;
  --ease-out:       cubic-bezier(0.0, 0, 0.2, 1);
  --ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
  --translate-lift: translateY(-4px);
  --shadow-lift:    0 8px 24px rgba(34,9,159,0.12);
  --stagger-delay:  80ms;

}
```

---

## Confirmed answers (June 2026)

All gaps from v1.0 are now resolved:

1. **Stat numbers** → Cabinet Grotesk Bold, 30px ✓
2. **Background pattern** → Valentin-style CSS grid lines, `--accent-ochre` at 0.2 opacity, 6 vertical + 4 horizontal divisions ✓
3. **Mobile nav** → Near-black overlay `rgb(18,18,30)`, Cabinet Grotesk 16px, Bold for active item, 3-line hamburger ✓
4. **Typography ramp line heights** → Not extractable from Figma (frame too large). Use standard values: display `line-height: 0.9`, headings `1.1`, body `1.7`, labels `1.4`

---

*Linda Hamed Personal Design System · v2.0 · Extracted from Figma · June 2026*
