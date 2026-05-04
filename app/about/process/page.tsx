import type { Metadata } from 'next'
import Link from 'next/link'
import { breadcrumbSchema } from '@/lib/seo'

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'How We Work' },
])

export const metadata: Metadata = {
  title: 'How We Work — Our Land Services Process',
  description:
    'A step-by-step look at how Meadows Oil & Gas delivers title work, leasing campaigns, right-of-way, and wind leasing projects — from first call to final deliverable.',
  alternates: { canonical: '/about/process' },
  openGraph: {
    title: 'How We Work | Meadows Oil and Gas',
    description:
      'See exactly how we run a land services engagement — initial consultation through delivery. What we need from you, what you get back, and typical turnaround times.',
  },
}

type ServiceTimeline = {
  service: string
  typical: string
  depends: string
}

type DeliverableItem = {
  item: string
  note?: string
}

type StepDetail = {
  number: string
  title: string
  tagline: string
  what: string
  youProvide: string[]
  weDeliver: string[]
  timeframe?: string
}

const steps: StepDetail[] = [
  {
    number: '01',
    title: 'Initial Consultation',
    tagline: 'Tell us what you need. We listen.',
    what:
      'You contact us by phone or through the contact form. We schedule a brief conversation — typically 20–30 minutes — to understand your project type, geographic scope, acreage target, and timeline. No pitch, no obligation.',
    youProvide: [
      'General project description (leasing campaign, title work, ROW, wind)',
      'Target area or county/state',
      'Rough timeline or any drilling or regulatory deadlines',
      'Any known complications (unleased interest holders, complex heirship, prior curative)',
    ],
    weDeliver: [
      'A listening ear from a career landman — not a sales rep',
      'An honest assessment of scope and complexity',
      'Clarity on whether your project is a fit for our team',
    ],
    timeframe: 'Same day or next business day response',
  },
  {
    number: '02',
    title: 'Scope & Proposal',
    tagline: 'A clear plan in writing — before work begins.',
    what:
      'Within 24 hours of our initial conversation, we define the project scope in writing. This includes which landmen will be assigned, what courthouse research is needed, the methodology for ownership verification, and a realistic timeline with milestone checkpoints.',
    youProvide: [
      'Any existing title, prior opinions, or plats you have on file',
      'Legal descriptions or well locations (if available)',
      'Confirmation of budget parameters (if applicable)',
      'Any specific deliverable format your title attorney or engineering team requires',
    ],
    weDeliver: [
      'Written scope of work with defined deliverables',
      'Named landman(s) with relevant experience in the target area',
      'Realistic timeline with milestone checkpoints',
      'Fee structure or rate card for the engagement',
    ],
    timeframe: 'Within 24 hours of consultation',
  },
  {
    number: '03',
    title: 'Field Execution',
    tagline: 'Courthouse work done right — with regular updates.',
    what:
      'Our landmen begin research immediately upon scope approval. This is the work: courthouse document review, chain-of-title construction, ownership verification, landowner contact, and field documentation. We keep you informed with progress updates at agreed intervals so there are no surprises.',
    youProvide: [
      'Prompt responses to questions about scope changes or new complications',
      'Authorization to proceed with curative work if defects are found',
      'Access to any company-held records that may accelerate research',
    ],
    weDeliver: [
      'Regular progress updates (daily, weekly, or milestone-based — your preference)',
      'Early alerts if complications arise that affect timeline or cost',
      'Escalation to your legal team for any curative decisions requiring attorney review',
      'Accurate, documented research throughout — no shortcuts',
    ],
    timeframe: 'Varies by project type — see timelines below',
  },
  {
    number: '04',
    title: 'Delivery & Support',
    tagline: 'Complete deliverables. Long-term availability.',
    what:
      'We deliver a complete, reviewed package in the format your team needs — title opinions, ownership runs, signed leases, ROW agreements, or mapped GIS files. We stay available for questions, follow-on curative work, or the next project.',
    youProvide: [
      'Confirmation that deliverables meet your requirements',
      'Feedback on any items that need adjustment or supplemental research',
    ],
    weDeliver: [
      'Complete deliverable package in your required format',
      'Summary of any open items, unleased interests, or outstanding curative',
      'Availability for follow-on work, amendments, or division order support',
      'A relationship built for your next project — not just this one',
    ],
    timeframe: 'Deliverables reviewed before final submission',
  },
]

