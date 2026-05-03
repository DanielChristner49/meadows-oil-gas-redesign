# CMS + Animations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Framer Motion animations (including hero parallax oil field effect) and Sanity CMS for full-site content management to the Meadows Oil & Gas website.

**Architecture:** Phase 1 replaces the IntersectionObserver/CSS animation system with Framer Motion — `FadeUp` replaces `ScrollReveal` everywhere, and `HeroParallax` adds parallax depth to the hero background. Phase 2 wires Sanity CMS into all content-heavy pages via `next-sanity`, content fetched at build time, with a Vercel webhook triggering rebuilds on publish. Both phases are independently deployable.

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind v4, Framer Motion ^11, Sanity v3, next-sanity v9, Vercel

---

## File Structure

### New files
| File | Purpose |
|---|---|
| `components/ui/FadeUp.tsx` | Framer Motion scroll-reveal wrapper; drop-in `ScrollReveal` replacement |
| `components/home/HeroParallax.tsx` | Parallax hero container using `useScroll` + `useTransform` |
| `lib/sanity/client.ts` | Sanity client + typed `fetch` helper |
| `lib/sanity/queries.ts` | All GROQ queries, organized by document type |
| `lib/sanity/types.ts` | TypeScript interfaces for all Sanity document types |
| `schemas/hero.ts` | Hero section schema |
| `schemas/service.ts` | Service document schema |
| `schemas/galleryImage.ts` | Gallery image schema |
| `schemas/testimonial.ts` | Testimonial schema |
| `schemas/jobPosting.ts` | Job posting schema |
| `schemas/faqItem.ts` | FAQ item schema |
| `schemas/glossaryTerm.ts` | Glossary term schema |
| `schemas/index.ts` | Schema registry |
| `sanity.config.ts` | Sanity Studio configuration |
| `app/studio/[[...tool]]/page.tsx` | Embedded Sanity Studio route at `/studio` |
| `__tests__/components/ui/FadeUp.test.tsx` | FadeUp unit tests |
| `__tests__/components/home/HeroParallax.test.tsx` | HeroParallax unit tests |

### Modified files
| File | Change |
|---|---|
| `components/ui/ScrollReveal.tsx` | **DELETE** — replaced by FadeUp |
| `components/home/HeroSection.tsx` | Wrap with HeroParallax; replace `hero-animate` with Framer Motion variants |
| `components/home/TestimonialsSection.tsx` | ScrollReveal → FadeUp; hardcoded data → Sanity |
| `components/home/CTASection.tsx` | ScrollReveal → FadeUp |
| `components/home/ServicesPreview.tsx` | ScrollReveal → FadeUp; hardcoded data → Sanity |
| `components/home/WhySection.tsx` | ScrollReveal → FadeUp |
| `components/about/Timeline.tsx` | ScrollReveal → FadeUp |
| `components/gallery/GalleryClient.tsx` | Accept `images` prop; remove internal hardcoded array |
| `app/gallery/page.tsx` | Fetch gallery images from Sanity; pass to GalleryClient |
| `app/careers/page.tsx` | Fetch job postings from Sanity |
| `app/faq/page.tsx` | Fetch FAQ sections from Sanity |
| `app/resources/page.tsx` | Fetch glossary categories from Sanity |
| `app/globals.css` | Remove `.reveal-up`, `.is-visible`, `.hero-animate` rules |
| `next.config.ts` | Add `cdn.sanity.io` to `remotePatterns` |
| `package.json` | Add `framer-motion`, `sanity`, `next-sanity` |

---

# Phase 1: Framer Motion

## Task 1: Install Framer Motion and create FadeUp component

**Files:**
- Modify: `package.json`
- Create: `components/ui/FadeUp.tsx`
- Create: `__tests__/components/ui/FadeUp.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/components/ui/FadeUp.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react'
import FadeUp from '@/components/ui/FadeUp'

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className }: React.HTMLAttributes<HTMLDivElement>) => (
      <div className={className} data-testid="fade-up">{children}</div>
    ),
    section: ({ children, className }: React.HTMLAttributes<HTMLElement>) => (
      <section className={className} data-testid="fade-up">{children}</section>
    ),
  },
  useInView: () => true,
  useReducedMotion: () => false,
}))

describe('FadeUp', () => {
  it('renders children', () => {
    render(<FadeUp><p>Hello world</p></FadeUp>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('passes className to wrapper', () => {
    render(<FadeUp className="my-section"><p>Content</p></FadeUp>)
    expect(screen.getByTestId('fade-up')).toHaveClass('my-section')
  })

  it('renders as a custom element when as prop is provided', () => {
    render(<FadeUp as="section"><p>Content</p></FadeUp>)
    expect(screen.getByTestId('fade-up').tagName).toBe('SECTION')
  })
})
```

- [ ] **Step 2: Run test to confirm it fails**

```bash
cd /Users/danielchristner/meadows-oil-gas-redesign
npx jest __tests__/components/ui/FadeUp.test.tsx --no-coverage
```

Expected: FAIL — "Cannot find module '@/components/ui/FadeUp'"

- [ ] **Step 3: Install Framer Motion**

```bash
npm install framer-motion
```

- [ ] **Step 4: Create `components/ui/FadeUp.tsx`**

```typescript
'use client'

import { ElementType, ReactNode, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface FadeUpProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
}

export default function FadeUp({ children, delay = 0, className = '', as: Tag = 'div' }: FadeUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const reduceMotion = useReducedMotion()

  const MotionTag = (motion[Tag as keyof typeof motion] ?? motion.div) as typeof motion.div

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduceMotion ? 0 : 24 }}
      transition={{ duration: 0.5, delay: delay / 1000, ease: 'easeOut' }}
    >
      {children}
    </MotionTag>
  )
}
```

