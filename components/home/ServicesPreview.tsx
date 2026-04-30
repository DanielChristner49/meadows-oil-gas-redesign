import Link from 'next/link'
import { FileText, Map, Wind } from 'lucide-react'

const services = [
  {
    Icon: FileText,
    title: 'Land Brokerage & Title',
    description:
      'Leasehold acquisitions, mineral ownership research, title opinions, curative work, and right-of-ways handled by certified professionals.',
    href: '/services/brokerage',
    isRenewable: false,
  },
  {
    Icon: Map,
    title: 'Technical & Mapping',
    description:
      'Seismic mapping, GIS-based land mapping, and high-resolution digital imagery for exploration and production planning.',
    href: '/services/technical',
    isRenewable: false,
  },
  {
    Icon: Wind,
    title: 'Wind Leasing',
    description:
      'Specialist renewable energy land acquisition, wind lease negotiation, and project facilitation for clean energy development.',
    href: '/services/brokerage',
    isRenewable: true,
  },
]

export default function ServicesPreview() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-brand-cream)' }}
    >
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle mx-auto">
            Full-service energy land professionals covering traditional oil & gas
            and the growing renewable energy sector.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ Icon, title, description, href, isRenewable }) => (
            <Link
              key={title}
              href={href}
              className="group block rounded-lg bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              style={{
                borderTop: `4px solid ${isRenewable ? 'var(--color-brand-green)' : 'var(--color-brand-gold)'}`,
              }}
            >
              <Icon
                size={32}
                style={{ color: isRenewable ? 'var(--color-brand-green)' : 'var(--color-brand-gold)' }}
              />
              <h3
                className="text-xl font-semibold mt-4 mb-2"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-brand-navy)' }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brand-gray)' }}>
                {description}
              </p>
              <span
                className="mt-4 inline-block text-sm font-medium group-hover:underline"
                style={{ color: isRenewable ? 'var(--color-brand-green)' : 'var(--color-brand-gold)' }}
              >
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
