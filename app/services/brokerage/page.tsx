import type { Metadata } from 'next'
import Link from 'next/link'
import { breadcrumbSchema } from '@/lib/seo'

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Brokerage & Land Services' },
])

export const metadata: Metadata = {
  title: 'Brokerage & Land Services',
  description:
    'Leasehold acquisitions, title opinions, curative work, and right-of-way services across Oklahoma, Kansas, Texas, and beyond. AAPL-affiliated landmen with 10+ years of experience.',
  alternates: { canonical: '/services/brokerage' },
  openGraph: {
    title: 'Brokerage & Land Services | Meadows Oil and Gas',
    description: 'Leasehold acquisitions, title opinions, curative work, and right-of-way services across Oklahoma, Kansas, Texas, and beyond. AAPL-affiliated landmen with 10+ years of experience.',
  },
}

const services = [
  {
    id: 'leasing',
    number: '01',
    title: 'Leasehold Acquisitions',
    subtitle: 'Courthouse research, ownership runs & lease negotiations',
    description:
      'We help operators and investors move quickly on leasehold positions. Our landmen handle the full acquisition stack — from courthouse ownership research and curative to direct lease negotiations with mineral owners.',
    included: [
      'Courthouse mineral and surface ownership research',
      'Ownership runs and division order title preparation',
      'Direct lease negotiations with mineral and surface owners',
      'Due diligence packages for acquisition evaluations',
      'Mineral interest tracking and title curative coordination',
      'Unleased interest identification and pursuit',
    ],
    serves: 'Operators, investors, and E&P companies building new positions or expanding existing leasehold in Oklahoma, Kansas, and Texas.',
    deliverables: 'Signed oil and gas leases, ownership run reports, due diligence title packages, curative documentation.',
    href: '/contact?service=Leasehold+Acquisitions',
  },
  {
    id: 'title',
    number: '02',
    title: 'Title Services',
    subtitle: 'Title opinions, curative work & chain of title research',
    description:
      'Accurate, reliable title work is the foundation of every successful development project. Our career landmen produce title opinions and curative work that operators depend on to drill, complete, and operate wells with confidence.',
    included: [
      'Drilling title opinions (DTO) and division order title opinions (DOTO)',
      'Chain of title research and runsheet preparation',
      'Title curative: affidavits of heirship, gap curative, vesting defect resolution',
      'Probate research and heirship determinations',
      'Division order preparation and royalty owner verification',
      'Mineral ownership reports for complex multi-section projects',
    ],
    serves: 'Operators, royalty owners, investors, and attorneys requiring clean title documentation for drilling, division orders, or acquisition closings.',
    deliverables: 'Written title opinions, runsheets, curative instruments, division orders, ownership schedule reports.',
    href: '/contact?service=Title+Opinions',
  },
  {
    id: 'row',
    number: '03',
    title: 'Right-of-Way & Easements',
    subtitle: 'Pipeline ROW, surface use agreements & easement negotiations',
    description:
      'We acquire and document right-of-way corridors for pipeline operators, midstream companies, and developers. Our team handles landowner negotiations, surface use agreements, and the curative work required to keep projects moving.',
    included: [
      'Pipeline and utility right-of-way acquisition',
      'Landowner contact, notification, and negotiation',
      'Surface use agreement (SUA) drafting and execution',
      'ROW curative: title research, release of prior encumbrances',
      'Easement document preparation and recording coordination',
      'Damage claims and project closeout documentation',
    ],
    serves: 'Pipeline operators, midstream companies, utility developers, and anyone requiring access across private land.',
    deliverables: 'Executed easement agreements, surface use agreements, ROW title reports, recorded instruments.',
    href: '/contact?service=Right-of-Ways',
  },
]

const steps = [
  {
    step: '01',
    title: 'Project Request',
    body: 'Describe your project scope, target area, and timeline. We respond same business day.',
  },
  {
    step: '02',
    title: 'Scope & Estimate',
    body: 'We review the project, confirm courthouse availability, and deliver a clear scope and timeline.',
  },
  {
    step: '03',
    title: 'Field & Research',
    body: 'Our landmen execute courthouse research, owner contact, negotiations, and documentation.',
  },
  {
    step: '04',
    title: 'Delivery',
    body: 'Clean, organized deliverables — title opinions, executed leases, ROW instruments — ready for your operations team.',
  },
]

