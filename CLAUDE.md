# Meadows Oil & Gas — Project Reference

## Project Overview

Next.js 15 + Tailwind v4 + Sanity CMS website redesign for Meadows Oil & Gas.

- **Live site:** https://meadows-oil-gas-redesign.vercel.app
- **Sanity Studio:** http://localhost:3000/studio (dev) | /studio (prod)
- **Sanity Project ID:** `p90jqv5f` | Dataset: `production`
- **Stack:** Next.js App Router, Tailwind CSS v4, Sanity.io, Mapbox GL JS, Framer Motion, Vercel

---

## Dev Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run test     # run test suite
```

---

## Information Architecture (Sitemap)

- **Home** — hero, stats, services preview, testimonials, CTAs
- **About** → History, Our Reach (work locations), Affiliations (AAPL, OCAPL)
- **Services** → Brokerage & Land (leasehold acquisitions, mineral/leasehold ownership, title opinions/curative, right-of-ways, wind leasing) | Technical (mapping, seismic mapping, digital imagery)
- **Gallery** — masonry photo grid
- **Careers** — job postings
- **FAQ** — accordion by category
- **Resources** — glossary
- **Contact** — inquiry form + office addresses

---

## Architecture Decisions

### Stack Rationale
- **Next.js** — SSR/SSG for SEO-critical B2B discovery
- **Sanity.io** — headless CMS so non-technical staff can update content without code changes
- **Vercel** — zero-config Next.js deployment with global CDN
- **Mapbox GL JS** — high-performance custom map for work locations / seismic mapping pages
- **Framer Motion** — animation system (replaced ScrollReveal); uses `useReducedMotion` for accessibility

### Key Patterns
- `FadeUp` component wraps scroll-reveal animations everywhere
- `HeroParallax` uses `useScroll` + `useTransform` for oil field background parallax
- `PageTransition` uses `AnimatePresence` for route fade
- All CMS-backed pages have graceful fallbacks (hardcoded content renders if Sanity returns empty)

---

## Current Implementation Status

### Phase 1 — Framer Motion ✅ Live
- `FadeUp` replaces `ScrollReveal` everywhere (TDD, `useReducedMotion`)
- `HeroParallax` — parallax hero background
- `HeroSection` — stagger entrance animation
- `PageTransition` — fade between routes via `AnimatePresence`
- Navbar scroll shadow, service card hover lifts, gallery thumbnail hover lifts, stats stagger

### Phase 2 — Sanity CMS ✅ Code live, content not seeded yet
- 7 schemas in `schemas/`: hero, service, galleryImage, testimonial, jobPosting, faqItem, glossaryTerm
- Sanity Studio embedded at `/studio`
- `lib/sanity/` — client, types, GROQ queries
- TestimonialsSection, gallery, careers, FAQ, resources all wired to Sanity
- Env vars `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` set in Vercel

### Pending: Seed Sanity Content
Run `npm run dev`, open http://localhost:3000/studio, and create:

| Document Type | Count | Source |
|---|---|---|
| Hero | 1 | Headline: "Trusted Land & Title Services", Tagline: "Serving Operators Since 2009" |
| Testimonials | 3 | Copy from `components/home/TestimonialsSection.tsx` |
| Job Postings | 2 | Copy from `app/careers/page.tsx` — set Active: true |
| FAQ Items | 20 | Copy from `app/faq/page.tsx`; categories: scope, title, leasing, wind, logistics |
| Glossary Terms | 21 | Copy from `app/resources/page.tsx`; categories: title, leasing, operations, wind |

### Pending: Env Vars (pre-existing, unrelated to CMS)

| Var | Status | Effect if Missing |
|---|---|---|
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Not set | Map on /about/reach won't render |
| `FORMSPREE_ENDPOINT` | Not set | Contact form won't submit |

### Optional: Vercel Deploy Webhook (auto-rebuild on Sanity publish)
1. Vercel → Settings → Git → Deploy Hooks → name `Sanity Publish`, branch `main` → copy URL
2. sanity.io → project `p90jqv5f` → API → Webhooks → paste URL, trigger on Create/Update/Delete

---

## Open Code Review Issues

From `.planning/REVIEW.md` — 52 files reviewed (last reviewed: 2026-05-03).

### Critical

| ID | File | Issue | Fix |
|---|---|---|---|
| CR-001 | `app/contact/page.tsx:38` | Formspree falls back to non-functional placeholder URL if env var missing | Remove fallback; throw on missing env var |
| CR-002 | `app/about/process/page.tsx:245` | `.replace(' ', '-')` missing global flag — only replaces first space, breaking multi-word anchor links | Use `.replaceAll(' ', '-')` |
| CR-003 | `components/gallery/GalleryClient.tsx` | Missing focus management, `tabIndex`/`onKeyDown`, and `window` listener — `MasonryGrid.tsx` has all of these but is unused | Migrate accessibility features from `MasonryGrid` into `GalleryClient` |

### Warnings

| ID | File | Issue | Fix |
|---|---|---|---|
| WR-001 | `components/layout/Navbar.tsx:161` | Mobile nav overlay has `role="dialog" aria-modal="true"` even when hidden | Add `aria-hidden={!mobileOpen}` |
| WR-002 | `app/globals.css:48` | `scroll-behavior: smooth` on `*` selector causes unintended scroll in inputs/overflow containers | Apply to `html` only |
| WR-003 | `components/about/LocationMap.tsx:106` | Token guard placed after hook calls (violates rules of hooks) | Move `if (!MAPBOX_TOKEN)` guard before any hook calls |
| WR-004 | `components/about/ServiceAreaMap.tsx:82` | Tooltip can overflow viewport right edge | Clamp: `Math.min(tooltip.x + 12, window.innerWidth - tooltipWidth - 16)` |
| WR-005 | `components/about/OilHistoryTimeline.tsx:26` | `year` used as React list key — duplicate years cause bugs | Use `key={year + '-' + i}` |
| WR-006 | `components/contact/ContactForm.tsx:55` | Error detection via brittle style string `el.style.borderColor.includes('220,38,38')` | Use `data-error` attribute instead |
| WR-007 | `components/ui/accordion.tsx:32` | FAQ accordion triggers render as `<h2>` inside `<h2>` section, breaking heading hierarchy | Change to `<h3>` |
| WR-008 | `app/careers/page.tsx:13` | Hardcoded `datePosted: '2026-01-01'` in JobPosting JSON-LD | Remove or generate dynamically |

### Info

| ID | File | Note |
|---|---|---|
| IN-001 | `app/about/page.tsx:318` | Orphaned `<Link>` breaks 5-column grid at `lg` breakpoints |
| IN-002 | `components/gallery/GalleryClient.tsx:44` | `overflow: hidden` body lock may not clean up on fast client-side navigation |
| IN-003 | `app/robots.ts` | `/privacy` is indexed — may warrant `noindex` |
| IN-004 | `app/layout.tsx` + all page files | JSON-LD uses React text children which HTML-escapes ampersands — use raw HTML injection via the `__html` prop (Next.js recommended pattern for structured data) |

---

## Claude Code Skill Workflow

### Phase 1: Architecture & Planning
- `superpowers:writing-plans` — generate implementation roadmap
- `vercel:nextjs` — App Router boilerplate standards
- `agenthub:init` — structure larger task chunks

### Phase 2: Design System & UI
- `brandkit` — enforce color palette / typography
- `high-end-visual-design` + `minimalist-ui` — modern clean corporate aesthetic
- `vercel:shadcn` — accessible components (accordions, tabs, carousels)
- `design-taste-frontend` — smooth transitions, responsive polish

### Phase 3: Performance
- `vercel:react-best-practices` — hooks, state management
- `vercel:routing-middleware` — SEO paths, CMS webhook protection
- `vercel:next-cache-components` — heavy asset optimization (imagery, maps)

### Phase 4: Execution & Debugging
- `full-output-enforcement` — prevent truncation on long files
- `superpowers:systematic-debugging` — API/CMS integration issues
- `superpowers:finishing-a-development-branch` — clean feature branch wrap-up
