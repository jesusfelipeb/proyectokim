# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Next.js + Turbopack) on localhost:3000
npm run build        # Production build (Turbopack)
npm run start        # Serve production build
npm run lint         # ESLint (next/core-web-vitals)
```

No test framework is configured.

## Architecture

Next.js 16 App Router site (Spanish, `lang="es"`). All pages are client-rendered React 19 components — no API routes, no server components with data fetching yet.

**Routing:** `app/` directory with pages at `/`, `/about`, `/contacto`, `/services`, `/tienda`. Each page composes components from `components/`.

**Styling:** Tailwind CSS v4 via `@tailwindcss/postcss`. Custom design tokens in `tailwind.config.js`:
- Colors: `obsidian`, `gold-heritage`, `linen`, `slate-soft`
- Fonts: `font-serif` (Cormorant Garamond via CSS variable `--font-cormorant`), `font-sans` (Inter via `--font-inter`)

Both fonts are loaded through `next/font/google` in `app/layout.js` and exposed as CSS variables on `<html>`.

**Path aliases:** `@/*` maps to project root (jsconfig.json).

**Key integrations:**
- `react-calendly` — booking widget in `Booking.jsx`
- `framer-motion` — animations
- `WhatsAppFloating` — global floating button, rendered in root layout
- `lib/tiendanube.js` — product data layer (currently mock data, pending real Tiendanube API credentials via `TIENDANUBE_STORE_ID` and `TIENDANUBE_ACCESS_TOKEN` env vars)

**Homepage composition order:** Header > Hero > Services > About > Booking > Shop > Accreditations > Footer.
