'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // No need to show the sticky bar on the contact page itself
  if (pathname === '/contact') return null

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0"
      style={{ zIndex: 55 }}
    >
      <div
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.3s ease',
          backgroundColor: 'var(--color-brand-gold)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
      <a
        href="tel:4052858500"
        className="flex items-center justify-center gap-2"
        style={{
          padding: '1rem',
          borderRight: '1px solid rgba(0,0,0,0.1)',
          color: '#000',
          textDecoration: 'none',
        }}
      >
        <Phone size={15} strokeWidth={2.5} />
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.6rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Call Now
        </span>
      </a>

      <Link
        href="/contact"
        className="flex items-center justify-center gap-2"
        style={{
          padding: '1rem',
          color: '#000',
          textDecoration: 'none',
        }}
      >
        <Mail size={15} strokeWidth={2.5} />
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.6rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Contact Us
        </span>
      </Link>
      </div>
    </div>
  )
}