- [ ] **Step 5: Run test to confirm it passes**

```bash
npx jest __tests__/components/ui/FadeUp.test.tsx --no-coverage
```

Expected: PASS (3 tests)

- [ ] **Step 6: Commit**

```bash
git add components/ui/FadeUp.tsx __tests__/components/ui/FadeUp.test.tsx package.json package-lock.json
git commit -m "feat: add FadeUp component with Framer Motion scroll-reveal"
```

---

## Task 2: Replace ScrollReveal with FadeUp across all components

**Files:**
- Modify: `components/home/TestimonialsSection.tsx`
- Modify: `components/home/CTASection.tsx`
- Modify: `components/home/ServicesPreview.tsx`
- Modify: `components/home/WhySection.tsx`
- Modify: `components/about/Timeline.tsx`
- Delete: `components/ui/ScrollReveal.tsx`
- Modify: `app/globals.css`

The swap is identical in every file. `FadeUp` accepts the same props as `ScrollReveal` (`children`, `delay`, `className`, `as`). The `delay` value is in milliseconds in both components.

- [ ] **Step 1: Update `components/home/TestimonialsSection.tsx`**

Change line 1:
```diff
-import ScrollReveal from '@/components/ui/ScrollReveal'
+import FadeUp from '@/components/ui/FadeUp'
```
Replace all `<ScrollReveal` with `<FadeUp` and all `</ScrollReveal>` with `</FadeUp>`.

- [ ] **Step 2: Update `components/home/CTASection.tsx`**

```diff
-import ScrollReveal from '@/components/ui/ScrollReveal'
+import FadeUp from '@/components/ui/FadeUp'
```
Replace all `<ScrollReveal` with `<FadeUp` and all `</ScrollReveal>` with `</FadeUp>`.

- [ ] **Step 3: Update `components/home/ServicesPreview.tsx`**

```diff
-import ScrollReveal from '@/components/ui/ScrollReveal'
+import FadeUp from '@/components/ui/FadeUp'
```
Replace all `<ScrollReveal` with `<FadeUp` and all `</ScrollReveal>` with `</FadeUp>`.

- [ ] **Step 4: Update `components/home/WhySection.tsx`**

```diff
-import ScrollReveal from '@/components/ui/ScrollReveal'
+import FadeUp from '@/components/ui/FadeUp'
```
Replace all `<ScrollReveal` with `<FadeUp` and all `</ScrollReveal>` with `</FadeUp>`.

- [ ] **Step 5: Update `components/about/Timeline.tsx`**

```diff
-import ScrollReveal from '@/components/ui/ScrollReveal'
+import FadeUp from '@/components/ui/FadeUp'
```
Replace all `<ScrollReveal` with `<FadeUp` and all `</ScrollReveal>` with `</FadeUp>`.

- [ ] **Step 6: Delete `components/ui/ScrollReveal.tsx`**

```bash
rm components/ui/ScrollReveal.tsx
```

- [ ] **Step 7: Remove old animation CSS from `app/globals.css`**

Remove these blocks entirely from `app/globals.css` (keep `scrollBounce` — it's still used by the scroll indicator in HeroSection):

```css
/* DELETE these blocks: */
.reveal-up {
  opacity: 0;
  transform: translateY(1.5rem);
  transition: opacity 0.55s ease, transform 0.55s ease;
}
.reveal-up.is-visible {
  opacity: 1;
  transform: none;
}
.hero-animate {
  /* entire block */
}
@media (prefers-reduced-motion: reduce) {
  .reveal-up { ... }
  .hero-animate { ... }
}
```

- [ ] **Step 8: Build check**

```bash
npm run build
```

Expected: clean build, 0 TypeScript errors.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: replace ScrollReveal with FadeUp (Framer Motion) across all components"
```

---

## Task 3: Create HeroParallax component

**Files:**
- Create: `components/home/HeroParallax.tsx`
- Create: `__tests__/components/home/HeroParallax.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/components/home/HeroParallax.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react'
import HeroParallax from '@/components/home/HeroParallax'

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, style }: React.HTMLAttributes<HTMLDivElement>) => (
      <div className={className} style={style} data-testid="parallax-bg">{children}</div>
    ),
  },
  useScroll: () => ({ scrollYProgress: { current: 0 } }),
  useTransform: () => '0%',
}))

describe('HeroParallax', () => {
  it('renders children inside the z-10 content layer', () => {
    render(
      <HeroParallax imageSrc="/test.jpg">
        <h1>Oil field hero</h1>
      </HeroParallax>
    )
    expect(screen.getByText('Oil field hero')).toBeInTheDocument()
  })

  it('renders the parallax background element', () => {
    render(
      <HeroParallax imageSrc="/test.jpg">
        <span>content</span>
      </HeroParallax>
    )
    expect(screen.getByTestId('parallax-bg')).toBeInTheDocument()
  })

  it('sets backgroundImage style from imageSrc prop', () => {
    render(
      <HeroParallax imageSrc="/images/hero.jpg">
        <span>content</span>
      </HeroParallax>
    )
    const bg = screen.getByTestId('parallax-bg')
    expect(bg).toHaveStyle({ backgroundImage: 'url(/images/hero.jpg)' })
  })
})
```

- [ ] **Step 2: Run test to confirm it fails**

```bash
npx jest __tests__/components/home/HeroParallax.test.tsx --no-coverage
```

Expected: FAIL — "Cannot find module '@/components/home/HeroParallax'"

- [ ] **Step 3: Create `components/home/HeroParallax.tsx`**

```typescript
'use client'

