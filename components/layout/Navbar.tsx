'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

const externalLinks = [
  { label: 'Associate Login', href: 'https://meadowsoil.redearthsystems.com/' },
  { label: 'AAPL', href: 'https://www.landman.org' },
  { label: 'OCAPL', href: 'https://www.ocapl.org' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <header
        className="sticky top-0 z-[60] pointer-events-none"
        style={{ padding: '1rem 1rem 0.5rem' }}
      >
        <div
          className="container-max pointer-events-auto flex items-center justify-between"
          style={{
            height: '3.25rem',
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            border: '1px solid rgba(200, 146, 26, 0.22)',
            borderRadius: '9999px',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            padding: '0 1.25rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.png"
              alt="Meadows Oil & Gas Corp."
              width={150}
              height={40}
              className="h-9 w-auto object-contain"
              style={{ mixBlendMode: 'screen' }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative flex items-center px-3.5 py-2 text-xs tracking-widest rounded-full transition-colors"
                style={{
                  fontFamily: 'var(--font-display)',
                  textTransform: 'uppercase',
                  color: isActive(link.href) ? 'white' : 'rgba(156,163,175,1)',
                  backgroundColor: isActive(link.href) ? 'rgba(255,255,255,0.08)' : 'transparent',
                  transition: 'color 0.3s cubic-bezier(0.32,0.72,0,1), background-color 0.3s cubic-bezier(0.32,0.72,0,1)',
                }}
              >
                {link.label}
                {isActive(link.href) && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ backgroundColor: 'var(--color-brand-gold)' }}
                  />
                )}
              </Link>
            ))}

            <div style={{ width: '1px', height: '1.25rem', backgroundColor: 'rgba(255,255,255,0.1)', margin: '0 0.5rem' }} />

            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 text-xs tracking-widest rounded-full"
                style={{
                  fontFamily: 'var(--font-display)',
                  textTransform: 'uppercase',
                  color: 'var(--color-brand-gold)',
                  transition: 'color 0.3s cubic-bezier(0.32,0.72,0,1)',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'close menu' : 'open menu'}
          >
            <span
              style={{
                display: 'block',
                width: '1.25rem',
                height: '1.5px',
                backgroundColor: 'rgba(156,163,175,1)',
                borderRadius: '9999px',
                transformOrigin: 'center',
                transition: 'transform 0.4s cubic-bezier(0.32,0.72,0,1), opacity 0.3s ease',
                transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '1.25rem',
                height: '1.5px',
                backgroundColor: 'rgba(156,163,175,1)',
                borderRadius: '9999px',
                transition: 'transform 0.4s cubic-bezier(0.32,0.72,0,1), opacity 0.3s ease',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '1.25rem',
                height: '1.5px',
                backgroundColor: 'rgba(156,163,175,1)',
                borderRadius: '9999px',
                transformOrigin: 'center',
                transition: 'transform 0.4s cubic-bezier(0.32,0.72,0,1), opacity 0.3s ease',
                transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className="fixed inset-0 z-[55] flex flex-col md:hidden"
        style={{
          backgroundColor: 'rgba(0,0,0,0.97)',
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.4s cubic-bezier(0.32,0.72,0,1)',
        }}
      >
        <div className="flex flex-col justify-center flex-1 px-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-4 border-b"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: isActive(link.href) ? 'var(--color-brand-gold)' : 'white',
                borderColor: 'rgba(255,255,255,0.06)',
                transform: mobileOpen ? 'translateY(0)' : 'translateY(1.5rem)',
                opacity: mobileOpen ? 1 : 0,
                transition: `transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 60}ms, opacity 0.6s ease ${i * 60}ms`,
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', marginTop: '1rem', marginBottom: '1rem' }} />

          {externalLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 text-sm tracking-widest uppercase"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-brand-gold)',
                transform: mobileOpen ? 'translateY(0)' : 'translateY(1.5rem)',
                opacity: mobileOpen ? 1 : 0,
                transition: `transform 0.6s cubic-bezier(0.22,1,0.36,1) ${(navLinks.length + i) * 60}ms, opacity 0.6s ease ${(navLinks.length + i) * 60}ms`,
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
