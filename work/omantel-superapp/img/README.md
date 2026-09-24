# Act 2 image assets — export list

The build environment could not reach `figma.com` (egress proxy blocked the
host), so these files still need exporting by hand. The page references them by
the exact filenames below; drop them in here and the page is complete.

Source file: `Linda-s-Portfolio-2025`, key `JIm4itgxkVTKXoqhvcibjr`,
frame `4466:76299` (Hero Section).

| Filename | Figma node | What it is |
|---|---|---|
| `hero-cover.jpg` | `4466:76778` | Full-bleed hero cover. Export ~2880px wide, JPEG. |
| `work-01-bill-overview.png` | `4466:76404` | Phone 1 — unified bill overview |
| `work-02-bill-details.png` | `4466:76525` | Phone 2 — bill detail |
| `work-03-payment-success.png` | `4466:76529` | Phone 3 — success state |
| `need-01-know-what-i-owe.png` | `4466:76721` | Fintech bill illustration |
| `need-02-stay-in-control.png` | `4466:76724` | Payment toggle illustration |
| `need-03-move-on-with-life.png` | `4466:76722` | Payment confirmation illustration |
| `need-04-avoid-surprises.png` | `4466:76723` | Trust & transparency illustration |
| `showcase-unified-bills.png` | `4466:76404` | Tall phone screen for the annotated showcase |
| `feature-01-card-back.png` | `4466:76733` | Message card (back of stack) |
| `feature-01-card-front.png` | `4466:76732` | Message card (front of stack) |
| `feature-01-check.png` | `4466:76734` | Small overlapping card |
| `feature-02-bill-details.png` | `4466:76737` | Bill details card |
| `feature-02-status-badge.png` | `4466:76738` | Inline status badge |
| `feature-03-ecosystem.png` | `4466:76742` | Future-services ecosystem graphic |
| `feature-03-service-card.png` | `4466:76736` | Single service category card |

Figma node `4466:76409` (the account / phone-number selection screen) is
deliberately not used. Act 1's `.work-phones` is a three-up grid; a fourth
screen squeezed each one to 181px at 1440px and 139px at 1024px, too small to
read. Three screens carry the same story at Act 1's scale, and the page needs
no extra CSS as a result.

## After the exports land

Three things are tuned to Act 1's artwork and need re-checking:

1. **Showcase marker positions.** `.annot-marker` / `.annot-note` use `top:28.6%`,
   `44.0%`, `78.0%`, measured off Act 1's screenshot. Re-measure against
   `showcase-unified-bills.png` so each marker sits on the row it describes.
2. **`.ap-wrap` offsets** (feature 2) and **`.sp-stack` offsets** (feature 3) are
   percentage offsets calibrated to the shadow padding baked into Act 1's PNGs.
   If the Act 2 exports have different padding, the overlap will drift.
3. **`.finding-img` uses `object-fit:cover`** on a navy plate, which suits Act 1's
   photography. The four `need-*` files are spot illustrations — if they crop
   badly, switch that one rule to `contain` for this page.

## Intrinsic sizes

The `width`/`height` attributes in the HTML are placeholders carried over from
Act 1 and exist only to reserve layout space (they prevent layout shift; CSS
controls the rendered size). Update them to each export's real pixel dimensions
so the reserved aspect ratio is correct.
