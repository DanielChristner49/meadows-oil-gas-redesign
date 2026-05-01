import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive land services: Oil & Gas Leasing, Title Services, and AI Data Center Development. Serving Oklahoma, Kansas, Texas, and beyond since 2009.',
  alternates: { canonical: '/services' },
}

const services = [
  {
    number: '01',
    title: 'Oil & Gas Leasing',
    description:
      'Expert leasehold acquisition services helping operators and investors move quickly with clear ownership data and experienced execution. Our team specializes in ownership reporting, due diligence, and regulatory support.',
    href: '/contact',
  },
  {
    number: '02',
    title: 'Title Services',
    description:
      'Dependable title work including title opinions, curative work, and ownership reporting. Our career landmen—each with 10+ years of experience—deliver accuracy without sacrificing speed.',
    href: '/contact',
  },
  {
    number: '03',
    title: 'AI Data Center Development',
    description:
      'Land and title solutions for advanced computing and AI infrastructure development. We help turn your vision into reality with precise, dependable land services built for modern technology infrastructure.',
    href: '/contact',
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <div
        className="section-padding"
        style={{
          backgroundColor: '#000',
          background: 'radial-gradient(ellipse 80% 60% at 0% 100%, rgba(200,146,26,0.07) 0%, transparent 60%), #000',
        }}
      >
        <div className="container-max px-6 sm:px-8">
          <span className="section-label">What We Do</span>
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            Core Services
          </h1>
          <p
            className="mt-5 max-w-2xl leading-relaxed"
            style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
          >
            At Meadows Oil &amp; Gas, we provide comprehensive land services built for speed,
            accuracy, and reliability. Since 2009, we&apos;ve helped operators and investors move
            quickly with clear ownership data, dependable title work, and experienced execution.
          </p>
          <p
            className="mt-3 max-w-2xl leading-relaxed"
            style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
          >
            Our team of career landmen—each with 10+ years of experience—specializes in ownership
            reporting, due diligence, leasing, and regulatory support across Oklahoma, Kansas,
            Texas, and beyond.
          </p>
        </div>
      </div>

      {/* Services list */}
      <div
        className="section-padding"
        style={{ backgroundColor: '#f5f5f5' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div
            className="flex flex-col"
            style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}
          >
            {services.map(({ number, title, description, href }) => (
              <div
                key={title}
                className="flex flex-col sm:flex-row sm:items-start gap-6 py-10"
                style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}
              >
                <span
                  className="shrink-0 w-20 leading-none"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '4rem',
                    color: 'rgba(0,0,0,0.08)',
                    lineHeight: 1,
                  }}
                >
                  {number}
                </span>

                <div className="flex-1">
                  <h2
                    className="mb-3"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: '#000',
                    }}
                  >
                    {title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed max-w-xl mb-4"
                    style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                  >
                    {description}
                  </p>
                  <Link
                    href={href}
                    className="text-xs tracking-widest uppercase inline-flex items-center gap-1"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-gold)' }}
                  >
                    Get In Touch →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ backgroundColor: '#4a4a4a' }}>
        <div className="container-max px-6 sm:px-8" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2
                className="leading-none mb-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  fontWeight: 300,
                }}
              >
                Built for Speed.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontWeight: 600,
                }}
              >
                Proven by Results.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-3 rounded-full"
              style={{
                backgroundColor: 'var(--color-brand-gold)',
                color: '#000',
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 600,
                padding: '1rem 1.75rem',
              }}
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
