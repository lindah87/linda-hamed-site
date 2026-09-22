# Design QA + refactor: index.html and omantel.html
22 Sep 2026 · lindahamed.com

## 1. Executive summary

The two pages were not two implementations of one design system. They were three generations of CSS stacked on top of each other and won by force. On the homepage the base stylesheet was overridden by a "Golden Hour" layer, then an "enhance" layer, then a "Design System" block that used `html body:not(#_)` specificity hacks and 267 `!important`s. The case study copied the same pattern and added 111 more. Most of the code was either dead or overruled.

The two pages had also drifted apart in behaviour while claiming to share components: different mobile navs, different cursors, different halos, different reveal timings, and different localStorage keys for the ledger. As a result, hiding the ledger on one page did not hide it on the other.

**Result.** Every effect is kept, as you asked. Each one now has a single implementation: one shared stylesheet, one shared script, and page files that hold only their own section layout.

| | Before | After |
|---|---|---|
| Homepage HTML | 192 KB · 4,089 lines · 4 style blocks | 53 KB · 800 lines · 1 style block |
| Case study HTML | 122 KB · 2,278 lines | 44 KB · 749 lines |
| Shared CSS + JS | none | 24 KB (cached across pages) |
| `!important` | 378 | 3 (reduced-motion override + visually-hidden) |
| Distinct font-size values | 52 + 39 | 11 tokens + 14 page-level literals |
| Distinct border-radius values | 18 + 19 | 4 tokens + a few art-directed image radii |
| Hex colours | 4 (plus hex values hardcoded in SVG fills, JS strings and inline styles) | 4, all in `:root`, nowhere else |
| Image weight, homepage card | 3.95 MB JPEG | 132 KB webp (the same photo, already on the case study) |
| Image weight, case study | ~12.8 MB of PNG | ~0.8 MB of webp |
| axe violations (WCAG 2.1 AA + best practice) | homepage 16 nodes / case study 16 nodes | 10 / 15, all one issue (orange contrast, see 7) |

Verification: full-page screenshots at 1440, 1024 and 390 px were diffed against the originals. Visible text was diffed word for word (no copy changed except the items listed in 4). All 21 interaction checks pass (one first failed because the test fired mid smooth-scroll; re-tested with real wheel input, old and new pages behave the same): tabs by keyboard, accordion, chat, tic-tac-toe, nav hide and show, back to top, rail fill, ledger state carried across pages, annotation pop-in, deep links, no JS errors, no horizontal overflow at 360–1024 px.

## 2. Design QA findings

**Consistency: same component, different behaviour**
- Mobile nav: the homepage showed inline links below 760 px, the case study a hamburger. The homepage's overlay menu existed but could never open, because its hamburger was forced hidden. → Unified to inline links (no extra tap, no scroll lock); the overlay is gone from both pages.
- Nav pills: "Built with AI" was 38 px tall and "Let's talk" 36 px, side by side. → Both 38 px.
- Cursor: the homepage drew a 10 px orange multiply dot with a hover ring on top of the system cursor. The case study drew the 7 px navy dot from your spec and hid the system cursor. → Spec dot on both; the system cursor stays visible, because hiding it removes the link-hand affordance.
- Halo: different size, strength, easing and start point on each page. → The homepage version on both.
- Reveal: 0.6 s / 14 px on one page, 0.8 s / 22 px on the other, with different stagger logic. → One: 0.7 s / 16 px, sibling stagger 70 ms.
- Ledger: the pages used different localStorage keys (`gh-ledger` vs `lh-ledger`), so hiding it on one didn't carry over. → One key, `lh-ledger`.
- Mobile footer bar: centred on the homepage, left-aligned on the case study. → Left-aligned (matches the page grid).
- Page gutter below 760 px: 24 px on the homepage, 18 px on the case study. → 24 px, per your CLAUDE.md spec.