const timelines: ServiceTimeline[] = [
  {
    service: 'Title Opinion (single tract)',
    typical: '2–5 business days',
    depends: 'Courthouse backlog, chain complexity, heirship issues',
  },
  {
    service: 'Title Opinion (well unit / multi-tract)',
    typical: '5–15 business days',
    depends: 'Number of tracts, depth of chain, curative required',
  },
  {
    service: 'Leasing Campaign',
    typical: '2–8 weeks',
    depends: 'Acreage target, landowner responsiveness, lease terms',
  },
  {
    service: 'Right-of-Way Acquisition',
    typical: '1–4 weeks per corridor',
    depends: 'Number of tracts, landowner availability, negotiation complexity',
  },
  {
    service: 'Ownership Run',
    typical: '3–7 business days',
    depends: 'Acreage size, county accessibility, ownership complexity',
  },
  {
    service: 'Wind Lease Aggregation',
    typical: '4–12 weeks',
    depends: 'Contiguous acreage target, landowner responsiveness, setback constraints',
  },
  {
    service: 'GIS / Mapping',
    typical: '2–5 business days',
    depends: 'Data complexity, number of layers, custom deliverable format',
  },
]

const deliverables: Record<string, DeliverableItem[]> = {
  'Title & Leasing': [
    { item: 'Written title opinion (attorney-reviewed or certified landman)' },
    { item: 'Title runsheet with document citations' },
    { item: 'Ownership run in Excel or PDF', note: 'with fractional interest calculations' },
    { item: 'Executed and recorded oil and gas leases' },
    { item: 'Curative file with supporting documentation' },
  ],
  'Right-of-Way': [
    { item: 'Executed ROW agreement or easement' },
    { item: 'Title chain for each affected tract' },
    { item: 'Landowner contact log and negotiation notes' },
    { item: 'Recorded instrument or filing confirmation' },
  ],
  'GIS & Mapping': [
    { item: 'Shapefile, KML, or PDF map deliverable' },
    { item: 'Plat with leasehold, ROW, or ownership layers' },
    { item: 'Digital imagery with survey-grade georeferencing', note: 'if applicable' },
    { item: 'Seismic data layers overlaid on surface ownership', note: 'if applicable' },
  ],
  'Wind Leasing': [
    { item: 'Executed wind lease for each participating landowner' },
    { item: 'Aggregated acreage summary with parcel map' },
    { item: 'Contact log and negotiation status report' },
    { item: 'Exception list for unleased or unable-to-locate parcels' },
  ],
}

