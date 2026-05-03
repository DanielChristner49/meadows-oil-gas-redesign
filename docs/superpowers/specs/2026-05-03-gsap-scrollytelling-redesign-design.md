# GSAP Scrollytelling Redesign — Design Spec

**Date:** 2026-05-03  
**Pages:** Homepage, About, Services  
**Goal:** Redesign three pages with jeton.com-inspired scroll-driven animations — horizontal parallax, multilayered parallax, pinned scrollytelling, and scroll-induced animations — using GSAP ScrollTrigger alongside the existing Framer Motion setup.

---

## Architecture

### Animation Stack
- **GSAP ScrollTrigger** — all scroll-choreographed effects: pinned sections, horizontal panels, timeline-based reveals, parallax layers
- **Framer Motion** — retained for micro-animations: hover lifts, entrance fades on non-scroll pages, `FadeUp` component, `PageTransition`
- **Lenis** (optional enhancement) — smooth scroll momentum library; can be added on top of GSAP for a premium "heavy" scroll feel

### Color Palette — Luxury Refinement
Keep existing dark/gold palette, push toward deeper luxury:
- Background: `#050505` (deeper than current `#0a0a0a`)
- Surface: `#0d0d0d`
- Gold primary: `#c8921a` (unchanged)
- Gold light: `#e4a820` (unchanged)
- Gold muted: `rgba(200,146,26,0.35)` for rules and borders
- Add: Champagne `#f5e6c8` for oversized display numerals (stats section) and section number labels only — not body text
- Add: Deep charcoal `#111010` for card backgrounds

### GSAP + Framer Motion Coexistence
- GSAP attaches to DOM refs via `useGSAP` hook (from `@gsap/react`) inside `useLayoutEffect`
- Framer Motion handles components outside scroll sections (navbar, footer, non-pinned page areas)
- No conflicts: GSAP owns `transform` on scroll-pinned elements; Framer Motion owns `opacity`/`transform` on entrance-only components

### New Dependencies
```
gsap              # core + ScrollTrigger plugin
@gsap/react       # useGSAP hook for React integration
```
GSAP is free for this use case (no Club GreenSock plugins required).

---

## Homepage

Total scroll distance: ~8–10× viewport height.

### Chapter 1 — Hero (Pinned, ~3× viewport)
The hero section pins to the viewport for 3× its height. Three parallax layers move at different speeds:

| Layer | Element | Speed |
|---|---|---|
| Background | Oil field image | 20% of scroll |
| Midground | Derrick silhouettes (CSS) | 40% of scroll |
| Foreground | Text content | 100% (normal) |

Scroll-driven sequence within the pin:
1. Gold badge fades in (0–15% of pin)
2. Headline words reveal one by one from `y: 40px` (15–50%)
3. Gold accent line draws left-to-right via `scaleX` from 0 to 1 (50–65%)
4. Tagline + body copy fade up (65–80%)
5. CTAs slide up and lock (80–100%)

### Chapter 2 — Stats (Normal scroll, 1× viewport)
Each stat staggers in from `y: 30px, opacity: 0` with a 120ms delay between items. Numbers animate from 0 using GSAP's built-in counter animation. Vertical dividers draw in via `scaleY`.

### Chapter 3 — Services Preview (Pinned horizontal panel, ~5× viewport)
Section pins. Vertical scroll drives horizontal translation of a wide card strip. Five service cards (Leasehold Acquisitions, Mineral Ownership, Title Services, Right-of-Ways, Wind Leasing) move from right to left as the user scrolls. The active card expands width and reveals a short description. A progress bar at the bottom of the section tracks position.

### Chapter 4 — Why Meadows (Pinned, ~4× viewport)
Section pins. Four "reason" blocks (Experience, Precision, Reach, Trust) reveal one at a time. The current block is at full opacity/scale; previous blocks dim to 60% opacity and scale to 95%. A gold vertical progress line on the left side fills as you scroll through all four.

### Chapter 5 — Testimonials (Normal scroll)
Three cards float at different vertical parallax speeds (1×, 0.85×, 0.7×) creating a staggered depth as the section enters. Quote mark symbols scale from 0.5× to 1× on entry. Gold rule lines draw left-to-right before each card's author block.

### Chapter 6 — CTA (Normal scroll, 1× viewport)
Full-viewport dark section. Oil field background at 20% parallax speed. Headline scales from 90% to 100% on entry. Gold CTA button has a subtle pulse animation on scroll arrival.

---

## About Page

### Chapter 1 — Page Header (1× viewport)
Parallax oil field background at 20% speed. "About" label draws in, main headline scales from 90%. Consistent visual language with homepage hero.

