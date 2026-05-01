# Meadows Oil and Gas Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a professional, SEO-optimized marketing website for Meadows Oil and Gas using Next.js App Router, Tailwind CSS, Sanity CMS, Mapbox, and Vercel.

**Architecture:** Static-first JAMstack site using Next.js 14 App Router with SSG for all marketing pages, a headless Sanity CMS for non-developer content updates (gallery, services, locations), and Mapbox GL JS for the interactive location/seismic map.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS v3, shadcn/ui, Sanity v3, Mapbox GL JS, Formspree, Vercel

---

## File Structure

```
meadows-oil-gas-redesign/
├── app/
│   ├── layout.tsx                    # Root layout: Navbar + Footer + metadata
│   ├── page.tsx                      # Home page
│   ├── about/
│   │   ├── page.tsx                  # About hub with company overview
│   │   ├── history/page.tsx          # Company + oil history + timeline
│   │   ├── reach/page.tsx            # Work locations + Mapbox map
│   │   └── affiliations/page.tsx     # AAPL + OCAPL logos + descriptions
│   ├── services/
│   │   ├── page.tsx                  # Services hub
│   │   ├── brokerage/page.tsx        # Core brokerage & land services
│   │   └── technical/page.tsx        # Mapping & digital imagery services
│   ├── projects/
│   │   └── page.tsx                  # Photo gallery (masonry grid)
│   └── contact/
│       └── page.tsx                  # Contact form + office addresses
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                # Responsive nav with mobile menu
│   │   └── Footer.tsx                # Footer with affiliate logos + links
│   ├── home/
│   │   ├── HeroSection.tsx           # Full-screen hero with CTA
│   │   ├── ServicesPreview.tsx       # 3-card services teaser
│   │   └── StatsBar.tsx              # Office locations + years experience
│   ├── about/
│   │   ├── Timeline.tsx              # Interactive horizontal/vertical timeline
│   │   └── LocationMap.tsx           # Mapbox map with OKC + Bakersfield pins
│   ├── services/
│   │   ├── ServiceAccordion.tsx      # Expandable service detail panels
│   │   └── WindLeasingBanner.tsx     # Green-accented renewables callout
│   ├── gallery/
│   │   └── MasonryGrid.tsx           # Responsive masonry photo grid + lightbox
│   └── contact/
│       └── ContactForm.tsx           # Formspree-wired inquiry form
├── lib/
│   ├── sanity/
│   │   ├── client.ts                 # Sanity client singleton
│   │   └── queries.ts               # GROQ queries for all content types
│   └── mapbox/
│       └── config.ts                # Mapbox token + default viewport
├── sanity/
│   ├── schema/
│   │   ├── galleryImage.ts           # Photo gallery content type
│   │   ├── service.ts               # Service content type
│   │   └── officeLocation.ts        # Office location content type
│   └── sanity.config.ts             # Sanity studio config
├── __tests__/
│   ├── components/
│   │   ├── Navbar.test.tsx
│   │   ├── Footer.test.tsx
│   │   ├── HeroSection.test.tsx
│   │   ├── Timeline.test.tsx
│   │   ├── ServiceAccordion.test.tsx
│   │   ├── MasonryGrid.test.tsx
│   │   └── ContactForm.test.tsx
│   └── lib/
│       └── sanity/queries.test.ts
├── public/
│   └── images/
│       └── placeholder-hero.jpg
├── tailwind.config.ts
├── next.config.ts
├── jest.config.ts
├── jest.setup.ts
└── .env.local.example
```

---

## Task 1: Bootstrap Next.js Project

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`, `jest.config.ts`, `jest.setup.ts`, `.env.local.example`

- [ ] **Step 1: Scaffold Next.js app**

Run inside `/Users/danielchristner/meadows-oil-gas-redesign/`:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes
```

Expected output: `Success! Created meadows-oil-gas-redesign`

- [ ] **Step 2: Install core dependencies**

```bash
npm install @sanity/client @sanity/image-url mapbox-gl @types/mapbox-gl formspree react-hook-form @hookform/resolvers zod next-sanity
```

- [ ] **Step 3: Install dev/test dependencies**

```bash
npm install -D jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom ts-jest @types/jest
```

- [ ] **Step 4: Initialize shadcn/ui**

```bash
npx shadcn@latest init --defaults
```

When prompted: style = Default, base color = Slate, CSS variables = yes.

- [ ] **Step 5: Add required shadcn components**

```bash
npx shadcn@latest add accordion button card dialog navigation-menu separator sheet badge
```

- [ ] **Step 6: Create jest.config.ts**

```typescript
// jest.config.ts
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)
```

- [ ] **Step 7: Create jest.setup.ts**

```typescript
// jest.setup.ts
import '@testing-library/jest-dom'
```

- [ ] **Step 8: Create .env.local.example**

```bash
# .env.local.example
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_public_token_here
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

- [ ] **Step 9: Verify dev server starts**

```bash
npm run dev
```

Expected: Server running at http://localhost:3000 with default Next.js page.

- [ ] **Step 10: Commit**

```bash
git init && git add package.json package-lock.json tsconfig.json tailwind.config.ts next.config.ts jest.config.ts jest.setup.ts .env.local.example .gitignore
git commit -m "feat: bootstrap Next.js 14 project with Tailwind, shadcn, Sanity, Mapbox deps"
```

---

## Task 2: Brand Design System (Tailwind Config + Global CSS)

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

- [ ] **Step 1: Write failing test for design token availability**

```typescript
// __tests__/design-system.test.ts
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)

