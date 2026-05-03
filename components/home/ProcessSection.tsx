import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description:
      'You reach out via our contact form or by phone. We listen to your project needs, timeline, and geographic scope — no obligation.',
  },
  {
    number: '02',
    title: 'Scope & Proposal',
    description:
      'Within 24 hours we define the project scope, assign the right landmen, and provide a clear timeline and deliverable outline.',
  },
  {
    number: '03',
    title: 'Field Execution',
    description:
      'Our team begins courthouse research, ownership verification, and landowner contacts — keeping you informed throughout the process.',
  },
  {
    number: '04',
    title: 'Delivery & Support',
    description:
      'You receive a complete, accurate deliverable package. We remain available for follow-on curative work, questions, or the next project.',
  },
]

export default function ProcessSection() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-brand-navy)' }}
    >
      <div className="container-max px-6 sm:px-8">
        <div className="mb-12">
          <span className="section-label">Our Process</span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              lineHeight: 1,
            }}
          >
            How We Work
          </h2>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col gap-6 md:hidden">
          {steps.map(({ number, title, description }) => (
            <div
              key={number}
              className="pl-6"
              style={{ borderLeft: '2px solid var(--color-brand-gold)' }}
            >
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  color: 'var(--color-brand-gold)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '0.4rem',
                }}
              >
                Step {number}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '0.6rem',
                }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'var(--font-sans)',
                  textTransform: 'none',
                  letterSpacing: 'normal',
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-4">
          {steps.map(({ number, title, description }, i) => (
            <div
              key={number}
              className="flex flex-col pr-8"
              style={{
                borderRight: i < steps.length - 1 ? '1px solid rgba(212,151,26,0.2)' : undefined,
                paddingLeft: i > 0 ? '2rem' : undefined,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '5rem',
                  color: 'rgba(212,151,26,0.12)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.5rem',
                }}
              >
                {number}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '1rem',
                }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'var(--font-sans)',
                  textTransform: 'none',
                  letterSpacing: 'normal',
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-10 pt-10 flex flex-wrap items-center gap-6"
          style={{ borderTop: '1px solid rgba(212,151,26,0.2)' }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full"
            style={{
              backgroundColor: 'var(--color-brand-gold)',
              color: 'var(--color-brand-navy)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 600,
              padding: '0.875rem 1.75rem',
            }}
          >
            Start a Project
            <span
              style={{
                width: '1.75rem',
                height: '1.75rem',
                borderRadius: '50%',
                backgroundColor: 'rgba(26,39,68,0.2)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              →
            </span>
          </Link>
          <Link
            href="/about/process"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
              textDecoration: 'none',
            }}
          >
            See Full Process →
          </Link>
        </div>
      </div>
    </section>
  )
}
