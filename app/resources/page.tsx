import type { Metadata } from 'next'
import Link from 'next/link'
import { breadcrumbSchema } from '@/lib/seo'

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Resources' },
])

export const metadata: Metadata = {
  title: 'Oil & Gas Land Services Glossary',
  description:
    'Key terms in oil and gas land services — title opinions, leasehold acquisitions, mineral rights, NPRI, ROW, curative work, and more. Defined for operators and investors.',
  alternates: { canonical: '/resources' },
  openGraph: {
    title: 'Oil & Gas Land Services Glossary | Meadows Oil and Gas',
    description:
      'Key terms in oil and gas land services defined for operators, investors, and developers working across Oklahoma, Kansas, Texas, and beyond.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Oil and Gas Land Services Glossary',
  description: 'Key terms used in oil and gas land services, title work, and leasehold acquisitions.',
  url: 'https://meadows-oil-gas-redesign.vercel.app/resources',
}

type Term = {
  term: string
  definition: string
  relatedService?: { label: string; href: string }
}

type Category = {
  id: string
  label: string
  terms: Term[]
}

const categories: Category[] = [
  {
    id: 'title',
    label: 'Title & Ownership',
    terms: [
      {
        term: 'Title Opinion',
        definition:
          'A written legal opinion prepared by an attorney or experienced landman that describes the ownership of mineral rights in a specific tract of land based on a review of public records and courthouse documents. Operators require title opinions before drilling to confirm they are leasing from and paying royalties to the correct parties.',
        relatedService: { label: 'Title Services', href: '/services/brokerage#title' },
      },
      {
        term: 'Chain of Title',
        definition:
          'The documented history of all ownership transfers (deeds, probate, conveyances) for a tract of land from the earliest record to the present owner. A complete, unbroken chain of title is required before a lease can be signed or a well can be permitted.',
      },
      {
        term: 'Title Curative',
        definition:
          'The process of identifying and correcting defects, gaps, or ambiguities in a chain of title. Common curative work includes resolving heirship issues, correcting erroneous legal descriptions, filing affidavits, obtaining ratifications, or addressing unleased interest holders.',
        relatedService: { label: 'Title Services', href: '/services/brokerage#title' },
      },
      {
        term: 'Mineral Rights',
        definition:
          'The ownership interest in the subsurface resources beneath a tract of land, including oil, gas, coal, and other minerals. Mineral rights can be severed from surface ownership and sold, leased, or inherited separately.',
      },
      {
        term: 'Non-Participating Royalty Interest (NPRI)',
        definition:
          'A fractional interest in gross production from a tract of land, free of production costs, that does not participate in the executive rights (the right to lease the minerals). NPRI holders receive royalty payments but have no say in leasing decisions. Identifying NPRI burdens is critical during title work.',
      },
      {
        term: 'Executive Rights',
        definition:
          'The right to execute (sign) an oil and gas lease on behalf of the mineral estate. The executive rights holder can lease the minerals even if they do not own all royalty interests. Operators must identify who holds executive rights before executing a lease.',
      },
      {
        term: 'Division Order',
        definition:
          'A document sent to all interest owners before production revenue is distributed, setting forth each party\'s decimal interest in production. Division orders are prepared after title has been examined and must be accurate to avoid overpayment or underpayment to interest owners.',
      },
      {
        term: 'Ownership Run',
        definition:
          'A report prepared by a landman that identifies all current mineral and/or surface owners in a specified area, along with their fractional interests. Ownership runs are used in both leasing campaigns and due diligence reviews.',
        relatedService: { label: 'Leasing & Acquisitions', href: '/services/brokerage#leasing' },
      },
    ],
  },
  {
    id: 'leasing',
    label: 'Leasing & Acquisitions',
    terms: [
      {
        term: 'Oil and Gas Lease',
        definition:
          'A legal agreement between a mineral owner (lessor) and an operator or company (lessee) granting the lessee the right to explore for and produce oil and gas from the lessor\'s property in exchange for a bonus payment and royalty on production. Key lease terms include royalty rate, primary term, held-by-production clause, and shut-in provisions.',
      },
      {
        term: 'Leasehold Acquisition',
        definition:
          'The process of securing oil and gas leases from mineral owners in a target area. This involves identifying mineral owners, negotiating lease terms, executing leases, and recording them in the county courthouse. Speed and accuracy are critical — operators need leases in place before competitors or before a drilling window closes.',
        relatedService: { label: 'Leasing & Acquisitions', href: '/services/brokerage#leasing' },
      },
      {
        term: 'Bonus Payment',
        definition:
          'The upfront cash payment made by the lessee (operator) to the lessor (mineral owner) in exchange for signing an oil and gas lease. Bonus is typically expressed as dollars per net mineral acre and is negotiated based on market conditions and acreage quality.',
      },
      {
        term: 'Royalty Interest',
        definition:
          'The percentage of gross production (or the value thereof) reserved for the mineral owner in an oil and gas lease, free of production costs. A standard royalty might be 1/8 (12.5%) or higher depending on negotiation. The royalty owner receives this share whether or not the well is profitable.',
      },
      {
        term: 'Due Diligence',
        definition:
          'A thorough investigation of the mineral and title rights associated with a property before a transaction closes. For acquisitions, due diligence includes ownership verification, lease review, encumbrance identification, and regulatory compliance checks.',
        relatedService: { label: 'Leasing & Acquisitions', href: '/services/brokerage#leasing' },
      },
    ],
  },
  {
    id: 'row',
    label: 'Right-of-Way & Surface Use',
    terms: [
      {
        term: 'Right-of-Way (ROW)',
        definition:
          'A legal authorization granted by a landowner (or public authority) allowing a company to use a strip of land for a specific purpose — typically a pipeline, power line, road, or other infrastructure corridor. ROW agreements specify the width of the corridor, permitted uses, compensation, and restoration requirements.',
        relatedService: { label: 'Right-of-Way', href: '/services/brokerage#row' },
      },
      {
        term: 'Easement',
        definition:
          'A legal right to use another party\'s land for a specific, limited purpose without owning it. In oil and gas, easements commonly cover pipeline routes, access roads, and facility sites. Unlike a lease, an easement grants a specific use right rather than the right to produce resources.',
      },
      {
        term: 'Surface Use Agreement',
        definition:
          'A contract between an operator and a surface owner that defines how the operator may use the surface of the land during exploration and production activities. This includes the location of well pads, access roads, tanks, pipelines, and reclamation obligations. Separate from any mineral lease.',
        relatedService: { label: 'Right-of-Way', href: '/services/brokerage#row' },
      },
      {
        term: 'Pooling / Forced Pooling',
        definition:
          'The combination of small tracts or interests into a single unit for the purpose of drilling a well. Voluntary pooling occurs by agreement; forced pooling (compulsory integration) is a regulatory process allowing operators to include non-consenting or unable-to-be-located mineral owners in a drilling unit, with specific compensation rules.',
      },
    ],
  },
  {
    id: 'wind',
    label: 'Wind & Renewable Energy',
    terms: [
      {
        term: 'Wind Lease',
        definition:
          'A legal agreement between a landowner and a wind energy developer granting the developer the right to construct, operate, and maintain wind turbines and associated infrastructure on the landowner\'s property in exchange for annual rent payments and/or royalties based on electricity production. Wind leases typically run 30–50 years.',
        relatedService: { label: 'Wind Leasing', href: '/services/wind' },
      },
      {
        term: 'Acreage Aggregation',
        definition:
          'The process of assembling multiple landowner parcels into a contiguous block sufficient for a wind energy project. Developers and their land agents contact individual landowners, negotiate lease terms, and compile enough acreage to meet the minimum footprint requirements for a viable wind farm.',
        relatedService: { label: 'Wind Leasing', href: '/services/wind' },
      },
      {
        term: 'Turbine Setback',
        definition:
          'The minimum distance required between a wind turbine and a property boundary, road, residence, or other structure. Setback requirements vary by county and state regulation and directly affect the number of turbines that can be placed on a parcel.',
      },
      {
        term: 'Interconnection Agreement',
        definition:
          'A contract between a wind project developer and a utility or grid operator specifying the terms under which the wind project will connect to and deliver electricity to the transmission grid. Interconnection queue position and agreement terms significantly affect project economics.',
      },
    ],
  },
]

export default function ResourcesPage() {
  const allTermCount = categories.reduce((sum, c) => sum + c.terms.length, 0)

  return (
    <div>
      <script type="application/ld+json">{JSON.stringify(breadcrumb).replace(/&/g, "\\u0026")}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema).replace(/&/g, "\\u0026")}</script>

      {/* Header */}
      <div
        className="section-padding"
        style={{
          backgroundColor: '#000',
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,146,26,0.07) 0%, transparent 60%), #000',
        }}
      >
        <div className="container-max px-6 sm:px-8">
          <span className="section-label">Reference Guide</span>
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            Land Services<br />Glossary
          </h1>
          <p
            className="mt-5 max-w-2xl leading-relaxed"
            style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
          >
            {allTermCount} key terms in oil and gas land services — from title opinions and leasehold
            acquisitions to right-of-way and wind leasing. Defined for operators, investors, and developers
            working across the central and southern United States.
          </p>

          {/* Category jump links */}
          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
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
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Glossary content */}
      <div className="section-padding" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container-max px-6 sm:px-8">
          <div className="space-y-20">
            {categories.map((cat) => (
              <section key={cat.id} id={cat.id} style={{ scrollMarginTop: '5rem' }}>
                {/* Category header */}
                <div
                  className="flex items-center gap-4 mb-8 pb-4"
                  style={{ borderBottom: '2px solid var(--color-brand-gold)' }}
                >
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: '#000',
                    }}
                  >
                    {cat.label}
                  </h2>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.55rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.3)',
                      paddingTop: '0.15rem',
                    }}
                  >
                    {cat.terms.length} terms
                  </span>
                </div>

                {/* Terms */}
                <div className="space-y-6">
                  {cat.terms.map(({ term, definition, relatedService }) => (
                    <div
                      key={term}
                      className="bg-white p-6 sm:p-8"
                      style={{
                        borderLeft: '3px solid var(--color-brand-gold)',
                        boxShadow: '0 1px 8px rgba(0,0,0,0.04)',
                      }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: '#000',
                          }}
                        >
                          {term}
                        </h3>
                        {relatedService && (
                          <Link
                            href={relatedService.href}
                            className="shrink-0 text-xs tracking-widest uppercase hover:opacity-80 transition-opacity"
                            style={{
                              fontFamily: 'var(--font-display)',
                              color: 'var(--color-brand-gold)',
                              textDecoration: 'none',
                            }}
                          >
                            {relatedService.label} →
                          </Link>
                        )}
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                      >
                        {definition}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ backgroundColor: 'var(--color-brand-navy)' }}>
        <div className="container-max px-6 sm:px-8" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <span className="section-label">Ready to Move Forward?</span>
              <h2
                className="leading-none mt-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}
              >
                Have a Project in Mind?
              </h2>
              <p
                className="mt-3 max-w-xl text-sm leading-relaxed"
                style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
              >
                Our team of career landmen — each with 10+ years of experience — is ready to discuss
                your title, leasing, ROW, or wind leasing project.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
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
                className="inline-flex items-center gap-3"
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
