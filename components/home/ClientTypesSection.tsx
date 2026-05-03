const clients = [
  {
    title: 'E&P Operators',
    description:
      'When you need leasehold acquired, title cleared, and project ready — fast. We run lean and deliver on operator timelines without large-firm overhead.',
  },
  {
    title: 'Land Investors & Acquisitions',
    description:
      'For mineral buyers, royalty acquirers, and portfolio assemblers who need clean chain-of-title research, accurate ownership runs, and fast due diligence.',
  },
  {
    title: 'Renewable Energy Developers',
    description:
      'Wind project developers who need a land partner with real experience aggregating footprints, negotiating wind leases, and coordinating surface use across multiple landowners.',
  },
  {
    title: 'Midstream & Infrastructure',
    description:
      'Pipeline operators and infrastructure companies requiring right-of-way acquisition and surface use agreements across multi-county project areas.',
  },
]

export default function ClientTypesSection() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: '#f5f5f5', borderTop: '1px solid rgba(0,0,0,0.06)' }}
    >
      <div className="container-max px-6 sm:px-8">
        <div className="mb-10">
          <span className="section-label">Who We Serve</span>
          <h2 className="section-title">Our Clients</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {clients.map(({ title, description }) => (
            <div
              key={title}
              className="flex flex-col p-6 md:p-8"
              style={{
                backgroundColor: 'white',
                borderTop: '3px solid var(--color-brand-gold)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <h3
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  color: '#000',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  lineHeight: 1.2,
                }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: 'var(--color-brand-gray)',
                  fontFamily: 'var(--font-sans)',
                  textTransform: 'none',
                  letterSpacing: 'normal',
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
