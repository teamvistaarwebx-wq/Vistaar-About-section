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

## Page opener

The hero banner has been removed. The page now opens with **Vistaar in numbers** ("Six years of practice, in four numbers."), and that title is the page's h1. `NumbersStrip` takes a `lead` prop for this.

## Who we work with

- **For a … it may mean …:** the five kinds of organisation are tabs with Iconsax icons, next to a solid brand-red panel. The panel shows what working with Vistaar may mean for the selected tab, with an "01 / 05" counter. While the block is on screen the tabs advance every 5 seconds, and a red progress line runs under the active tab. Hovering or focusing the block pauses it. Arrow keys, Home and End move between tabs. On phones the tabs become a swipeable row of small cards above the panel. Without JS, all five answers are listed.
- **Sectors:** three cards (Consumer & Commerce, Industry & Services, Development & Public), each with a group icon and a grid of sector tiles with their own icons. Cards and tiles fade up in turn. Hovering a card lifts it, and hovering a tile turns its icon chip red.
- With reduced motion there is no auto-advance and no entrance motion.

## Icons

Icons are [Iconsax](https://iconsax.io) (MIT licence). They are stored as plain SVG markup in `src/data/icons.js`, extracted from the `iconsax-react` package, so the page ships no icon library and React isn't needed. Use them with `<Icon name="bulk:Coffee" />` (`src/components/Icon.astro`). To add an icon, copy its markup from the Iconsax package's `dist/esm/<Name>.js` for the variant you want into `icons.js`.

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

## Vision & mission

A red Vision card overlaps a white, softly shadowed Mission card. The mission's nine questions sit in a two-column list with hairlines and Title Case labels.

- **≥1200px:** the cards share one row, and the red card overlaps the left edge of the mission card. As you scroll, the red card drifts a few pixels.
- **Below 1200px:** the red card sits on top, and the mission card tucks underneath it. The list is two columns from 768px and one column on phones.
- **Motion (slight):** on entry, the mission card eases in from the right, the vision card rises over it, the hairlines draw and the questions fade up in turn. Hovering a question turns its hairline red. With reduced motion or no JS, everything is shown at rest.

## Case studies

This section sits after How we work and follows the printed case-study spreads. It shows one spread per slide (with the next one peeking on phones), prev/next buttons and an "n / 4" counter. Content is in `caseStudies` in `src/data/about.js`; the order is Atulya Karigari, Mommy's Chicken, Jam2gather, HART Cosmetics.

- **Left:** logo and sector, a headline (for example "Built in month one. Scaled in month two."), then the challenge, what we did and the result, joined by red arrows, and the service tags.
- **Right:** a minimal bar chart in a bordered panel, with a caption, an axis title, labelled gridlines, a grey "before" bar and a red "after" bar, each with its value on top. Next to it is the headline figure (6.67×, 10–14×, up to 3×). Mommy's Chicken instead shows "Month 01 / Build" leading to a black "Month 02 / Growth" card (₹33L / month, 2.2× baseline, +120%). A source note sits underneath.
- ROAS charts compare ₹1 of spend with what came back. A range (Jam2gather's 10–14) shows as a solid bar plus a lighter band.
- When a spread comes into view, the gridlines draw, the bars rise one after another, the values land and the headline figure counts up. This replays each time. With reduced motion, the finished chart is shown at rest.
- Charts use only the reported numbers. Every bar has a hover/focus tooltip, and each chart has a hidden data table for screen readers.
- The client logos in `public/assets/about/clients/` are interim crops from a screenshot, so replace them with the official SVG or PNG files. Atulya Karigari and HART use a text wordmark until logos arrive (add `logo: { src, width, height }`).