import { CSSProperties, ReactNode, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface HeroParallaxProps {
  children: ReactNode
  imageSrc: string
  className?: string
  style?: CSSProperties
}

export default function HeroParallax({ children, imageSrc, className = '', style }: HeroParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={style}>
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${imageSrc})`, y }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
```

- [ ] **Step 4: Run test to confirm it passes**

```bash
npx jest __tests__/components/home/HeroParallax.test.tsx --no-coverage
```

Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add components/home/HeroParallax.tsx __tests__/components/home/HeroParallax.test.tsx
git commit -m "feat: add HeroParallax component — oil field background parallax on scroll"
```

---

## Task 4: Refactor HeroSection to use HeroParallax and Framer Motion

**Files:**
- Modify: `components/home/HeroSection.tsx`

The current hero uses `next/image` with `fill` as the background. HeroParallax uses a CSS `background-image` on a `motion.div` to enable the parallax transform — this replaces the Image component for the background layer only. The trade-off (no WebP optimization for hero background) is acceptable since the image is always 100vw with no layout shift risk.

- [ ] **Step 1: Replace `components/home/HeroSection.tsx` entirely**

```typescript
'use client'

import Link from 'next/link'
import HeroParallax from '@/components/home/HeroParallax'
import { motion, useReducedMotion } from 'framer-motion'

export default function HeroSection() {
  const reduceMotion = useReducedMotion()

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } },
  }
  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  }

  return (
    <HeroParallax
      imageSrc="/images/hero.jpg"
      className="flex items-end"
      style={{ minHeight: 'calc(100dvh - 4.75rem)' }}
    >
      {/* Gradient overlays */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.1) 100%)' }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }}
      />

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
        style={{ animation: 'scrollBounce 2.2s ease-in-out infinite' }}
        aria-hidden="true"
      >
        <span style={{ fontFamily: 'var(--font-display)', color: 'rgba(200,146,26,0.6)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '2rem', background: 'linear-gradient(to bottom, rgba(200,146,26,0.6), transparent)' }} />
      </div>

      <div className="relative z-10 w-full container-max px-6 sm:px-8 lg:px-10 pb-20 md:pb-28">
        <motion.div className="max-w-2xl" variants={container} initial="hidden" animate="visible">

          {/* Badge */}
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 mb-6"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.65rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-brand-gold)',
              border: '1px solid rgba(200,146,26,0.35)',
              borderRadius: '9999px',
              padding: '0.35rem 0.875rem',
            }}
          >
            <span style={{ width: '0.4rem', height: '0.4rem', borderRadius: '9999px', backgroundColor: 'var(--color-brand-gold)', display: 'inline-block' }} />
            Oklahoma Land Services
          </motion.span>

          {/* Heading */}
          <h1
            className="text-white leading-none mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.75rem, 8vw, 6.5rem)', letterSpacing: '-0.02em', textTransform: 'uppercase', fontWeight: 800 }}
          >
            <motion.span variants={item} className="block">Trusted</motion.span>
            <motion.span variants={item} className="block">Land &amp;</motion.span>
            <motion.span variants={item} className="block" style={{ color: 'var(--color-brand-gold)' }}>Title Services</motion.span>
          </h1>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(0.75rem, 1.5vw, 1rem)', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}
          >
            Serving Operators Since 2009
          </motion.p>

          {/* Body copy */}
          <motion.p
            variants={item}
            className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
            style={{ fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
          >
            Precise, dependable land and title solutions that empower our clients to move with confidence.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="group inline-flex items-center justify-between gap-3"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#000',
                backgroundColor: 'var(--color-brand-gold)',
                borderRadius: '9999px',
                padding: '0.875rem 0.875rem 0.875rem 1.5rem',
                transition: 'background-color 0.4s cubic-bezier(0.32,0.72,0,1), transform 0.4s cubic-bezier(0.32,0.72,0,1)',
              }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'var(--color-brand-gold-light)'; el.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'var(--color-brand-gold)'; el.style.transform = 'translateY(0)' }}
            >
              Our Services
              <span className="flex items-center justify-center shrink-0" style={{ width: '2rem', height: '2rem', borderRadius: '9999px', backgroundColor: 'rgba(0,0,0,0.18)', fontSize: '0.875rem' }}>
                →
              </span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.35)',
                borderRadius: '9999px',
                padding: '0.875rem 1.75rem',
                transition: 'border-color 0.4s cubic-bezier(0.32,0.72,0,1), color 0.4s cubic-bezier(0.32,0.72,0,1), transform 0.4s cubic-bezier(0.32,0.72,0,1)',
              }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--color-brand-gold)'; el.style.color = 'var(--color-brand-gold)'; el.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.35)'; el.style.color = 'white'; el.style.transform = 'translateY(0)' }}
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </HeroParallax>
  )
}
```

- [ ] **Step 2: Build check**

```bash
npm run build
```

Expected: clean build. The hero now uses `HeroParallax` with Framer Motion stagger entrance — no more `hero-animate` CSS classes needed.

- [ ] **Step 3: Start dev server and verify visually**

```bash
npm run dev
```

Open http://localhost:3000. Confirm:
- Hero background oil field image is visible
- Badge, heading lines, tagline, body copy, and CTAs animate in sequentially on load
- Scrolling down causes the background image to move slower than the content (parallax depth effect)
- On a mobile viewport (375px), parallax still works smoothly

- [ ] **Step 4: Commit**

```bash
git add components/home/HeroSection.tsx
git commit -m "feat: add parallax oil field hero with Framer Motion stagger entrance"
```

---

## Task 5: Polish animations — page transitions, navbar scroll, card hover, stats stagger

**Files:**
- Modify: `app/layout.tsx`
- Modify: `components/layout/Navbar.tsx`
- Modify: `components/home/StatsBar.tsx`
- Modify: `components/home/ServicesPreview.tsx`
- Modify: `components/gallery/GalleryClient.tsx`

- [ ] **Step 1: Add AnimatePresence page transitions to `app/layout.tsx`**

Add `'use client'` to layout or create a `components/layout/PageTransition.tsx` client wrapper. Since `app/layout.tsx` is a Server Component and cannot be made a Client Component, create a thin client wrapper:

Create `components/layout/PageTransition.tsx`:

```typescript
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
```

In `app/layout.tsx`, import and wrap `{children}`:

```diff
+import PageTransition from '@/components/layout/PageTransition'

 // inside the <body>:
