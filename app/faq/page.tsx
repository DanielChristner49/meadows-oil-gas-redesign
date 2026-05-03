import type { Metadata } from 'next'
import Link from 'next/link'
import { breadcrumbSchema } from '@/lib/seo'
import { sanityClient } from '@/lib/sanity/client'
import { faqQuery } from '@/lib/sanity/queries'
import type { SanityFaqItem } from '@/lib/sanity/types'

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'FAQ' },
])

export const metadata: Metadata = {
  title: 'FAQ — Land Services Questions Answered',
  description:
    'Common questions from operators and developers about working with Meadows Oil & Gas — project minimums, turnaround times, coverage area, team credentials, and billing.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ | Meadows Oil and Gas',
    description:
      'Answers to the questions operators ask before hiring a land services firm — scope, timelines, coverage, credentials, and how we work.',
  },
}

type QA = { q: string; a: string }
type Section = { id: string; label: string; items: QA[] }

export default async function FAQPage() {
  const faqItems = await sanityClient.fetch<SanityFaqItem[]>(faqQuery).catch(() => [])

  const sectionOrder = ['scope', 'title', 'leasing', 'wind', 'logistics'] as const
  const sectionLabels: Record<string, string> = {
    scope: 'Project Scope',
    title: 'Title Services',
    leasing: 'Leasing',
    wind: 'Wind & Renewables',
    logistics: 'Logistics & Process',
  }
  const sections: Section[] = sectionOrder.map((id) => ({
    id,
    label: sectionLabels[id],
    items: faqItems
      .filter((item) => item.category === id)
      .map((item) => ({ q: item.question, a: item.answer })),
  })).filter((s) => s.items.length > 0)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sections.flatMap((s) =>
      s.items.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      }))
    ),
  }

  const totalQuestions = sections.reduce((sum, s) => sum + s.items.length, 0)

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
          <span className="section-label">Common Questions</span>
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            Frequently Asked
            <br />
            Questions
          </h1>
          <p
            className="mt-5 max-w-2xl leading-relaxed"
            style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
          >
            {totalQuestions} questions operators, developers, and investors ask before working with a
            land services firm — answered directly.
          </p>

          {/* Category jump links */}
          <div className="mt-8 flex flex-wrap gap-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
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
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ content */}
      <div className="section-padding" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container-max px-6 sm:px-8">
          <div className="space-y-16">
            {sections.map((section) => (
              <section key={section.id} id={section.id} style={{ scrollMarginTop: '5rem' }}>
                <div
                  className="flex items-center gap-4 mb-6 pb-4"
                  style={{ borderBottom: '2px solid var(--color-brand-gold)' }}
                >
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: '#000',
                    }}
                  >
                    {section.label}
                  </h2>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.55rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.3)',
                    }}
                  >
                    {section.items.length} questions
                  </span>
                </div>

                <div className="space-y-2">
                  {section.items.map(({ q, a }) => (
                    <details
                      key={q}
                      className="group bg-white"
                      style={{
                        borderLeft: '3px solid transparent',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                      }}
                    >
                      <summary
                        className="flex items-center justify-between gap-4 cursor-pointer select-none px-6 py-5"
                        style={{ listStyle: 'none' }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            color: '#000',
                          }}
                        >
                          {q}
                        </span>
                        <span
                          className="shrink-0 text-sm"
                          style={{
                            color: 'var(--color-brand-gold)',
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.1rem',
                            lineHeight: 1,
                          }}
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </summary>
                      <div className="px-6 pb-6">
                        <p
                          className="text-sm leading-relaxed"
                          style={{
                            color: 'var(--color-brand-gray)',
                            fontFamily: 'var(--font-sans)',
                            textTransform: 'none',
                            letterSpacing: 'normal',
                            borderTop: '1px solid rgba(0,0,0,0.06)',
                            paddingTop: '1rem',
                          }}
                        >
                          {a}
                        </p>
                      </div>
                    </details>
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
              <span className="section-label">Still Have Questions?</span>
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
                Talk to a Landman
              </h2>
              <p
                className="mt-3 max-w-xl text-sm leading-relaxed"
                style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
              >
                You&apos;ll reach a career landman directly — not a sales rep. Describe your project
                and we&apos;ll give you an honest assessment on the spot.
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
                Contact Us →
              </Link>
              <a
                href="tel:4052858500"
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
                405.285.8500 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
