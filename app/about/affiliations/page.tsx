import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Professional Affiliations' }

const affiliations = [
  {
    acronym: 'AAPL',
    name: 'American Association of Professional Landmen',
    description:
      'The AAPL is the preeminent organization for land professionals in the petroleum industry, setting ethical standards and professional certifications that distinguish qualified landmen nationwide.',
    url: 'https://www.landman.org',
  },
  {
    acronym: 'OCAPL',
    name: 'Oklahoma City Association of Professional Landmen',
    description:
      'OCAPL is the regional chapter serving Oklahoma energy professionals, providing networking, continuing education, and advocacy for local land brokerage practitioners.',
    url: 'https://www.ocapl.org',
  },
]

export default function AffiliationsPage() {
  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Professional Affiliations</h1>
      <p className="section-subtitle mb-12">
        Our membership in industry-leading associations ensures the highest ethical and technical standards.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {affiliations.map(({ acronym, name, description, url }) => (
          <div
            key={acronym}
            className="bg-white rounded-lg p-8 shadow-sm"
            style={{ border: '1px solid rgba(212,151,26,0.2)' }}
          >
            <div
              className="inline-block font-bold text-2xl px-4 py-2 rounded mb-4"
              style={{ backgroundColor: 'var(--color-brand-navy)', color: 'var(--color-brand-gold)' }}
            >
              {acronym}
            </div>
            <h2
              className="text-xl font-semibold mb-3"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-brand-navy)' }}
            >
              {name}
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-brand-gray)' }}>
              {description}
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline"
              style={{ color: 'var(--color-brand-gold)' }}
            >
              Visit {acronym} →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
