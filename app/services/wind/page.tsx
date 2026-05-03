import type { Metadata } from 'next'
import Link from 'next/link'
import { Wind } from 'lucide-react'
import { breadcrumbSchema } from '@/lib/seo'

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Wind Leasing Services' },
])

export const metadata: Metadata = {
  title: 'Wind Leasing Services',
  description:
    'Wind lease negotiations, acreage aggregation, and surface use agreements across Oklahoma, Kansas, and Texas. Experienced land professionals supporting wind energy developers and landowners.',
  alternates: { canonical: '/services/wind' },
  openGraph: {
    title: 'Wind Leasing Services | Meadows Oil and Gas',
    description:
      'Wind lease negotiations, acreage aggregation, and surface use agreements across Oklahoma, Kansas, and Texas. Experienced land professionals supporting wind energy developers and landowners.',
  },
}

const services = [
  {
    id: 'negotiations',
    number: '01',
    title: 'Wind Lease Negotiations',
    subtitle: 'Lease structuring, term review & execution',
    description:
      'We represent landowner and developer interests in wind lease structuring, terms review, and execution. Our team understands both the traditional land brokerage context and the specific requirements of wind energy agreements — delivering clear, bankable lease documents across Oklahoma, Kansas, and Texas.',
    included: [
      'Wind lease term review and negotiation for landowners and developers',
      'Royalty and bonus structure analysis and negotiation',
      'Turbine setback, noise, and shadow flicker provision review',
      'Decommissioning bond and restoration requirements',
      'Subordination and non-disturbance agreement coordination',
      'Multi-landowner lease coordination across large project areas',
    ],
    serves: 'Wind energy developers and landowners requiring experienced representation in wind lease negotiation across the central and southern plains.',
    deliverables: 'Executed wind leases, lease summaries, landowner contact reports, negotiation notes.',
    href: '/contact?service=Wind+Leasing',
  },
  {
    id: 'aggregation',
    number: '02',
    title: 'Acreage Aggregation',
    subtitle: 'Footprint assembly & landowner coordination',
    description:
      'Wind projects require contiguous acreage blocks that meet developer specifications. We identify, contact, and negotiate with multiple landowners to assemble the project footprint your team needs — managing the complexity of working across dozens of property owners in parallel.',
    included: [
      'Parcel ownership research and landowner identification',
      'Multi-landowner contact and outreach coordination',
      'Acreage priority mapping for optimal project footprint',
      'Unleased parcel identification and pursuit strategy',
      'GIS-based acreage tracking and reporting',
      'Neighbor notification and community relations support',
    ],
    serves: 'Wind developers assembling project footprints who need coordinated landowner outreach across large geographic areas.',
    deliverables: 'Executed lease package, acreage summary maps, landowner status tracking reports, GIS footprint deliverables.',
    href: '/contact?service=Wind+Leasing',
  },
  {
    id: 'easements',
    number: '03',
    title: 'Easements & Surface Use',
    subtitle: 'Access roads, turbine sites & surface agreements',
    description:
      'Beyond the lease, wind projects require access road easements, turbine placement agreements, and carefully negotiated surface use contracts. Our team handles the full scope of surface documentation — keeping your project on schedule and your landowner relationships intact.',
    included: [
      'Access road and transmission corridor easement acquisition',
      'Turbine and met tower placement agreement negotiation',
      'Surface use agreement (SUA) drafting and execution',
      'Damage claims assessment and resolution',
      'Easement curative: title research and prior encumbrance release',
      'Project closeout documentation and recording coordination',
    ],
    serves: 'Wind developers and contractors requiring access and surface documentation across multi-county project corridors.',
    deliverables: 'Executed easement agreements, surface use agreements, recorded instruments, project closeout package.',
    href: '/contact?service=Wind+Leasing',
  },
]

const green = '#3d9e4c'
const greenLight = '#5bb768'
const greenBg = '#0c1f10'

export default function WindLeasingPage() {
  return (
    <div>
      <script type="application/ld+json">{JSON.stringify(breadcrumb).replace(/&/g, "\\u0026")}</script>

      {/* Header */}
      <div
        className="section-padding"
        style={{
          backgroundColor: greenBg,
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(61,158,76,0.12) 0%, transparent 60%), ${greenBg}`,
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
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: greenLight,
              marginBottom: '0.75rem',
            }}
          >
            Renewable Energy
          </span>
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            Wind Leasing
          </h1>
          <p
            className="mt-5 max-w-xl leading-relaxed"
            style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
          >
            Meadows Oil &amp; Gas brings the same rigorous land expertise that powers our oil and gas
            practice to wind energy. We help landowners and developers navigate wind lease
            negotiations, acreage aggregation, and surface agreements across the central and
            southern plains.
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
                  color: greenLight,
                  border: `1px solid rgba(61,158,76,0.4)`,
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
      {services.map((service, i) => (
        <div
          key={service.id}
          id={service.id}
          className="section-padding"
          style={{
            backgroundColor: i % 2 === 0 ? '#0f1f12' : '#0c1a0e',
            borderTop: '1px solid rgba(61,158,76,0.08)',
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
                  color: green,
                  lineHeight: 1,
                  opacity: 0.2,
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
                    color: greenLight,
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
                      <span style={{ color: greenLight, flexShrink: 0 }}>—</span>
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
                    backgroundColor: 'rgba(61,158,76,0.08)',
                    borderLeft: `3px solid ${green}`,
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-widest mb-2"
                    style={{ fontFamily: 'var(--font-display)', color: greenLight }}
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
                    backgroundColor: green,
                    color: '#fff',
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
      ))}

      {/* Why Wind Leasing Needs Specialists */}
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
              Why Wind Leasing Requires Specialists
            </h2>
            <p
              className="mt-4 max-w-xl text-sm leading-relaxed"
              style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
            >
              Wind leases differ fundamentally from oil and gas leases in structure, term, and risk
              allocation. Generic land brokers without wind experience often miss provisions that
              can cost landowners revenue or expose developers to project-level risk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Long-Term Commitment',
                body: 'Wind leases run 30–50 years with options. Royalty structures, escalation clauses, and decommissioning bonds require careful negotiation — mistakes lock in for decades.',
              },
              {
                title: 'Multi-Party Coordination',
                body: 'Wind projects require dozens of individual landowners. Coordinating parallel negotiations while maintaining project feasibility demands experienced land management.',
              },
              {
                title: 'Surface Impact Expertise',
                body: 'Unlike mineral leases, wind agreements govern access roads, turbine placement, and surface restoration — areas where oil and gas land expertise directly applies.',
              },
              {
                title: 'GIS-Driven Precision',
                body: 'Footprint assembly requires accurate parcel mapping and acreage tracking. Our GIS capabilities and land expertise work together to deliver bankable project documentation.',
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="p-6"
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderTop: `2px solid ${green}`,
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
        style={{ backgroundColor: greenBg }}
      >
        <div className="container-max px-6 sm:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Wind size={20} style={{ color: greenLight }} />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: greenLight,
                }}
              >
                Wind Leasing
              </span>
            </div>
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
              Ready to Start Your Wind Project?
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
            >
              Tell us your project area, acreage target, and timeline. We&apos;ll confirm our land
              coverage and provide a scope within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?service=Wind+Leasing"
                className="inline-flex items-center gap-3 rounded-full"
                style={{
                  backgroundColor: green,
                  color: '#fff',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  padding: '1rem 1.75rem',
                  textDecoration: 'none',
                }}
              >
                Discuss Your Wind Project →
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
