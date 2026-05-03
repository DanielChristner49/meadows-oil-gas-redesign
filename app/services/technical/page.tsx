import type { Metadata } from 'next'
import Link from 'next/link'
import { Map, Satellite, Image } from 'lucide-react'
import { breadcrumbSchema } from '@/lib/seo'

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

const services = [
  {
    id: 'gis',
    Icon: Map,
    title: 'GIS & Land Mapping',
    subtitle: 'Parcel mapping, ownership visualization & land documentation',
    description:
      'We produce accurate GIS-based land maps that give operators and developers a clear picture of parcel boundaries, mineral ownership, and project footprints. Our mapping deliverables support land acquisitions, ROW planning, and regulatory submissions.',
    included: [
      'Parcel boundary mapping and ownership visualization',
      'County/township/range plat integration and verification',
      'Mineral and surface ownership GIS layers',
      'Project area footprint maps for operator use',
      'Multi-county and multi-state mapping for large acquisitions',
      'ArcGIS and QGIS deliverables in client-specified formats',
    ],
    serves: 'Operators, investors, and developers who need accurate, GIS-ready land maps to support acquisitions, operations, or regulatory submissions.',
    deliverables: 'Georeferenced parcel maps, ownership overlay shapefiles, PDF and GIS-format map packages.',
    href: '/contact?service=GIS+Mapping',
  },
  {
    id: 'seismic',
    Icon: Satellite,
    title: 'Seismic Mapping Support',
    subtitle: 'Land acquisition and ROW permitting for seismic programs',
    description:
      'Seismic programs depend on coordinated landowner access and clear ROW permitting. We work with operators and geophysical companies to identify surface ownership, negotiate access agreements, and document permits across project corridors.',
    included: [
      'Surface ownership research along seismic shoot corridors',
      'Landowner identification, contact, and access negotiation',
      'Shot-hole and vibroseis permit acquisition',
      'ROW documentation and permit tracking',
      'Damage claim coordination and project closeout',
      'Multi-county project management support',
    ],
    serves: 'Geophysical companies, E&P operators, and seismic contractors requiring coordinated land access across multi-county corridors.',
    deliverables: 'Executed access permits, shot-hole agreements, landowner contact reports, corridor ROW documentation.',
    href: '/contact?service=Seismic+Mapping',
  },
  {
    id: 'imagery',
    Icon: Image,
    title: 'Digital Imagery',
    subtitle: 'Aerial and satellite imagery analysis for land due diligence',
    description:
      'High-resolution aerial and satellite imagery provides objective documentation of project areas, surface conditions, and land use — supporting due diligence, environmental compliance, and regulatory filings.',
    included: [
      'Aerial and satellite imagery procurement and analysis',
      'Pre- and post-project site condition documentation',
      'Surface feature identification for land use assessments',
      'Imagery annotation and markup for regulatory submissions',
      'Historical imagery comparison for environmental due diligence',
      'Integration with GIS parcel and ownership layers',
    ],
    serves: 'Operators, developers, and legal teams requiring documented site conditions for due diligence, permitting, or litigation support.',
    deliverables: 'Annotated imagery reports, GIS-integrated image packages, site condition documentation with metadata.',
    href: '/contact?service=Digital+Imagery',
  },
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
      {services.map((service, i) => {
        const { Icon } = service
        return (
          <div
            key={service.id}
            id={service.id}
            className="section-padding"
            style={{
              backgroundColor: i % 2 === 0 ? '#0a0a0a' : '#0f0f0f',
              borderTop: '1px solid rgba(255,255,255,0.04)',
              scrollMarginTop: '5rem',
            }}
          >
            <div className="container-max px-6 sm:px-8">
              {/* Service header */}
              <div className="flex items-start gap-5 mb-10">
                <div
                  style={{
                    width: '2.75rem',
                    height: '2.75rem',
                    backgroundColor: 'rgba(200,146,26,0.1)',
                    border: '1px solid rgba(200,146,26,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.25rem',
                  }}
                >
                  <Icon size={16} style={{ color: 'var(--color-brand-gold)' }} />
                </div>
                <div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                      color: '#fff',
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
                    style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                  >
                    {service.description}
                  </p>
                  <p
                    className="text-xs uppercase tracking-widest mb-3"
                    style={{ fontFamily: 'var(--font-display)', color: 'rgba(255,255,255,0.5)' }}
                  >
                    What&apos;s Included
                  </p>
                  <ul className="space-y-2">
                    {service.included.map((item) => (
                      <li key={item} className="flex gap-3 text-sm" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)' }}>
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
                      backgroundColor: 'rgba(200,146,26,0.06)',
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
                      style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                    >
                      {service.serves}
                    </p>
                  </div>
                  <div
                    className="p-6"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <p
                      className="text-xs uppercase tracking-widest mb-2"
                      style={{ fontFamily: 'var(--font-display)', color: 'rgba(255,255,255,0.5)' }}
                    >
                      Typical Deliverables
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
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
                    Discuss {service.title} →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}

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