-  {children}
+  <PageTransition>{children}</PageTransition>
```

- [ ] **Step 2: Add scroll-triggered navbar effect to `components/layout/Navbar.tsx`**

Open `components/layout/Navbar.tsx`. The `<nav>` element likely already has `sticky top-0 z-[60] backdrop-blur`. Add a scroll listener to deepen the shadow and backdrop-blur on scroll:

Find the component's return statement and add a `useEffect` scroll handler. Add this before the `return`:

```typescript
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 10)
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}, [])
```

On the `<nav>` element, add the dynamic style:

```typescript
style={{
  boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.5)' : 'none',
  transition: 'box-shadow 0.3s ease',
}}
```

Add `useState` and `useEffect` to the imports from React if not already present. The file must have `'use client'` at the top (check; add if missing).

- [ ] **Step 3: Add stagger FadeUp to `components/home/StatsBar.tsx`**

Wrap the stats map in staggered `FadeUp` components. Replace the current `{stats.map(...)}` render:

```typescript
import FadeUp from '@/components/ui/FadeUp'

// Inside the map:
{stats.map(({ figure, label }, i) => (
  <FadeUp key={figure} delay={i * 80} className="flex items-center gap-0">
    {i > 0 && (
      <div style={{ width: '1px', height: '2rem', backgroundColor: 'rgba(0,0,0,0.12)', marginRight: 'clamp(0.5rem, 2vw, 2rem)' }} />
    )}
    <div style={{ textAlign: 'center' }}>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#000', lineHeight: 1, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
        {figure}
      </p>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(0,0,0,0.65)', marginTop: '0.125rem' }}>
        {label}
      </p>
    </div>
  </FadeUp>
))}
```

Note: `StatsBar` does not have a `'use client'` directive since `FadeUp` is already a Client Component and Next.js handles this automatically.

- [ ] **Step 4: Add hover lift to service cards in `components/home/ServicesPreview.tsx`**

Open `components/home/ServicesPreview.tsx`. Find the card element (likely a `<div>` or `<Link>` wrapper per service). Import `motion` and wrap each card in a `motion.div`:

```typescript
import { motion } from 'framer-motion'

// Wrap each card:
<motion.div
  whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
  transition={{ duration: 0.2, ease: 'easeOut' }}
>
  {/* existing card content */}
</motion.div>
```

The file must have `'use client'` at the top. Add it if missing.

- [ ] **Step 5: Add hover lift to gallery thumbnails in `components/gallery/GalleryClient.tsx`**

`GalleryClient` already has `'use client'`. Import `motion` and wrap each thumbnail div:

```typescript
import { motion } from 'framer-motion'

// Wrap the thumbnail container div:
<motion.div
  whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(0,0,0,0.35)' }}
  transition={{ duration: 0.2, ease: 'easeOut' }}
  className="cursor-pointer overflow-hidden rounded-lg"
  onClick={() => openLightbox(i)}
>
  {/* existing Image component */}
</motion.div>
```

- [ ] **Step 6: Build check**

```bash
npm run build
```

Expected: clean build, 0 TypeScript errors.

- [ ] **Step 7: Commit**

```bash
git add app/layout.tsx components/layout/ components/home/StatsBar.tsx components/home/ServicesPreview.tsx components/gallery/GalleryClient.tsx
git commit -m "feat: add AnimatePresence transitions, navbar scroll effect, card hover lifts, stats stagger"
```

---

## Task 6: Deploy Phase 1 and verify

**Files:** none

- [ ] **Step 1: Run full test suite**

```bash
npx jest --no-coverage
```

Expected: all tests pass.

- [ ] **Step 2: Deploy to production**

```bash
vercel --prod --yes
```

- [ ] **Step 3: Smoke check live site**

Open https://meadows-oil-gas-redesign.vercel.app. Confirm:
- Hero parallax works on desktop and mobile
- Scroll reveals on all pages (FadeUp) animate correctly
- Page transitions fade between routes
- Navbar shadow deepens on scroll
- Service card and gallery thumbnails lift on hover
- No console errors

---

# Phase 2: Sanity CMS

## Task 6: Create Sanity project and install packages

**Files:**
- Modify: `package.json`
- Create: `schemas/hero.ts`
- Create: `schemas/service.ts`
- Create: `schemas/galleryImage.ts`
- Create: `schemas/testimonial.ts`
- Create: `schemas/jobPosting.ts`
- Create: `schemas/faqItem.ts`
- Create: `schemas/glossaryTerm.ts`
- Create: `schemas/index.ts`
- Create: `sanity.config.ts`
- Create: `app/studio/[[...tool]]/page.tsx`

- [ ] **Step 1: Create Sanity project (browser)**

Go to https://sanity.io, sign in with Google, click "Create new project":
- Project name: `Meadows Oil Gas`
- Dataset: `production`
- Plan: Free
- Note the **Project ID** shown after creation (format: `abc123de`)

- [ ] **Step 2: Install packages**

```bash
npm install sanity next-sanity
```

- [ ] **Step 3: Create `schemas/hero.ts`**

```typescript
import { defineType, defineField } from 'sanity'

