# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

No test suite configured.

## Architecture

Next.js 14 App Router — the GiveRise.ai coordination platform connecting Indigenous land stewardship projects with conservation funders and land trusts.

### Routes

- `/` — Homepage (client component — animated hero, stats counters, audience tabs, waitlist CTA)
- `/how-it-works` — 5-step process + guiding principles
- `/for-stewards` — Benefits and onboarding for Indigenous/community land stewards
- `/for-funders` — Pipeline and transparency benefits for conservation funders
- `/for-land-trusts` — Partnership model for accredited land trusts
- `/about` — Mission, why-we-built-this, values, team placeholder

### Shared Layout

`app/layout.tsx` → `components/Nav.tsx` + `<main>` + `components/Footer.tsx`

Nav is `position: fixed` — hero sections on all pages include top padding (`pt-40`) to clear it.

### Colors

Defined in `lib/colors.ts` as a `COLORS` const (used in inline-styled components) and mirrored in `tailwind.config.ts` as custom tokens:

| Token | Value | Use |
|-------|-------|-----|
| `forest` / `forest-deep` | `#2d4a3e` / `#0f1a15` | Dark sections, hero backgrounds |
| `clay` / `clay-amber` | `#c4713b` / `#d4943a` | Accents, CTAs, hover states |
| `bone` / `bone-cream` | `#faf7f2` / `#f5f0e8` | Page and section backgrounds |
| `stone` / `earth` | `#8a8272` / `#1a1a0e` | Body text and secondary text |

### Fonts

Loaded via `next/font/google` in `app/layout.tsx`:
- `Source_Serif_4` → CSS var `--font-source-serif` → Tailwind `font-serif` → headings and display text
- `DM_Sans` → CSS var `--font-dm-sans` → Tailwind `font-sans` → UI labels, buttons, body copy

**Important:** Inline styles must reference fonts via CSS variables, not the font name directly:
```tsx
fontFamily: "var(--font-dm-sans), system-ui, sans-serif"
fontFamily: "var(--font-source-serif), Georgia, serif"
```

### Styling Approach

Hybrid: the homepage (`app/page.tsx`) uses inline styles throughout (preserving the original design with complex gradients and animations). Inner pages (`/how-it-works`, `/for-*`, `/about`) use Tailwind utility classes with the custom color tokens.

### Utility Components

- `components/Reveal.tsx` — IntersectionObserver scroll-reveal wrapper (`'use client'`)
- `components/Counter.tsx` — Animated number counter that starts when scrolled into view (`'use client'`)