export default function ProcessPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Header */}
      <div
        className="section-padding"
        style={{
          backgroundColor: '#000',
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(200,146,26,0.07) 0%, transparent 65%), #000',
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
          <span className="section-label">Our Process</span>
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            How We Work
          </h1>
          <p
            className="mt-5 max-w-2xl leading-relaxed"
            style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
          >
            From first call to final deliverable — what to expect at every stage of a Meadows Oil &amp;
            Gas engagement. No surprises. No vague timelines. Just a clear process run by career landmen.
          </p>

          {/* Jump links */}
          <div className="mt-8 flex flex-wrap gap-3">
            {['Process Steps', 'Timelines', 'Deliverables'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replaceAll(' ', '-')}`}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-brand-gold)',
                  border: '1px solid rgba(200,146,26,0.35)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '2px',
                  textDecoration: 'none',
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Steps */}
      <div
        id="process-steps"
        className="section-padding"
        style={{ backgroundColor: '#0a0a0a' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div className="space-y-0">
            {steps.map(({ number, title, tagline, what, youProvide, weDeliver, timeframe }, i) => (
              <div
                key={number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-14"
                style={{ borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.06)' : undefined }}
              >
                {/* Step number + meta */}
                <div className="lg:col-span-3 flex lg:flex-col gap-4 lg:gap-0">
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(4rem, 6vw, 6rem)',
                      lineHeight: 1,
                      color: 'rgba(212,151,26,0.12)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {number}
                  </div>
                  <div className="lg:mt-4">
                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                        color: 'white',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {title}
                    </h2>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.8rem',
                        color: 'var(--color-brand-gold)',
                        textTransform: 'none',
                        letterSpacing: 'normal',
                        fontStyle: 'italic',
                      }}
                    >
                      {tagline}
                    </p>
                    {timeframe && (
                      <p
                        className="mt-3 text-xs"
                        style={{
                          fontFamily: 'var(--font-display)',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.3)',
                        }}
                      >
                        {timeframe}
                      </p>
                    )}
                  </div>
                </div>

                {/* Main content */}
                <div className="lg:col-span-9">
                  <p
                    className="text-sm leading-relaxed mb-8"
                    style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                  >
                    {what}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* You provide */}
                    <div
                      className="p-5"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderTop: '2px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <p
                        className="text-xs uppercase tracking-widest mb-4"
                        style={{ fontFamily: 'var(--font-display)', color: 'rgba(255,255,255,0.4)' }}
                      >
                        What You Provide
                      </p>
                      <ul className="space-y-3">
                        {youProvide.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-xs leading-relaxed"
                            style={{ color: 'rgba(156,163,175,0.8)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                          >
                            <span style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0 }}>—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* We deliver */}
                    <div
                      className="p-5"
                      style={{
                        backgroundColor: 'rgba(212,151,26,0.04)',
                        border: '1px solid rgba(212,151,26,0.1)',
                        borderTop: '2px solid var(--color-brand-gold)',
                      }}
                    >
                      <p
                        className="text-xs uppercase tracking-widest mb-4"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-gold)' }}
                      >
                        What We Deliver
                      </p>
                      <ul className="space-y-3">
                        {weDeliver.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-xs leading-relaxed"
                            style={{ color: 'rgba(156,163,175,0.8)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                          >
                            <span style={{ color: 'var(--color-brand-gold)', flexShrink: 0 }}>—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timelines */}
      <div
        id="timelines"
        className="section-padding"
        style={{ backgroundColor: '#f5f5f5' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div className="mb-10">
            <span className="section-label">Typical Turnaround</span>
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
              How Long Does It Take?
            </h2>
            <p
              className="mt-4 max-w-xl text-sm leading-relaxed"
              style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
            >
              These are realistic ranges based on our experience. Rush timelines are possible — contact
              us to discuss. Every project is quoted with an honest timeline before work begins.
            </p>
          </div>

          {/* Mobile: stacked cards */}
          <div className="flex flex-col gap-3 md:hidden">
            {timelines.map(({ service, typical, depends }) => (
              <div
                key={service}
                className="p-4 bg-white"
                style={{ borderLeft: '3px solid var(--color-brand-gold)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
              >
                <div
                  style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#000', marginBottom: '0.4rem' }}
                >
                  {service}
                </div>
                <div
                  style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'var(--color-brand-gold)', marginBottom: '0.5rem' }}
                >
                  {typical}
                </div>
                <div
                  className="text-xs leading-relaxed"
                  style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)' }}
                >
                  {depends}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-brand-gold)' }}>
                  {['Service', 'Typical Timeline', 'What Affects It'].map((h) => (
                    <th
                      key={h}
                      className="text-left pb-3 pr-6"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(0,0,0,0.5)',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timelines.map(({ service, typical, depends }, i) => (
                  <tr
                    key={service}
                    style={{ borderBottom: '1px solid rgba(0,0,0,0.07)', backgroundColor: i % 2 === 0 ? '#fff' : 'transparent' }}
                  >
                    <td
                      className="py-4 pr-6"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000' }}
                    >
                      {service}
                    </td>
                    <td
                      className="py-4 pr-6 whitespace-nowrap"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', color: 'var(--color-brand-gold)', letterSpacing: '0.04em' }}
                    >
                      {typical}
                    </td>
                    <td
                      className="py-4 pr-2 text-xs leading-relaxed"
                      style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                    >
                      {depends}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            className="mt-6 text-xs"
            style={{ color: 'rgba(0,0,0,0.35)', fontFamily: 'var(--font-sans)', fontStyle: 'italic' }}
          >
            All timelines assume courthouse access and timely client response. Rush timelines available on request.
          </p>
        </div>
      </div>

      {/* Deliverables */}
      <div
        id="deliverables"
        className="section-padding"
        style={{ backgroundColor: '#0a0a0a' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div className="mb-10">
            <span className="section-label">What You Get</span>
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
              Deliverables by Service Type
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(deliverables).map(([category, items]) => (
              <div
                key={category}
                className="p-6"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderTop: '2px solid var(--color-brand-gold)',
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest mb-5"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-gold)' }}
                >
                  {category}
                </p>
                <ul className="space-y-3">
                  {items.map(({ item, note }) => (
                    <li
                      key={item}
                      className="flex gap-3 text-xs leading-relaxed"
                      style={{ color: 'rgba(156,163,175,0.85)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                    >
                      <span style={{ color: 'var(--color-brand-gold)', flexShrink: 0 }}>—</span>
                      <span>
                        {item}
                        {note && <span style={{ color: 'rgba(156,163,175,0.45)' }}> ({note})</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTAs by service type */}
      <div style={{ backgroundColor: 'var(--color-brand-navy)' }}>
        <div className="container-max px-6 sm:px-8" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="mb-10">
            <span className="section-label">Start a Project</span>
            <h2
              className="leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              Ready to Get Started?
            </h2>
            <p
              className="mt-3 max-w-xl text-sm leading-relaxed"
              style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
            >
              Reach out with your project details. We respond the same day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Title Work', service: 'Title Opinions', href: '/contact?service=Title+Opinions' },
              { label: 'Leasing', service: 'Leasehold Acquisitions', href: '/contact?service=Leasehold+Acquisitions' },
              { label: 'Right-of-Way', service: 'Right-of-Ways', href: '/contact?service=Right-of-Ways' },
              { label: 'Wind Leasing', service: 'Wind Leasing', href: '/contact?service=Wind+Leasing' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={{
                  display: 'block',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderTop: '2px solid var(--color-brand-gold)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'background-color 0.25s',
                }}
              >
                {label}
                <span
                  style={{ display: 'block', color: 'var(--color-brand-gold)', marginTop: '0.5rem', fontSize: '1rem' }}
                >
                  →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8">
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
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
