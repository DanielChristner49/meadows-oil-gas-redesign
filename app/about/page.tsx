import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceAreaMap from '@/components/about/ServiceAreaMap'
import Timeline from '@/components/about/Timeline'
import { breadcrumbSchema } from '@/lib/seo'

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'About Us' },
])

const milestones = [
  {
    year: '2009',
    title: 'Founded',
    description: 'Zach Meadows establishes Meadows Oil & Gas Corporation in Edmond, Oklahoma — focused on leasehold acquisition and title services for Oklahoma operators.',
  },
  {
    year: '2011',
    title: 'Kansas Expansion',
    description: 'Service area extends into Kansas, bringing courthouse research and title opinion capabilities to the Mid-Continent basin.',
  },
  {
    year: '2013',
    title: 'AAPL & OCAPL Member',
    description: 'Team joins both the national and regional professional landmen associations, formalizing commitment to industry standards and ethics.',
  },
  {
    year: '2015',
    title: 'Title Division Grows',
    description: 'Title opinions and curative work division expands to serve major operators on complex multi-section projects across Oklahoma and Kansas.',
  },
  {
    year: '2017',
    title: 'Wind Leasing Launched',
    description: 'Renewable energy transition begins with a dedicated wind leasing practice serving Oklahoma and Kansas landowners and operators.',
  },
  {
    year: '2019',
    title: 'Ten Years Strong',
    description: 'A decade of service marks expansion into Texas, growing the team to serve operators across the central and southern plains.',
  },
  {
    year: '2024',
    title: 'Technology Forward',
    description: 'Adoption of the latest digital tools accelerates title research, ownership reporting, and project delivery for clients.',
  },
]

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Trusted since 2009. Meadows Oil & Gas delivers precise, dependable land and title solutions across Oklahoma, Kansas, Texas, and beyond.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Meadows Oil and Gas — Trusted Since 2009',
    description: 'Career landmen with 10+ years of experience delivering precise, dependable land and title solutions across Oklahoma, Kansas, Texas, and beyond.',
  },
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
      <script type="application/ld+json">{JSON.stringify(breadcrumb).replace(/&/g, "\\u0026")}</script>
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

      {/* Company History Timeline */}
      <div
        className="section-padding"
        style={{ backgroundColor: '#fff', borderBottom: '1px solid rgba(0,0,0,0.06)' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Heading column */}
            <div className="lg:col-span-1">
              <span className="section-label">Company History</span>
              <h2
                className="section-title mt-2"
                style={{ color: '#000' }}
              >
                Our Story
              </h2>
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
              >
                From a single Oklahoma operator focus in 2009 to a full-service land firm covering
                the central and southern plains — built on precision, integrity, and trust.
              </p>
              <Link
                href="/about/history"
                className="inline-flex items-center gap-1 mt-5"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-brand-gold)',
                  textDecoration: 'none',
                }}
              >
                Oklahoma Oil History →
              </Link>
            </div>
            {/* Timeline column */}
            <div className="lg:col-span-2">
              <Timeline events={milestones} />
            </div>
          </div>
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

          {/* Service Area Map */}
          <div
            className="mb-12 p-8 md:p-12"
            style={{ backgroundColor: '#000' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-2">
                <span className="section-label" style={{ color: 'var(--color-brand-gold)' }}>Service Area</span>
                <h2
                  className="mt-2 mb-4 text-white leading-none"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                  }}
                >
                  Where We Work
                </h2>
                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                >
                  Our team of landmen operates across Oklahoma, Kansas, and Texas as our primary
                  service states — with the flexibility to take on projects across the central
                  and southern plains.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      style={{
                        width: '0.75rem',
                        height: '0.75rem',
                        borderRadius: '9999px',
                        backgroundColor: 'var(--color-brand-gold)',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.7)',
                      }}
                    >
                      Primary — OK, KS, TX
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      style={{
                        width: '0.75rem',
                        height: '0.75rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(200,146,26,0.35)',
                        border: '1px solid rgba(200,146,26,0.5)',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.7)',
                      }}
                    >
                      Extended Service Area
                    </span>
                  </div>
                </div>
                <Link
                  href="/about/reach"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-brand-gold)',
                    textDecoration: 'none',
                    display: 'inline-block',
                    marginTop: '1.5rem',
                  }}
                >
                  Our Reach →
                </Link>
              </div>
              <div className="lg:col-span-3">
                <ServiceAreaMap />
              </div>
            </div>
          </div>

          {/* Professional Affiliations */}
          <div
            className="mb-12 p-8 md:p-12"
            style={{ backgroundColor: '#000' }}
          >
            <div className="mb-8">
              <span className="section-label" style={{ color: 'var(--color-brand-gold)' }}>Professional Affiliations</span>
              <h2
                className="mt-2 text-white leading-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}
              >
                Industry Credentials
              </h2>
              <Link
                href="/about/affiliations"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-brand-gold)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  marginTop: '0.75rem',
                }}
              >
                Our Affiliations →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  abbr: 'AAPL',
                  name: 'American Association of Professional Landmen',
                  description:
                    'The premier national professional association for land professionals in the oil, gas, and energy industry. Membership demonstrates commitment to professional standards, ethics, and continuing education across the energy sector.',
                  href: 'https://www.landman.org',
                  label: 'Visit AAPL',
                },
                {
                  abbr: 'OCAPL',
                  name: 'Oklahoma City Association of Professional Landmen',
                  description:
                    'The regional chapter serving Oklahoma City\'s energy community. Active membership demonstrates commitment to local industry relationships, professional development, and the highest ethical standards in land practice.',
                  href: 'https://www.ocapl.org',
                  label: 'Visit OCAPL',
                },
              ].map(({ abbr, name, description, href, label }) => (
                <div
                  key={abbr}
                  className="p-8 flex flex-col"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderLeft: '3px solid var(--color-brand-gold)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.5rem',
                      lineHeight: 1,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: 'var(--color-brand-gold)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {abbr}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.45)',
                      marginBottom: '1rem',
                    }}
                  >
                    {name}
                  </div>
                  <p
                    className="text-sm leading-relaxed flex-1 mb-6"
                    style={{ color: 'rgba(209,213,219,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                  >
                    {description}
                  </p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start hover:opacity-100 transition-opacity"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--color-brand-gold)',
                      opacity: 0.8,
                    }}
                  >
                    {label} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* How We Work */}
          <div
            className="mb-12 p-8 md:p-12"
            style={{ backgroundColor: 'var(--color-brand-navy)' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <span className="section-label">Our Process</span>
                <h2
                  className="mt-2 text-white leading-none"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                  }}
                >
                  How We Work
                </h2>
                <p
                  className="mt-4 text-sm leading-relaxed"
                  style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                >
                  From first call to final deliverable in four clear steps. See what to expect,
                  what you&apos;ll need to provide, and typical turnaround times by service type.
                </p>
                <Link
                  href="/about/process"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-brand-gold)',
                    textDecoration: 'none',
                    display: 'inline-block',
                    marginTop: '1.5rem',
                  }}
                >
                  See Our Process →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Initial Consultation', 'Scope & Proposal', 'Field Execution', 'Delivery & Support'].map((step, i) => (
                  <div
                    key={step}
                    className="p-4"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderTop: '2px solid var(--color-brand-gold)',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.55rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(212,151,26,0.6)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'white',
                      }}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
