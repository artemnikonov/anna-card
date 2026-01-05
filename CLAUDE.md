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

- **Astro 5** - Static site generator with file-based routing
- **React 18** - Interactive components loaded with `client:idle`
- **TypeScript** - Strict mode enabled
- **Tailwind CSS 3** - Styling with custom color palette
- **Zustand** - Language state management with localStorage persistence
- **Framer Motion** - Animations

## Architecture

### Routing Pattern
Astro pages in `/src/pages/` render React page components. Each page exists twice:
- English: `/src/pages/{page}.astro` → `/{page}`
- Russian: `/src/pages/ru/{page}.astro` → `/ru/{page}`

The Astro files are thin wrappers that render corresponding React components from `/src/components/pages/`.

### i18n Implementation
Custom implementation without external library:
- `src/lib/translations.ts` - All bilingual content as TypeScript objects
- `src/lib/i18n.ts` - Utilities: `getTranslations()`, `getLocaleFromUrl()`
- `src/hooks/useTranslation.ts` - React hook returning `{ language, t, setLanguage }`
- Language detected from URL path on page load via Astro's `astro:page-load` event

### Component Organization
- `/src/components/pages/` - Full page React components (HomePage, AboutPage, etc.)
- `/src/components/layout/` - Header, Footer
- `/src/components/ui/` - Shadcn/UI-style components using CVA for variants
- `/src/layouts/MainLayout.astro` - Wraps all pages with Head, Header, Footer

### Styling
- Use `cn()` from `@/lib/utils` for conditional class merging
- Custom colors defined in `tailwind.config.mjs`: primary (#5F9EA0), secondary (#808000)
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
- `Dockerfile` - Multi-stage: Node 20 build → Nginx Alpine
- SSL handled by Traefik automatically

## Import Alias

Use `@/` for imports from `/src/`:
```typescript
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
```
