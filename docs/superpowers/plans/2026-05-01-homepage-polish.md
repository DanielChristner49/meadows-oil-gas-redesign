# Homepage Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polish the existing four-section homepage by refining the hero, adding a gold stats bar, improving service card styling, adding a LinkedIn strip, and tweaking the CTA — all matching the approved design spec.

**Architecture:** Each section is an independent React component in `components/home/`. The homepage (`app/page.tsx`) composes them in order. `StatsBar.tsx` is repurposed from its old content to the new gold bar. `LinkedInStrip.tsx` is created fresh. All styling uses inline styles (existing project pattern — no Tailwind classes for component-level styles).

**Tech Stack:** Next.js 16 App Router, React, TypeScript, Tailwind v4 (utility classes only), Jest + React Testing Library

---

## File Map

| Action | File | What changes |
|--------|------|-------------|
| Modify | `app/page.tsx` | Add `<StatsBar />` and `<LinkedInStrip />` imports + JSX |
| Modify | `components/home/HeroSection.tsx` | Badge, heading size/weight, tagline color/spacing, body copy, CTA padding + arrow, gradient |
| Modify | `components/home/StatsBar.tsx` | Full rewrite — replace old navy stats with gold 4-column bar |
| Modify | `components/home/WhySection.tsx` | Card box-shadow value only |
| Modify | `components/home/ServicesPreview.tsx` | Card border-radius, always-visible border, ghost number absolute positioning |
| Modify | `components/home/CTASection.tsx` | Heading font-size, subline letter-spacing, button inner arrow |
| Create | `components/home/LinkedInStrip.tsx` | New slim dark strip with LinkedIn button |
| Modify | `__tests__/components/StatsBar.test.tsx` | Update assertions to match new gold bar content |
| Modify | `__tests__/components/ServicesPreview.test.tsx` | Update assertions to match current service names |
| Modify | `__tests__/components/HeroSection.test.tsx` | Update headline assertion to match current text |
| Create | `__tests__/components/LinkedInStrip.test.tsx` | Tests for new component |

---

## Task 1: Update stale tests to match current component content

The codebase has tests written for older content. Fix them before touching components so the baseline is green.

**Files:**
- Modify: `__tests__/components/HeroSection.test.tsx`
- Modify: `__tests__/components/ServicesPreview.test.tsx`
- Modify: `__tests__/components/StatsBar.test.tsx`

- [ ] **Step 1: Run the current test suite to see what's failing**

```bash
cd ~/meadows-oil-gas-redesign && npx jest --no-coverage 2>&1 | tail -40
```

- [ ] **Step 2: Replace `__tests__/components/HeroSection.test.tsx`**

```tsx
import { render, screen } from '@testing-library/react'
import HeroSection from '@/components/home/HeroSection'

describe('HeroSection', () => {
  it('renders AI Infrastructure headline', () => {
    render(<HeroSection />)
    expect(screen.getByText(/AI INFRASTRUCTURE/i)).toBeInTheDocument()
  })

  it('renders tagline', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Turning Your Vision Into Reality/i)).toBeInTheDocument()
  })

  it('renders CTA link to /services', () => {
    render(<HeroSection />)
    const link = screen.getByRole('link', { name: /Our Services/i })
    expect(link).toHaveAttribute('href', '/services')
  })

  it('renders contact CTA link', () => {
    render(<HeroSection />)
    expect(screen.getByRole('link', { name: /Contact Us/i })).toBeInTheDocument()
  })
})
```

- [ ] **Step 3: Replace `__tests__/components/ServicesPreview.test.tsx`**

```tsx
import { render, screen } from '@testing-library/react'
import ServicesPreview from '@/components/home/ServicesPreview'

describe('ServicesPreview', () => {
  it('renders Leasing & Acquisitions card', () => {
    render(<ServicesPreview />)
    expect(screen.getByText(/Leasing & Acquisitions/i)).toBeInTheDocument()
  })

  it('renders Title Services card', () => {
    render(<ServicesPreview />)
    expect(screen.getByText(/Title Services/i)).toBeInTheDocument()
  })

  it('renders AI Data Center Development card', () => {
    render(<ServicesPreview />)
    expect(screen.getByText(/AI Data Center Development/i)).toBeInTheDocument()
  })

  it('all service cards link to /services', () => {
    render(<ServicesPreview />)
    const links = screen.getAllByRole('link', { name: /Learn More/i })
    links.forEach(link => expect(link).toHaveAttribute('href', '/services'))
  })
})
```

- [ ] **Step 4: Replace `__tests__/components/StatsBar.test.tsx` with a placeholder that will be updated in Task 2**

