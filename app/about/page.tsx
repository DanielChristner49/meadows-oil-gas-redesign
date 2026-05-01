import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Trusted since 2009. Meadows Oil & Gas delivers precise, dependable land and title solutions across Oklahoma, Kansas, Texas, and beyond.',
  alternates: { canonical: '/about' },
}

const points = [
  {
    heading: 'Experienced Professionals—No Learning Curve',
    body: 'Our team of career landmen each bring 10+ years of experience, specializing in ownership reporting, due diligence, leasing, and regulatory support across Oklahoma, Kansas, Texas, and beyond.',
  },
  {
    heading: 'Faster Turnaround Without Sacrificing Accuracy',
    body: 'We accelerate project timelines through efficiency and innovation, delivering precise and dependable land and title solutions that empower our clients to move with confidence.',
  },
  {
    heading: 'Proven Expertise in Complex Ownership',
    body: 'Since 2009, we\'ve helped operators and investors move quickly with clear ownership data and experienced execution. Our track record speaks for itself—references available.',
  },
  {
    heading: 'Technology Driven Efficiency',
    body: 'Leveraging the latest technology to deliver faster, more accurate results while building lasting relationships grounded in trust, transparency, and measurable results.',
  },
  {
    heading: 'Trusted, Ethical, and Transparent',
    body: 'Integrity is the foundation of everything we do. We believe our work is a reflection of our values—doing what\'s right and respecting the people we serve.',
  },
  {
    heading: 'Proven Track Record—References Available',
    body: 'If you need accurate land work done quickly and done right, Meadows Oil & Gas delivers. Contact us to speak with clients who can attest to our service quality.',
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Dark header */}
      <div
        className="section-padding"
        style={{
          backgroundColor: '#000',
          background: 'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(200,146,26,0.07) 0%, transparent 60%), #000',
        }}
      >
        <div className="container-max px-6 sm:px-8">
          <span className="section-label">Who We Are</span>
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            Why Meadows<br />Oil &amp; Gas
          </h1>
          <p
            className="mt-5 max-w-xl leading-relaxed"
            style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
          >
            Trusted since 2009. We set the standard for excellence in land services by delivering
            precise, dependable land and title solutions that empower our clients to move with confidence.
          </p>
        </div>
      </div>

      {/* Founder quote */}
      <div style={{ backgroundColor: '#111', borderBottom: '1px solid rgba(200,146,26,0.12)' }}>
        <div className="container-max px-6 sm:px-8 py-12">
          <blockquote className="max-w-3xl">
            <p
              className="leading-relaxed mb-4"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                color: 'rgba(255,255,255,0.85)',
                fontStyle: 'italic',
                textTransform: 'none',
                letterSpacing: 'normal',
              }}
            >
              &ldquo;We believe our work is a reflection of our values—faith in God, commitment to
              doing what&apos;s right, and respect for the people we serve. At Meadows Oil &amp; Gas,
              integrity isn&apos;t optional—it&apos;s the foundation of everything we do.&rdquo;
            </p>
            <footer className="flex items-center gap-3">
              <div style={{ width: '2rem', height: '1px', backgroundColor: 'var(--color-brand-gold)', opacity: 0.6 }} />
              <cite
                className="text-xs tracking-widest uppercase not-italic"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-gold)', opacity: 0.85 }}
              >
                Zach Meadows — Founder
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Points grid */}
      <div
        className="section-padding"
        style={{ backgroundColor: '#f5f5f5' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div className="mb-10">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">What Sets Us Apart</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {points.map(({ heading, body }) => (
              <div
                key={heading}
                className="p-8"
                style={{
                  backgroundColor: 'white',
                  borderTop: '3px solid var(--color-brand-gold)',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                }}
              >
                <h3
                  className="text-base mb-3"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: '#000',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {heading}
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

          {/* CTA */}
          <div
            className="p-8 md:p-12"
            style={{ backgroundColor: '#000' }}
          >
            <p
              className="text-white leading-relaxed mb-6"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                textTransform: 'none',
                letterSpacing: 'normal',
              }}
            >
              If you need accurate land work done quickly and done right, Meadows Oil &amp; Gas delivers.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#000',
                backgroundColor: 'var(--color-brand-gold)',
                borderRadius: '9999px',
                padding: '0.875rem 2rem',
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
