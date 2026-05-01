import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone } from 'lucide-react'

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Contact', '/contact'],
] as const

const externalLinks = [
  ['Associate Login', 'https://meadowsoil.redearthsystems.com/'],
  ['AAPL', 'https://www.landman.org'],
  ['OCAPL', 'https://www.ocapl.org'],
  ['LinkedIn', 'https://www.linkedin.com/company/meadowsoil'],
] as const

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111', color: 'rgba(156,163,175,1)' }}>
      {/* Gold accent bar */}
      <div
        style={{
          height: '2px',
          background: 'linear-gradient(to right, var(--color-brand-gold) 0%, transparent 60%)',
        }}
      />

      <div className="container-max px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Image
              src="/images/logo.png"
              alt="Meadows Oil & Gas Corp."
              width={155}
              height={42}
              className="h-9 w-auto object-contain mb-5"
              style={{ mixBlendMode: 'screen' }}
            />
            <p className="text-sm leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-sans)' }}>
              Comprehensive land services built for speed, accuracy, and reliability. Trusted
              since 2009.
            </p>

            <div className="flex gap-3 mt-5">
              {['AAPL Member', 'OCAPL Member'].map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-2.5 py-1.5 border"
                  style={{
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-brand-gold)',
                    borderColor: 'rgba(200,146,26,0.3)',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p
              className="text-white text-xs tracking-widest uppercase mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Navigation
            </p>
            <ul className="space-y-3">
              {links.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              {externalLinks.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors hover:text-white"
                    style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-brand-gold)' }}
                  >
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p
              className="text-white text-xs tracking-widest uppercase mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Contact
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin
                  size={14}
                  style={{ color: 'var(--color-brand-gold)' }}
                  className="mt-0.5 shrink-0"
                />
                <div>
                  <p className="text-white font-medium" style={{ fontFamily: 'var(--font-sans)' }}>
                    Meadows Oil &amp; Gas Corp.
                  </p>
                  <p style={{ fontFamily: 'var(--font-sans)' }}>609 S. Kelly Ave., Suite G3</p>
                  <p style={{ fontFamily: 'var(--font-sans)' }}>Edmond, OK 73003</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone
                  size={14}
                  style={{ color: 'var(--color-brand-gold)' }}
                  className="mt-0.5 shrink-0"
                />
                <div>
                  <a
                    href="tel:4052858500"
                    className="text-white hover:opacity-80 transition-opacity"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    405.285.8500
                  </a>
                  <p style={{ fontFamily: 'var(--font-sans)' }}>Fax: 405.285.8598</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="border-t py-5 px-6 sm:px-8"
        style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <div className="container-max flex flex-col sm:flex-row justify-between gap-2 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
          <p>© {new Date().getFullYear()} Meadows Oil &amp; Gas Corporation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
