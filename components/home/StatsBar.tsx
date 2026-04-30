const stats = [
  { value: '2', label: 'Office Locations' },
  { value: '30+', label: 'Years of Experience' },
  { value: '50+', label: 'States & Countries Served' },
  { value: '2', label: 'Industry Affiliations' },
]

export default function StatsBar() {
  return (
    <section
      className="py-10"
      style={{ backgroundColor: 'var(--color-brand-navy)' }}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p
                className="text-3xl font-bold"
                style={{ color: 'var(--color-brand-gold)', fontFamily: 'var(--font-serif)' }}
              >
                {value}
              </p>
              <p className="text-sm text-gray-300 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
