# Session Handoff — Meadows Oil & Gas

**Date:** 2026-05-03  
**Branch:** `main` (feature branch merged and cleaned up)  
**Live site:** https://meadows-oil-gas-redesign.vercel.app  
**Last commit:** `50c639a` — feat: wire FAQ and resources pages to Sanity CMS  
**Sanity Project ID:** `p90jqv5f`

---

## What Is Done

### Phase 1 — Framer Motion ✅ Live
- `FadeUp` replaces `ScrollReveal` everywhere (Framer Motion, TDD, `useReducedMotion`)
- `HeroParallax` — parallax oil field background on hero using `useScroll` + `useTransform`
- `HeroSection` — Framer Motion stagger entrance animation
- `PageTransition` — fade between routes via `AnimatePresence`
- Navbar scroll shadow, service card hover lifts, gallery thumbnail hover lifts, stats stagger

### Phase 2 — Sanity CMS ✅ Code live, content not seeded yet
- 7 schemas in `schemas/` (hero, service, galleryImage, testimonial, jobPosting, faqItem, glossaryTerm)
- Sanity Studio embedded at `/studio`
- `lib/sanity/` — client, types, GROQ queries
- TestimonialsSection, gallery, careers, FAQ, resources — all wired to Sanity with graceful fallbacks
- `NEXT_PUBLIC_SANITY_PROJECT_ID=p90jqv5f` set in Vercel
- `NEXT_PUBLIC_SANITY_DATASET=production` set in Vercel

---

## One Remaining Step: Seed Content in Sanity Studio

Run `npm run dev`, open http://localhost:3000/studio, and create:

### Hero (1 document)
- Headline: `Trusted Land & Title Services`
- Tagline: `Serving Operators Since 2009`
- Body Copy: `Precise, dependable land and title solutions that empower our clients to move with confidence.`
- Primary CTA: `Our Services` / Secondary CTA: `Contact Us`
- Background Image: upload `public/images/hero.jpg`

### Testimonials (3 documents)
Grab the quotes from `components/home/TestimonialsSection.tsx` — authors are:
1. R. Hartley / Land Manager / Sunbelt Petroleum Corp.
2. D. Vasquez / Sr. Land Acquisitions / Midcontinent Energy Partners
3. T. Morrison / Project Development Lead / Highplains Wind Partners

### Job Postings (2 documents)
Copy from `app/careers/page.tsx` — Contract Landman + GIS Specialist. Set both **Active: true**.

### FAQ Items (20 documents)
Copy from `app/faq/page.tsx`. Use section IDs as categories: `scope`, `title`, `leasing`, `wind`, `logistics`.

### Glossary Terms (21 documents)
Copy from `app/resources/page.tsx`. Categories: `title`, `leasing`, `operations`, `wind`.

---

## Optional: Vercel Deploy Webhook (auto-rebuild on publish)

1. Vercel → meadows-oil-gas-redesign → Settings → Git → Deploy Hooks → Add hook: name `Sanity Publish`, branch `main` → copy URL
2. sanity.io → project `p90jqv5f` → API → Webhooks → Add webhook → paste URL, trigger on Create/Update/Delete → Save

---

## Still Pending Env Vars (pre-existing, unrelated to this session)

| Var | Status |
|---|---|
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Not set — map on /about/reach won't render |
| `FORMSPREE_ENDPOINT` | Not set — contact form won't submit |

---

## How to Resume

Tell Claude: "Read PICKUP.md — I need to seed the Sanity content for the Meadows website."
