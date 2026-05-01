import ScrollReveal from '@/components/ui/ScrollReveal'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const stats = [
  { value: '30+', label: 'Years Experience', sub: 'Est. early 1990s' },
  { value: '2', label: 'Office Locations', sub: 'Oklahoma City & Bakersfield' },
  { value: '50+', label: 'States & Countries', sub: 'Domestic & International' },
  { value: '2', label: 'Affiliations', sub: 'AAPL · OCAPL Member' },
]

export default function StatsBar() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-brand-surface)',
        borderTop: '1px solid rgba(212,151,26,0.2)',
      }}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ borderRight: '1px solid rgba(255,255,255,0.05)' }}
        >
          {stats.map(({ value, label, sub }, i) => (
            <div
              key={label}
              className="px-6 py-10 lg:py-14"
              style={{ borderLeft: '1px solid rgba(255,255,255,0.05)' }}
            >
              <ScrollReveal delay={i * 80}>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '0.125rem 0.375rem',
                    marginBottom: '0.375rem',
                    borderRadius: '0.375rem',
                    backgroundColor: 'rgba(212,151,26,0.07)',
                    border: '1px solid rgba(212,151,26,0.14)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                      color: 'var(--color-brand-gold)',
                      lineHeight: 1,
                      letterSpacing: '0.02em',
                    }}
                  >
                    <AnimatedCounter value={value} />
                  </p>
                </div>
                <p
                  className="text-white text-xs mt-1.5 tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {label}
                </p>
                <p className="text-xs mt-1" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)' }}>
                  {sub}
                </p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
