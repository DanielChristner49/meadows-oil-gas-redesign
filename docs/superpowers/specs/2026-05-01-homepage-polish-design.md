# Homepage Polish — Design Spec
**Date:** 2026-05-01  
**Status:** Approved

---

## Overview

Polish the existing four-section homepage (Hero → Why Meadows → Services → CTA) while adding two new strips: a gold stats bar after the hero and a LinkedIn strip before the CTA. No structural pages are added or removed. All content stays the same as `meadowscorp.homesteadcloud.com`.

---

## Section 1 — Hero

**File:** `components/home/HeroSection.tsx`

### Changes
- **Badge:** Remove `backgroundColor: rgba(200,146,26,0.12)` fill. Keep only the border (`border: 1px solid rgba(200,146,26,0.35)`). Tighten letter-spacing to `2px`.
- **Heading:** Increase font size from `clamp(2.5rem, 7vw, 5.5rem)` to `clamp(2.75rem, 8vw, 6.5rem)`. Set `letter-spacing: -0.02em` (tighter) and `font-weight: 800`.
- **Tagline ("Turning Your Vision Into Reality"):** Change color from gold-tinted to `rgba(255,255,255,0.85)`. Increase `letter-spacing` to `0.18em`. Bump font size to `clamp(0.75rem, 1.5vw, 1rem)`.
- **Body copy:** Shorten to one sentence: *"Precise, dependable land and title solutions that empower our clients to move with confidence."*
- **Primary CTA button:** Increase vertical padding from `0.75rem` to `0.875rem`. Add inner circle arrow span (matches the existing navbar CTA pattern).
- **Secondary CTA button:** Increase `border-color` opacity from `0.28` to `0.35` for more visibility.
- **Hero gradient:** Strengthen left stop from `rgba(0,0,0,0.96)` to `rgba(0,0,0,0.97)`, extend full-dark zone from `45%` to `55%`.

---

## Section 2 — Stats Bar (New)

**File:** `components/home/StatsBar.tsx` *(repurpose existing file — currently unused on homepage)*

### Layout
Full-width gold bar (`background: #c8921a`) placed immediately after `<HeroSection />` in `app/page.tsx`. Four columns separated by 1px semi-transparent dividers.

### Content
| Figure | Label |
|--------|-------|
| 2009 | Established |
| 10+ | Yrs Per Landman |
| OK · KS · TX | & Beyond |
| 3 | Core Services |

### Styles
- Background: `#c8921a`
- Figure: `font-size: clamp(1.5rem, 3vw, 2.5rem)`, `font-weight: 800`, `color: #000`, `letter-spacing: -0.02em`
- Label: `font-size: 0.6rem`, `text-transform: uppercase`, `letter-spacing: 0.15em`, `color: rgba(0,0,0,0.65)`
- Dividers: `1px solid rgba(0,0,0,0.12)`, `height: 2rem`
- Padding: `0.625rem 1.5rem`

---

## Section 3 — Why Meadows

**File:** `components/home/WhySection.tsx`

### Changes
- **Cards:** Increase `box-shadow` from `0 2px 16px rgba(0,0,0,0.05)` to `0 2px 12px rgba(0,0,0,0.08)` — slightly more visible lift.
- **Founder quote block:** No style changes. Verify the full quote text renders without truncation in the browser.

---

## Section 4 — Services (Core Services Bento)

**File:** `components/home/ServicesPreview.tsx`

### Changes
- **Card border-radius:** Change from `1.25rem` (20px) to `0.5rem` (8px) — tighter, more professional.
- **Card border:** Add explicit `border: 1px solid rgba(200,146,26,0.18)` to the inner card div (currently only shows on hover).
- **Ghost number:** Move the large ghost number (`01`, `02`, `03`) from top-left to `position: absolute; top: 0.75rem; right: 1rem` so it doesn't push the title down. Make the card `position: relative; overflow: hidden`.
- **"All Services →" button:** Keep existing ghost pill button — no changes needed.

---

## Section 5 — LinkedIn Strip (New)

**File:** `components/home/LinkedInStrip.tsx` *(new component)*

### Layout
Slim full-width dark band placed between `<ServicesPreview />` and `<CTASection />` in `app/page.tsx`.

### Content
- Left: `"Follow our work"` label in small uppercase gray text
- Right: LinkedIn button linking to `https://www.linkedin.com/company/meadowsoil`

### Styles
- Background: `#0a0a0a`
- Border: `border-top: 1px solid #1e1e1e; border-bottom: 1px solid #1e1e1e`
- Padding: `0.625rem 1.5rem`
- LinkedIn button: `background: #0077b5`, `border-radius: 0.375rem`, `padding: 0.375rem 0.75rem`, white "in" logotype + company name text

---

## Section 6 — CTA

**File:** `components/home/CTASection.tsx`

### Changes
- **"Built for Speed." heading:** Increase `font-size` to `clamp(3rem, 6vw, 5.5rem)`. Keep `font-weight: 300`.
- **"Proven by Results." subline:** Increase `letter-spacing` to `0.2em`.
- **Contact button:** Add inner circle arrow span (same pattern as hero primary CTA and navbar button).

---

## app/page.tsx — Updated Section Order

```tsx
<HeroSection />
<StatsBar />        {/* repurposed — new gold stats bar */}
<WhySection />
<ServicesPreview />
<LinkedInStrip />   {/* new component */}
<CTASection />
```

---

## What Is NOT Changing

- Color scheme (black, `#c8921a` gold, white, `#4a4a4a` gray CTA)
- All copy and content
- Navigation / Navbar
- Footer
- About, Services, Contact pages
- Mobile layout structure (all changes are responsive by default)

---

## Files to Create
- `components/home/LinkedInStrip.tsx` — new

## Files to Modify
- `app/page.tsx` — add `<StatsBar />` and `<LinkedInStrip />`
- `components/home/HeroSection.tsx` — badge, heading, tagline, body copy, CTA, gradient
- `components/home/StatsBar.tsx` — replace existing content with gold stats bar design
- `components/home/WhySection.tsx` — card shadow tweak (minor)
- `components/home/ServicesPreview.tsx` — border-radius, border, ghost number position
- `components/home/CTASection.tsx` — font size, letter-spacing, CTA button arrow
