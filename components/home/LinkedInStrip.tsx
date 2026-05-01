export default function LinkedInStrip() {
  return (
    <section
      aria-label="LinkedIn"
      style={{
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid #1e1e1e',
        borderBottom: '1px solid #1e1e1e',
      }}
    >
      <div
        className="container-max"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.625rem 1.5rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.625rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#aaa',
          }}
        >
          Follow our work
        </p>

        <a
          href="https://www.linkedin.com/company/meadowsoil"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem',
            backgroundColor: '#0077b5',
            borderRadius: '0.375rem',
            padding: '0.375rem 0.75rem',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.875rem',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1,
            }}
          >
            in
          </span>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.625rem',
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '0.03em',
            }}
          >
            Meadows Oil &amp; Gas
          </span>
        </a>
      </div>
    </section>
  )
}
