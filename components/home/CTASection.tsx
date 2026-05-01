'use client'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function CTASection() {
  return (
    <section
      style={{
        backgroundColor: '#4a4a4a',
      }}
    >
      <div className="container-max px-6 sm:px-8" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2
                className="leading-none mb-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
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
                  fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
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
                transition: 'transform 0.4s cubic-bezier(0.32,0.72,0,1), box-shadow 0.4s cubic-bezier(0.32,0.72,0,1)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-3px)'
                el.style.boxShadow = '0 12px 32px rgba(200,146,26,0.35)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
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
                }}
              >
                →
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
