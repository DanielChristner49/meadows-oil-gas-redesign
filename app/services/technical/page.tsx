import type { Metadata } from 'next'
import Link from 'next/link'
import { breadcrumbSchema } from '@/lib/seo'
import TechnicalScrollPanel from '@/components/services/TechnicalScrollPanel'

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'GIS & Technical Mapping Services' },
])

export const metadata: Metadata = {
  title: 'GIS & Technical Mapping Services',
  description:
    'GIS land mapping, seismic program support, and digital imagery services across the central United States. Accurate parcel mapping and land documentation for operators and developers.',
  alternates: { canonical: '/services/technical' },
  openGraph: {
    title: 'GIS & Technical Mapping Services | Meadows Oil and Gas',
    description: 'GIS land mapping, seismic program support, and digital imagery services across the central United States. Accurate parcel mapping and land documentation for operators and developers.',
  },
}

const navItems = [
  { id: 'mapping', title: 'Mapping' },
  { id: 'seismic', title: 'Seismic Mapping' },
  { id: 'imagery', title: 'Digital Imagery' },
]

export default function TechnicalPage() {
  return (
    <div>
      <script type="application/ld+json">{JSON.stringify(breadcrumb).replace(/&/g, "\\u0026")}</script>
      {/* Header */}
      <div
        className="section-padding"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #0d1117 100%)',
          borderBottom: '1px solid rgba(200,146,26,0.1)',
        }}
      >
        <div className="container-max px-6 sm:px-8">
          <Link
            href="/services"
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
            ← Services
          </Link>
          <span className="section-label">Technical Capabilities</span>
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            Mapping &amp;<br />Technical Services
          </h1>
          <p
            className="mt-5 max-w-xl leading-relaxed"
            style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
          >
            We support operators and developers with GIS land mapping, seismic program coordination,
            and digital imagery — delivering accurate technical documentation across the central
            United States.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {navItems.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-brand-gold)',
                  border: '1px solid rgba(200,146,26,0.3)',
                  padding: '0.4rem 0.875rem',
                  textDecoration: 'none',
                }}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <TechnicalScrollPanel />

      {/* CTA */}
      <div
        className="section-padding"
        style={{ backgroundColor: 'var(--color-brand-navy)' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div className="max-w-2xl">
            <span className="section-label">Technical Services</span>
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
              Need Mapping or Technical Support?
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
            >
              Tell us your project area and technical requirements. We&apos;ll respond same business day
              with a scope and timeline.
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
