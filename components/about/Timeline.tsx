'use client'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface TimelineEvent {
  year: string
  title: string
  description: string
}

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <ol className="space-y-0">
      {events.map(({ year, title, description }, i) => (
        <ScrollReveal key={year} delay={i * 100} as="li" className="relative flex gap-6">
            {/* Connector column */}
            <div className="relative flex-shrink-0 flex flex-col items-center" style={{ width: '3.5rem' }}>
              <div
                className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-white text-center"
                style={{
                  backgroundColor: 'var(--color-brand-gold)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.05em',
                  fontWeight: 700,
                }}
              >
                {year}
              </div>
              {i < events.length - 1 && (
                <div
                  className="flex-1 w-px mt-1"
                  style={{
                    backgroundColor: 'rgba(212,151,26,0.2)',
                    minHeight: '2.5rem',
                  }}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pt-3 pb-8">
              <h3
                className="mb-1 tracking-wide uppercase"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  color: 'var(--color-brand-navy)',
                  letterSpacing: '0.05em',
                }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)' }}>
                {description}
              </p>
            </div>
        </ScrollReveal>
      ))}
    </ol>
  )
}
