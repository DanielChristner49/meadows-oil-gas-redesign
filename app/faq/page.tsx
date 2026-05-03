import type { Metadata } from 'next'
import Link from 'next/link'
import { breadcrumbSchema } from '@/lib/seo'

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

const sections: Section[] = [
  {
    id: 'scope',
    label: 'Project Scope',
    items: [
      {
        q: 'Is there a minimum project size?',
        a: 'No. We work on single-tract title opinions, targeted leasing campaigns, individual ROW parcels, and large-scale multi-county acquisitions. If the work is in our wheelhouse and we can do it right, we\'ll take it on. Describe your project and we\'ll tell you honestly if it\'s a fit.',
      },
      {
        q: 'Do you work with independent operators or only large companies?',
        a: 'Both. We work with independents, private equity-backed operators, large E&P companies, pipeline companies, wind developers, and individual mineral rights investors. The common thread is that our clients need accurate, fast land services — not a headcount discussion.',
      },
      {
        q: 'Can you handle a large-scale leasing campaign on short notice?',
        a: 'Often yes. Our network of career landmen allows us to scale quickly for active leasing campaigns. Contact us immediately when you have a tight window — the earlier we know about a deadline, the better we can staff for it. We\'ll tell you upfront if we can meet your timeline.',
      },
      {
        q: 'Do you handle due diligence for acquisitions?',
        a: 'Yes. We support M&A and acquisition due diligence with ownership verification, lease review, title examination, encumbrance identification, and acreage reporting. We work to your deadline and your format requirements.',
      },
      {
        q: 'Can you work alongside our in-house land department?',
        a: 'Absolutely. Many clients use us to supplement their in-house team — we handle overflow, cover counties where you don\'t have courthouse relationships, or run parallel leasing efforts on aggressive acquisition timelines. We integrate into your workflow, not the other way around.',
      },
    ],
  },
  {
    id: 'timelines',
    label: 'Timelines & Delivery',
    items: [
      {
        q: 'How quickly can you start a new project?',
        a: 'We typically respond to new project inquiries the same business day and can begin work within 24–48 hours of scope approval. For emergency or drilling-window situations, contact us by phone — we prioritize active needs.',
      },
      {
        q: 'How long does a title opinion take?',
        a: 'A single-tract title opinion typically takes 2–5 business days from scope approval, depending on courthouse accessibility and chain complexity. Multi-tract unit opinions run 5–15 business days. Complex chains with heirship or curative issues take longer — we\'ll tell you upfront if something is going to require more time.',
      },
      {
        q: 'Can you deliver on a rush timeline?',
        a: 'Yes, in many cases. Rush work depends on current project load and courthouse access. Call us when you have a hard deadline — we\'ll tell you immediately whether we can commit to it. We don\'t overpromise.',
      },
      {
        q: 'What format do you deliver work in?',
        a: 'We deliver in whatever format your team needs — written title opinions (attorney-certified or certified landman), Excel ownership runs, recorded lease originals, executed ROW agreements, or GIS/shapefile deliverables. If your title attorney or engineering team has specific requirements, tell us upfront and we\'ll match them.',
      },
      {
        q: 'What happens after delivery if we find issues?',
        a: 'We stand behind our work. If issues arise from our research, we address them. We\'re also available for follow-on curative work, supplemental research, division order support, and any questions that come up during drilling or production.',
      },
    ],
  },
  {
    id: 'coverage',
    label: 'Geographic Coverage',
    items: [
      {
        q: 'What states do you cover?',
        a: 'Our primary coverage is Oklahoma, Kansas, and Texas. We also work extensively in Colorado, New Mexico, North Dakota, Wyoming, Montana, and other central and southern US states. For areas outside our primary footprint, we leverage our network of vetted associate landmen. Contact us with your specific county or state and we\'ll confirm coverage.',
      },
      {
        q: 'Do you have courthouse relationships in rural counties?',
        a: 'Yes — this is a meaningful differentiator. Our landmen have built courthouse relationships across Oklahoma, Kansas, and Texas over years of active work. In rural counties with limited digital records and slow turnaround times, those relationships matter. If we have worked your target county before, we\'ll tell you.',
      },
      {
        q: 'Can you handle multi-state projects?',
        a: 'Yes. For operators with leasing campaigns or ROW projects spanning multiple states, we can coordinate a unified team with consistent reporting standards. We\'ve managed projects across 3–5 states simultaneously.',
      },
    ],
  },
  {
    id: 'credentials',
    label: 'Team & Credentials',
    items: [
      {
        q: 'Are your landmen AAPL members?',
        a: 'Yes. Meadows Oil & Gas holds active AAPL (American Association of Professional Landmen) membership, and our landmen adhere to the AAPL Code of Ethics. We are also active OCAPL (Oklahoma City Association of Professional Landmen) members. Membership means our team operates under a recognized professional framework — not just market incentives.',
      },
      {
        q: 'How much experience do your landmen have?',
        a: 'Our career landmen each bring 10+ years of hands-on experience in courthouse research, title opinion writing, leasehold acquisitions, right-of-way negotiation, and ownership reporting. We do not use junior staff on complex work without senior oversight.',
      },
      {
        q: 'Are your title opinions attorney-certified?',
        a: 'We can deliver both attorney-certified title opinions (prepared by or under the direct supervision of a licensed attorney) and certified landman opinions, depending on your requirements and the jurisdiction. Specify what your drilling program requires and we\'ll match it.',
      },
      {
        q: 'Who will I be working with — a sales rep or a landman?',
        a: 'You\'ll work directly with a career landman, not a sales team. When you contact us, you\'re talking to the people who will actually do the work — or who directly manage those who do. We don\'t layer in account managers between you and the expertise you\'re paying for.',
      },
    ],
  },
  {
    id: 'billing',
    label: 'Billing & Process',
    items: [
      {
        q: 'How do you bill for services?',
        a: 'Billing varies by project type. Title work is typically billed per tract or per opinion at a flat rate. Leasing campaigns and ROW projects are often billed on a daily rate basis plus expenses. GIS and mapping work is typically quoted as a fixed project fee. We provide a clear fee structure before work begins — no surprise invoices.',
      },
      {
        q: 'Do you require a contract or retainer?',
        a: 'For most engagements, we use a simple scope-of-work agreement that defines deliverables, timeline, and compensation before work begins. For ongoing relationships with recurring project volume, we can structure a master service agreement. We don\'t require a retainer for single-project engagements.',
      },
      {
        q: 'What information do I need to provide to get a quote?',
        a: 'The more detail you can share, the more accurate our quote will be. Helpful inputs: project type (title, leasing, ROW, wind, GIS), target county and state, acreage or tract count, any known complications (heirship, unleased interests, curative backlog), and your timeline or deadline. A 20-minute conversation is usually enough to produce a firm scope and fee estimate.',
      },
    ],
  },
]

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

export default function FAQPage() {
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
