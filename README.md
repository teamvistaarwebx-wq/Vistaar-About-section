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
| Team photos (`name.webp` + playful `name-alt.webp` shown on hover) | `public/assets/about/team/` |

To add a missing portrait, drop a 480×528 WebP into `public/assets/about/team/` and set `photo` (and optionally `photoAlt`) for that person in `src/data/about.js`. For the founder section, set `founder.photo`.

## Timeline modes

The timeline is a port of the Framer `ScrollTimeline` code component, rebuilt in plain Astro with no React. Each milestone's panel colour is set by `theme` in `src/data/about.js`.

- **≥768px, motion allowed:** sticky rounded frame. Scrolling wipes each panel off to the left while its big year tips over, and the next panel wipes in. A progress line runs along the top, and the year scrubber is clickable and works with arrow keys and Home/End. The 2026 panel's chips burst in.
- **<768px, `prefers-reduced-motion`, or no JS:** stacked colour cards that reveal on scroll, with no pinning.
