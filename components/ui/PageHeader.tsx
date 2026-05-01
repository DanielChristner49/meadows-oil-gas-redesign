import Link from 'next/link'

interface Crumb {
  label: string
  href?: string
}

interface Props {
  label: string
  title: string
  subtitle?: string
  crumbs?: Crumb[]
}

export default function PageHeader({ label, title, subtitle, crumbs }: Props) {
  return (
    <div
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-brand-navy)',
        background: 'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(212,151,26,0.07) 0%, transparent 60%), var(--color-brand-navy)',
      }}
    >
      <div className="container-max px-6 sm:px-8">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-6">
            {crumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.6rem' }}>›</span>
                )}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-xs tracking-widest uppercase transition-opacity hover:opacity-100"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-gold)', opacity: 0.7 }}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ fontFamily: 'var(--font-display)', color: 'rgba(255,255,255,0.5)' }}
                  >
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}
        <span className="section-label">{label}</span>
        <h1
          className="text-white leading-none"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-5 max-w-xl leading-relaxed"
            style={{
              color: 'rgba(156,163,175,1)',
              fontFamily: 'var(--font-sans)',
              textTransform: 'none',
              letterSpacing: 'normal',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
