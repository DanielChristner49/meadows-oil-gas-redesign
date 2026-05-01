'use client'
import Link from 'next/link'

const services = [
  {
    href: '/services/brokerage',
    title: 'Brokerage & Land Services',
    description: 'Leasehold acquisitions, mineral research, title opinions, right-of-ways, and wind leasing.',
    number: '01',
    accent: 'var(--color-brand-gold)',
    full: false,
  },
  {
    href: '/services/technical',
    title: 'Technical & Mapping',
    description: 'GIS land mapping, seismic mapping support, and high-resolution digital imagery.',
    number: '02',
    accent: 'var(--color-brand-gold)',
    full: false,
  },
  {
    href: '/services/brokerage#wind-leasing',
    title: 'Wind Leasing',
    description: 'Specialist renewable energy land acquisition, wind lease negotiation, and project facilitation for clean energy development across the Great Plains and beyond.',
    number: '03',
    accent: 'var(--color-brand-green)',
    full: true,
  },
]

export default function ServiceLinks() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.filter(s => !s.full).map(({ href, title, description, number, accent }) => (
          <ServiceCard key={href} href={href} title={title} description={description} number={number} accent={accent} />
        ))}
      </div>
      {services.filter(s => s.full).map(({ href, title, description, number, accent }) => (
        <ServiceCard key={href} href={href} title={title} description={description} number={number} accent={accent} wind />
      ))}
    </div>
  )
}

function ServiceCard({ href, title, description, number, accent, wind }: {
  href: string; title: string; description: string; number: string; accent: string; wind?: boolean
}) {
  return (
    <Link
      href={href}
      className="group block p-8"
      style={{
        backgroundColor: wind ? 'rgba(45,125,58,0.04)' : 'white',
        borderLeft: `3px solid ${accent}`,
        transition: 'transform 0.4s cubic-bezier(0.32,0.72,0,1), box-shadow 0.4s cubic-bezier(0.32,0.72,0,1)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow = wind
          ? '0 12px 40px rgba(45,125,58,0.1)'
          : '0 12px 40px rgba(26,39,68,0.12)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
      }}
    >
      <div className={wind ? 'flex flex-col md:flex-row md:items-start md:gap-12' : ''}>
        <div className={wind ? 'md:flex-1' : ''}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '3rem',
              color: wind ? 'rgba(45,125,58,0.12)' : 'rgba(26,39,68,0.06)',
              lineHeight: 1,
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            {number}
          </span>
          <h2
            className="text-lg mb-3 tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-navy)' }}
          >
            {title}
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', maxWidth: wind ? '40rem' : undefined }}>
            {description}
          </p>
        </div>
        <div className={wind ? 'mt-4 md:mt-0 md:self-end' : 'mt-4'}>
          <span
            className="inline-flex items-center gap-1 text-xs tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-display)', color: accent }}
          >
            Learn More →
          </span>
        </div>
      </div>
    </Link>
  )
}