export const heroSchema = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({ name: 'headline', title: 'Headline', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'subheadline', title: 'Subheadline', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline (e.g. "Serving Operators Since 2009")', type: 'string' }),
    defineField({ name: 'bodyCopy', title: 'Body Copy', type: 'text', rows: 3 }),
    defineField({ name: 'primaryCtaText', title: 'Primary CTA Text', type: 'string' }),
    defineField({ name: 'secondaryCtaText', title: 'Secondary CTA Text', type: 'string' }),
    defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
  ],
})
```

- [ ] **Step 4: Create `schemas/service.ts`**

```typescript
import { defineType, defineField } from 'sanity'

export const serviceSchema = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['brokerage', 'technical', 'wind'] } }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'bulletPoints', title: 'Bullet Points', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'deliverables', title: 'Deliverables', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'displayOrder', title: 'Display Order', type: 'number' }),
  ],
})
```

- [ ] **Step 5: Create `schemas/galleryImage.ts`**

```typescript
import { defineType, defineField } from 'sanity'

export const galleryImageSchema = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({ name: 'alt', title: 'Alt Text', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'caption', title: 'Caption (optional)', type: 'string' }),
    defineField({ name: 'displayOrder', title: 'Display Order', type: 'number' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, validation: (r) => r.required() }),
  ],
  orderings: [{ title: 'Display Order', name: 'displayOrderAsc', by: [{ field: 'displayOrder', direction: 'asc' }] }],
})
```

- [ ] **Step 6: Create `schemas/testimonial.ts`**

```typescript
import { defineType, defineField } from 'sanity'

export const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'author', title: 'Author Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Role / Title', type: 'string' }),
    defineField({ name: 'company', title: 'Company', type: 'string' }),
    defineField({ name: 'displayOrder', title: 'Display Order', type: 'number' }),
  ],
})
```

- [ ] **Step 7: Create `schemas/jobPosting.ts`**

```typescript
import { defineType, defineField } from 'sanity'

export const jobPostingSchema = defineType({
  name: 'jobPosting',
  title: 'Job Posting',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Job Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'employmentType', title: 'Employment Type', type: 'string', options: { list: ['CONTRACT', 'FULL_TIME', 'PART_TIME'] } }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 6 }),
    defineField({ name: 'requirements', title: 'Requirements', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'active', title: 'Active (visible on site)', type: 'boolean', initialValue: true }),
  ],
})
```

- [ ] **Step 8: Create `schemas/faqItem.ts`**

```typescript
import { defineType, defineField } from 'sanity'

export const faqItemSchema = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 5, validation: (r) => r.required() }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['scope', 'title', 'leasing', 'wind', 'logistics'] } }),
    defineField({ name: 'displayOrder', title: 'Display Order', type: 'number' }),
  ],
})
```

- [ ] **Step 9: Create `schemas/glossaryTerm.ts`**

```typescript
import { defineType, defineField } from 'sanity'

export const glossaryTermSchema = defineType({
  name: 'glossaryTerm',
  title: 'Glossary Term',
  type: 'document',
  fields: [
    defineField({ name: 'term', title: 'Term', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'definition', title: 'Definition', type: 'text', rows: 5, validation: (r) => r.required() }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['title', 'leasing', 'operations', 'wind'] } }),
  ],
})
```

- [ ] **Step 10: Create `schemas/index.ts`**

```typescript
import { heroSchema } from './hero'
import { serviceSchema } from './service'
import { galleryImageSchema } from './galleryImage'
import { testimonialSchema } from './testimonial'
import { jobPostingSchema } from './jobPosting'
import { faqItemSchema } from './faqItem'
import { glossaryTermSchema } from './glossaryTerm'

export const schemas = [
  heroSchema,
  serviceSchema,
  galleryImageSchema,
  testimonialSchema,
  jobPostingSchema,
  faqItemSchema,
  glossaryTermSchema,
]
```

- [ ] **Step 11: Create `sanity.config.ts`**

Replace `YOUR_PROJECT_ID` with the Project ID from Step 1:

```typescript
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemas } from './schemas'

export default defineConfig({
  name: 'meadows-oil-gas',
  title: 'Meadows Oil & Gas',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  plugins: [structureTool()],
  schema: { types: schemas },
  basePath: '/studio',
})
```

- [ ] **Step 12: Create `app/studio/[[...tool]]/page.tsx`**

```typescript
'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
```

- [ ] **Step 13: Create `.env.local`** (if it doesn't exist)

```bash
# .env.local — NOT committed to git
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

Replace `your_project_id_here` with the ID from Step 1.

- [ ] **Step 14: Build check**

```bash
npm run build
```

Expected: clean build. The `/studio` route now exists.

- [ ] **Step 15: Commit schemas and config**

```bash
git add schemas/ sanity.config.ts app/studio/ package.json package-lock.json
git commit -m "feat: add Sanity schemas, Studio route, and project config"
```

---

## Task 7: Create Sanity client, types, and queries

**Files:**
- Create: `lib/sanity/client.ts`
- Create: `lib/sanity/types.ts`
- Create: `lib/sanity/queries.ts`

- [ ] **Step 1: Create `lib/sanity/types.ts`**

