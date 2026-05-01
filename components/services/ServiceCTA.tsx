'use client'
import Link from 'next/link'

interface Props {
  service: string
}

export default function ServiceCTA({ service }: Props) {
  return (
    <div
      className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-lg p-8"
      style={{
        backgroundColor: 'var(--color-brand-navy)',
        background: 'linear-gradient(135deg, rgba(26,39,68,1) 0%, rgba(19,29,52,1) 100%)',
      }}
    >
      <div>
        <p
          className="text-xs tracking-widest uppercase mb-2"
          style={{ color: 'var(--color-brand-gold)', fontFamily: 'var(--font-display)' }}
        >
          Ready to start?
        </p>
        <p
          className="text-white text-lg leading-snug"
          style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.03em' }}
        >
          Interested in {service}?
        </p>
      </div>
      <Link
        href="/contact"
        className="shrink-0 inline-flex items-center gap-3 rounded-full whitespace-nowrap"
        style={{
          backgroundColor: 'var(--color-brand-gold)',
          color: 'var(--color-brand-navy)',
          fontFamily: 'var(--font-display)',
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontWeight: 600,
          padding: '0.75rem 1.5rem',
          transition: 'background-color 0.3s cubic-bezier(0.32,0.72,0,1), transform 0.3s cubic-bezier(0.32,0.72,0,1)',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.backgroundColor = 'var(--color-brand-gold-light)'
          el.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.backgroundColor = 'var(--color-brand-gold)'
          el.style.transform = 'translateY(0)'
        }}
      >
        Get in Touch
        <span
          style={{
            width: '1.5rem',
            height: '1.5rem',
            borderRadius: '50%',
            backgroundColor: 'rgba(26,39,68,0.15)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.9rem',
          }}
        >
          →
        </span>
      </Link>
    </div>
  )
}
