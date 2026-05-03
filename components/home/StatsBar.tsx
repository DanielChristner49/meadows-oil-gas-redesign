import FadeUp from '@/components/ui/FadeUp'

const stats = [
  { figure: '2009', label: 'Established' },
  { figure: '10+', label: 'Yrs Per Landman' },
  { figure: 'OK · KS · TX', label: '& Beyond' },
  { figure: '3', label: 'Core Services' },
]

export default function StatsBar() {
  return (
    <section aria-label="Key Statistics" style={{ backgroundColor: '#c8921a' }}>
      <div
        className="container-max"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '0.625rem 0.75rem',
        }}
      >
        {stats.map(({ figure, label }, i) => (
          <FadeUp key={figure} delay={i * 80}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
              {i > 0 && (
                <div
                  style={{
                    width: '1px',
                    height: '2rem',
                    backgroundColor: 'rgba(0,0,0,0.12)',
                    marginRight: 'clamp(0.5rem, 2vw, 2rem)',
                  }}
                />
              )}
              <div style={{ textAlign: 'center' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1rem, 3.5vw, 2.5rem)',
                    fontWeight: 800,
                    color: '#000',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {figure}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: 'rgba(0,0,0,0.65)',
                    marginTop: '0.125rem',
                  }}
                >
                  {label}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