export default function BrokeragePage() {
  return (
    <div>
      <script type="application/ld+json">{JSON.stringify(breadcrumb).replace(/&/g, "\\u0026")}</script>
      {/* Header */}
      <div
        className="section-padding"
        style={{
          backgroundColor: '#000',
          background: 'radial-gradient(ellipse 80% 60% at 0% 100%, rgba(200,146,26,0.07) 0%, transparent 60%), #000',
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
          <span className="section-label">Core Brokerage Services</span>
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            Land Services
          </h1>
          <p
            className="mt-5 max-w-xl leading-relaxed"
            style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
          >
            Meadows Oil &amp; Gas delivers complete land brokerage services — from first courthouse
            research to executed instruments. AAPL-affiliated landmen with 10+ years of experience,
            serving operators across Oklahoma, Kansas, Texas, and beyond since 2009.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {services.map((s) => (
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
      <div style={{ backgroundColor: '#f5f5f5' }}>
        {services.map((service, i) => (
          <div
            key={service.id}
            id={service.id}
            className="section-padding"
            style={{
              backgroundColor: i % 2 === 0 ? '#f5f5f5' : '#fff',
              borderTop: i > 0 ? '1px solid rgba(0,0,0,0.06)' : undefined,
              scrollMarginTop: '5rem',
            }}
          >
            <div className="container-max px-6 sm:px-8">
              {/* Service header */}
              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-6 mb-10">
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                    fontWeight: 800,
                    color: 'var(--color-brand-gold)',
                    lineHeight: 1,
                    opacity: 0.25,
                    flexShrink: 0,
                  }}
                >
                  {service.number}
                </span>
                <div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                      color: '#000',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                      lineHeight: 1,
                    }}
                  >
                    {service.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      color: 'var(--color-brand-gold)',
                      marginTop: '0.35rem',
                      textTransform: 'none',
                      letterSpacing: 'normal',
                    }}
                  >
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Two-column detail */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Left: description + included */}
                <div>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                  >
                    {service.description}
                  </p>
                  <p
                    className="text-xs uppercase tracking-widest mb-3"
                    style={{ fontFamily: 'var(--font-display)', color: '#000' }}
                  >
                    What&apos;s Included
                  </p>
                  <ul className="space-y-2">
                    {service.included.map((item) => (
                      <li key={item} className="flex gap-3 text-sm" style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)' }}>
                        <span style={{ color: 'var(--color-brand-gold)', flexShrink: 0 }}>—</span>
                        <span style={{ textTransform: 'none', letterSpacing: 'normal' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: who + deliverables + CTA */}
                <div className="space-y-6">
                  <div
                    className="p-6"
                    style={{
                      backgroundColor: '#000',
                      borderLeft: '3px solid var(--color-brand-gold)',
                    }}
                  >
                    <p
                      className="text-xs uppercase tracking-widest mb-2"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-gold)' }}
                    >
                      Who This Serves
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                    >
                      {service.serves}
                    </p>
                  </div>
                  <div
                    className="p-6"
                    style={{
                      backgroundColor: 'white',
                      border: '1px solid rgba(0,0,0,0.08)',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    }}
                  >
                    <p
                      className="text-xs uppercase tracking-widest mb-2"
                      style={{ fontFamily: 'var(--font-display)', color: '#000' }}
                    >
                      Typical Deliverables
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                    >
                      {service.deliverables}
                    </p>
                  </div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-3 rounded-full"
                    style={{
                      backgroundColor: 'var(--color-brand-gold)',
                      color: '#000',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      padding: '0.875rem 1.5rem',
                      textDecoration: 'none',
                    }}
                  >
                    Start a {service.title} Project →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Process */}
      <div
        className="section-padding"
        style={{ backgroundColor: '#111', borderTop: '1px solid rgba(200,146,26,0.1)' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div className="mb-10">
            <span className="section-label">How It Works</span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                color: '#fff',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ step, title, body }) => (
              <div key={step}>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '3rem',
                    fontWeight: 800,
                    color: 'var(--color-brand-gold)',
                    opacity: 0.2,
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {step}
                </p>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9rem',
                    color: '#fff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                >
                  {body}
                </p>
              </div>
            ))}
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
            <span className="section-label">Ready to Start</span>
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
              Let&apos;s Talk About Your Project
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
            >
              Describe your project and we&apos;ll respond same business day with a scope and timeline.
              No long intake forms — just a direct conversation with experienced landmen.
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
