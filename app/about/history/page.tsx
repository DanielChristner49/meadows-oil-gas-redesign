import type { Metadata } from 'next'
import Timeline from '@/components/about/Timeline'

export const metadata: Metadata = { title: 'Company History' }

const oilHistory = [
  {
    year: '1859',
    title: 'Birth of the American Oil Industry',
    description: 'Edwin Drake drills the first commercial oil well in Titusville, Pennsylvania, kickstarting the modern petroleum era.',
  },
  {
    year: '1901',
    title: 'Spindletop Gusher',
    description: 'The Spindletop oil field blows out in Beaumont, Texas, launching the age of cheap, abundant oil.',
  },
  {
    year: '1929',
    title: 'Oklahoma Boom',
    description: 'Oklahoma becomes the top oil-producing state, establishing land brokerage as an essential profession.',
  },
]

const companyHistory = [
  {
    year: '1992',
    title: 'Meadows Oil & Gas Founded',
    description: 'Established in Oklahoma City to provide specialized land brokerage and title curative services.',
  },
  {
    year: '2003',
    title: 'AAPL Membership',
    description: 'Joined the American Association of Professional Landmen, cementing professional standards and national reach.',
  },
  {
    year: '2010',
    title: 'Bakersfield Office Opened',
    description: 'West Coast operations launched to serve San Joaquin Valley oil producers in California.',
  },
  {
    year: '2018',
    title: 'Wind Leasing Division',
    description: 'Expanded into renewable energy land services, offering wind lease acquisition across the Great Plains.',
  },
]

export default function HistoryPage() {
  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Our History</h1>
      <p className="section-subtitle mb-16">
        From the early days of American oil to today&apos;s renewable energy transition.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2
            className="text-2xl mb-8"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-brand-navy)' }}
          >
            Oil Industry Milestones
          </h2>
          <Timeline events={oilHistory} />
        </div>
        <div>
          <h2
            className="text-2xl mb-8"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-brand-navy)' }}
          >
            Meadows Oil & Gas
          </h2>
          <Timeline events={companyHistory} />
        </div>
      </div>
    </div>
  )
}
