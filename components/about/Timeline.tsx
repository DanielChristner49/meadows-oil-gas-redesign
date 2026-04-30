interface TimelineEvent {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <ol className="space-y-10">
      {events.map(({ year, title, description }) => (
        <li key={year} className="relative flex gap-6">
          {/* Year bubble */}
          <div
            className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-white text-xs font-bold text-center"
            style={{ backgroundColor: 'var(--color-brand-gold)' }}
          >
            {year}
          </div>
          <div className="flex-1 pt-2">
            <h4
              className="text-lg font-semibold mb-1"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-brand-navy)' }}
            >
              {title}
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brand-gray)' }}>
              {description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}
