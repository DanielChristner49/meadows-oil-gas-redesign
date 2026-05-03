import Link from 'next/link'
import { Wind } from 'lucide-react'

const offerings = [
  {
    title: 'Wind Lease Negotiations',
    description:
      'Representing landowner and developer interests in wind lease structuring, terms review, and execution across Oklahoma, Kansas, and Texas.',
  },
  {
    title: 'Acreage Footprint Aggregation',
    description:
      'Assembling contiguous lease blocks that meet developer requirements, coordinating with multiple landowners across large geographic areas.',
  },
  {
    title: 'Easements & Surface Use',
    description:
      'Drafting and negotiating access road easements, turbine placement agreements, and surface use contracts for wind energy projects.',
  },
]

export default function WindLeasingBanner() {
  return (
    <section
      id="wind-leasing"
      className="section-padding"
      style={{ backgroundColor: '#0c1f10', scrollMarginTop: '3rem' }}
    >
      <div className="container-max px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          {/* Content */}
          <div className="md:col-span-3">
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-display)',
                fontSize: '0.65rem',
                color: 'var(--color-brand-green-light)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Renewable Energy
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                lineHeight: 1,
                marginBottom: '1.25rem',
              }}
            >
              Wind Leasing Services
            </h2>
            <p
              className="text-sm leading-relaxed mb-10 max-w-xl"
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontFamily: 'var(--font-sans)',
                textTransform: 'none',
                letterSpacing: 'normal',
              }}
            >
              As the energy landscape shifts, Meadows Oil &amp; Gas brings the same rigorous land
              expertise to the wind sector. We help landowners, developers, and operators navigate
              the full lifecycle of wind lease acquisition across the central and southern plains.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {offerings.map(({ title, description }) => (
                <div key={title} className="flex gap-4">
                  <span
                    style={{
                      flexShrink: 0,
                      width: '6px',
                      height: '6px',
                      borderRadius: '1px',
                      backgroundColor: 'var(--color-brand-green-light)',
                      marginTop: '0.45rem',
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.85rem',
                        color: 'white',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: 'rgba(255,255,255,0.55)',
                        fontFamily: 'var(--font-sans)',
                        textTransform: 'none',
                        letterSpacing: 'normal',
                      }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/contact?service=Wind+Leasing"
                className="inline-flex items-center gap-3 rounded-full"
                style={{
                  backgroundColor: 'var(--color-brand-green)',
                  color: 'white',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  padding: '0.875rem 1.75rem',
                }}
              >
                Discuss Your Wind Project
                <span
                  style={{
                    width: '1.75rem',
                    height: '1.75rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  →
                </span>
              </Link>
              <Link
                href="/services/wind"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-brand-green-light)',
                  textDecoration: 'none',
                  opacity: 0.85,
                }}
              >
                Full Wind Leasing Details →
              </Link>
            </div>
          </div>

          {/* Decorative icon panel */}
          <div
            className="hidden md:flex md:col-span-2 items-center justify-center"
            aria-hidden="true"
          >
            <Wind
              size={220}
              style={{ color: 'rgba(61,158,76,0.12)', strokeWidth: 0.8 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
