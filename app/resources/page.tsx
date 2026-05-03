import type { Metadata } from 'next'
import Link from 'next/link'
import { breadcrumbSchema } from '@/lib/seo'
import { sanityClient } from '@/lib/sanity/client'
import { glossaryQuery } from '@/lib/sanity/queries'
import type { SanityGlossaryTerm } from '@/lib/sanity/types'

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

export default async function ResourcesPage() {
  const sanityTerms = await sanityClient.fetch<SanityGlossaryTerm[]>(glossaryQuery).catch(() => [])

  const categoryOrder = ['title', 'leasing', 'operations', 'wind'] as const
  const categoryLabels: Record<string, string> = {
    title: 'Title & Ownership',
    leasing: 'Leasing',
    operations: 'Operations',
    wind: 'Wind & Renewables',
  }
  const categories: Category[] = categoryOrder.map((id) => ({
    id,
    label: categoryLabels[id],
    terms: sanityTerms.filter((t) => t.category === id).map((t) => ({ term: t.term, definition: t.definition })),
  })).filter((c) => c.terms.length > 0)

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