### Chapter 2 — Company History Timeline (Pinned, ~6× viewport) ★
The centerpiece of the About page. A vertical gold spine runs down the center of the viewport. The section pins for 6× viewport height — one historical era per viewport of scroll.

Six eras pulled from the existing `app/about/history/page.tsx` timeline data (1859 Drake Well through present-day Meadows operations):
- Active era dot glows gold on the spine with a radial pulse
- Content alternates left/right of the spine per era
- Current era content: full opacity, `y: 0`
- Past eras: 60% opacity, `scale: 0.96`, slight `y: -10px`
- Upcoming era: visible at 30% opacity, `y: 20px`
- Progress dots at bottom of viewport track current era
- Oil industry context text types in character-by-character using GSAP's `TextPlugin`

### Chapter 3 — Our Reach (1.5× viewport)
Mapbox map fades in and scales up from 95% on entry. Oklahoma City pin pulses in with a gold glow ring animation. Project county markers radiate outward from OKC with a 30ms stagger. Office detail card slides up from below the map with a 200ms delay.

**Note:** Only Oklahoma City shown — no California/Bakersfield reference.

### Chapter 4 — Affiliations (Normal scroll)
AAPL and OCAPL logos fade from 0% to 100% opacity and drift upward 20px on entry. A thin gold rule draws left-to-right beneath the section label before logos appear.

---

## Services Page

### Chapter 1 — Page Header (1× viewport)
Same parallax header treatment as About. Two category pill anchors (Brokerage & Land · Technical & Mapping) fade in below the headline — clicking scrolls to that section.

### Chapter 2 — Brokerage & Land (Pinned split layout, ~5× viewport) ★
Left panel (35% width): Persistent service navigation. All 5 services listed. Active item highlighted with a gold left-border indicator that animates to the next item on scroll.

Right panel (65% width): Full service detail for the active service, revealed per viewport:
1. Service number + title slides up from `y: 40px`
2. Gold rule draws left-to-right
3. Description paragraph fades in
4. Deliverables/bullet points stagger in with 80ms delay each

**Wind Leasing** (service 5): subtle green accent (`#4a7c59`) replaces gold on the active indicator and rule — signals the renewable pivot without breaking the overall aesthetic.

### Chapter 3 — Category Divider (short section)
A full-viewport-width gold line draws across the screen as you scroll through. A "Technical & Mapping Services" label fades in. Functions as a cinematic chapter break between the two service categories.

### Chapter 4 — Technical & Mapping (Pinned horizontal panel, ~3× viewport)
Same horizontal scroll panel pattern as homepage services. Three cards (Mapping, Seismic Mapping, Digital Imagery) slide in from right as you scroll. Active card expands and reveals detail. Keeps consistent scroll language with the homepage.

### Chapter 5 — CTA (Normal scroll)
Matches homepage CTA treatment — parallax oil field background, gold button pulse on entry.

---

## Technical Implementation Notes

### GSAP Setup Pattern
```tsx
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Inside component:
useGSAP(() => {
  gsap.to(target, {
    scrollTrigger: {
      trigger: containerRef.current,
      start: 'top top',
      end: '+=300%',
      pin: true,
      scrub: 1,
    },
    y: '-40%',
  })
}, { scope: containerRef })
```

### Scroll Restoration
GSAP ScrollTrigger must be refreshed on route change. A `ScrollTriggerRefresh` client component listens to `usePathname()` and calls `ScrollTrigger.refresh()` on each navigation.

### Reduced Motion
All GSAP animations check `window.matchMedia('(prefers-reduced-motion: reduce)')`. If true: disable parallax layers, remove pin duration (sections scroll normally), keep opacity fades only.

### Performance
- `will-change: transform` on all parallax layers
- `ScrollTrigger.normalizeScroll(true)` for consistent mobile behavior
- Horizontal panels use `x` translation (GPU composited), not `left`/`margin`

---

## Files to Create / Modify

| File | Action |
|---|---|
| `lib/gsap/index.ts` | GSAP registration + ScrollTrigger setup |
| `components/scroll/HeroPinned.tsx` | Homepage hero with multilayer parallax pin |
| `components/scroll/HorizontalPanel.tsx` | Reusable horizontal scroll panel (used on homepage services + technical services) |
| `components/scroll/PinnedReveal.tsx` | Reusable pinned sequential reveal (used on Why section + Brokerage services) |
| `components/scroll/ScrollTriggerRefresh.tsx` | Route-change ScrollTrigger refresh |
| `components/about/HistoryTimeline.tsx` | Replace existing Timeline.tsx with GSAP pinned version |
| `app/page.tsx` | Wire new scroll components |
| `app/about/page.tsx` (history section) | Wire new timeline |
| `app/services/page.tsx` | Wire new pinned service reveal + horizontal panel |
| `package.json` | Add `gsap`, `@gsap/react` |
