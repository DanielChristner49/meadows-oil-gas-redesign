'use client'
import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 40,
        width: '2.75rem',
        height: '2.75rem',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: 'var(--color-brand-gold)',
        color: 'var(--color-brand-navy)',
        fontSize: '1.125rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(212,151,26,0.35)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.85)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.4s cubic-bezier(0.32,0.72,0,1), transform 0.4s cubic-bezier(0.32,0.72,0,1)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px) scale(1.05)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.85)'
      }}
    >
      ↑
    </button>
  )
}
