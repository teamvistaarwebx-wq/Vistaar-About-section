# Vistaar WebX: About page

Astro static site containing the `/about` page.

```bash
npm install
npm run dev      # http://localhost:4321/about
npm run build    # static output in dist/
```

## Where things live

| What | File |
| --- | --- |
| All About copy (from the 2026 company profile) | `src/data/about.js` |
| Nav, footer links, company contact details | `src/data/site.js` |
| Design tokens (from Figma) | `src/styles/tokens.css` |
| Page | `src/pages/about.astro` |
| Sections | `src/components/about/*.astro` |
| Scroll reveal + count-up | `src/scripts/reveal.js` |
| Team photos (`name.webp` + playful `name-alt.webp` shown on hover; shown black-and-white) | `public/assets/about/team/` |

To add a missing portrait, drop a 480×528 WebP into `public/assets/about/team/` and set `photo` (and optionally `photoAlt`) for that person in `src/data/about.js`. The founder portrait is `public/assets/about/sanskaar-singh.webp` (a transparent cut-out).

## Timeline modes

The timeline is a port of the Framer `ScrollTimeline` code component, rebuilt in plain Astro with no React. Each milestone's panel colour is set by `theme` in `src/data/about.js`.

- **≥768px, motion allowed:** sticky rounded frame. Scrolling wipes each panel off to the left while its big year tips over, and the next panel wipes in. A progress line runs along the top, and the year scrubber is clickable and works with arrow keys and Home/End. The 2026 panel's chips burst in.
- **<768px, `prefers-reduced-motion`, or no JS:** stacked colour cards that reveal on scroll, with no pinning.

## Team showcase

Modelled on the Firma template's team section. Portraits are shown in black and white and blended into the white page, with names beside them.

- **≥768px, motion allowed:** the section pins and vertical scroll moves the row of people sideways, with a progress line bottom-left.
- **<768px, reduced motion, or no JS:** the intro sits above a swipeable strip, with one person per snap on phones.

It looks best with high-resolution cut-out portraits (transparent PNG/WebP, about 1200px tall). Until those exist, the current photos are filtered and edge-faded so the studio backdrop disappears.

## Eight principles

This section is a port of the Framer `ImpactRow` code component, rebuilt in plain Astro with no React.

- **≥1200px:** two rows of four. Hovering or tabbing to a card widens it to reveal a red panel built from the principle's own title (for example "Problems / before / services"), while its neighbours narrow. Leaving the row returns to the first card.
- **<1200px:** an accordion with one card open per row. Tap or focus a card to open its panel.

## Six disciplines (Who we are)

Left: the eyebrow, title, intro paragraph and a "Start a project" button. Right: a large hairline list ("1  Brand"). Hovering a row with the mouse, tabbing to it or tapping it on a phone opens it: a soft panel fades in behind the row, the name darkens and nudges right, the number turns red, and its capabilities unfold as red-dot tags. Moving the mouse off the list closes it. Each row is a disclosure button (`aria-expanded`), and the arrow keys and Escape work.

## Founder & origin

A cut-out black-and-white portrait whose bottom edge dissolves into the page through a progressive blur (three bands of increasing `backdrop-filter` blur, then a fade). Next to it are the name with a red full stop, the role, the story and the red quote. A slow marquee of the markets Vistaar serves runs underneath.

- **≥1024px, motion allowed:** the section pins briefly. The portrait comes into focus (blurred and zoomed, then sharp), the name rises word by word, the story's words darken in sequence as you scroll, the quote line draws down while the quote turns red word by word, and the label lands last.
- **Phones and tablets:** no pinning. Each block plays as it scrolls through the viewport.
- **Reduced motion or no JS:** everything is shown at rest, and the marquee becomes a wrapped list.

## How we work

A centred heading ("We begin with **the problem**, not a service.") and subheading, then a ring diagram of the six steps. Each step has an icon in a circular node, the track has direction arrows, a red dashed loop runs from Improve back to Research, and "What we learn feeds the next decision." sits in the centre.

- **Motion allowed (all widths):** the diagram pins. A red line draws around the ring, and each node fills red as the line reaches it. Once Improve fills, the dashed loop flows back to Research and the centre lights up. A caption names the current step.
- **Phones:** the step names don't fit around the ring, so only the numbers sit there and the caption names each step.
- **Reduced motion or no JS:** the finished diagram is shown at rest.

## Case studies

This section sits after How we work. It's a swipeable row of cards: two show on desktop and one on phones, with prev/next buttons and an "n / 3" counter. Each card has the logo and sector, the challenge, what we did, tags, a small chart and a black result bar. Content is in `caseStudies` in `src/data/about.js`.

- The charts show only the reported numbers.
  - A `growth` chart is a before/after line with a shaded area (₹15L to ₹30L). The line draws itself, the area fades in, both points pop, a "+100%" badge lands on the line, and the end point pulses.
  - A `roas` chart shows "You spend ₹1" as one black block and "You get back" as one red block per ₹1 returned, popping in one after another. A `[min, max]` range adds lighter blocks for the upper end (Jam2gather gets 10 solid and 4 light blocks; HART gets 3).
- The animations and the result count-up play each time a card scrolls back into view. With reduced motion, the finished chart is shown at rest. Every mark has a direct label and a hover/focus tooltip, and each chart has a hidden data table for screen readers.
- The client logos in `public/assets/about/clients/` are interim crops from a screenshot, so replace them with the official SVG or PNG files.
