# Meadows Oil & Gas — CMS + Animations Improvement Design

**Date:** 2026-05-03
**Status:** Approved
**Scope:** Add Sanity CMS for full-site content management + replace existing animation system with Framer Motion

---

## 1. Architecture Overview

The site remains a Next.js 16 App Router static site deployed on Vercel. Two new layers are added:

**Sanity layer:** A hosted content database at `meadows.sanity.studio`. Pages with editable content fetch from Sanity at build time using `next-sanity` + GROQ queries. When content is published in Sanity Studio, a Vercel deploy webhook triggers an automatic rebuild — the live site updates within ~30 seconds, no code push required. Two users (owner + one other).

**Framer Motion layer:** The existing IntersectionObserver + `.reveal-up` / `.is-visible` CSS class system is replaced with Framer Motion's `motion` components and `useInView` hook. A reusable `<FadeUp>` wrapper component handles scroll-triggered reveals site-wide.

Content is still baked in at build time — no runtime API calls, no change to static performance characteristics.

---

## 2. Sanity CMS Integration

### Schema Definitions

| Schema Type | Editable Fields |
|---|---|
| `hero` | Headline, subheadline, background image, CTA button text |
| `service` | Title, description, bullet points, deliverables (per service) |
| `galleryImage` | Photo upload, caption, display order |
| `testimonial` | Quote, author name, company |
| `jobPosting` | Title, type, description, requirements, active/inactive toggle |
| `faqItem` | Question, answer, category |
| `glossaryTerm` | Term, definition, category |

### What Stays Hardcoded

- Navigation structure and routing
- Page layouts and design system
- SEO metadata templates
- Privacy policy page

### Data Flow

```
Sanity Studio (meadows.sanity.studio)
  → Editor publishes content
  → Sanity fires webhook to Vercel
  → Vercel triggers production rebuild
  → next-sanity fetches content at build time via GROQ
  → Static HTML baked with new content
  → Live site updated (~30s)
```

### Environment Variables Required

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project identifier |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset name (e.g. `production`) |
| `SANITY_API_READ_TOKEN` | Server-side reads (optional for public content) |
| `SANITY_WEBHOOK_SECRET` | Validates incoming Vercel deploy webhook |

All must be added to Vercel → Settings → Environment Variables.

### Sanity Client Setup

A single `lib/sanity/client.ts` exports a configured `createClient` instance and a typed `sanity.fetch()` helper. All GROQ queries live in `lib/sanity/queries.ts`, co-located by schema type.

---

## 3. Framer Motion Animation Plan

### Package

```
framer-motion  (~50KB gzipped)
```

Acceptable given Mapbox GL JS (~250KB) is already in the bundle.

### Reusable Component

`components/ui/FadeUp.tsx` — a wrapper that applies scroll-triggered fade + slide-up to any children. Accepts `delay` prop for stagger control. Replaces all `.reveal-up` + IntersectionObserver usage site-wide.

### Animation Inventory

| Element | Animation |
|---|---|
| Page entrance | Fade + slide up via `AnimatePresence` in root layout |
| Section reveals | `<FadeUp>` scroll-triggered fade + slide up (replaces `.reveal-up`) |
| Staggered lists | Service cards, gallery grid, FAQ items — sequential child delays |
| Stats bar numbers | Count-up on scroll into view |
| Navbar | Shadow + backdrop-blur intensifies on scroll |
| Card hover | Gentle lift (`y: -4`, shadow increase) on service cards + gallery thumbnails |
| Hero headline | Line-by-line entrance on page load |

### Accessibility

All animations respect `prefers-reduced-motion` via Framer Motion's built-in `useReducedMotion` hook — users with motion sensitivity get instant renders instead.

---

## 4. Build Sequence

Steps are independently deployable. Nothing breaks mid-build.

1. **Sanity project setup** — create project at sanity.io, define all 7 schemas, seed with current hardcoded content
2. **Next.js ↔ Sanity connection** — install `next-sanity`, create `lib/sanity/client.ts` + `lib/sanity/queries.ts`, replace hardcoded data with `sanity.fetch()` calls page by page
3. **Vercel deploy webhook** — configure in Sanity project settings, add `SANITY_WEBHOOK_SECRET` to Vercel env vars
4. **Install Framer Motion** — add package, create `components/ui/FadeUp.tsx`
5. **Replace animation system** — swap `.reveal-up` / IntersectionObserver usage site-wide with `<FadeUp>` and Framer Motion primitives
6. **Polish passes** — stats count-up, hero headline entrance, hover effects, `AnimatePresence` page transitions
7. **Deploy + verify** — confirm Studio publish → webhook → rebuild → live site end-to-end

---

## 5. Out of Scope

- Custom domain / Cloudflare proxy (separate concern)
- Real hero photography (content, not code)
- Live chat or lead capture
- A/B testing
- Interactive Mapbox state coverage map (separate feature)