**Hierarchy and type**
- Rank collisions: statements of the same rank were 40 px (provocation, closer) and 52 px (showcase head); card headings were 29 / 26 / 23 / 22 / 20 px. → Statements share `--fs-d3` (42 px max); card headings are 26 or 22 px.
- Stat figures ran at three sizes (34, 44, 52 px). → One `--fs-fig`.
- Letter-spacing on uppercase labels took 7 values (.1–.2em). → `.14em`, with a documented exception (the showcase caption at .2em).

**Visual noise, fixed without removing any effect**
- The first layer of every navy "wash" gradient was navy on navy, so it painted nothing. Removed.
- The case-study hero kicker used `font-weight:300`, which isn't shipped, so the browser silently substituted 400.
- The "↑" in the impact band was a system-font glyph, against your own rule. Now an SVG icon.

**Bugs found in passing**
- The case study's meta labels were meant to be orange. Two `!important` rules collided and the grey one won, rendering them at 2.89:1. They are now orange.
- The homepage's back-to-top button overlapped the ledger by 6 px. It now sits above it on both pages.
- `scrollRestoration = manual` plus a forced `scrollTo(0,0)` broke every deep link into the homepage. "Work" and "About" from the case study landed at the top instead of the section. Fixed: the page only resets when there is no `#hash`.
- The intro curtain waited for `window.load`, meaning every image including the 3.9 MB card JPEG, before showing any hero text. It now waits for fonts (capped at 1.2 s). The curtain is skipped under reduced motion.
- Assistant messages had their spacing set to 0 by an override, so replies touched. Restored to 16 px.
- The case study nav overlay referenced `--ink-35` and `--text-xs`, which aren't defined on that page.

## 3. Front-end architecture findings

- **Cascade by force.** Four `<style>` blocks on the homepage, each overriding the previous one. The final "Design System" block used `html body:not(#_)` to beat everything, then added `!important` anyway.
- **Dead code.** Roughly 7% of rules on each page matched no element at all: squiggle underlines, hamburger states, `.chip`, `.btn`, `.footer-logo`, `.gh-arw`, `.system`, `.toggle`, `.phone-vid`, `.split`, `.failures`, `.outcomes-grid`. Far more CSS matched but always lost the cascade. The homepage base stylesheet (~1,500 lines) was mostly overruled. 420 lines of hand-drawn SVG thumbnails were shipped with `display:none; width:0`. The empty `<footer>` was hidden. The `#ghStatband` script targeted an element that doesn't exist. The arrow-wrapping script searched for glyphs the page no longer contains. The video reduced-motion guard targeted a video that isn't there.
- **Duplication.** The same nav, back-to-top, progress bar, ledger, cursor, halo and reveal were implemented twice, differently. The `.findings` and `.finding` rules were declared twice in the same stylesheet. The case study had 16 breakpoints plus a "mobile layer" that existed to out-rank them.
- **JS.** Five separate scroll listeners are now one, batched to a frame. Four `requestAnimationFrame` loops are now at most two (halo, ledger). The height-matching script for the case cards is replaced by CSS grid (`grid-auto-rows: 1fr`). Calendly's CSS and JS were render-blocking in `<head>` for one link inside a hidden tab; they now load on first click, and the link opens Calendly directly if the script fails.
- **Magic numbers.** The optical alignment offsets (31.44 px, 39.38 px, 26.78 px) are kept, but they are now named, rounded `--align` values on each rail. The rule from your CLAUDE.md is stated in the code.

## 4. Redundancies removed

Squiggle nav underline (never shown). Hamburger + overlay (unreachable on the homepage). Page-load `.word` reveal (dead: the words were `display:inline`). Three hidden SVG placeholder thumbnails. Hidden empty footer. `.built-footer-sep` (hidden). Duplicate top/bottom section rules drawn twice where two sections meet. `.gh-arw` wrapper script. Statband script. Findings image-fallback script (all images exist). Video guard. Height-matching script. Duplicate `.findings`/`.finding` blocks. `.phone-notch` markup (hidden). Inline `onclick` for Calendly. 22 inline `style=""` attributes cut to 10 (the ones left are data: per-element delay and annotation anchor percentages).

