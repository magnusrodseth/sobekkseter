# CLAUDE.md

## Overview

"Været på Søbekkseter" is a real-time weather dashboard for Søbekkseter, a cabin area in Hedalen, Valdres, Norway. It displays live weather conditions, webcam imagery, and links to yr.no forecasts and local trail grooming info (Hedalen Løypelag).

All user-facing text is in Norwegian. Ensure correct use of **æ, ø, å**.

## Tech Stack

- **Framework**: Next.js 15 (App Router, React 19, Turbopack)
- **Styling**: Tailwind CSS 3 + shadcn/ui (slate base)
- **Data**: WeatherLink API (Davis weather station) for conditions, Firebase Storage for webcam image
- **Analytics**: Vercel Analytics + PostHog (proxied via rewrites)
- **Package manager**: pnpm

## Key Commands

```bash
pnpm dev          # Dev server with Turbopack (assume always running)
pnpm build        # Production build
pnpm lint         # ESLint
```

## Architecture

### Data Flow

1. `src/app/page.tsx` (server component) fetches weather data from the WeatherLink API and webcam image URL from Firebase Storage
2. Data is passed to `Grid`, which renders weather widgets and stats
3. No client-side data fetching; the page is server-rendered with `cache: "no-cache"`

### Environment Variables

Required (see `src/types/env.d.ts`):

| Variable | Purpose |
|----------|---------|
| `TOKEN_ID` | WeatherLink API token |
| `OWNER_PASSWORD` | WeatherLink API password |
| `DEVICE_ID` | WeatherLink device/user ID |
| `FIREBASE_API_KEY` | Firebase auth |
| `FIREBASE_PROJECT_ID` | Firebase project |
| `FIREBASE_STORAGE_BUCKET` | Firebase Storage bucket |

PostHog keys are also used but not typed in `env.d.ts`.

### File Structure

```
src/
  app/              # Next.js App Router (layout, page, error, loading, not-found)
  components/
    ui/             # shadcn/ui primitives (button, card, dialog, sheet, skeleton, etc.)
    widgets/        # Weather display widgets (temperature, rain, wind, sun, webcam)
    stats/          # Daily/monthly/yearly stat summaries
    icons/          # Custom SVG icons
  constants/        # API URL, unit labels
  lib/              # Firebase init, navigation links, PostHog, utils
  styles/           # globals.css (Tailwind directives, link animations)
  types/            # TypeScript type declarations (conditions, env)
  utils/            # Unit conversion helpers (F->C, in->mm, mph->m/s)
```

### Design Patterns

- Server Components by default; `"use client"` only on `Navbar`, `PostHogProvider`, and `WebcamDisplay`
- `Wrapper` component provides consistent card styling with hover animations
- `WidgetGroup` groups related widgets under a labeled card
- Unit conversions happen in `src/utils/` (the weather station reports imperial units)
- Color coding: amber for positive temperatures, fjord blue for negative/rain values

### Branding

- **Font**: Geist Sans (via `geist/font/sans`), Geist Mono for monospace
- **Color palette**: Nordic mountain theme with CSS custom properties for light/dark mode
  - `fjord` blue (#3B6B8A at 500): primary accent, links, cold/rain indicators
  - `pine` green (#2D5F4A at 500): secondary accent
  - `amber` (#D4A053 at 500): warm highlights, positive temperature indicators, sun icon
- **Dark mode**: supported via `class` strategy, toggled by `ThemeToggle` component
- **Link animation**: gradient underline from `fjord-500` to `pine-500`
- **Logo**: sun-behind-cloud icon (`public/img/logo.png`)