```tsx
import { render, screen } from '@testing-library/react'
import StatsBar from '@/components/home/StatsBar'

// Tests updated in Task 2 to match the new gold stats bar
describe('StatsBar', () => {
  it('placeholder — updated in Task 2', () => {
    expect(true).toBe(true)
  })
})
```

- [ ] **Step 5: Run tests — all previously-failing component tests should now pass**

```bash
npx jest __tests__/components/HeroSection.test.tsx __tests__/components/ServicesPreview.test.tsx __tests__/components/StatsBar.test.tsx --no-coverage
```

Expected: All PASS (placeholder test passes trivially)

- [ ] **Step 6: Commit**

```bash
git add __tests__/components/HeroSection.test.tsx __tests__/components/ServicesPreview.test.tsx __tests__/components/StatsBar.test.tsx
git commit -m "test: update stale component tests to match current content"
```

---

## Task 2: Rewrite StatsBar as the gold stats bar

**Files:**
- Modify: `components/home/StatsBar.tsx`
- Modify: `__tests__/components/StatsBar.test.tsx`

- [ ] **Step 1: Write the failing tests**

Replace `__tests__/components/StatsBar.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import StatsBar from '@/components/home/StatsBar'

describe('StatsBar', () => {
  it('renders Established year', () => {
    render(<StatsBar />)
    expect(screen.getByText('2009')).toBeInTheDocument()
  })

  it('renders experience figure', () => {
    render(<StatsBar />)
    expect(screen.getByText('10+')).toBeInTheDocument()
  })

  it('renders coverage states', () => {
    render(<StatsBar />)
    expect(screen.getByText(/OK.*KS.*TX/i)).toBeInTheDocument()
  })

  it('renders core services count', () => {
    render(<StatsBar />)
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText(/Core Services/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npx jest __tests__/components/StatsBar.test.tsx --no-coverage
```

Expected: FAIL (old component renders different text)

- [ ] **Step 3: Rewrite `components/home/StatsBar.tsx`**

```tsx
const stats = [
  { figure: '2009', label: 'Established' },
  { figure: '10+', label: 'Yrs Per Landman' },
  { figure: 'OK · KS · TX', label: '& Beyond' },
  { figure: '3', label: 'Core Services' },
]

export default function StatsBar() {
  return (
    <section style={{ backgroundColor: '#c8921a' }}>
      <div
        className="container-max"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '0.625rem 1.5rem',
        }}
      >
        {stats.map(({ figure, label }, i) => (
          <>
            {i > 0 && (
              <div
                key={`divider-${i}`}
                style={{ width: '1px', height: '2rem', backgroundColor: 'rgba(0,0,0,0.12)' }}
              />
            )}
            <div key={figure} style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontWeight: 800,
                  color: '#000',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {figure}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'rgba(0,0,0,0.65)',
                  marginTop: '0.125rem',
                }}
              >
                {label}
              </p>
            </div>
          </>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npx jest __tests__/components/StatsBar.test.tsx --no-coverage
```

Expected: All 4 PASS

- [ ] **Step 5: Commit**

```bash
git add components/home/StatsBar.tsx __tests__/components/StatsBar.test.tsx
git commit -m "feat: rewrite StatsBar as gold stats bar (2009, 10+, OK·KS·TX, 3 services)"
```

---

## Task 3: Create LinkedInStrip component

**Files:**
- Create: `components/home/LinkedInStrip.tsx`
- Create: `__tests__/components/LinkedInStrip.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/components/LinkedInStrip.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import LinkedInStrip from '@/components/home/LinkedInStrip'

describe('LinkedInStrip', () => {
  it('renders "Follow our work" label', () => {
    render(<LinkedInStrip />)
    expect(screen.getByText(/Follow our work/i)).toBeInTheDocument()
  })

  it('renders LinkedIn link to company page', () => {
    render(<LinkedInStrip />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/company/meadowsoil')
  })

  it('LinkedIn link opens in new tab', () => {
    render(<LinkedInStrip />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx jest __tests__/components/LinkedInStrip.test.tsx --no-coverage
```

Expected: FAIL — module not found

- [ ] **Step 3: Create `components/home/LinkedInStrip.tsx`**

```tsx
export default function LinkedInStrip() {
  return (
    <section
      style={{
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid #1e1e1e',
        borderBottom: '1px solid #1e1e1e',
      }}
    >
      <div
        className="container-max"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.625rem 1.5rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.625rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#aaa',
          }}
        >
          Follow our work
        </p>

        <a
          href="https://www.linkedin.com/company/meadowsoil"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem',
            backgroundColor: '#0077b5',
            borderRadius: '0.375rem',
            padding: '0.375rem 0.75rem',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.875rem',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1,
            }}
          >
            in
          </span>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.625rem',
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '0.03em',
            }}
          >
            Meadows Oil &amp; Gas
          </span>
        </a>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npx jest __tests__/components/LinkedInStrip.test.tsx --no-coverage
```

