interface TimelineEvent {
  year: string
  title: string
  description: string
  type: 'industry' | 'meadows'
}

export default function OilHistoryTimeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div style={{ position: 'relative' }}>
      {/* Center line — desktop only */}
      <div
        className="hidden lg:block"
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '1px',
          backgroundColor: 'rgba(200,146,26,0.15)',
          transform: 'translateX(-50%)',
        }}
      />

      <div className="space-y-0">
        {events.map(({ year, title, description, type }, i) => {
          const isLeft = i % 2 === 0
          const isMeadows = type === 'meadows'

          return (
            <div key={year + '-' + i} className="relative mb-0">
              {/* Desktop: two-column alternating layout */}
              <div className="hidden lg:grid lg:grid-cols-2 lg:gap-0">
                {/* Left cell */}
                <div className="flex justify-end pr-10 pb-10">
                  {isLeft ? (
                    <EventCard year={year} title={title} description={description} isMeadows={isMeadows} align="right" />
                  ) : (
                    <div />
                  )}
                </div>
                {/* Right cell */}
                <div className="flex justify-start pl-10 pb-10">
                  {!isLeft ? (
                    <EventCard year={year} title={title} description={description} isMeadows={isMeadows} align="left" />
                  ) : (
                    <div />
                  )}
                </div>
              </div>

              {/* Desktop: center dot (absolutely positioned over the center line) */}
              <div
                className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-start justify-center"
                style={{ top: '1.75rem' }}
              >
                <div
                  style={{
                    width: '0.875rem',
                    height: '0.875rem',
                    borderRadius: '50%',
                    backgroundColor: isMeadows ? 'var(--color-brand-gold)' : 'rgba(200,146,26,0.4)',
                    border: isMeadows ? '2px solid var(--color-brand-gold)' : '2px solid rgba(200,146,26,0.3)',
                    flexShrink: 0,
                  }}
                />
              </div>

              {/* Mobile layout */}
              <div className="lg:hidden flex gap-4 pb-10">
                <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
                  <div
                    style={{
                      width: '2.75rem',
                      height: '2.75rem',
                      borderRadius: '50%',
                      backgroundColor: isMeadows ? 'var(--color-brand-gold)' : 'rgba(200,146,26,0.15)',
                      border: '1px solid rgba(200,146,26,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.5rem',
                      letterSpacing: '0.04em',
                      fontWeight: 700,
                      color: isMeadows ? '#000' : 'var(--color-brand-gold)',
                      flexShrink: 0,
                    }}
                  >
                    {year}
                  </div>
                  {i < events.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        width: '1px',
                        backgroundColor: 'rgba(200,146,26,0.15)',
                        minHeight: '2rem',
                        marginTop: '0.25rem',
                      }}
                    />
                  )}
                </div>
                <div className="flex-1 pt-1 pb-2">
                  {isMeadows && (
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.5rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--color-brand-gold)',
                        display: 'block',
                        marginBottom: '0.25rem',
                      }}
                    >
                      Meadows Milestone
                    </span>
                  )}
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9rem',
                      color: isMeadows ? 'var(--color-brand-gold)' : '#fff',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      color: 'rgba(156,163,175,1)',
                      lineHeight: 1.6,
                    }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function EventCard({
  year,
  title,
  description,
  isMeadows,
  align,
}: {
  year: string
  title: string
  description: string
  isMeadows: boolean
  align: 'left' | 'right'
}) {
  return (
    <div
      style={{
        maxWidth: '28rem',
        width: '100%',
        padding: '1.5rem',
        backgroundColor: isMeadows ? 'rgba(200,146,26,0.06)' : 'rgba(255,255,255,0.03)',
        borderLeft: align === 'left' && isMeadows ? '3px solid var(--color-brand-gold)' : undefined,
        borderRight: align === 'right' && isMeadows ? '3px solid var(--color-brand-gold)' : undefined,
        border: !isMeadows ? '1px solid rgba(255,255,255,0.06)' : undefined,
        marginBottom: '2.5rem',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '0.75rem',
          padding: '0.2rem 0.6rem',
          backgroundColor: isMeadows ? 'var(--color-brand-gold)' : 'transparent',
          border: isMeadows ? 'none' : '1px solid rgba(200,146,26,0.3)',
          fontFamily: 'var(--font-display)',
          fontSize: '0.55rem',
          letterSpacing: '0.12em',
          fontWeight: 700,
          color: isMeadows ? '#000' : 'var(--color-brand-gold)',
        }}
      >
        {isMeadows ? `★ ${year}` : year}
      </div>
      {isMeadows && (
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.5rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-brand-gold)',
            marginBottom: '0.35rem',
          }}
        >
          Meadows Milestone
        </p>
      )}
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1rem',
          color: isMeadows ? 'var(--color-brand-gold)' : '#fff',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          marginBottom: '0.5rem',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.8rem',
          color: 'rgba(156,163,175,1)',
          lineHeight: 1.65,
        }}
      >
        {description}
      </p>
    </div>
  )
}
