# Pickup — Meadows Oil & Gas Redesign

**Date:** 2026-05-03  
**Branch:** main (pushed to origin)  
**Live site:** https://meadows-oil-gas-redesign.vercel.app

---

## What Was Completed This Session

### GSAP Scrollytelling Redesign (all 11 tasks done, deployed)

**New scroll primitives:**
- `lib/gsap/index.ts` — GSAP + ScrollTrigger + TextPlugin registration
- `components/scroll/HeroPinned.tsx` — 3-layer parallax pinned hero (bg 20%, mid 40%, fg 100%)
- `components/scroll/HorizontalPanel.tsx` — vertical scroll drives horizontal card strip
- `components/scroll/PinnedReveal.tsx` — pinned section reveals items one at a time with left nav + progress line
- `components/scroll/ScrollTriggerRefresh.tsx` — resets GSAP on every route change (in layout.tsx)

**Homepage redesigned:**
- `HeroSection` → wraps `HeroPinned` (replaces old `HeroParallax`)
- `ServicesPreview` → replaced with `HorizontalPanel` (5 services, Wind Leasing green accent)
- `WhySection` → replaced with `PinnedReveal` (4 items: Experience, Precision, Reach, Trust)
- `StatsBar` → GSAP stagger on scroll entry
- `TestimonialsSection` → GSAP parallax float at 3 speeds

**About/History redesigned:**
- `components/about/HistoryTimeline.tsx` — new GSAP pinned timeline, 16 eras alternating left/right
- Replaces old `OilHistoryTimeline` in `app/about/history/page.tsx`

**About/Reach:**
- `components/about/MapReveal.tsx` — client wrapper adds GSAP fade+scale reveal around `LocationMap`

**Services redesigned:**
- `components/services/BrokerageScrollReveal.tsx` → `PinnedReveal` with 5 brokerage services
- `components/services/TechnicalScrollPanel.tsx` → `HorizontalPanel` with 3 technical services
- Both wired into their respective page.tsx files

**Color refinements (`app/globals.css`):**
- Background deepened: `--color-brand-navy: #050505`
- Surface: `--color-brand-surface: #0d0d0d`
- Added: `--color-card-bg: #111010`
- Added: `--color-champagne: #f5e6c8` (for display numerals on dark sections)

---

## Test Results (Live Site)

| Page | Status | Notes |
|---|---|---|
| `/` | ✅ | No errors |
| `/about` | ✅ | 2 pre-existing CSP errors (ServiceAreaMap → cdn.jsdelivr.net, not our code) |
| `/about/history` | ✅ | No errors — GSAP timeline working |
| `/about/reach` | ✅ | Same pre-existing CSP errors as /about |
| `/services` | ✅ | No errors |
| `/services/brokerage` | ✅ | No errors — PinnedReveal with left nav working |
| `/services/technical` | ✅ | No errors — HorizontalPanel working |
| `/gallery` | ✅ | No errors |
| `/contact` | ✅ | No errors |
| `/faq` | ✅ | No errors |

---

## Known Pre-Existing Issues (not introduced this session)

1. **CSP: cdn.jsdelivr.net blocked** — `ServiceAreaMap` fetches `us-atlas@3` JSON. Fix: add `https://cdn.jsdelivr.net` to `connect-src` in `next.config.ts`.
2. **4 failing test suites** — Footer, Navbar, sanity/queries, design-system tests were broken before this session.
3. **Mapbox token not set** — Map on /about/reach won't render without `NEXT_PUBLIC_MAPBOX_TOKEN` env var in Vercel.
4. **Formspree endpoint not set** — Contact form non-functional without `FORMSPREE_ENDPOINT`.

---

## Pending Tasks (not started)

- **Add images to pages** — User asked to fill pages with AI-generated images. Tool ("nano banana pro") was not identified — needs clarification next session.
- **Seed Sanity content** — Hero, 3 testimonials, 2 job postings, 20 FAQ items, 21 glossary terms still not seeded at https://meadows-oil-gas-redesign.vercel.app/studio
- **Fix CDN CSP** — One-line fix: add `https://cdn.jsdelivr.net` to `connect-src` in `next.config.ts`
- **Open code review issues** — 3 critical, 8 warnings, 4 info from prior review (see CLAUDE.md)

---

## Key File Locations

```
lib/gsap/index.ts
components/scroll/HeroPinned.tsx
components/scroll/HorizontalPanel.tsx
components/scroll/PinnedReveal.tsx
components/scroll/ScrollTriggerRefresh.tsx
components/about/HistoryTimeline.tsx
components/about/MapReveal.tsx
components/services/BrokerageScrollReveal.tsx
components/services/TechnicalScrollPanel.tsx
```

## Sanity
- Project ID: `p90jqv5f` | Dataset: `production`
- Studio: https://meadows-oil-gas-redesign.vercel.app/studio
- `.env.local` must exist locally with `NEXT_PUBLIC_SANITY_PROJECT_ID=p90jqv5f` and `NEXT_PUBLIC_SANITY_DATASET=production`