Expected: All 3 PASS

- [ ] **Step 5: Commit**

```bash
git add components/home/LinkedInStrip.tsx __tests__/components/LinkedInStrip.test.tsx
git commit -m "feat: add LinkedInStrip component linking to company LinkedIn"
```

---

## Task 4: Wire StatsBar and LinkedInStrip into the homepage

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Update `app/page.tsx`**

```tsx
import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import StatsBar from '@/components/home/StatsBar'
import WhySection from '@/components/home/WhySection'
import ServicesPreview from '@/components/home/ServicesPreview'
import LinkedInStrip from '@/components/home/LinkedInStrip'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <WhySection />
      <ServicesPreview />
      <LinkedInStrip />
      <CTASection />
    </>
  )
}
```

- [ ] **Step 2: Run the build to verify no TypeScript errors**

```bash
npx next build 2>&1 | tail -20
```

Expected: `✓ Generating static pages` with no type errors

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add StatsBar and LinkedInStrip to homepage"
```

---

## Task 5: Polish HeroSection

**Files:**
- Modify: `components/home/HeroSection.tsx`

- [ ] **Step 1: Apply all hero refinements to `components/home/HeroSection.tsx`**

Replace the file content:

```tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section
      className="relative flex items-end overflow-hidden"
      style={{ minHeight: 'calc(100dvh - 4.75rem)' }}
    >
      <Image
        src="/images/hero.jpg"
        alt="Meadows Oil and Gas operations"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.1) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
        }}
      />

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
        style={{ animation: 'scrollBounce 2.2s ease-in-out infinite' }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            color: 'rgba(200,146,26,0.6)',
            fontSize: '0.55rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '2rem',
            background: 'linear-gradient(to bottom, rgba(200,146,26,0.6), transparent)',
          }}
        />
      </div>

      <div className="relative z-10 w-full container-max px-6 sm:px-8 lg:px-10 pb-20 md:pb-28">
        <div className="max-w-2xl">

          {/* Badge — border only, no fill */}
          <span
            className="hero-animate inline-flex items-center gap-2 mb-6"
            style={{
              animationDelay: '0ms',
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
            <span
              style={{
                width: '0.4rem',
                height: '0.4rem',
                borderRadius: '9999px',
                backgroundColor: 'var(--color-brand-gold)',
                display: 'inline-block',
              }}
            />
            Data Center Development
          </span>

          {/* Heading — larger, tighter tracking */}
          <h1
            className="text-white leading-none mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.75rem, 8vw, 6.5rem)',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              fontWeight: 800,
            }}
          >
            <span className="hero-animate block" style={{ animationDelay: '100ms' }}>
              For Advanced
            </span>
            <span className="hero-animate block" style={{ animationDelay: '180ms' }}>
              Computing &amp;
            </span>
            <span
              className="hero-animate block"
              style={{ animationDelay: '260ms', color: 'var(--color-brand-gold)' }}
            >
              AI Infrastructure
            </span>
          </h1>

          {/* Tagline — brighter, wider spacing */}
          <p
            className="hero-animate mb-4"
            style={{
              animationDelay: '320ms',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'rgba(255,255,255,0.85)',
              fontWeight: 500,
            }}
          >
            Turning Your Vision Into Reality
          </p>

          {/* Body copy — one sentence */}
          <p
            className="hero-animate text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
            style={{
              animationDelay: '400ms',
              fontFamily: 'var(--font-sans)',
              textTransform: 'none',
              letterSpacing: 'normal',
            }}
          >
            Precise, dependable land and title solutions that empower our clients to move
            with confidence.
          </p>

          <div className="hero-animate flex flex-col sm:flex-row gap-4" style={{ animationDelay: '480ms' }}>
            {/* Primary CTA — taller, inner arrow */}
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
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = 'var(--color-brand-gold-light)'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = 'var(--color-brand-gold)'
                el.style.transform = 'translateY(0)'
              }}
            >
              Our Services
              <span
                className="flex items-center justify-center shrink-0"
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(0,0,0,0.18)',
                  fontSize: '0.875rem',
                }}
              >
                →
              </span>
            </Link>

            {/* Secondary CTA — higher border opacity */}
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
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--color-brand-gold)'
                el.style.color = 'var(--color-brand-gold)'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.35)'
                el.style.color = 'white'
                el.style.transform = 'translateY(0)'
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Run hero tests**

```bash
npx jest __tests__/components/HeroSection.test.tsx --no-coverage
```

Expected: All PASS

- [ ] **Step 3: Commit**

```bash
git add components/home/HeroSection.tsx
git commit -m "feat: polish hero — badge border-only, larger heading, brighter tagline, taller CTAs"
```

---

## Task 6: Polish ServicesPreview card styling

