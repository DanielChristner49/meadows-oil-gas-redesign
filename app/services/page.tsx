import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Services' }

export default function ServicesPage() {
  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Our Services</h1>
      <p className="section-subtitle mb-12">
        From leasehold acquisitions to seismic mapping — a full suite of professional land and technical services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link
          href="/services/brokerage"
          className="block bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
          style={{ borderTop: '4px solid var(--color-brand-gold)' }}
        >
          <h2
            className="text-2xl mb-3"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-brand-navy)' }}
          >
            Brokerage & Land Services
          </h2>
          <p className="text-sm" style={{ color: 'var(--color-brand-gray)' }}>
            Leasehold acquisitions, mineral research, title opinions, right-of-ways, and wind leasing.
          </p>
        </Link>
        <Link
          href="/services/technical"
          className="block bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
          style={{ borderTop: '4px solid var(--color-brand-gold)' }}
        >
          <h2
            className="text-2xl mb-3"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-brand-navy)' }}
          >
            Technical & Mapping
          </h2>
          <p className="text-sm" style={{ color: 'var(--color-brand-gray)' }}>
            GIS land mapping, seismic mapping support, and high-resolution digital imagery.
          </p>
        </Link>
      </div>
    </div>
  )
}
