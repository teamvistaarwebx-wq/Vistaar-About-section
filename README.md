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

- **≥1024px, motion allowed:** pinned scroll track. The rail fills, milestones activate in turn, the giant numerals swap, and the 2026 chips burst in. The year scrubber is clickable and works with arrow keys and Home/End.
- **<1024px, `prefers-reduced-motion`, or no JS:** a stacked list with a left rail and no pinning.
