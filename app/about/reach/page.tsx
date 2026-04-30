import type { Metadata } from 'next'
import LocationMap from '@/components/about/LocationMap'
import { OFFICE_LOCATIONS } from '@/lib/mapbox/config'

export const metadata: Metadata = { title: 'Our Reach' }

export default function ReachPage() {
  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Our Reach</h1>
      <p className="section-subtitle mb-10">
        Operating from two strategic offices with the capability to execute domestic and international projects.
      </p>

      <LocationMap />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {OFFICE_LOCATIONS.map(({ name, state, description }) => (
          <div
            key={name}
            className="bg-white rounded-lg p-6 shadow-sm"
            style={{ borderLeft: '4px solid var(--color-brand-gold)' }}
          >
            <h2
              className="text-xl font-semibold mb-2"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-brand-navy)' }}
            >
              {name}, {state}
            </h2>
            <p className="text-sm" style={{ color: 'var(--color-brand-gray)' }}>
              {description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-lg p-8 text-white" style={{ backgroundColor: 'var(--color-brand-navy)' }}>
        <h3
          className="text-xl font-bold mb-3"
          style={{ color: 'var(--color-brand-gold)', fontFamily: 'var(--font-serif)' }}
        >
          International Capability
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Beyond our US offices, Meadows Oil and Gas has the expertise and network to execute
          foreign projects, extending our land brokerage and title services to international
          energy developments.
        </p>
      </div>
    </div>
  )
}
