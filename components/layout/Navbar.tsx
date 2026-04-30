'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Company History', href: '/about/history' },
      { label: 'Our Reach', href: '/about/reach' },
      { label: 'Affiliations', href: '/about/affiliations' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Brokerage & Land', href: '/services/brokerage' },
      { label: 'Technical & Mapping', href: '/services/technical' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header style={{ backgroundColor: 'var(--color-brand-navy)' }} className="text-white sticky top-0 z-50 shadow-lg">
      <div className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-brand-gold)' }} className="text-xl font-bold tracking-wide">
            Meadows Oil &amp; Gas
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="main navigation">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-white transition-colors py-2"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="absolute top-full left-0 hidden group-hover:block rounded shadow-xl min-w-48 py-2 z-50" style={{ backgroundColor: 'var(--color-brand-navy-light)' }}>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-200 hover:text-white transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="btn-primary text-sm ml-2">
            Get In Touch
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded text-gray-200 hover:text-white"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'close menu' : 'open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="md:hidden px-4 pb-4"
          style={{ backgroundColor: 'var(--color-brand-navy-light)' }}
          aria-label="mobile navigation"
        >
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="block py-2 text-sm font-medium text-gray-200 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block py-1.5 pl-4 text-sm text-gray-400 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      )}
    </header>
  )
}
