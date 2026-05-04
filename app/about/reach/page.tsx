import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceAreaMap from '@/components/about/ServiceAreaMap'
import MapReveal from '@/components/about/MapReveal'
import { breadcrumbSchema } from '@/lib/seo'

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Service Area & Reach' },
])

export const metadata: Metadata = {
  title: 'Service Area & Reach',
  description:
    'Meadows Oil & Gas provides land services across 13 states. Primary coverage in Oklahoma, Kansas, and Texas with extended network across the central and southern United States.',
  alternates: { canonical: '/about/reach' },
  openGraph: {
    title: 'Service Area & Reach | Meadows Oil and Gas',
    description: 'Land services across 13 states — primary coverage in Oklahoma, Kansas, and Texas, with extended network across the central and southern United States.',
  },
}

const primaryStates = [
  {
    abbr: 'OK',
    name: 'Oklahoma',
    note: 'Our home state. Deep courthouse presence in all 77 counties. Title opinions, leasing, ROW, and wind leasing.',
  },
  {
    abbr: 'KS',
    name: 'Kansas',
    note: 'Full-service operations across the Hugoton basin and Mid-Continent. Courthouse research statewide.',
  },
  {
    abbr: 'TX',
    name: 'Texas',
    note: 'West Texas, Permian Basin, and Panhandle coverage for leasehold acquisitions and title work.',
  },
]

const extendedStates = [
  'New Mexico', 'Colorado', 'Arkansas', 'Missouri', 'Nebraska',
  'Louisiana', 'Wyoming', 'North Dakota', 'South Dakota', 'Montana',
]

export default function ReachPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {/* Header */}
      <div
        className="section-padding"
        style={{
          backgroundColor: '#000',
          background: 'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(200,146,26,0.06) 0%, transparent 60%), #000',
        }}
      >
        <div className="container-max px-6 sm:px-8">
          <Link
            href="/about"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginBottom: '1.5rem',
            }}
          >
            ← About
          </Link>
          <span className="section-label">Service Area</span>
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            Our Reach
          </h1>
          <p
            className="mt-5 max-w-2xl leading-relaxed"
            style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
          >
            From our base in Edmond, Oklahoma, Meadows Oil &amp; Gas operates across 13 states in the
            central and southern United States. Three primary states anchor our courthouse depth; ten
            additional states are served through our extended professional network.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-brand-gold)',
                border: '1px solid rgba(200,146,26,0.4)',
                padding: '0.3rem 0.75rem',
                borderRadius: '2px',
              }}
            >
              3 Primary States
            </span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '0.3rem 0.75rem',
                borderRadius: '2px',
              }}
            >
              10+ Extended States
            </span>
          </div>
        </div>
      </div>

      {/* Interactive US Map */}
      <div
        className="section-padding"
        style={{ backgroundColor: '#0a0a0a' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div className="mb-8">
            <span className="section-label">Coverage Map</span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                lineHeight: 1,
              }}
            >
              13-State Coverage
            </h2>
            <p
              className="mt-3 max-w-xl text-sm leading-relaxed"
              style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
            >
              Hover any state to see its service tier. Gold states are primary — full courthouse
              presence and direct team capabilities. Muted states are served via our extended
              landman network.
            </p>
          </div>

          <ServiceAreaMap />

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <span
                style={{
                  width: '0.875rem',
                  height: '0.875rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-brand-gold)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                Primary Service State — OK · KS · TX
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span
                style={{
                  width: '0.875rem',
                  height: '0.875rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(200,146,26,0.35)',
                  border: '1px solid rgba(200,146,26,0.5)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                Extended Service Area — 10 States
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Office & Project Map */}
      <div
        className="section-padding"
        style={{ backgroundColor: 'var(--color-brand-navy)' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div className="mb-8">
            <span className="section-label">Office Location</span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                lineHeight: 1,
              }}
            >
              Based in Edmond, Oklahoma
            </h2>
            <p
              className="mt-3 max-w-xl text-sm leading-relaxed"
              style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
            >
              Our main office is in Edmond, OK — centrally positioned for quick courthouse access
              across the Mid-Continent basin and southern plains.
            </p>
          </div>
          <MapReveal />
        </div>
      </div>

      {/* State Detail Grid */}
      <div
        className="section-padding"
        style={{ backgroundColor: '#f5f5f5' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div className="mb-10">
            <span className="section-label">State Breakdown</span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                color: '#000',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                lineHeight: 1,
              }}
            >
              Primary &amp; Extended Coverage
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Primary states */}
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-gold)' }}
              >
                Primary Service States
              </p>
              <div className="flex flex-col gap-4">
                {primaryStates.map(({ abbr, name, note }) => (
                  <div
                    key={abbr}
                    className="p-6"
                    style={{
                      backgroundColor: '#fff',
                      border: '1px solid rgba(0,0,0,0.08)',
                      borderTop: '2px solid var(--color-brand-gold)',
                    }}
                  >
                    <div className="flex items-baseline gap-3 mb-2">
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.5rem',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          color: 'var(--color-brand-gold)',
                          lineHeight: 1,
                        }}
                      >
                        {abbr}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.7rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#000',
                        }}
                      >
                        {name}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                    >
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Extended states */}
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'rgba(0,0,0,0.4)' }}
              >
                Extended Service Network
              </p>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
              >
                Through our network of professional landmen, we extend services across the
                following states. Coverage and turnaround may vary — contact us to confirm
                availability for your project area.
              </p>
              <div className="flex flex-wrap gap-2">
                {extendedStates.map((state) => (
                  <span
                    key={state}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.6)',
                      border: '1px solid rgba(0,0,0,0.15)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '2px',
                    }}
                  >
                    {state}
                  </span>
                ))}
              </div>
              <div
                className="mt-8 p-6"
                style={{
                  backgroundColor: 'rgba(200,146,26,0.06)',
                  borderLeft: '3px solid var(--color-brand-gold)',
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-gold)' }}
                >
                  Not sure if we cover your area?
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                >
                  Reach out and describe your project location. We confirm coverage and
                  provide a scope within one business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className="section-padding"
        style={{ backgroundColor: 'var(--color-brand-navy)' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div className="max-w-2xl">
            <span className="section-label">Get Started</span>
            <h2
              className="leading-none mb-4"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              Need Coverage in Your State?
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
            >
              Tell us your project area. We&apos;ll confirm coverage and scope within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full"
                style={{
                  backgroundColor: 'var(--color-brand-gold)',
                  color: '#000',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  padding: '1rem 1.75rem',
                  textDecoration: 'none',
                }}
              >
                Start a Project →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  padding: '1rem 0',
                }}
              >
                All Services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
