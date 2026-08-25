# Blue Angel Clinical Partners — Website

Marketing site for Blue Angel Clinical Partners, redesigned with a warm, editorial
aesthetic (inspired by yuna.io) adapted to the Blue Angel brand.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** (design tokens in `tailwind.config.ts`)
- **React Router** for pages
- **Framer Motion** for subtle scroll animations
- **Lucide** icons
- Fonts: **Fraunces** (serif display) + **Inter** (body), loaded from Google Fonts

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

## Design system

All brand tokens live in `tailwind.config.ts`:

| Token              | Value     | Use                                  |
| ------------------ | --------- | ------------------------------------ |
| `cream`            | `#F6F1E9` | Page background                      |
| `sand`             | `#EFE7DA` | Alternating sections                 |
| `navy` (DEFAULT)   | `#0E2A47` | Primary brand color, dark sections   |
| `azure` (DEFAULT)  | `#3E7CB1` | Accent (links, highlights, buttons)  |
| `gold`             | `#C9A24B` | Secondary accent, used sparingly     |

Reusable UI classes (`.btn-primary`, `.btn-outline`, `.card`, `.eyebrow`,
`.display`, `.lede`, `.container-x`) are defined in `src/index.css`.

## Pages

`/` Home · `/about` · `/benefits` · `/succession` · `/joining` · `/partners` ·
`/blog` · `/contact`

Page content lives directly in each file under `src/pages/`. Shared site config
(nav, email, tagline) is in `src/content/site.ts`.

## Deployment

Configured for **Netlify** (`netlify.toml` + `public/_redirects` handle SPA
routing). Connect the GitHub repo to Netlify and it will build with
`npm run build` and publish `/dist`. Works equally well on Vercel or Cloudflare
Pages — the SPA redirect is the only host-specific piece.

## Notes / TODO

- Image placeholders (navy gradient blocks) are used for the founder photo,
  partner headshots, and blog thumbnails. Drop real images into `src/assets/`
  and swap the placeholder `<div>`s for `<img>` tags.
- The founder LinkedIn URL in `src/pages/About.tsx` is a placeholder.
- Blog "Read full story" links are not yet wired to article pages.
