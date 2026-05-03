'use client'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Core Services', href: '#core-services' },
  { label: 'Technical & Mapping', href: '#technical' },
  { label: 'Wind Leasing', href: '#wind-leasing' },
  { label: 'FAQ', href: '#faq' },
]

export default function ServicesNav() {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1))
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="sticky z-50"
      style={{
        top: '4.75rem',
        backgroundColor: 'rgba(0,0,0,0.95)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(200,146,26,0.15)',
      }}
    >
      <div
        className="container-max px-6 sm:px-8"
        style={{ overflowX: 'auto', scrollbarWidth: 'none' }}
      >
        <nav className="flex gap-0" style={{ WebkitOverflowScrolling: 'touch' }}>
          {navItems.map(({ label, href }) => {
            const id = href.slice(1)
            const isActive = activeId === id
            return (
              <a
                key={href}
                href={href}
                className="shrink-0 transition-colors"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '0.875rem 1.25rem',
                  color: isActive ? 'var(--color-brand-gold)' : 'rgba(255,255,255,0.55)',
                  borderBottom: isActive
                    ? '2px solid var(--color-brand-gold)'
                    : '2px solid transparent',
                  marginBottom: '-1px',
                  textDecoration: 'none',
                }}
              >
                {label}
              </a>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
