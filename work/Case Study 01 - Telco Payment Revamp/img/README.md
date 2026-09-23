# Findings images · generation brief

The findings section of `work/omantel.html` expects exactly three files here.
Until they exist the page shows a navy brand plate with the chips on it, which
looks deliberate · so nothing is broken while you generate them.

| Filename (exact) | Finding |
|---|---|
| `findings-01-trust-deficit.webp` | Trust deficit at the point of payment |
| `findings-02-mental-model.webp` | The mental model did not match the IA |
| `findings-03-segment-anxiety.webp` | Segment anxiety was driving escalation |

## Specs

- **Aspect ratio 16:10.** The CSS sets `aspect-ratio:16/10` and `object-fit:cover`,
  so anything off-ratio gets centre-cropped rather than distorted.
- **1280 × 800 px minimum.** Columns render at ~405px wide, so this covers 3× DPR
  and any future wider layout.
- **Export `.webp`, quality 75–82.** Aim under 120 KB each. Your homepage went
  14.6 MB → 0.49 MB on WebP; hold that standard here.
- Generate at 16:10 directly if the tool allows it. If it only does 1:1 or 4:3,
  generate larger and crop to 16:10 with the subject's face in the upper-left
  two thirds · the chips sit over the bottom-left corner and will cover anything
  important there.

## The thing that makes the reference work

In the Noura reference the three images read as one set: same subject, same
lighting, same lens, same grade. That consistency is doing more work than any
individual frame. Generate all three in one session with the same base prompt
and only swap the scenario clause, then grade them identically.

## Base prompt

> Editorial documentary photograph, single Omani subject in Muscat, natural
> window light, shallow depth of field at f/2, 50mm lens, muted desaturated
> palette of warm sand, deep indigo and soft terracotta, subject looking down at
> a device rather than at the camera, candid and unposed, calm and serious in
> mood, plain uncluttered background, no text visible on any screen, no logos,
> no brand marks, photorealistic, 16:10.

Then append one scenario:

**01 - trust deficit** · *customer reviewing a payment before confirming*
> A woman in her early thirties wearing a black abaya and patterned shayla,
> seated in a cafe, holding her phone in both hands and pausing mid-action to
> read what is on screen before committing, brow slightly furrowed.

**02 - mental model** · *customer managing family mobile lines*
> A man in his forties wearing a white dishdasha and embroidered kummah, at a
> kitchen table, two mobile phones and a folded paper bill in front of him,
> glancing between them, mildly exasperated.

**03 - segment anxiety** · *premium customer considering calling support*
> A distinguished Omani businessman in his fifties in a crisp white dishdasha
> and grey massar, at a desk in a modern office, phone in hand held at chest
> height, weighing up whether to make the call, expression tense. A tablet is
> pushed aside face-down.

## Negative prompt

> text, watermark, logo, brand name, telecom branding, readable UI, user
> interface screenshot, stock-photo smile, looking at camera, thumbs up,
> handshake, boardroom cliché, oversaturated, HDR, plastic skin, extra fingers,
> distorted hands, blurry

## Two things to hold the line on

1. **Do not let the generator put a telecom UI or an Omantel logo on any
   screen.** A fabricated brand asset in a portfolio case study is a real
   problem, not a cosmetic one · screens must be dark, off, glare-obscured, or
   out of frame.
2. **Check the regional dress reads as Omani, not generically Gulf.** Image
   models routinely default to Emirati or Saudi styling. The kummah and massar
   are the tells; a ghutra with an agal is the wrong country.

## After you drop them in

No code change needed · the filenames are already wired up. Alt text is written
into the markup describing each scene; if you change a subject materially, update
the `alt` attribute on that `<img>` to match what the photograph actually shows.