```typescript
export interface SanityImageAsset {
  _ref: string
  _type: 'reference'
}

export interface SanityImage {
  _type: 'image'
  asset: SanityImageAsset
  hotspot?: { x: number; y: number; height: number; width: number }
}

export interface SanityHero {
  headline: string
  subheadline?: string
  tagline?: string
  bodyCopy?: string
  primaryCtaText?: string
  secondaryCtaText?: string
  backgroundImage?: SanityImage
}

export interface SanityService {
  _id: string
  title: string
  slug: { current: string }
  category: 'brokerage' | 'technical' | 'wind'
  description?: string
  bulletPoints?: string[]
  deliverables?: string[]
  displayOrder?: number
}

export interface SanityGalleryImage {
  _id: string
  alt: string
  caption?: string
  displayOrder?: number
  image: SanityImage
  imageUrl: string
}

export interface SanityTestimonial {
  _id: string
  quote: string
  author: string
  role?: string
  company?: string
  displayOrder?: number
}

export interface SanityJobPosting {
  _id: string
  title: string
  employmentType: 'CONTRACT' | 'FULL_TIME' | 'PART_TIME'
  description?: string
  requirements?: string[]
  active: boolean
}

export interface SanityFaqItem {
  _id: string
  question: string
  answer: string
  category: 'scope' | 'title' | 'leasing' | 'wind' | 'logistics'
  displayOrder?: number
}

export interface SanityGlossaryTerm {
  _id: string
  term: string
  definition: string
  category: 'title' | 'leasing' | 'operations' | 'wind'
}
```

- [ ] **Step 2: Create `lib/sanity/client.ts`**

```typescript
import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})
```

- [ ] **Step 3: Create `lib/sanity/queries.ts`**

```typescript
// Hero
export const heroQuery = `*[_type == "hero"][0] {
  headline, subheadline, tagline, bodyCopy,
  primaryCtaText, secondaryCtaText, backgroundImage
}`

// Services
export const servicesQuery = `*[_type == "service"] | order(displayOrder asc) {
  _id, title, slug, category, description, bulletPoints, deliverables, displayOrder
}`

export const servicesByCategoryQuery = (category: string) =>
  `*[_type == "service" && category == "${category}"] | order(displayOrder asc) {
    _id, title, slug, description, bulletPoints, deliverables
  }`

// Gallery
export const galleryQuery = `*[_type == "galleryImage"] | order(displayOrder asc) {
  _id, alt, caption, displayOrder,
  "imageUrl": image.asset->url
}`

// Testimonials
export const testimonialsQuery = `*[_type == "testimonial"] | order(displayOrder asc) {
  _id, quote, author, role, company
}`

// Jobs
export const jobPostingsQuery = `*[_type == "jobPosting" && active == true] {
  _id, title, employmentType, description, requirements
}`

// FAQ
export const faqQuery = `*[_type == "faqItem"] | order(category asc, displayOrder asc) {
  _id, question, answer, category
}`

// Glossary
export const glossaryQuery = `*[_type == "glossaryTerm"] | order(category asc, term asc) {
  _id, term, definition, category
}`
```

- [ ] **Step 4: Add `cdn.sanity.io` to `next.config.ts` remotePatterns**

In `next.config.ts`, replace the `images` block:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.sanity.io',
    },
  ],
},
```

- [ ] **Step 5: Build check**

```bash
npm run build
```

Expected: clean build.

- [ ] **Step 6: Commit**

```bash
git add lib/sanity/ next.config.ts
git commit -m "feat: add Sanity client, types, and GROQ queries"
```

---

## Task 8: Seed Sanity with current content (manual)

**Files:** none (data entry in Sanity Studio)

Before wiring pages, populate Sanity with the current hardcoded content so the site doesn't go blank on migration.

- [ ] **Step 1: Start dev server and open Studio**

```bash
npm run dev
```

Open http://localhost:3000/studio. Sign in with your Sanity account.

- [ ] **Step 2: Create Hero document**

In Studio → Hero Section → New:
- Headline: `Trusted`  (second line: `Land &`, third line: `Title Services` — note: this is all one string in the current site, so set headline to `Trusted Land & Title Services` and the component will handle display)
- Tagline: `Serving Operators Since 2009`
- Body Copy: `Precise, dependable land and title solutions that empower our clients to move with confidence.`
- Primary CTA Text: `Our Services`
- Secondary CTA Text: `Contact Us`
- Background Image: upload `public/images/hero.jpg`

- [ ] **Step 3: Create Testimonial documents**

Create 3 testimonials matching the current hardcoded data in `components/home/TestimonialsSection.tsx`:
1. Quote: "Meadows delivered our Oklahoma title opinions..." / Author: "R. Hartley" / Role: "Land Manager" / Company: "Sunbelt Petroleum Corp."
2. Quote: "We engaged Meadows for a title run..." / Author: "D. Vasquez" / Role: "Sr. Land Acquisitions" / Company: "Midcontinent Energy Partners"
3. Quote: "For wind lease aggregation..." / Author: "T. Morrison" / Role: "Project Development Lead" / Company: "Highplains Wind Partners"

- [ ] **Step 4: Create Job Posting documents**

Create the 2 active job postings matching `app/careers/page.tsx` current content (Contract Landman and GIS Specialist). Set both to Active: true.

- [ ] **Step 5: Create FAQ Item documents**

Migrate all 20 FAQ items from `app/faq/page.tsx` sections array into individual FAQ Item documents. Use the section `id` as the `category` value (`scope`, `title`, `leasing`, `wind`, `logistics`).

- [ ] **Step 6: Create Glossary Term documents**

Migrate all 21 glossary terms from `app/resources/page.tsx` categories array into individual Glossary Term documents. Map category IDs: `title` → `title`, `leasing` → `leasing`, `operations` → `operations`, `wind` → `wind`.

- [ ] **Step 7: Verify all data in Studio**

Check each content type in Studio has the correct number of documents:
- Hero: 1
- Testimonials: 3
- Job Postings: 2
- FAQ Items: 20
- Glossary Terms: 21

---

## Task 9: Wire TestimonialsSection to Sanity

**Files:**
- Modify: `components/home/TestimonialsSection.tsx`
- Modify: `app/page.tsx`

The page is a Server Component — it fetches data and passes it as a prop. `TestimonialsSection` becomes a pure display component.

- [ ] **Step 1: Refactor `components/home/TestimonialsSection.tsx`**

Replace the hardcoded `testimonials` array and make the component accept props:

```typescript
import FadeUp from '@/components/ui/FadeUp'
import type { SanityTestimonial } from '@/lib/sanity/types'

