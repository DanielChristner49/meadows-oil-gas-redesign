# Session Handoff — Meadows Oil & Gas Improvements

**Date:** 2026-05-03  
**Branch:** main  
**Last commit:** `4802981` — Add implementation plan: Framer Motion + Sanity CMS

---

## What Was Decided This Session

Two improvements were designed, specced, and planned:

1. **Framer Motion animations** — replace existing `ScrollReveal` / IntersectionObserver / `.reveal-up` CSS system with Framer Motion. Includes a parallax oil field hero background.
2. **Sanity CMS** — full site content management (hero, services, gallery, testimonials, jobs, FAQ, glossary).

**Spec:** `docs/superpowers/specs/2026-05-03-cms-animations-design.md`  
**Plan:** `docs/superpowers/plans/2026-05-03-cms-animations.md`

---

## Security Headers Already Deployed

`next.config.ts` was updated with full security headers (CSP, HSTS, X-Frame-Options, etc.) and deployed to production at commit `8395fc9`.  
Live site: https://meadows-oil-gas-redesign.vercel.app

---

## Implementation Plan Status

The plan has **13 tasks** across 2 phases. **Nothing has been implemented yet** — the plan was written and committed but execution was interrupted before Task 1 started.

### Phase 1 — Framer Motion (Tasks 1–6)

| # | Task | Status |
|---|---|---|
| 1 | Install `framer-motion` + create `FadeUp` component (TDD) | ⬜ Not started |
| 2 | Replace `ScrollReveal` with `FadeUp` across 6 files, remove old CSS | ⬜ Not started |
| 3 | Create `HeroParallax` component (TDD) | ⬜ Not started |
| 4 | Refactor `HeroSection` — parallax background + Framer Motion stagger entrance | ⬜ Not started |
| 5 | Polish: `AnimatePresence` page transitions, navbar scroll shadow, card hover lifts, StatsBar stagger | ⬜ Not started |
| 6 | Deploy Phase 1 to Vercel, smoke check | ⬜ Not started |

### Phase 2 — Sanity CMS (Tasks 7–13)

| # | Task | Status |
|---|---|---|
| 7 | `npm install sanity next-sanity`, create 7 schemas + Studio route | ⬜ Not started |
| 8 | Create `lib/sanity/client.ts`, `types.ts`, `queries.ts` | ⬜ Not started |
| 9 | **Manual**: seed Sanity Studio with current hardcoded content | ⬜ Not started |
| 10 | Wire `TestimonialsSection` to Sanity | ⬜ Not started |
| 11 | Wire gallery page to Sanity (with local image fallback) | ⬜ Not started |
| 12 | Wire careers page to Sanity | ⬜ Not started |
| 13 | Wire FAQ + resources pages to Sanity | ⬜ Not started |
| 14 | Add Vercel env vars + deploy webhook + end-to-end verify | ⬜ Not started |

---

## How to Resume

### Option A — Subagent-Driven (approved, was about to start)

Start by dispatching a fresh `general-purpose` subagent for **Task 1**. The plan has all the code you need — just read it from the plan file and paste the task text into the subagent prompt. Use the `superpowers:subagent-driven-development` skill.

```
Read plan: docs/superpowers/plans/2026-05-03-cms-animations.md
Dispatch implementer → spec reviewer → code quality reviewer
Then move to Task 2, etc.
```

### Option B — Just start coding

Run Task 1 manually:
```bash
cd /Users/danielchristner/meadows-oil-gas-redesign
npm install framer-motion
```
Then create `components/ui/FadeUp.tsx` and `__tests__/components/ui/FadeUp.test.tsx` using the exact code in the plan.

---

## Key Files

| File | Purpose |
|---|---|
| `components/ui/ScrollReveal.tsx` | **Will be deleted** in Task 2 |
| `components/home/HeroSection.tsx` | **Will be refactored** in Task 4 |
| `app/globals.css` | `.reveal-up`, `.is-visible`, `.hero-animate` rules get removed in Task 2 |
| `components/ui/FadeUp.tsx` | **Create in Task 1** |
| `components/home/HeroParallax.tsx` | **Create in Task 3** |

---

## Current Animation System (before changes)

- `components/ui/ScrollReveal.tsx` — IntersectionObserver + `.is-visible` class
- Used in: `TestimonialsSection`, `CTASection`, `ServicesPreview`, `WhySection`, `Timeline.tsx`
- Hero uses `hero-animate` CSS class (keyframe entrance, defined in `globals.css`)

---

## Env Vars Still Needed on Vercel

| Var | Notes |
|---|---|
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Still not set — map on /about/reach won't render |
| `FORMSPREE_ENDPOINT` | Still not set — contact form won't submit |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Set when Sanity project created (Task 7) |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` (Task 7) |