Copy changes, all factual:
- The ledger said navy on cream was 12.8:1 and cream on navy 11.4:1. Measured value: 16.7:1. Corrected.
- "↑" → SVG.
- The number arrows ("9 → 5") are now announced as "9 to 5" by screen readers.

## 5. Colours removed or consolidated

No colour was introduced. The palette stays cream / navy / orange / coral.

- **Hardcoded hexes** in SVG fills, JS strings (`rgba(205,83,59,0.8)` in chat links), inline styles and `#FAF9F6` literals (about 60 occurrences) → replaced by tokens or `currentColor`.
- **Text alphas.** Navy text on cream used 8 alpha levels (.35–.78) and cream text on navy used 14 (.45–.95). → Three text tokens per ground: `--fg`, `--fg-2` (.78 on cream / .80 on navy) and `--fg-3` (.62 on either). Every one passes 4.5:1. Three values used before did not: cream .45 on navy was 4.25:1, cream .34 placeholders were under 3:1, and navy .45 was 2.9:1.
- **Rule and border alphas.** 11 distinct values → `--line` (.12 / .16) and `--line-2` (.25 / .35).
- **Coral on cream.** The back-to-top button broke your own rule (coral fill on cream, arrow at 2.36:1). → Orange, 4.07:1 on both grounds.
- **Decorative alphas kept as literals**, because they are art direction rather than system values: the warm washes, the "complicated" highlight, the tic-tac-toe board gradient, the chat user bubble and the portrait shadow.

## 6. Refactored code (in your folder)

- `assets/site.css`: tokens, base, `.on-dark` / `.on-light` grounds, buttons, links, nav, footer bar, tags, icons, ledger, back to top, halo, grain, cursor, progress, reveal.
- `assets/site.js`: one scroll loop (nav, back to top, progress, dark-band detection), cursor + halo, reveal, ledger.
- `index.html`, `work/.../omantel.html`: markup and section layout only.
- New images: `img/annot-bills.webp` (was the 7.1 MB `Iphone.png`), `img/suspension-card.webp`, `img/suspension-alert.webp`. The case study now uses the existing `work-*.webp`, which I checked are pixel-equivalent to the newer PNGs (mean difference about 1/255).
- Backups: `archive/index.pre-dqa-20260922-1538.html`, `work/.../archive/omantel.pre-dqa-20260922-1538.html`, `archive/CLAUDE.pre-dqa-20260922-1538.md`.
- CLAUDE.md updated with the architecture, token names, the deploy step and the no-preload rule.

## 7. Final recommendations, in priority order

1. **Decide on orange text.** This is the only remaining WCAG failure. #CD533B on cream measures 4.07:1; AA needs 4.5:1 below 24 px (or 18.7 px bold). It affects the tags, eyebrows, meta labels, section numbers, the orange highlights in the hero sentence and feature copy, the career job titles and dates, and the segment chips. The palette is fixed, so there are only three honest options: (a) keep orange for fills, rules and large display type only, and set small text in navy; (b) accept the failure knowingly; (c) add one darker text shade of orange, which breaks the four-colour rule. I recommend (a). A Director-level portfolio that fails its own accessibility claim in the ledger is a credibility risk, not a styling detail.
2. **Fix the claims.** The assistant says "Linda reads every conversation here", but nothing is sent anywhere; the answers are pre-written. A recruiter who tests it and then emails you will notice. The ledger also names a "StatBand" component that doesn't exist and claims "CLS 0" without anything having measured it. I didn't change your copy beyond the two contrast numbers I could measure. These need your words.
3. **Pick one LinkedIn URL.** The homepage footer links to `/in/linda-hamed-42785713`; the career section and the case study link to `/in/lindahamed/`. I can't verify which is live. I left both as they were.
4. **Ship `assets/`.** It must go into every `_DEPLOY-*` folder, or both pages render unstyled.
5. **Next, if you want truly single-source markup:** a small build step (11ty, or Netlify includes) would make the nav, footer and ledger one file instead of identical copies. Without a build step, the copy-exactly convention in CLAUDE.md is the ceiling.
6. **Also refactor `coming-soon.html`.** It still carries its own copy of the old system and is the third page a visitor can reach.
