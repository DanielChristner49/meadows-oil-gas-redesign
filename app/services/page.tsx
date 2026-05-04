import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceAccordion from '@/components/services/ServiceAccordion'
import WindLeasingBanner from '@/components/services/WindLeasingBanner'
import TechnicalServices from '@/components/services/TechnicalServices'
import ServicesNav from '@/components/services/ServicesNav'
import { breadcrumbSchema } from '@/lib/seo'

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services' },
])

const faqs = [
  {
    title: 'What is your typical turnaround time for a title opinion?',
    content: 'Turnaround depends on project scope and courthouse availability. Most standard title opinions are delivered within 2–5 business days. We consistently meet tight operator deadlines when projects require faster execution.',
  },
  {
    title: 'Which states do you primarily service?',
    content: 'Oklahoma, Kansas, and Texas are our primary service states. Through our extended service network we also cover New Mexico, Colorado, Arkansas, Missouri, Nebraska, Louisiana, Wyoming, North Dakota, South Dakota, and Montana.',
  },
  {
    title: 'Do you handle both mineral and surface ownership research?',
    content: 'Yes. We research and report on mineral and surface ownership including executive rights, royalty interests, non-participating royalty interests (NPRI), and surface use agreements.',
  },
  {
    title: 'What types of title curative work do you perform?',
    content: 'Curative services include resolving title gaps, correcting vesting defects, handling affidavits of heirship, preparing division orders, addressing unleased interest issues, and coordinating with attorneys on complex title matters.',
  },
  {
    title: 'How does your wind leasing service work?',
    content: 'We work with landowners, developers, and operators to facilitate wind lease negotiations, aggregate acreage footprints, and navigate easements and surface use agreements across the central and southern plains.',
  },
  {
    title: 'Are your landmen AAPL members?',
    content: 'Yes. Our team holds active membership in the American Association of Professional Landmen (AAPL) and the Oklahoma City Association of Professional Landmen (OCAPL), upholding the highest professional and ethical standards in the industry.',
  },
]

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive land services: Leasing & Acquisitions, Title Services, Right-of-Way, Wind Leasing, GIS Mapping, and Seismic Mapping Support. Serving Oklahoma, Kansas, Texas, and beyond since 2009.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Land Services | Meadows Oil and Gas',
    description: 'Comprehensive land services: Leasing & Acquisitions, Title Services, Right-of-Way, Wind Leasing, GIS Mapping, and Seismic Mapping Support. Serving Oklahoma, Kansas, Texas, and beyond since 2009.',
  },
}

const services = [
  {
    number: '01',
    title: 'Leasing & Acquisitions',
    description:
      'Expert leasehold acquisition services helping operators and investors move quickly with clear ownership data and experienced execution. Our team specializes in ownership reporting, due diligence, and regulatory support.',
    href: '/contact?service=Leasehold+Acquisitions',
    detailHref: '/services/brokerage#leasing',
  },
  {
    number: '02',
    title: 'Title Services',
    description:
      'Dependable title work including title opinions, curative work, and ownership reporting. Our career landmen—each with 10+ years of experience—deliver accuracy without sacrificing speed.',
    href: '/contact?service=Title+Opinions',
    detailHref: '/services/brokerage#title',
  },
  {
    number: '03',
    title: 'Right-of-Way & Wind Leasing',
    description:
      'Full-service right-of-way acquisition and wind leasing support — navigating easements, surface agreements, and renewable energy transitions across Oklahoma, Kansas, Texas, and beyond.',
    href: '/contact?service=Right-of-Ways',
    detailHref: '/services/brokerage#row',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ title, content }) => ({
    '@type': 'Question',
    name: title,
    acceptedAnswer: { '@type': 'Answer', text: content },
  })),
}

export default function ServicesPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Header */}
      <div
        className="section-padding"
        style={{
          backgroundColor: '#000',
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.4) 100%), url(/images/services-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-max px-6 sm:px-8">
          <span className="section-label">What We Do</span>
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            Core Services
          </h1>
          <p
            className="mt-5 max-w-2xl leading-relaxed"
            style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
          >
            At Meadows Oil &amp; Gas, we provide comprehensive land services built for speed,
            accuracy, and reliability. Since 2009, we&apos;ve helped operators and investors move
            quickly with clear ownership data, dependable title work, and experienced execution.
          </p>
          <p
            className="mt-3 max-w-2xl leading-relaxed"
            style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
          >
            Our team of career landmen—each with 10+ years of experience—specializes in ownership
            reporting, due diligence, leasing, and regulatory support across Oklahoma, Kansas,
            Texas, and beyond.
          </p>

          {/* State coverage badges */}
          <div className="mt-8 flex flex-wrap gap-3 items-center">
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.55rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                marginRight: '0.25rem',
              }}
            >
              Service Area:
            </span>
            {['Oklahoma', 'Kansas', 'Texas'].map((state) => (
              <span
                key={state}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-brand-gold)',
                  border: '1px solid rgba(200,146,26,0.4)',
                  padding: '0.25rem 0.625rem',
                  borderRadius: '2px',
                }}
              >
                {state}
              </span>
            ))}
            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.7rem' }}>+</span>
            {['New Mexico', 'Colorado', 'Arkansas', 'Missouri', 'Nebraska', 'Louisiana', 'Wyoming', 'N. Dakota', 'S. Dakota', 'Montana'].map((state) => (
              <span
                key={state}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '0.25rem 0.625rem',
                  borderRadius: '2px',
                }}
              >
                {state}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Anchor nav strip */}
      <ServicesNav />

      {/* Services list */}
      <div
        id="core-services"
        className="section-padding"
        style={{ backgroundColor: '#f5f5f5', scrollMarginTop: '3rem' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div
            className="flex flex-col"
            style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}
          >
            {services.map(({ number, title, description, href, detailHref }) => (
              <div
                key={title}
                className="flex flex-col sm:flex-row sm:items-start gap-6 py-10"
                style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}
              >
                <span
                  className="shrink-0 w-20 leading-none"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '4rem',
                    color: 'rgba(0,0,0,0.08)',
                    lineHeight: 1,
                  }}
                >
                  {number}
                </span>

                <div className="flex-1">
                  <h2
                    className="mb-3"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: '#000',
                    }}
                  >
                    {title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed max-w-xl mb-4"
                    style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
                  >
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-5 items-center">
                    <Link
                      href={href}
                      className="text-xs tracking-widest uppercase inline-flex items-center gap-1"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-gold)' }}
                    >
                      Get In Touch →
                    </Link>
                    <Link
                      href={detailHref}
                      className="text-xs tracking-widest uppercase inline-flex items-center gap-1"
                      style={{ fontFamily: 'var(--font-display)', color: 'rgba(0,0,0,0.35)' }}
                    >
                      Service Detail →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical & Mapping */}
      <TechnicalServices />

      {/* Wind Leasing */}
      <WindLeasingBanner />

      {/* FAQ */}
      <div
        id="faq"
        className="section-padding"
        style={{ backgroundColor: '#fff', borderTop: '1px solid rgba(0,0,0,0.06)', scrollMarginTop: '3rem' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-1">
              <span className="section-label">Common Questions</span>
              <h2
                className="section-title mt-2"
                style={{ color: '#000' }}
              >
                Frequently Asked
              </h2>
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
              >
                Answers to the questions operators ask us most before starting a project.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ServiceAccordion services={faqs} />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ backgroundColor: 'var(--color-brand-navy)' }}>
        <div className="container-max px-6 sm:px-8" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2
                className="leading-none mb-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
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
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
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
