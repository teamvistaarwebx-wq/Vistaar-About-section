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

To add a missing portrait, drop a 480×528 WebP into `public/assets/about/team/` and set `photo` (and optionally `photoAlt`) for that person in `src/data/about.js`. For the founder section, set `founder.photo`.

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

Minimal layout. A visual on the left with the intro paragraph under it, and a hairline list on the right ("01  Brand  +"). Clicking a row, or using Enter/Space and the arrow keys, opens it: its number turns red, + becomes −, its capabilities appear as red-dot uppercase tags, and the visual crossfades to that discipline.

To use photos, set `image` for each discipline in `src/data/about.js` (for example `'/assets/about/disciplines/01-brand.webp'`, square, at least 900px). Without an image, a light placeholder panel with the name is shown.