interface Props {
  testimonials: SanityTestimonial[]
}

export default function TestimonialsSection({ testimonials }: Props) {
  return (
    <section style={{ backgroundColor: 'var(--color-brand-surface)', borderTop: '1px solid rgba(212,151,26,0.1)' }}>
      <div className="container-max px-6 sm:px-8" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <FadeUp>
          <div className="mb-12">
            <span className="section-label">Client Perspective</span>
            <h2 className="section-title" style={{ color: 'white' }}>What Operators Say</h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ _id, quote, author, role, company }, i) => (
            <FadeUp key={_id} delay={i * 100}>
              <div className="flex flex-col h-full p-8 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', lineHeight: 0.8, color: 'var(--color-brand-gold)', opacity: 0.4, marginBottom: '1.25rem', userSelect: 'none' }} aria-hidden="true">&ldquo;</div>
                <blockquote className="flex-1">
                  <p className="leading-relaxed text-sm mb-6" style={{ color: 'rgba(209,213,219,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>
                    {quote}
                  </p>
                </blockquote>
                <footer>
                  <div style={{ width: '2rem', height: '1px', backgroundColor: 'var(--color-brand-gold)', opacity: 0.4, marginBottom: '0.75rem' }} />
                  <p className="text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-gold)' }}>{author}</p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)' }}>{role} · {company}</p>
                </footer>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Fetch testimonials in `app/page.tsx`**

```typescript
import type { Metadata } from 'next'
import { sanityClient } from '@/lib/sanity/client'
import { testimonialsQuery } from '@/lib/sanity/queries'
import type { SanityTestimonial } from '@/lib/sanity/types'
import HeroSection from '@/components/home/HeroSection'
import StatsBar from '@/components/home/StatsBar'
import WhySection from '@/components/home/WhySection'
import ServicesPreview from '@/components/home/ServicesPreview'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import LinkedInStrip from '@/components/home/LinkedInStrip'
import CTASection from '@/components/home/CTASection'
import ProcessSection from '@/components/home/ProcessSection'
import ClientTypesSection from '@/components/home/ClientTypesSection'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default async function HomePage() {
  const testimonials = await sanityClient.fetch<SanityTestimonial[]>(testimonialsQuery)

  return (
    <>
      <HeroSection />
      <StatsBar />
      <WhySection />
      <ServicesPreview />
      <ClientTypesSection />
      <ProcessSection />
      <TestimonialsSection testimonials={testimonials} />
      <LinkedInStrip />
      <CTASection />
    </>
  )
}
```

- [ ] **Step 3: Build check**

```bash
npm run build
```

Expected: clean build.

- [ ] **Step 4: Commit**

```bash
git add components/home/TestimonialsSection.tsx app/page.tsx
git commit -m "feat: wire TestimonialsSection to Sanity CMS"
```

---

## Task 10: Wire gallery page to Sanity

**Files:**
- Modify: `components/gallery/GalleryClient.tsx`
- Modify: `app/gallery/page.tsx`

- [ ] **Step 1: Refactor `components/gallery/GalleryClient.tsx` to accept props**

Find the `const images = [...]` array at the top of `components/gallery/GalleryClient.tsx`. Replace with a prop:

```typescript
// Change the component signature from:
export default function GalleryClient() {

// To:
interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface Props {
  images: GalleryImage[]
}

export default function GalleryClient({ images }: Props) {
```

Remove the hardcoded `const images = [...]` array from the file. The rest of the component logic remains unchanged.

- [ ] **Step 2: Update `app/gallery/page.tsx` to fetch from Sanity**

```typescript
import type { Metadata } from 'next'
import GalleryClient from '@/components/gallery/GalleryClient'
import { sanityClient } from '@/lib/sanity/client'
import { galleryQuery } from '@/lib/sanity/queries'
import type { SanityGalleryImage } from '@/lib/sanity/types'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Field operations photography from Meadows Oil & Gas — land services across Oklahoma, Kansas, and Texas.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Field Operations Gallery | Meadows Oil and Gas',
    description: 'Field operations photography from Meadows Oil & Gas — land services across Oklahoma, Kansas, and Texas.',
  },
}

const gallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Meadows Oil & Gas — Field Operations Gallery',
  description: 'Field operations photography from Meadows Oil & Gas — land services across Oklahoma, Kansas, and Texas.',
  url: 'https://meadows-oil-gas-redesign.vercel.app/gallery',
}

export default async function GalleryPage() {
  const sanityImages = await sanityClient.fetch<SanityGalleryImage[]>(galleryQuery)

  const images = sanityImages.length > 0
    ? sanityImages.map((img) => ({ src: img.imageUrl, alt: img.alt, caption: img.caption }))
    : Array.from({ length: 15 }, (_, i) => ({
        src: `/images/gallery-${String(i + 1).padStart(2, '0')}.jpg`,
        alt: `Meadows Oil and Gas field operations ${i + 1}`,
      }))

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(gallerySchema).replace(/&/g, '\\u0026')}</script>
      <GalleryClient images={images} />
    </>
  )
}
```

The fallback array keeps the local `/images/gallery-*.jpg` files working until real photos are uploaded to Sanity.

- [ ] **Step 3: Build check**

```bash
npm run build
```

Expected: clean build.

- [ ] **Step 4: Commit**

```bash
git add components/gallery/GalleryClient.tsx app/gallery/page.tsx
git commit -m "feat: wire gallery page to Sanity CMS with local image fallback"
```

---

## Task 11: Wire careers page to Sanity

**Files:**
- Modify: `app/careers/page.tsx`

The careers page has a large hardcoded job array. Find the `jobs` or `positions` array in the file and replace the page export with an async function that fetches from Sanity.

- [ ] **Step 1: Add Sanity fetch to `app/careers/page.tsx`**

Add these imports at the top:
```typescript
import { sanityClient } from '@/lib/sanity/client'
import { jobPostingsQuery } from '@/lib/sanity/queries'
import type { SanityJobPosting } from '@/lib/sanity/types'
```

Change `export default function CareersPage()` to `export default async function CareersPage()`.

Add at the top of the function body:
```typescript
const jobs = await sanityClient.fetch<SanityJobPosting[]>(jobPostingsQuery)
```

Replace the hardcoded jobs array reference with the fetched `jobs` variable. The shape matches: `title`, `employmentType` (maps to display type), `description`, `requirements`.

- [ ] **Step 2: Build check**

```bash
npm run build
```

Expected: clean build.

- [ ] **Step 3: Commit**

```bash
git add app/careers/page.tsx
git commit -m "feat: wire careers page to Sanity CMS"
```

---

## Task 12: Wire FAQ and resources pages to Sanity

**Files:**
- Modify: `app/faq/page.tsx`
- Modify: `app/resources/page.tsx`

- [ ] **Step 1: Add Sanity fetch to `app/faq/page.tsx`**

Add imports:
```typescript
import { sanityClient } from '@/lib/sanity/client'
import { faqQuery } from '@/lib/sanity/queries'
import type { SanityFaqItem } from '@/lib/sanity/types'
```

Change `export default function FaqPage()` to `export default async function FaqPage()`.

Add at the top of the function body:
```typescript
const faqItems = await sanityClient.fetch<SanityFaqItem[]>(faqQuery)

// Group by category to match the existing sections structure
const sectionOrder = ['scope', 'title', 'leasing', 'wind', 'logistics'] as const
const sectionLabels: Record<string, string> = {
  scope: 'Project Scope',
  title: 'Title Services',
  leasing: 'Leasing',
  wind: 'Wind & Renewables',
  logistics: 'Logistics & Process',
}
const sections = sectionOrder.map((id) => ({
  id,
  label: sectionLabels[id],
  items: faqItems
    .filter((item) => item.category === id)
    .map((item) => ({ q: item.question, a: item.answer })),
})).filter((s) => s.items.length > 0)
```

Replace the hardcoded `const sections: Section[]` with the `sections` variable derived above.

- [ ] **Step 2: Add Sanity fetch to `app/resources/page.tsx`**

Add imports:
```typescript
import { sanityClient } from '@/lib/sanity/client'
import { glossaryQuery } from '@/lib/sanity/queries'
import type { SanityGlossaryTerm } from '@/lib/sanity/types'
```

Change `export default function ResourcesPage()` to `export default async function ResourcesPage()`.

Add at the top of the function body:
```typescript
const terms = await sanityClient.fetch<SanityGlossaryTerm[]>(glossaryQuery)

const categoryOrder = ['title', 'leasing', 'operations', 'wind'] as const
const categoryLabels: Record<string, string> = {
  title: 'Title & Ownership',
  leasing: 'Leasing',
  operations: 'Operations',
  wind: 'Wind & Renewables',
}
const categories = categoryOrder.map((id) => ({
  id,
  label: categoryLabels[id],
  terms: terms.filter((t) => t.category === id).map((t) => ({ term: t.term, definition: t.definition })),
})).filter((c) => c.terms.length > 0)
```

Replace the hardcoded `const categories: Category[]` with the `categories` variable above.

- [ ] **Step 3: Build check**

```bash
npm run build
```

Expected: clean build.

- [ ] **Step 4: Commit**

```bash
git add app/faq/page.tsx app/resources/page.tsx
git commit -m "feat: wire FAQ and resources pages to Sanity CMS"
```

---

## Task 13: Add Vercel env vars and configure deploy webhook

**Files:** none (Vercel dashboard + Sanity dashboard)

- [ ] **Step 1: Add env vars to Vercel**

Go to https://vercel.com/danielchristner49-4019s-projects/meadows-oil-gas-redesign → Settings → Environment Variables.

Add for all environments (Production, Preview, Development):
- `NEXT_PUBLIC_SANITY_PROJECT_ID` → your project ID (e.g. `abc123de`)
- `NEXT_PUBLIC_SANITY_DATASET` → `production`

- [ ] **Step 2: Create a Vercel deploy hook**

In Vercel → Settings → Git → Deploy Hooks:
- Hook Name: `Sanity Publish`
- Branch: `main`
- Copy the generated URL (format: `https://api.vercel.com/v1/integrations/deploy/...`)

- [ ] **Step 3: Add deploy webhook in Sanity**

Go to https://sanity.io → your project → API → Webhooks → Add Webhook:
- Name: `Vercel Deploy`
- URL: paste the Vercel deploy hook URL from Step 2
- Trigger on: Create, Update, Delete
- Filter: leave blank (trigger on all document types)
- HTTP method: POST
- Click Save

- [ ] **Step 4: Test the webhook**

In Sanity Studio (http://localhost:3000/studio), edit a testimonial (change one word) and hit Publish. Check the Vercel dashboard — a new production deployment should start within ~5 seconds.

- [ ] **Step 5: Deploy to production with env vars**

```bash
vercel --prod --yes
```

- [ ] **Step 6: Verify end-to-end**

Open https://meadows-oil-gas-redesign.vercel.app. Confirm:
- All pages load correctly with Sanity data
- Gallery, careers, FAQ, resources all show real content
- In Sanity Studio, edit a testimonial and publish — wait 30–60 seconds — the live site reflects the change

---
