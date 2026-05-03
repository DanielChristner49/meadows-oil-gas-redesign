'use client'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'

const points = [
  {
    heading: 'Experienced Professionals—No Learning Curve',
    body: 'Our team of career landmen each bring 10+ years of experience, specializing in ownership reporting, due diligence, leasing, and regulatory support.',
  },
  {
    heading: 'Faster Turnaround Without Sacrificing Accuracy',
    body: 'We accelerate project timelines through efficiency and innovation, delivering precise and dependable land and title solutions.',
  },
  {
    heading: 'Proven Expertise in Complex Ownership',
    body: 'Since 2009, we\'ve helped operators and investors move quickly with clear ownership data and experienced execution across Oklahoma, Kansas, Texas, and beyond.',
  },
  {
    heading: 'Technology Driven Efficiency',
    body: 'Leveraging the latest technology to deliver faster, more accurate results while building lasting relationships grounded in trust and transparency.',
  },
]

export default function WhySection() {
  return (
    <section style={{ backgroundColor: '#f5f5f5', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
      <div className="container-max px-6 sm:px-8" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="section-label">Why Meadows</span>
              <h2 className="section-title">Trusted Since 2009</h2>
            </div>
            <Link
              href="/about"
              className="shrink-0 self-start md:self-auto text-xs tracking-widest uppercase inline-flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-navy)' }}
            >
              About Our Company →
            </Link>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {points.map(({ heading, body }, i) => (
            <FadeUp key={heading} delay={i * 100}>
              <div
                className="block p-8 h-full"
                style={{
                  backgroundColor: 'white',
                  borderTop: '3px solid var(--color-brand-gold)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                }}
              >
                <h3
                  className="text-base mb-4"
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
            </FadeUp>
          ))}
        </div>

        {/* Founder quote */}
        <FadeUp delay={200}>
          <div
            className="p-8 md:p-12"
            style={{
              backgroundColor: '#000',
              borderLeft: '4px solid var(--color-brand-gold)',
            }}
          >
            <blockquote>
              <p
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  color: 'rgba(255,255,255,0.9)',
                  fontStyle: 'italic',
                  textTransform: 'none',
                  letterSpacing: 'normal',
                }}
              >
                &ldquo;We believe our work is a reflection of our values—faith in God, commitment
                to doing what&apos;s right, and respect for the people we serve. At Meadows Oil
                &amp; Gas, integrity isn&apos;t optional—it&apos;s the foundation of everything
                we do.&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <div style={{ width: '2rem', height: '1px', backgroundColor: 'var(--color-brand-gold)' }} />
                <cite
                  className="text-xs tracking-widest uppercase not-italic"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-gold)' }}
                >
                  Zach Meadows — Founder
                </cite>
              </footer>
            </blockquote>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
