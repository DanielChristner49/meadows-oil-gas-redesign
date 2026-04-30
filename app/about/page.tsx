import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'About Us' }

const sections = [
  {
    title: 'Company & Oil History',
    href: '/about/history',
    description: 'Our roots in the American oil industry and company milestones.',
  },
  {
    title: 'Our Reach',
    href: '/about/reach',
    description: 'Oklahoma City and Bakersfield offices — domestic and international capabilities.',
  },
  {
    title: 'Professional Affiliations',
    href: '/about/affiliations',
    description: 'AAPL and OCAPL membership and what it means for our clients.',
  },
]

export default function AboutPage() {
  return (
    <div className="section-padding container-max">
      <h1 className="section-title">About Meadows Oil & Gas</h1>
      <p className="section-subtitle mb-12">
        A trusted name in land brokerage, mineral rights, and energy services for over three decades.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map(({ title, href, description }) => (
          <Link
            key={href}
            href={href}
            className="block rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            style={{ borderTop: '4px solid var(--color-brand-gold)' }}
          >
            <h2
              className="text-xl font-semibold mb-2"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-brand-navy)' }}
            >
              {title}
            </h2>
            <p className="text-sm" style={{ color: 'var(--color-brand-gray)' }}>
              {description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
