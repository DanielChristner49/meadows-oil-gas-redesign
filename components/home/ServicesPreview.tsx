'use client'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

const services = [
  {
    number: '01',
    title: 'Leasing & Acquisitions',
    description:
      'Expert leasehold acquisition services helping operators and investors move quickly with clear ownership data and experienced execution.',
    href: '/services/brokerage#leasing',
    accent: '#c8921a',
    span: 'md:col-span-2',
    large: true,
  },
  {
    number: '02',
    title: 'Title Services',
    description:
      'Dependable title work including title opinions, curative work, and ownership reporting across Oklahoma, Kansas, Texas, and beyond.',
    href: '/services/brokerage#title',
    accent: '#c8921a',
    span: 'md:col-span-1',
    large: false,
  },
  {
    number: '03',
    title: 'Right-of-Way & Wind Leasing',
    description:
      'Full-service right-of-way acquisition and wind leasing support — navigating easements, surface agreements, and renewable energy transitions across the central plains.',
    href: '/services/wind',
    accent: '#3d9e4c',
    span: 'md:col-span-3',
    large: false,
  },
]

function ServiceCard({
  number,
  title,
  description,
  href,
  accent,
  large,
  delay,
}: (typeof services)[0] & { delay: number }) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <Link
        href={href}
        className="group block h-full"
        style={{
          padding: '1px',
          borderRadius: '0.5rem',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)',
          transition: 'box-shadow 0.5s cubic-bezier(0.32,0.72,0,1)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${accent}44`
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = 'none'
        }}
      >
        <div
          className="h-full flex flex-col justify-between"
          style={{
            backgroundColor: 'rgba(20,20,20,0.85)',
            borderRadius: 'calc(0.5rem - 1px)',
            border: '1px solid rgba(200,146,26,0.18)',
            padding: large ? '2.5rem' : '2rem',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
            minHeight: large ? '18rem' : '14rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: large ? '5rem' : '3.5rem',
              lineHeight: 1,
              color: 'rgba(255,255,255,0.05)',
              letterSpacing: '0.02em',
              position: 'absolute',
              top: '0.75rem',
              right: '1rem',
              userSelect: 'none',
            }}
          >
            {number}
          </span>
          <div>
            <span
              style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '9999px',
                border: `1px solid ${accent}44`,
                color: accent,
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'transform 0.5s cubic-bezier(0.32,0.72,0,1)',
                marginBottom: '1.5rem',
              }}
            >
              →
            </span>

            <h3
              className="mb-3"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: large ? '1.5rem' : '1.125rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'white',
                lineHeight: 1.1,
              }}
            >
              {title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: 'rgba(156,163,175,1)',
                fontFamily: 'var(--font-sans)',
                textTransform: 'none',
                letterSpacing: 'normal',
                maxWidth: large ? '36rem' : '100%',
              }}
            >
              {description}
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-display)', color: accent }}
            >
              Learn More
            </span>
            <span
              style={{
                color: accent,
                fontSize: '0.875rem',
                transition: 'transform 0.4s cubic-bezier(0.32,0.72,0,1)',
              }}
            >
              →
            </span>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  )
}

export default function ServicesPreview() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: '#000' }}
    >
      <div className="container-max px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <ScrollReveal>
            <span className="section-label">What We Do</span>
            <h2
              className="text-white leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              Core Services
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Link
              href="/services"
              className="shrink-0 self-start md:self-auto inline-flex items-center gap-2 text-xs tracking-widest uppercase"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '9999px',
                padding: '0.625rem 1.25rem',
                transition: 'border-color 0.4s cubic-bezier(0.32,0.72,0,1), color 0.4s cubic-bezier(0.32,0.72,0,1)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--color-brand-gold)'
                el.style.color = 'var(--color-brand-gold)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.2)'
                el.style.color = 'white'
              }}
            >
              All Services →
            </Link>
          </ScrollReveal>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div key={service.title} className={`${service.span}`}>
              <ServiceCard {...service} delay={i * 80} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
