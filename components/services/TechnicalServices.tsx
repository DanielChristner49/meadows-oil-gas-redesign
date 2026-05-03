import Link from 'next/link'
import { Layers, Activity, Camera } from 'lucide-react'

const services = [
  {
    Icon: Layers,
    title: 'GIS & Land Mapping',
    description:
      'Precise parcel mapping, ownership boundary visualization, and GIS-based land documentation for projects across the central United States.',
  },
  {
    Icon: Activity,
    title: 'Seismic Mapping Support',
    description:
      'Land acquisition and right-of-way coordination for seismic programs — working with operators and surface owners to ensure smooth permitting and access.',
  },
  {
    Icon: Camera,
    title: 'Digital Imagery',
    description:
      'High-resolution aerial and satellite imagery analysis supporting land due diligence, project area assessment, and regulatory documentation.',
  },
]

export default function TechnicalServices() {
  return (
    <section
      id="technical"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-brand-navy)', scrollMarginTop: '3rem' }}
    >
      <div className="container-max px-6 sm:px-8">
        <div className="mb-10">
          <span className="section-label">Technical Capabilities</span>
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
            Mapping &amp; Technical Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {services.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col p-8"
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderTop: '2px solid var(--color-brand-gold)',
              }}
            >
              <Icon
                size={28}
                style={{ color: 'var(--color-brand-gold)', marginBottom: '1.25rem' }}
                aria-hidden
              />
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.75rem',
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
        <Link
          href="/services/technical"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.6rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            textDecoration: 'none',
          }}
        >
          Technical Services Detail →
        </Link>
      </div>
    </section>
  )
}