**Files:**
- Modify: `components/home/ServicesPreview.tsx`

- [ ] **Step 1: Apply card style changes**

In `components/home/ServicesPreview.tsx`, update the `ServiceCard` component's inner div and outer Link styles. Find the `ServiceCard` function and make these three changes:

**Change 1 — outer Link border-radius (20px → 8px):**
```tsx
// outer Link style — change borderRadius
borderRadius: '0.5rem',
```

**Change 2 — inner card div: add always-visible border, reduce border-radius to match, make position relative:**
```tsx
// inner div style
backgroundColor: 'rgba(20,20,20,0.85)',
borderRadius: 'calc(0.5rem - 1px)',
padding: large ? '2.5rem' : '2rem',
border: '1px solid rgba(200,146,26,0.18)',
boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
minHeight: large ? '18rem' : '14rem',
position: 'relative' as const,
overflow: 'hidden',
```

**Change 3 — ghost number: remove from flow, position absolute top-right:**
```tsx
// Replace the ghost number <span> with:
<span
  style={{
    fontFamily: 'var(--font-display)',
    fontSize: large ? '5rem' : '3.5rem',
    lineHeight: 1,
    color: 'rgba(255,255,255,0.05)',
    letterSpacing: '0.02em',
    position: 'absolute',
    top: '0.75rem',
    right: '1rem',
    userSelect: 'none',
  }}
>
  {number}
</span>
```

Also remove the `flex items-start justify-between mb-6` wrapper div that previously contained the number and arrow together — place the arrow directly after the absolute number:
```tsx
// Arrow span — now standalone, add margin-bottom
<span
  style={{
    width: '2.25rem',
    height: '2.25rem',
    borderRadius: '9999px',
    border: `1px solid ${accent}44`,
    color: accent,
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginBottom: '1.5rem',
  }}
>
  →
</span>
```

- [ ] **Step 2: Run services tests**

```bash
npx jest __tests__/components/ServicesPreview.test.tsx --no-coverage
```

Expected: All PASS

- [ ] **Step 3: Commit**

```bash
git add components/home/ServicesPreview.tsx
git commit -m "feat: polish service cards — rounded corners, always-visible border, ghost number top-right"
```

---

## Task 7: Polish WhySection and CTASection

**Files:**
- Modify: `components/home/WhySection.tsx`
- Modify: `components/home/CTASection.tsx`

- [ ] **Step 1: Update card shadow in `components/home/WhySection.tsx`**

Find the card `<div>` inside the `.map()` that has `boxShadow` and change its value:

```tsx
// Find:
boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
// Replace with:
boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
```

- [ ] **Step 2: Update CTASection in `components/home/CTASection.tsx`**

Make three changes:

**Change 1 — "Built for Speed." heading font-size:**
```tsx
// Find the h2 style fontSize and replace:
fontSize: 'clamp(3rem, 6vw, 5.5rem)',
```

**Change 2 — "Proven by Results." letter-spacing:**
```tsx
// Find the <p> with "Proven by Results." and update letterSpacing:
letterSpacing: '0.2em',
```

**Change 3 — Contact button: add inner circle arrow (replace the existing `→` text span):**
```tsx
// Replace the Link content from:
//   Contact Us →
// with:
Contact Us
<span
  style={{
    width: '2rem',
    height: '2rem',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,0,0,0.15)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    marginLeft: '0.5rem',
  }}
>
  →
</span>
```

- [ ] **Step 3: Run the full test suite**

```bash
npx jest --no-coverage 2>&1 | tail -30
```

Expected: All tests PASS

- [ ] **Step 4: Commit**

```bash
git add components/home/WhySection.tsx components/home/CTASection.tsx
git commit -m "feat: polish WhySection card shadow and CTASection heading/button"
```

---

## Task 8: Build, deploy, and verify

- [ ] **Step 1: Run the full test suite one final time**

```bash
npx jest --no-coverage
```

Expected: All tests PASS — zero failures

- [ ] **Step 2: Build for production**

```bash
npx next build 2>&1 | tail -20
```

Expected: `✓ Generating static pages (16/16)` with no errors

- [ ] **Step 3: Deploy to Vercel**

```bash
npx vercel --prod 2>&1 | tail -10
```

Expected: `Aliased: https://meadows-oil-gas-redesign.vercel.app`

- [ ] **Step 4: Smoke-test the live site**

Open `https://meadows-oil-gas-redesign.vercel.app` and verify:
- Gold stats bar appears immediately below the hero
- Hero heading is larger and badge has no gold fill
- Service cards have rounded corners and visible gold border
- LinkedIn strip appears between services and CTA footer
- "Built for Speed." heading is larger in the CTA section

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "chore: final homepage polish — all tasks complete"
```