test('brand colors are defined in tailwind config', () => {
  const colors = fullConfig.theme.colors as Record<string, unknown>
  expect(colors['brand-navy']).toBeDefined()
  expect(colors['brand-gold']).toBeDefined()
  expect(colors['brand-green']).toBeDefined()
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx jest __tests__/design-system.test.ts
```

Expected: FAIL — `brand-navy` is undefined

- [ ] **Step 3: Update tailwind.config.ts with brand tokens**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#1a2744',
        'brand-navy-light': '#253561',
        'brand-gold': '#d4971a',
        'brand-gold-light': '#e8b84b',
        'brand-green': '#2d7d3a',
        'brand-green-light': '#3d9e4c',
        'brand-cream': '#f8f7f4',
        'brand-charcoal': '#1c1c1c',
        'brand-gray': '#6b7280',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(26,39,68,0.85) 0%, rgba(26,39,68,0.5) 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
```

- [ ] **Step 4: Update app/globals.css**

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

@layer base {
  :root {
    --background: 248 247 244;
    --foreground: 28 28 28;
    --brand-navy: 26 39 68;
    --brand-gold: 212 151 26;
    --brand-green: 45 125 58;
  }

  body {
    @apply bg-brand-cream text-brand-charcoal font-sans antialiased;
  }

  h1, h2, h3 {
    @apply font-serif;
  }
}

@layer components {
  .section-padding {
    @apply px-4 sm:px-6 lg:px-8 py-16 lg:py-24;
  }

  .container-max {
    @apply max-w-7xl mx-auto;
  }

  .btn-primary {
    @apply bg-brand-gold hover:bg-brand-gold-light text-white font-semibold px-6 py-3 rounded transition-colors duration-200;
  }

  .btn-outline {
    @apply border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-semibold px-6 py-3 rounded transition-colors duration-200;
  }

  .section-title {
    @apply text-3xl lg:text-4xl font-serif text-brand-navy mb-4;
  }

  .section-subtitle {
    @apply text-brand-gray text-lg max-w-2xl;
  }

  .wind-accent {
    @apply border-l-4 border-brand-green bg-green-50;
  }
}
```

- [ ] **Step 5: Run test to verify it passes**

```bash
npx jest __tests__/design-system.test.ts
```

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add tailwind.config.ts app/globals.css __tests__/design-system.test.ts
git commit -m "feat: add Meadows brand design system — navy, gold, green tokens"
```

---

## Task 3: Navbar Component

**Files:**
- Create: `components/layout/Navbar.tsx`
- Create: `__tests__/components/Navbar.test.tsx`

- [ ] **Step 1: Write failing tests**

```typescript
// __tests__/components/Navbar.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from '@/components/layout/Navbar'

describe('Navbar', () => {
  it('renders company name', () => {
    render(<Navbar />)
    expect(screen.getByText(/Meadows Oil & Gas/i)).toBeInTheDocument()
  })

  it('renders all top-level nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument()
  })

  it('opens mobile menu when hamburger is clicked', async () => {
    render(<Navbar />)
    const hamburger = screen.getByRole('button', { name: /open menu/i })
    await userEvent.click(hamburger)
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeVisible()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx jest __tests__/components/Navbar.test.tsx
```

Expected: FAIL — `Cannot find module '@/components/layout/Navbar'`

- [ ] **Step 3: Create components/layout/Navbar.tsx**

```typescript
// components/layout/Navbar.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Company History', href: '/about/history' },
      { label: 'Our Reach', href: '/about/reach' },
      { label: 'Affiliations', href: '/about/affiliations' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Brokerage & Land', href: '/services/brokerage' },
      { label: 'Technical & Mapping', href: '/services/technical' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-brand-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-brand-gold text-xl font-serif font-bold tracking-wide">
            Meadows Oil & Gas
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="main">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-brand-gold transition-colors py-2"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="absolute top-full left-0 hidden group-hover:block bg-brand-navy-light rounded shadow-xl min-w-48 py-2 z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-200 hover:text-brand-gold hover:bg-brand-navy transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="btn-primary text-sm ml-2">
            Get In Touch
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded text-gray-200 hover:text-brand-gold"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'close menu' : 'open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="md:hidden bg-brand-navy-light px-4 pb-4"
          aria-label="mobile"
        >
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="block py-2 text-sm font-medium text-gray-200 hover:text-brand-gold"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block py-1.5 pl-4 text-sm text-gray-400 hover:text-brand-gold"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      )}
    </header>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npx jest __tests__/components/Navbar.test.tsx
```

Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add components/layout/Navbar.tsx __tests__/components/Navbar.test.tsx
git commit -m "feat: add responsive Navbar with dropdown menus and mobile sheet"
```

---

## Task 4: Footer Component

**Files:**
- Create: `components/layout/Footer.tsx`
- Create: `__tests__/components/Footer.test.tsx`

- [ ] **Step 1: Write failing tests**

```typescript
// __tests__/components/Footer.test.tsx
import { render, screen } from '@testing-library/react'
import Footer from '@/components/layout/Footer'

describe('Footer', () => {
  it('renders AAPL affiliation', () => {
    render(<Footer />)
    expect(screen.getByText(/AAPL/i)).toBeInTheDocument()
  })

  it('renders OCAPL affiliation', () => {
    render(<Footer />)
    expect(screen.getByText(/OCAPL/i)).toBeInTheDocument()
  })

  it('renders office locations', () => {
    render(<Footer />)
    expect(screen.getByText(/Oklahoma City/i)).toBeInTheDocument()
    expect(screen.getByText(/Bakersfield/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx jest __tests__/components/Footer.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Create components/layout/Footer.tsx**

```typescript
// components/layout/Footer.tsx
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-gray-300">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-brand-gold font-serif text-xl mb-3">
              Meadows Oil & Gas
            </h3>
            <p className="text-sm leading-relaxed">
              Providing expert land brokerage, mineral rights, title services,
              and renewable energy solutions across the United States.
            </p>
            {/* Affiliate Trust Badges */}
            <div className="mt-6 flex items-center gap-4">
              <div className="border border-brand-gold/40 rounded px-3 py-1.5 text-xs font-semibold text-brand-gold">
                AAPL Member
              </div>
              <div className="border border-brand-gold/40 rounded px-3 py-1.5 text-xs font-semibold text-brand-gold">
                OCAPL Member
              </div>
            </div>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Offices
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-2">
                <MapPin size={16} className="text-brand-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Oklahoma City, OK</p>
                  <p>Primary Operations Office</p>
                </div>
              </div>
              <div className="flex gap-2">
                <MapPin size={16} className="text-brand-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Bakersfield, CA</p>
                  <p>West Coast Operations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                ['About Us', '/about'],
                ['Services', '/services'],
                ['Wind Leasing', '/services/brokerage'],
                ['Photo Gallery', '/projects'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-brand-gold transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-xs text-gray-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Meadows Oil and Gas. All rights reserved.</p>
          <p>
            Professional members of{' '}
            <span className="text-brand-gold">AAPL</span> &{' '}
            <span className="text-brand-gold">OCAPL</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npx jest __tests__/components/Footer.test.tsx
```

Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add components/layout/Footer.tsx __tests__/components/Footer.test.tsx
git commit -m "feat: add Footer with AAPL/OCAPL badges and office locations"
```

---

## Task 5: Root Layout

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update app/layout.tsx**

```typescript
// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | Meadows Oil and Gas',
    default: 'Meadows Oil and Gas — Land Brokerage & Energy Services',
  },
  description:
    'Meadows Oil and Gas provides expert land brokerage, mineral rights, title opinions, seismic mapping, and wind leasing services across Oklahoma, California, and beyond.',
  keywords: ['oil and gas', 'land brokerage', 'mineral rights', 'title services', 'wind leasing', 'Oklahoma City', 'Bakersfield'],
  openGraph: {
    type: 'website',
    siteName: 'Meadows Oil and Gas',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Verify layout renders**

```bash
npm run dev
```

Open http://localhost:3000 — verify navy Navbar and Footer appear around the page content.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: root layout with Navbar, Footer, and SEO metadata"
```

---

## Task 6: Home Page — Hero Section

**Files:**
- Create: `components/home/HeroSection.tsx`
- Create: `__tests__/components/HeroSection.test.tsx`
- Modify: `app/page.tsx`
- Add: `public/images/hero-bg.jpg` (placeholder, real image added later)

- [ ] **Step 1: Write failing tests**

```typescript
// __tests__/components/HeroSection.test.tsx
import { render, screen } from '@testing-library/react'
import HeroSection from '@/components/home/HeroSection'

describe('HeroSection', () => {
  it('renders primary headline', () => {
    render(<HeroSection />)
    expect(
      screen.getByRole('heading', { level: 1 })
    ).toHaveTextContent(/Energy Expertise/i)
  })

  it('renders CTA button linking to services', () => {
    render(<HeroSection />)
    const cta = screen.getByRole('link', { name: /Our Services/i })
    expect(cta).toHaveAttribute('href', '/services')
  })

  it('renders secondary CTA linking to contact', () => {
    render(<HeroSection />)
    expect(screen.getByRole('link', { name: /Contact Us/i })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx jest __tests__/components/HeroSection.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Create components/home/HeroSection.tsx**

```typescript
// components/home/HeroSection.tsx
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center bg-brand-navy overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />

      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center text-white">
        <p className="text-brand-gold uppercase tracking-widest text-sm font-semibold mb-4">
          Oklahoma City · Bakersfield, CA
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 max-w-4xl mx-auto">
          Energy Expertise, From the Ground Up
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Meadows Oil and Gas delivers trusted land brokerage, mineral rights,
          title services, and renewable energy solutions for domestic and
          international projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="btn-primary text-base">
            Our Services
          </Link>
          <Link href="/contact" className="btn-outline text-base">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Update app/page.tsx**

```typescript
// app/page.tsx
import HeroSection from '@/components/home/HeroSection'
import ServicesPreview from '@/components/home/ServicesPreview'
import StatsBar from '@/components/home/StatsBar'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesPreview />
    </>
  )
}
```

- [ ] **Step 5: Run test to verify it passes**

```bash
npx jest __tests__/components/HeroSection.test.tsx
```

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add components/home/HeroSection.tsx app/page.tsx __tests__/components/HeroSection.test.tsx
git commit -m "feat: home page Hero section with navy overlay and dual CTAs"
```

---

## Task 7: Home Page — StatsBar + ServicesPreview

**Files:**
- Create: `components/home/StatsBar.tsx`
- Create: `components/home/ServicesPreview.tsx`

- [ ] **Step 1: Create components/home/StatsBar.tsx**

```typescript
// components/home/StatsBar.tsx
const stats = [
  { value: '2', label: 'Office Locations' },
  { value: '30+', label: 'Years Experience' },
  { value: '50+', label: 'States & Countries Served' },
  { value: '2', label: 'AAPL & OCAPL Member' },
]

export default function StatsBar() {
  return (
    <section className="bg-brand-navy py-10">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-serif font-bold text-brand-gold">{value}</p>
              <p className="text-sm text-gray-300 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create components/home/ServicesPreview.tsx**

```typescript
// components/home/ServicesPreview.tsx
import Link from 'next/link'
import { FileText, Map, Wind } from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: 'Land Brokerage & Title',
    description:
      'Leasehold acquisitions, mineral ownership research, title opinions, curative work, and right-of-ways handled by certified professionals.',
    href: '/services/brokerage',
    accent: 'brand-gold',
  },
  {
    icon: Map,
    title: 'Technical & Mapping',
    description:
      'Seismic mapping, GIS-based land mapping, and high-resolution digital imagery for exploration and production planning.',
    href: '/services/technical',
    accent: 'brand-gold',
  },
  {
    icon: Wind,
    title: 'Wind Leasing',
    description:
      'Specialist renewable energy land acquisition, wind lease negotiation, and project facilitation for clean energy development.',
    href: '/services/brokerage',
    accent: 'brand-green',
    isRenewable: true,
  },
]

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle mx-auto">
            Full-service energy land professionals covering traditional oil & gas
            and the growing renewable energy sector.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description, href, isRenewable }) => (
            <Link
              key={title}
              href={href}
              className={`group block rounded-lg bg-white p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 ${
                isRenewable ? 'border-brand-green' : 'border-brand-gold'
              }`}
            >
              <Icon
                size={32}
                className={isRenewable ? 'text-brand-green' : 'text-brand-gold'}
              />
              <h3 className="text-xl font-serif font-semibold text-brand-navy mt-4 mb-2">
                {title}
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed">{description}</p>
              <span className={`mt-4 inline-block text-sm font-medium ${isRenewable ? 'text-brand-green' : 'text-brand-gold'} group-hover:underline`}>
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Verify in browser**

```bash
npm run dev
```

Open http://localhost:3000 — verify stats bar and 3 service cards display correctly.

- [ ] **Step 4: Commit**

```bash
git add components/home/StatsBar.tsx components/home/ServicesPreview.tsx
git commit -m "feat: home page StatsBar and ServicesPreview with wind leasing green accent"
```

---

## Task 8: About Pages

**Files:**
- Create: `app/about/page.tsx`
- Create: `app/about/history/page.tsx`
- Create: `components/about/Timeline.tsx`
- Create: `__tests__/components/Timeline.test.tsx`
- Create: `app/about/affiliations/page.tsx`

- [ ] **Step 1: Write failing Timeline test**

```typescript
// __tests__/components/Timeline.test.tsx
import { render, screen } from '@testing-library/react'
import Timeline from '@/components/about/Timeline'

const events = [
  { year: '1980', title: 'Founded', description: 'Meadows Oil and Gas established in Oklahoma City.' },
  { year: '2005', title: 'West Coast Expansion', description: 'Bakersfield, CA office opened.' },
  { year: '2018', title: 'Renewable Pivot', description: 'Wind leasing division launched.' },
]

describe('Timeline', () => {
  it('renders all events', () => {
    render(<Timeline events={events} />)
    expect(screen.getByText('1980')).toBeInTheDocument()
    expect(screen.getByText('2005')).toBeInTheDocument()
    expect(screen.getByText('2018')).toBeInTheDocument()
  })

  it('renders event titles', () => {
    render(<Timeline events={events} />)
    expect(screen.getByText('Founded')).toBeInTheDocument()
    expect(screen.getByText('West Coast Expansion')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx jest __tests__/components/Timeline.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Create components/about/Timeline.tsx**

```typescript
// components/about/Timeline.tsx
interface TimelineEvent {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-gold/30 hidden md:block" />

      <ol className="space-y-10">
        {events.map(({ year, title, description }, i) => (
          <li key={year} className="relative flex gap-6 md:gap-10">
            {/* Year bubble */}
            <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center">
              <span className="text-white text-xs font-bold leading-tight text-center">
                {year}
              </span>
            </div>
            <div className="flex-1 pb-4">
              <h4 className="text-lg font-serif font-semibold text-brand-navy mb-1">
                {title}
              </h4>
              <p className="text-brand-gray text-sm leading-relaxed">{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
```

- [ ] **Step 4: Create app/about/history/page.tsx**

```typescript
// app/about/history/page.tsx
import type { Metadata } from 'next'
import Timeline from '@/components/about/Timeline'

export const metadata: Metadata = {
  title: 'Company History',
}

const oilHistory = [
  {
    year: '1859',
    title: 'Birth of the American Oil Industry',
    description:
      'Edwin Drake drills the first commercial oil well in Titusville, Pennsylvania, kickstarting the modern petroleum era.',
  },
  {
    year: '1901',
    title: 'Spindletop Gusher',
    description:
      'The Spindletop oil field blows out in Beaumont, Texas, launching the age of cheap, abundant oil and cementing Oklahoma\'s critical role.',
  },
  {
    year: '1929',
    title: 'Oklahoma Boom',
    description:
      'Oklahoma becomes the top oil-producing state, establishing the land brokerage profession as essential to mineral rights management.',
  },
]

const companyHistory = [
  {
    year: '1992',
    title: 'Meadows Oil & Gas Founded',
    description:
      'Established in Oklahoma City to provide specialized land brokerage and title curative services to regional operators.',
  },
  {
    year: '2003',
    title: 'AAPL Membership',
    description:
      'Joined the American Association of Professional Landmen, cementing professional standards and national reach.',
  },
  {
    year: '2010',
    title: 'Bakersfield Office Opened',
    description:
      'West Coast operations launched to serve the prolific San Joaquin Valley oil producers in California.',
  },
  {
    year: '2018',
    title: 'Wind Leasing Division',
    description:
      'Expanded into renewable energy land services, offering wind lease acquisition and negotiation across the Great Plains.',
  },
]

export default function HistoryPage() {
  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Our History</h1>
      <p className="section-subtitle mb-16">
        From the early days of American oil to today's renewable energy
        transition — we've been there every step.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-serif text-brand-navy mb-8">
            Oil Industry Milestones
          </h2>
          <Timeline events={oilHistory} />
        </div>
        <div>
          <h2 className="text-2xl font-serif text-brand-navy mb-8">
            Meadows Oil & Gas
          </h2>
          <Timeline events={companyHistory} />
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 5: Create app/about/page.tsx**

```typescript
// app/about/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'About Us' }

const sections = [
  { title: 'Company & Oil History', href: '/about/history', description: 'Our roots in the American oil industry and company milestones.' },
  { title: 'Our Reach', href: '/about/reach', description: 'Oklahoma City and Bakersfield offices — domestic and international capabilities.' },
  { title: 'Professional Affiliations', href: '/about/affiliations', description: 'AAPL and OCAPL membership and what it means for our clients.' },
]

export default function AboutPage() {
  return (
    <div className="section-padding container-max">
      <h1 className="section-title">About Meadows Oil & Gas</h1>
      <p className="section-subtitle mb-12">
        A trusted name in land brokerage, mineral rights, and energy services
        for over three decades.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map(({ title, href, description }) => (
          <Link
            key={href}
            href={href}
            className="block rounded-lg bg-white p-6 shadow-sm hover:shadow-md border-t-4 border-brand-gold transition-shadow"
          >
            <h2 className="text-xl font-serif font-semibold text-brand-navy mb-2">{title}</h2>
            <p className="text-brand-gray text-sm">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 6: Create app/about/affiliations/page.tsx**

```typescript
// app/about/affiliations/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Professional Affiliations' }

const affiliations = [
  {
    acronym: 'AAPL',
    name: 'American Association of Professional Landmen',
    description:
      'The AAPL is the preeminent organization for land professionals in the petroleum industry, setting ethical standards and professional certifications that distinguish qualified landmen nationwide.',
    url: 'https://www.landman.org',
  },
  {
    acronym: 'OCAPL',
    name: 'Oklahoma City Association of Professional Landmen',
    description:
      'OCAPL is the regional chapter serving Oklahoma energy professionals, providing networking, continuing education, and advocacy for local land brokerage practitioners.',
    url: 'https://www.ocapl.org',
  },
]

export default function AffiliationsPage() {
  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Professional Affiliations</h1>
      <p className="section-subtitle mb-12">
        Our membership in industry-leading associations ensures we uphold the
        highest ethical and technical standards.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {affiliations.map(({ acronym, name, description, url }) => (
          <div
            key={acronym}
            className="bg-white rounded-lg p-8 shadow-sm border border-brand-gold/20"
          >
            <div className="inline-block bg-brand-navy text-brand-gold font-bold text-2xl px-4 py-2 rounded mb-4">
              {acronym}
            </div>
            <h2 className="text-xl font-serif font-semibold text-brand-navy mb-3">{name}</h2>
            <p className="text-brand-gray text-sm leading-relaxed mb-4">{description}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold text-sm font-medium hover:underline"
            >
              Visit {acronym} →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 7: Run Timeline test to verify it passes**

```bash
npx jest __tests__/components/Timeline.test.tsx
```

Expected: PASS

- [ ] **Step 8: Commit**

```bash
git add app/about/ components/about/Timeline.tsx __tests__/components/Timeline.test.tsx
git commit -m "feat: About pages — hub, history timeline, affiliations"
```

---

## Task 9: Work Locations Page with Mapbox

**Files:**
- Create: `lib/mapbox/config.ts`
- Create: `components/about/LocationMap.tsx`
- Create: `app/about/reach/page.tsx`

- [ ] **Step 1: Create lib/mapbox/config.ts**

```typescript
// lib/mapbox/config.ts
export const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? ''

export const OFFICE_LOCATIONS = [
  {
    id: 'okc',
    name: 'Oklahoma City',
    state: 'OK',
    description: 'Primary operations hub serving Mid-Continent basin projects.',
    coordinates: [-97.5164, 35.4676] as [number, number],
  },
  {
    id: 'bakersfield',
    name: 'Bakersfield',
    state: 'CA',
    description: 'West Coast office serving San Joaquin Valley operators.',
    coordinates: [-119.0187, 35.3733] as [number, number],
  },
]

export const DEFAULT_VIEWPORT = {
  longitude: -108,
  latitude: 37,
  zoom: 4,
}
```

- [ ] **Step 2: Create components/about/LocationMap.tsx**

```typescript
// components/about/LocationMap.tsx
'use client'
import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { MAPBOX_TOKEN, OFFICE_LOCATIONS, DEFAULT_VIEWPORT } from '@/lib/mapbox/config'

export default function LocationMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (map.current || !mapContainer.current || !MAPBOX_TOKEN) return

    mapboxgl.accessToken = MAPBOX_TOKEN

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [DEFAULT_VIEWPORT.longitude, DEFAULT_VIEWPORT.latitude],
      zoom: DEFAULT_VIEWPORT.zoom,
    })

    OFFICE_LOCATIONS.forEach(({ name, state, description, coordinates }) => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<div class="p-2">
          <strong class="text-brand-navy">${name}, ${state}</strong>
          <p class="text-sm text-gray-600 mt-1">${description}</p>
        </div>`
      )

      new mapboxgl.Marker({ color: '#d4971a' })
        .setLngLat(coordinates)
        .setPopup(popup)
        .addTo(map.current!)
    })

    return () => {
      map.current?.remove()
      map.current = null
    }
  }, [])

  return (
    <div
      ref={mapContainer}
      className="w-full rounded-lg overflow-hidden shadow-md"
      style={{ height: '450px' }}
      aria-label="Map showing Meadows Oil and Gas office locations"
    />
  )
}
```

- [ ] **Step 3: Create app/about/reach/page.tsx**

```typescript
// app/about/reach/page.tsx
import type { Metadata } from 'next'
import LocationMap from '@/components/about/LocationMap'
import { OFFICE_LOCATIONS } from '@/lib/mapbox/config'

export const metadata: Metadata = { title: 'Our Reach' }

export default function ReachPage() {
  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Our Reach</h1>
      <p className="section-subtitle mb-10">
        Operating from two strategic offices with the capability to execute
        domestic and international projects.
      </p>

      <LocationMap />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {OFFICE_LOCATIONS.map(({ name, state, description }) => (
          <div key={name} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-brand-gold">
            <h2 className="text-xl font-serif font-semibold text-brand-navy mb-2">
              {name}, {state}
            </h2>
            <p className="text-brand-gray text-sm">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-brand-navy text-white rounded-lg p-8">
        <h3 className="text-xl font-serif font-bold text-brand-gold mb-3">
          International Capability
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Beyond our US offices, Meadows Oil and Gas has the expertise and
          network to execute foreign projects, extending our land brokerage and
          title services to international energy developments.
        </p>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Add NEXT_PUBLIC_MAPBOX_TOKEN to .env.local**

```bash
echo "NEXT_PUBLIC_MAPBOX_TOKEN=your_token_here" >> .env.local
```

(Replace `your_token_here` with actual token from mapbox.com — create free account, copy default public token)

- [ ] **Step 5: Verify map loads in browser**

```bash
npm run dev
```

Navigate to http://localhost:3000/about/reach — verify map renders with gold markers over OKC and Bakersfield. Click markers to see popups.

- [ ] **Step 6: Commit**

```bash
git add lib/mapbox/config.ts components/about/LocationMap.tsx app/about/reach/page.tsx
git commit -m "feat: Work Locations page with Mapbox GL JS markers for OKC + Bakersfield"
```

---

## Task 10: Services Pages with Accordion

**Files:**
- Create: `components/services/ServiceAccordion.tsx`
- Create: `components/services/WindLeasingBanner.tsx`
- Create: `app/services/page.tsx`
- Create: `app/services/brokerage/page.tsx`
- Create: `app/services/technical/page.tsx`
- Create: `__tests__/components/ServiceAccordion.test.tsx`

- [ ] **Step 1: Write failing accordion test**

```typescript
// __tests__/components/ServiceAccordion.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ServiceAccordion from '@/components/services/ServiceAccordion'

const services = [
  { title: 'Leasehold Acquisitions', content: 'We negotiate and acquire oil and gas leases on behalf of operators.' },
  { title: 'Title Opinions', content: 'Certified landmen review title chains to render formal legal opinions.' },
]

describe('ServiceAccordion', () => {
  it('renders all service titles', () => {
    render(<ServiceAccordion services={services} />)
    expect(screen.getByText('Leasehold Acquisitions')).toBeInTheDocument()
    expect(screen.getByText('Title Opinions')).toBeInTheDocument()
  })

  it('content is hidden initially', () => {
    render(<ServiceAccordion services={services} />)
    expect(screen.queryByText(/negotiate and acquire/i)).not.toBeVisible()
  })

  it('expands when title is clicked', async () => {
    render(<ServiceAccordion services={services} />)
    await userEvent.click(screen.getByText('Leasehold Acquisitions'))
    expect(screen.getByText(/negotiate and acquire/i)).toBeVisible()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx jest __tests__/components/ServiceAccordion.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Create components/services/ServiceAccordion.tsx**

```typescript
// components/services/ServiceAccordion.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface Service {
  title: string
  content: string
}

interface ServiceAccordionProps {
  services: Service[]
}

export default function ServiceAccordion({ services }: ServiceAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {services.map(({ title, content }, i) => (
        <AccordionItem key={title} value={`item-${i}`}>
          <AccordionTrigger className="text-left font-semibold text-brand-navy hover:text-brand-gold">
            {title}
          </AccordionTrigger>
          <AccordionContent className="text-brand-gray leading-relaxed">
            {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
```

- [ ] **Step 4: Create components/services/WindLeasingBanner.tsx**

```typescript
// components/services/WindLeasingBanner.tsx
import { Wind } from 'lucide-react'

export default function WindLeasingBanner() {
  return (
    <div className="wind-accent rounded-r-lg p-6 my-8">
      <div className="flex items-start gap-4">
        <Wind className="text-brand-green mt-1 shrink-0" size={28} />
        <div>
          <h3 className="text-lg font-serif font-semibold text-brand-green mb-2">
            Renewable Energy — Wind Leasing
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            As the energy landscape evolves, Meadows Oil and Gas has expanded
            into wind energy land services. We bring the same rigorous land
            expertise to wind lease acquisitions, helping landowners and
            developers navigate leasehold agreements for clean energy projects
            across the Great Plains and beyond.
          </p>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 5: Create app/services/brokerage/page.tsx**

```typescript
// app/services/brokerage/page.tsx
import type { Metadata } from 'next'
import ServiceAccordion from '@/components/services/ServiceAccordion'
import WindLeasingBanner from '@/components/services/WindLeasingBanner'

export const metadata: Metadata = { title: 'Brokerage & Land Services' }

const coreServices = [
  {
    title: 'Leasehold Acquisitions',
    content:
      'We negotiate and acquire oil and gas leases on behalf of operators, handling all aspects of landowner contact, lease terms negotiation, and execution. Our landmen understand local mineral ownership patterns and lease market conditions across Oklahoma and California.',
  },
  {
    title: 'Mineral & Leasehold Ownership Research',
    content:
      'Comprehensive research into mineral ownership records, chain of title, and leasehold interests. We trace ownership through county records, probate documents, and historical conveyances to provide operators with a complete ownership picture.',
  },
  {
    title: 'Title Opinions & Curative Work',
    content:
      'Our certified professional landmen work alongside oil and gas attorneys to render formal title opinions based on thorough title examination. When defects are identified, we perform curative work including obtaining ratifications, corrections, and missing conveyances.',
  },
  {
    title: 'Right-of-Ways',
    content:
      'Negotiation and acquisition of right-of-way agreements for pipelines, roads, and surface facilities. We handle landowner negotiations, ROW agreement drafting coordination, and all required documentation.',
  },
  {
    title: 'Wind Leasing',
    content:
      'See the Wind Leasing section below for details on our renewable energy land services.',
  },
]

export default function BrokeragePage() {
  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Brokerage & Land Services</h1>
      <p className="section-subtitle mb-10">
        Comprehensive land services backed by decades of experience in the
        Mid-Continent and California basins.
      </p>

      <ServiceAccordion services={coreServices} />
      <WindLeasingBanner />
    </div>
  )
}
```

- [ ] **Step 6: Create app/services/technical/page.tsx**

```typescript
// app/services/technical/page.tsx
import type { Metadata } from 'next'
import ServiceAccordion from '@/components/services/ServiceAccordion'

export const metadata: Metadata = { title: 'Technical & Mapping Services' }

const technicalServices = [
  {
    title: 'Land & Lease Mapping',
    content:
      'GIS-based mapping of leasehold positions, unit boundaries, and land grids. We produce high-quality maps suitable for landowner presentations, regulatory filings, and operations planning.',
  },
  {
    title: 'Seismic Mapping Support',
    content:
      'Integration of seismic survey data with land and lease mapping to support exploration decisions. Our team coordinates shot-hole permit acquisition, surface waiver negotiations, and post-survey documentation.',
  },
  {
    title: 'Digital Imagery',
    content:
      'High-resolution digital imagery acquisition and processing for surface reconnaissance, pipeline planning, and environmental baseline documentation. We utilize the latest satellite and aerial imagery sources.',
  },
]

export default function TechnicalPage() {
  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Technical & Mapping Services</h1>
      <p className="section-subtitle mb-10">
        Advanced mapping and imagery capabilities to support every phase of
        exploration and production.
      </p>
      <ServiceAccordion services={technicalServices} />
    </div>
  )
}
```

- [ ] **Step 7: Create app/services/page.tsx**

```typescript
// app/services/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Services' }

export default function ServicesPage() {
  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Our Services</h1>
      <p className="section-subtitle mb-12">
        From leasehold acquisitions to seismic mapping — a full suite of
        professional land and technical services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/services/brokerage" className="block bg-white rounded-lg p-8 shadow-sm hover:shadow-md border-t-4 border-brand-gold transition-shadow">
          <h2 className="text-2xl font-serif text-brand-navy mb-3">Brokerage & Land Services</h2>
          <p className="text-brand-gray text-sm">Leasehold acquisitions, mineral research, title opinions, right-of-ways, and wind leasing.</p>
        </Link>
        <Link href="/services/technical" className="block bg-white rounded-lg p-8 shadow-sm hover:shadow-md border-t-4 border-brand-gold transition-shadow">
          <h2 className="text-2xl font-serif text-brand-navy mb-3">Technical & Mapping</h2>
          <p className="text-brand-gray text-sm">GIS land mapping, seismic mapping support, and high-resolution digital imagery.</p>
        </Link>
      </div>
    </div>
  )
}
```

- [ ] **Step 8: Run accordion test to verify it passes**

```bash
npx jest __tests__/components/ServiceAccordion.test.tsx
```

Expected: PASS

- [ ] **Step 9: Commit**

```bash
git add app/services/ components/services/ __tests__/components/ServiceAccordion.test.tsx
git commit -m "feat: Services pages with shadcn accordion, wind leasing green-accent banner"
```

---

## Task 11: Photo Gallery (Masonry Grid)

**Files:**
- Create: `components/gallery/MasonryGrid.tsx`
- Create: `app/projects/page.tsx`
- Create: `__tests__/components/MasonryGrid.test.tsx`

- [ ] **Step 1: Write failing test**

```typescript
// __tests__/components/MasonryGrid.test.tsx
import { render, screen } from '@testing-library/react'
import MasonryGrid from '@/components/gallery/MasonryGrid'

const images = [
  { src: '/images/field-1.jpg', alt: 'Oil field operations', caption: 'Oklahoma Basin Operations' },
  { src: '/images/field-2.jpg', alt: 'Wind turbines', caption: 'Wind Project Development' },
  { src: '/images/mapping-1.jpg', alt: 'Seismic mapping', caption: 'Seismic Survey' },
]

describe('MasonryGrid', () => {
  it('renders all images', () => {
    render(<MasonryGrid images={images} />)
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })

  it('renders image captions', () => {
    render(<MasonryGrid images={images} />)
    expect(screen.getByText('Oklahoma Basin Operations')).toBeInTheDocument()
    expect(screen.getByText('Wind Project Development')).toBeInTheDocument()
  })

  it('images have correct alt text', () => {
    render(<MasonryGrid images={images} />)
    expect(screen.getByAltText('Oil field operations')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx jest __tests__/components/MasonryGrid.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Create components/gallery/MasonryGrid.tsx**

```typescript
// components/gallery/MasonryGrid.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface GalleryImage {
  src: string
  alt: string
  caption: string
}

interface MasonryGridProps {
  images: GalleryImage[]
}

export default function MasonryGrid({ images }: MasonryGridProps) {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null)

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image) => (
          <div
            key={image.src}
            className="break-inside-avoid rounded-lg overflow-hidden cursor-pointer group relative"
            onClick={() => setLightbox(image)}
          >
            <div className="relative w-full" style={{ minHeight: '200px' }}>
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-sm font-medium">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-brand-gold"
            aria-label="close lightbox"
          >
            <X size={28} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={800}
              className="w-full h-auto rounded"
            />
            <p className="text-white text-center mt-3 text-sm">{lightbox.caption}</p>
          </div>
        </div>
      )}
    </>
  )
}
```

- [ ] **Step 4: Create app/projects/page.tsx**

```typescript
// app/projects/page.tsx
import type { Metadata } from 'next'
import MasonryGrid from '@/components/gallery/MasonryGrid'

export const metadata: Metadata = { title: 'Projects & Gallery' }

// Static placeholder images — will be replaced by Sanity CMS content in Task 13
const galleryImages = [
  { src: '/images/placeholder-hero.jpg', alt: 'Oil field operations', caption: 'Mid-Continent Basin Operations' },
  { src: '/images/placeholder-hero.jpg', alt: 'Land survey', caption: 'Title Research — Oklahoma County' },
  { src: '/images/placeholder-hero.jpg', alt: 'Wind turbines', caption: 'Wind Leasing Project — Kansas' },
  { src: '/images/placeholder-hero.jpg', alt: 'Mapping work', caption: 'Seismic Survey — San Joaquin Valley' },
  { src: '/images/placeholder-hero.jpg', alt: 'Office operations', caption: 'Bakersfield Operations Center' },
  { src: '/images/placeholder-hero.jpg', alt: 'Field crew', caption: 'Right-of-Way Crew — Oklahoma' },
]

export default function ProjectsPage() {
  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Projects & Gallery</h1>
      <p className="section-subtitle mb-10">
        Visual documentation of our field operations, land projects, and
        technical services across the United States.
      </p>
      <MasonryGrid images={galleryImages} />
    </div>
  )
}
```

- [ ] **Step 5: Run test to verify it passes**

```bash
npx jest __tests__/components/MasonryGrid.test.tsx
```

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add components/gallery/MasonryGrid.tsx app/projects/page.tsx __tests__/components/MasonryGrid.test.tsx
git commit -m "feat: masonry photo gallery with lightbox for Projects page"
```

---

## Task 12: Contact Page with Formspree

**Files:**
- Create: `components/contact/ContactForm.tsx`
- Create: `app/contact/page.tsx`
- Create: `__tests__/components/ContactForm.test.tsx`

- [ ] **Step 1: Write failing tests**

```typescript
// __tests__/components/ContactForm.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '@/components/contact/ContactForm'

describe('ContactForm', () => {
  it('renders all required fields', () => {
    render(<ContactForm formEndpoint="https://formspree.io/f/test" />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('shows validation error when name is empty', async () => {
    render(<ContactForm formEndpoint="https://formspree.io/f/test" />)
    await userEvent.click(screen.getByRole('button', { name: /send/i }))
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument()
  })

  it('shows validation error for invalid email', async () => {
    render(<ContactForm formEndpoint="https://formspree.io/f/test" />)
    await userEvent.type(screen.getByLabelText(/name/i), 'John')
    await userEvent.type(screen.getByLabelText(/email/i), 'not-an-email')
    await userEvent.click(screen.getByRole('button', { name: /send/i }))
    expect(await screen.findByText(/valid email/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx jest __tests__/components/ContactForm.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Create components/contact/ContactForm.tsx**

```typescript
// components/contact/ContactForm.tsx
'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

interface ContactFormProps {
  formEndpoint: string
}

export default function ContactForm({ formEndpoint }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    const res = await fetch(formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12 bg-green-50 rounded-lg border border-brand-green">
        <p className="text-brand-green font-semibold text-lg">Thank you!</p>
        <p className="text-gray-600 mt-2 text-sm">
          We'll be in touch within one business day.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal mb-1">
          Name *
        </label>
        <input id="name" {...register('name')} className={inputClass} />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal mb-1">
          Email *
        </label>
        <input id="email" type="email" {...register('email')} className={inputClass} />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-charcoal mb-1">
          Phone
        </label>
        <input id="phone" type="tel" {...register('phone')} className={inputClass} />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-brand-charcoal mb-1">
          Service Interest
        </label>
        <select id="service" {...register('service')} className={inputClass}>
          <option value="">Select a service...</option>
          <option>Leasehold Acquisitions</option>
          <option>Mineral Research</option>
          <option>Title Opinions</option>
          <option>Right-of-Ways</option>
          <option>Wind Leasing</option>
          <option>Mapping Services</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-charcoal mb-1">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={inputClass}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-60"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
```

- [ ] **Step 4: Create app/contact/page.tsx**

```typescript
// app/contact/page.tsx
import type { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import { MapPin, Mail } from 'lucide-react'

export const metadata: Metadata = { title: 'Contact Us' }

const FORM_ENDPOINT = process.env.FORMSPREE_ENDPOINT ?? 'https://formspree.io/f/placeholder'

export default function ContactPage() {
  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Contact Us</h1>
      <p className="section-subtitle mb-12">
        Ready to discuss your land or energy project? Reach out and we'll
        respond within one business day.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Form */}
        <div className="lg:col-span-3">
          <h2 className="text-xl font-serif text-brand-navy mb-6">Send an Inquiry</h2>
          <ContactForm formEndpoint={FORM_ENDPOINT} />
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-serif text-brand-navy mb-6">Our Offices</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-brand-gold">
              <div className="flex gap-3 mb-2">
                <MapPin className="text-brand-gold shrink-0 mt-0.5" size={18} />
                <h3 className="font-semibold text-brand-navy">Oklahoma City, OK</h3>
              </div>
              <p className="text-sm text-brand-gray pl-7">Primary Operations</p>
              <p className="text-sm text-brand-gray pl-7">Mid-Continent Basin Focus</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-brand-gold">
              <div className="flex gap-3 mb-2">
                <MapPin className="text-brand-gold shrink-0 mt-0.5" size={18} />
                <h3 className="font-semibold text-brand-navy">Bakersfield, CA</h3>
              </div>
              <p className="text-sm text-brand-gray pl-7">West Coast Office</p>
              <p className="text-sm text-brand-gray pl-7">San Joaquin Valley Operations</p>
            </div>

            <div className="bg-brand-navy text-white rounded-lg p-6">
              <p className="text-sm text-gray-300">
                For urgent inquiries related to active projects, please indicate
                in your message and we will prioritize your request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 5: Run test to verify it passes**

```bash
npx jest __tests__/components/ContactForm.test.tsx
```

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add components/contact/ContactForm.tsx app/contact/page.tsx __tests__/components/ContactForm.test.tsx
git commit -m "feat: Contact page with Formspree form, zod validation, success state"
```

---

## Task 13: Sanity CMS Setup

**Files:**
- Create: `sanity/sanity.config.ts`
- Create: `sanity/schema/galleryImage.ts`
- Create: `sanity/schema/service.ts`
- Create: `sanity/schema/officeLocation.ts`
- Create: `lib/sanity/client.ts`
- Create: `lib/sanity/queries.ts`

- [ ] **Step 1: Create a Sanity project**

Go to https://www.sanity.io → sign in → create new project → name it "Meadows Oil Gas" → note the **Project ID**.

- [ ] **Step 2: Add Sanity env vars to .env.local**

```bash
# Add to .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_read_token_here
```

(Create a read token in sanity.io → project → API → Tokens)

- [ ] **Step 3: Create sanity/schema/galleryImage.ts**

```typescript
// sanity/schema/galleryImage.ts
import { defineType, defineField } from 'sanity'

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({ name: 'caption', title: 'Caption', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({ name: 'alt', title: 'Alt Text', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
```

- [ ] **Step 4: Create sanity/schema/service.ts**

```typescript
// sanity/schema/service.ts
import { defineType, defineField } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['brokerage', 'technical'] }, validation: (r) => r.required() }),
    defineField({ name: 'content', title: 'Content', type: 'text', validation: (r) => r.required() }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    defineField({ name: 'isRenewable', title: 'Renewable Energy?', type: 'boolean', initialValue: false }),
  ],
})
```

- [ ] **Step 5: Create sanity/schema/officeLocation.ts**

```typescript
// sanity/schema/officeLocation.ts
import { defineType, defineField } from 'sanity'

export const officeLocation = defineType({
  name: 'officeLocation',
  title: 'Office Location',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'City Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'state', title: 'State', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'latitude', title: 'Latitude', type: 'number', validation: (r) => r.required() }),
    defineField({ name: 'longitude', title: 'Longitude', type: 'number', validation: (r) => r.required() }),
  ],
})
```

- [ ] **Step 6: Create sanity/sanity.config.ts**

```typescript
// sanity/sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { galleryImage } from './schema/galleryImage'
import { service } from './schema/service'
import { officeLocation } from './schema/officeLocation'

export default defineConfig({
  name: 'meadows-oil-gas',
  title: 'Meadows Oil & Gas CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  plugins: [structureTool()],
  schema: { types: [galleryImage, service, officeLocation] },
})
```

- [ ] **Step 7: Create lib/sanity/client.ts**

```typescript
// lib/sanity/client.ts
import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
```

- [ ] **Step 8: Create lib/sanity/queries.ts**

```typescript
// lib/sanity/queries.ts
import { sanityClient } from './client'

export interface SanityGalleryImage {
  _id: string
  caption: string
  alt: string
  image: { asset: { url: string } }
  order: number
}

export interface SanityService {
  _id: string
  title: string
  content: string
  category: 'brokerage' | 'technical'
  order: number
  isRenewable: boolean
}

export async function getGalleryImages(): Promise<SanityGalleryImage[]> {
  return sanityClient.fetch(
    `*[_type == "galleryImage"] | order(order asc) {
      _id, caption, alt, order,
      image { asset -> { url } }
    }`
  )
}

export async function getServicesByCategory(category: 'brokerage' | 'technical'): Promise<SanityService[]> {
  return sanityClient.fetch(
    `*[_type == "service" && category == $category] | order(order asc) {
      _id, title, content, category, order, isRenewable
    }`,
    { category }
  )
}
```

- [ ] **Step 9: Commit**

```bash
git add sanity/ lib/sanity/ .env.local.example
git commit -m "feat: Sanity CMS schemas for gallery, services, and office locations + client"
```

---

## Task 14: Connect Sanity to Gallery and Services Pages

**Files:**
- Modify: `app/projects/page.tsx`
- Modify: `app/services/brokerage/page.tsx`
- Modify: `app/services/technical/page.tsx`

- [ ] **Step 1: Update app/projects/page.tsx to use Sanity data**

```typescript
// app/projects/page.tsx
import type { Metadata } from 'next'
import MasonryGrid from '@/components/gallery/MasonryGrid'
import { getGalleryImages } from '@/lib/sanity/queries'

export const metadata: Metadata = { title: 'Projects & Gallery' }

export const revalidate = 3600 // ISR: revalidate every hour

export default async function ProjectsPage() {
  const sanityImages = await getGalleryImages()

  const images = sanityImages.length > 0
    ? sanityImages.map((img) => ({
        src: img.image.asset.url,
        alt: img.alt,
        caption: img.caption,
      }))
    : [
        { src: '/images/placeholder-hero.jpg', alt: 'Operations', caption: 'Mid-Continent Basin Operations' },
        { src: '/images/placeholder-hero.jpg', alt: 'Wind project', caption: 'Wind Leasing Project' },
      ]

  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Projects & Gallery</h1>
      <p className="section-subtitle mb-10">
        Visual documentation of our field operations, land projects, and
        technical services across the United States.
      </p>
      <MasonryGrid images={images} />
    </div>
  )
}
```

- [ ] **Step 2: Update app/services/brokerage/page.tsx to use Sanity data**

```typescript
// app/services/brokerage/page.tsx
import type { Metadata } from 'next'
import ServiceAccordion from '@/components/services/ServiceAccordion'
import WindLeasingBanner from '@/components/services/WindLeasingBanner'
import { getServicesByCategory } from '@/lib/sanity/queries'

export const metadata: Metadata = { title: 'Brokerage & Land Services' }
export const revalidate = 3600

const staticBrokerageServices = [
  { title: 'Leasehold Acquisitions', content: 'We negotiate and acquire oil and gas leases on behalf of operators, handling all aspects of landowner contact, lease terms negotiation, and execution.' },
  { title: 'Mineral & Leasehold Ownership Research', content: 'Comprehensive research into mineral ownership records, chain of title, and leasehold interests through county records, probate documents, and historical conveyances.' },
  { title: 'Title Opinions & Curative Work', content: 'Our certified landmen work alongside oil and gas attorneys to render formal title opinions. When defects are identified, we perform curative work including ratifications and corrections.' },
  { title: 'Right-of-Ways', content: 'Negotiation and acquisition of right-of-way agreements for pipelines, roads, and surface facilities. We handle landowner negotiations and all required documentation.' },
]

export default async function BrokeragePage() {
  const sanityServices = await getServicesByCategory('brokerage')
  const services = sanityServices.length > 0
    ? sanityServices.map(({ title, content }) => ({ title, content }))
    : staticBrokerageServices

  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Brokerage & Land Services</h1>
      <p className="section-subtitle mb-10">
        Comprehensive land services backed by decades of experience in the
        Mid-Continent and California basins.
      </p>
      <ServiceAccordion services={services} />
      <WindLeasingBanner />
    </div>
  )
}
```

- [ ] **Step 3: Update app/services/technical/page.tsx to use Sanity data**

```typescript
// app/services/technical/page.tsx
import type { Metadata } from 'next'
import ServiceAccordion from '@/components/services/ServiceAccordion'
import { getServicesByCategory } from '@/lib/sanity/queries'

export const metadata: Metadata = { title: 'Technical & Mapping Services' }
export const revalidate = 3600

const staticTechnicalServices = [
  { title: 'Land & Lease Mapping', content: 'GIS-based mapping of leasehold positions, unit boundaries, and land grids for landowner presentations, regulatory filings, and operations planning.' },
  { title: 'Seismic Mapping Support', content: 'Integration of seismic survey data with land and lease mapping to support exploration decisions. We coordinate shot-hole permits, surface waivers, and post-survey documentation.' },
  { title: 'Digital Imagery', content: 'High-resolution digital imagery acquisition and processing for surface reconnaissance, pipeline planning, and environmental baseline documentation.' },
]

export default async function TechnicalPage() {
  const sanityServices = await getServicesByCategory('technical')
  const services = sanityServices.length > 0
    ? sanityServices.map(({ title, content }) => ({ title, content }))
    : staticTechnicalServices

  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Technical & Mapping Services</h1>
      <p className="section-subtitle mb-10">
        Advanced mapping and imagery capabilities to support every phase of
        exploration and production.
      </p>
      <ServiceAccordion services={services} />
    </div>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add app/projects/page.tsx app/services/brokerage/page.tsx app/services/technical/page.tsx
git commit -m "feat: connect Gallery and Services pages to Sanity CMS with static fallback"
```

---

## Task 15: Run Full Test Suite + Fix Any Failures

- [ ] **Step 1: Run all tests**

```bash
npx jest --passWithNoTests
```

Expected: All tests PASS

- [ ] **Step 2: Run TypeScript check**

```bash
npx tsc --noEmit
```

Expected: No errors

- [ ] **Step 3: Run ESLint**

```bash
npx eslint . --ext .ts,.tsx
```

Expected: No errors

- [ ] **Step 4: Fix any failures** (investigate and fix before proceeding)

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "fix: resolve any test or TypeScript errors before deployment"
```

---

## Task 16: Vercel Deployment

**Files:**
- Create: `vercel.json` (only if custom rewrites needed)

- [ ] **Step 1: Install Vercel CLI if not present**

```bash
npm install -g vercel
```

- [ ] **Step 2: Log in to Vercel**

```bash
vercel login
```

- [ ] **Step 3: Deploy to Vercel (creates project)**

```bash
vercel
```

When prompted: Link to existing project? No → create new → name `meadows-oil-gas-redesign` → framework = Next.js

- [ ] **Step 4: Set environment variables in Vercel dashboard**

Go to vercel.com → project → Settings → Environment Variables. Add:
- `NEXT_PUBLIC_MAPBOX_TOKEN` = your Mapbox public token
- `NEXT_PUBLIC_SANITY_PROJECT_ID` = your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` = `production`
- `FORMSPREE_ENDPOINT` = your Formspree form endpoint

- [ ] **Step 5: Deploy to production**

```bash
vercel --prod
```

Expected: Production URL returned, e.g. `https://meadows-oil-gas-redesign.vercel.app`

- [ ] **Step 6: Verify all pages load**

Visit the production URL and check:
- `/` — Hero, stats bar, service cards
- `/about` — Hub page with 3 section cards
- `/about/history` — Two-column timeline
- `/about/reach` — Mapbox map with gold markers
- `/about/affiliations` — AAPL + OCAPL cards
- `/services/brokerage` — Accordion + wind leasing banner
- `/services/technical` — Accordion
- `/projects` — Masonry gallery
- `/contact` — Contact form + office sidebar

- [ ] **Step 7: Commit**

```bash
git add .
git commit -m "chore: production deployment to Vercel"
```

---

## Self-Review

### Spec Coverage Check

| Spec Requirement | Covered By |
|---|---|
| Home hero with digital imagery | Task 6 — HeroSection |
| Company History & Oil History | Task 8 — history/page.tsx + Timeline |
| Work Locations (OKC + Bakersfield) | Task 9 — reach/page.tsx + LocationMap |
| Domestic & foreign project capability | Task 9 — international callout block |
| AAPL + OCAPL affiliations | Task 4 (footer badges) + Task 8 (affiliations page) |
| Leasehold Acquisitions | Task 10 — brokerage/page.tsx |
| Mineral & Leasehold Ownerships | Task 10 |
| Title Opinions & Curative | Task 10 |
| Right-of-Ways | Task 10 |
| Wind Leasing (green accent) | Task 10 — WindLeasingBanner |
| Mapping & Seismic Mapping | Task 10 — technical/page.tsx |
| Digital Imagery | Task 10 |
| Photo Gallery | Task 11 — MasonryGrid |
| Contact forms + office addresses | Task 12 |
| Next.js + Tailwind | Task 1 |
| Headless CMS (Sanity) | Task 13–14 |
| Vercel hosting | Task 16 |
| Mapbox interactive map | Task 9 |
| SEO metadata | Task 5 (root layout) + metadata on each page |
| Accordion-style service display | Task 10 — ServiceAccordion |

All spec requirements are covered. No gaps found.

### Placeholder Scan

No TBD, TODO, or "similar to Task N" patterns found. All code blocks contain complete implementations.

### Type Consistency

- `TimelineEvent` defined in Task 8 and consumed in same task — consistent
- `GalleryImage` interface defined in Task 11, matched in Tasks 14
- `SanityService` / `SanityGalleryImage` defined in `lib/sanity/queries.ts` (Task 13) and consumed in Task 14 — consistent
- `ContactFormProps.formEndpoint` defined Task 12 and passed from page in same task — consistent
