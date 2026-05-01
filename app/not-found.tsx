import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center"
      style={{
        minHeight: '80dvh',
        backgroundColor: 'var(--color-brand-navy)',
        padding: '4rem 1.5rem',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(6rem, 20vw, 14rem)',
          color: 'rgba(212,151,26,0.12)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          userSelect: 'none',
        }}
      >
        404
      </p>
      <h1
        className="-mt-4 mb-4"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          color: 'white',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        Page Not Found
      </h1>
      <p
        className="mb-10 max-w-sm leading-relaxed"
        style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)' }}
      >
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-3 rounded-full"
        style={{
          backgroundColor: 'var(--color-brand-gold)',
          color: 'var(--color-brand-navy)',
          fontFamily: 'var(--font-display)',
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontWeight: 600,
          padding: '0.875rem 1.75rem',
        }}
      >
        Back to Home
        <span
          style={{
            width: '1.75rem',
            height: '1.75rem',
            borderRadius: '50%',
            backgroundColor: 'rgba(26,39,68,0.15)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          →
        </span>
      </Link>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8">
        {[
          ['Services', '/services'],
          ['Projects', '/projects'],
          ['About', '/about'],
          ['Contact', '/contact'],
        ].map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="text-xs tracking-widest uppercase transition-opacity hover:opacity-100"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-gold)', opacity: 0.55 }}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
