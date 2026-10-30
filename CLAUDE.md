# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for Anna Zakernichnaia, a posture and movement coaching specialist. Bilingual (English/Russian) static site deployed at https://annabody.studio.

## Commands

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Type check + build static site to /dist
npm run preview  # Preview production build locally
```

## Tech Stack

- **Astro 7** (Node 22.23+) - Static site generator with file-based routing
- **No UI framework** - plain `.astro` components; the few interactive bits (mobile menu `<dialog>`, testimonial "Read more", scroll reveal) are small scripts re-run on `astro:page-load`; page changes go through Astro `ClientRouter` (instant swap, no cross-fade)
- **Icons** - `@lucide/astro`
- **TypeScript** - Strict mode enabled
- **Tailwind CSS 4** - via `@tailwindcss/vite`; theme (colors, fonts, sizes) lives in `@theme` in `src/styles/global.css`
- **Animations** - `AnimatedSection.astro` + CSS in `global.css` (no animation library)

## Architecture

### Routing Pattern
Astro pages in `/src/pages/` render content components. Each page exists twice:
- English: `/src/pages/{page}.astro` → `/{page}`
- Russian: `/src/pages/ru/{page}.astro` → `/ru/{page}`

The page files are thin wrappers (SEO title/description) around `/src/components/content/*Content.astro`.

### i18n Implementation
Custom implementation without external library:
- `src/lib/translations.ts` - All bilingual content as TypeScript objects
- `src/lib/i18n.ts` - Utilities: `getTranslations()`, `getLocaleFromUrl()`
- Locale comes from the URL (`getLocaleFromUrl(Astro.url)`); Header/Footer get it as a `locale` prop
- `src/lib/contacts.ts` - All contact details (phone, email, messengers)

### Component Organization
- `/src/components/content/` - Page content (HomeContent, AboutContent, etc.)
- `/src/components/` - Shared sections: `PageHero.astro`, `CtaSection.astro`
- `/src/components/layout/` - Header, Footer
- `/src/components/ui/` - `AnimatedSection.astro`, `ExpandableCard.astro`, `buttonVariants` (CVA) for button-styled links
- `/src/layouts/MainLayout.astro` - Wraps all pages with Head, Header, Footer

### Styling
- Use `cn()` from `@/lib/utils` for conditional class merging
- Custom colors defined in `@theme` in `src/styles/global.css`: primary (#437B7D), secondary (#808000)
- Font: Montserrat (400, 700 weights)

### Data
- `src/data/programs.json` - Service program data with bilingual content

## Deployment

Server: `91.98.68.252` (SSH: `anikonov@91.98.68.252`)

Architecture:
```
/home/anikonov/
├── gateway/     # Traefik (ports 80/443, auto SSL via Let's Encrypt)
├── umami/       # Analytics (port 3001) - separate project
└── anna-card/   # This site (via Traefik)
```

Deploy: `./deploy.sh` - builds locally, uploads, restarts container

Docker setup:
- `docker-compose.yml` - Nginx container with Traefik labels
- `Dockerfile` - Multi-stage: Node 22 build → Nginx Alpine
- SSL handled by Traefik automatically

## Import Alias

Use `@/` for imports from `/src/`:
```typescript
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
```

## Important Rules

1. **No auto-deploy/commit** - Never run `./deploy.sh` or `git commit` unless explicitly asked
2. **No medical terminology** - Avoid words like: therapy, therapeutic, treatment, лечение, терапия, терапевтический. Use: coaching, training, massage, работа с телом, массаж. Exception: the testimonials disclaimer (`src/data/testimonials.json`) must say outright that the services are not medical and do not diagnose or treat; keep that wording
