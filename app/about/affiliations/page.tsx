import type { Metadata } from 'next'
import Link from 'next/link'
import { breadcrumbSchema } from '@/lib/seo'

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Professional Affiliations' },
])

export const metadata: Metadata = {
  title: 'Professional Affiliations | AAPL & OCAPL',
  description:
    'Meadows Oil & Gas holds active AAPL and OCAPL membership — the leading professional standards organizations for landmen in oil, gas, and energy.',
  alternates: { canonical: '/about/affiliations' },
  openGraph: {
    title: 'AAPL & OCAPL Member | Meadows Oil and Gas',
    description: 'Meadows Oil & Gas holds active AAPL and OCAPL membership — the leading professional standards organizations for landmen in oil, gas, and energy.',
  },
}

const trustPoints = [
  {
    title: 'Defined Ethics',
    body: 'Every engagement is governed by the AAPL Code of Ethics. No corner-cutting, no undisclosed conflicts.',
  },
  {
    title: 'Peer Accountability',
    body: 'Active members are subject to professional review by a community of peers — not just the market.',
  },
  {
    title: 'Continuing Education',
    body: 'Our landmen maintain current knowledge of evolving industry standards, regulations, and practices.',
  },
  {
    title: 'Industry-Standard Forms',
    body: 'We use and understand AAPL model forms — the same documents your legal team expects.',
  },
]

export default function AffiliationsPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {/* Header */}
      <div
        className="section-padding"
        style={{
          backgroundColor: '#000',
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(200,146,26,0.07) 0%, transparent 60%), #000',
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
          <span className="section-label">Professional Standards</span>
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            Our Affiliations
          </h1>
          <p
            className="mt-5 max-w-2xl leading-relaxed"
            style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
          >
            Meadows Oil &amp; Gas holds active membership in the two leading professional landmen
            associations in the industry. For operators choosing a land services partner, these
            affiliations signal that our team operates to the highest professional and ethical standards.
          </p>
        </div>
      </div>

      {/* AAPL */}
      <div
        className="section-padding"
        style={{ backgroundColor: '#0a0a0a' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(4rem, 8vw, 7rem)',
                  lineHeight: 1,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'var(--color-brand-gold)',
                  marginBottom: '0.25rem',
                }}
              >
                AAPL
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                  marginBottom: '0.5rem',
                }}
              >
                American Association of Professional Landmen
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(200,146,26,0.5)',
                  marginBottom: '2rem',
                }}
              >
                Est. 1955
              </p>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
              >
                The AAPL is the premier national professional organization for land professionals in
                the oil, gas, and energy industry. With thousands of members across North America,
                the AAPL sets the professional and ethical standards by which landmen operate.
              </p>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
              >
                AAPL membership requires adherence to a formal Code of Ethics and commitment to
                continuing professional development. The organization administers the Registered
                Landman (RL) and Registered Professional Landman (RPL) designations — the industry
                standard credentials for experienced land professionals.
              </p>
              <a
                href="https://www.landman.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-brand-gold)',
                  textDecoration: 'none',
                  opacity: 0.85,
                }}
              >
                Visit AAPL ↗
              </a>
            </div>

            <div
              className="p-8"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderTop: '2px solid var(--color-brand-gold)',
                alignSelf: 'start',
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-gold)' }}
              >
                What Membership Means
              </p>
              <ul className="space-y-4">
                {[
                  'Adherence to the AAPL Code of Ethics — binding standards of professional conduct',
                  'Access to industry education, model forms, and best-practice guidelines',
                  'Peer accountability within the national professional community',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)' }}>
                    <span style={{ color: 'var(--color-brand-gold)', flexShrink: 0 }}>—</span>
                    <span style={{ textTransform: 'none', letterSpacing: 'normal' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* OCAPL */}
      <div
        className="section-padding"
        style={{ backgroundColor: 'var(--color-brand-navy)' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3rem, 7vw, 6rem)',
                  lineHeight: 1,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'var(--color-brand-gold)',
                  marginBottom: '0.25rem',
                }}
              >
                OCAPL
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                  marginBottom: '2rem',
                }}
              >
                Oklahoma City Association of Professional Landmen
              </p>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
              >
                The OCAPL is the regional chapter serving Oklahoma City&apos;s energy community —
                one of the most active land markets in the United States. Active membership
                demonstrates commitment to local industry relationships, regional professional
                development, and community standards.
              </p>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
              >
                As an active OCAPL member, Meadows Oil &amp; Gas participates in the regional
                professional community that defines how land work gets done in the Mid-Continent basin.
              </p>
              <a
                href="https://www.ocapl.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-brand-gold)',
                  textDecoration: 'none',
                  opacity: 0.85,
                }}
              >
                Visit OCAPL ↗
              </a>
            </div>

            <div
              className="p-8"
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderTop: '2px solid var(--color-brand-gold)',
                alignSelf: 'start',
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-gold)' }}
              >
                What Membership Means
              </p>
              <ul className="space-y-4">
                {[
                  'Participation in the regional professional network serving Oklahoma City\'s energy sector',
                  'Commitment to the OCAPL\'s professional standards and ethical guidelines',
                  'Engagement with local industry events, education, and peer development',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)' }}>
                    <span style={{ color: 'var(--color-brand-gold)', flexShrink: 0 }}>—</span>
                    <span style={{ textTransform: 'none', letterSpacing: 'normal' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What This Means For Operators */}
      <div
        className="section-padding"
        style={{ backgroundColor: '#f5f5f5' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div className="mb-10">
            <span className="section-label">Why It Matters</span>
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
              What This Means For You
            </h2>
            <p
              className="mt-4 max-w-xl text-sm leading-relaxed"
              style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
            >
              When you hire a land services firm, membership in these associations is a proxy for
              accountability. It means the people handling your title work and lease negotiations
              are operating under a recognized professional framework — not just checking boxes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustPoints.map(({ title, body }) => (
              <div
                key={title}
                className="p-6"
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderTop: '2px solid var(--color-brand-gold)',
                }}
              >
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#000',
                  }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
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
              Ready to Work With a Credentialed Team?
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
            >
              Our AAPL and OCAPL members are ready to take on your next project — title opinions,
              leasing, ROW, or wind leasing.
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
                href="/about"
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
                Back to About →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
