import Link from 'next/link'
import { MapPin } from 'lucide-react'

const quickLinks = [
  ['About Us', '/about'],
  ['Services', '/services'],
  ['Wind Leasing', '/services/brokerage'],
  ['Photo Gallery', '/projects'],
  ['Contact', '/contact'],
] as const

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-brand-navy)' }} className="text-gray-300">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 style={{ color: 'var(--color-brand-gold)', fontFamily: 'var(--font-serif)' }} className="text-xl mb-3">
              Meadows Oil &amp; Gas
            </h3>
            <p className="text-sm leading-relaxed">
              Providing expert land brokerage, mineral rights, title services,
              and renewable energy solutions across the United States.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="border rounded px-3 py-1.5 text-xs font-semibold" style={{ borderColor: 'rgba(212,151,26,0.4)', color: 'var(--color-brand-gold)' }}>
                AAPL Member
              </div>
              <div className="border rounded px-3 py-1.5 text-xs font-semibold" style={{ borderColor: 'rgba(212,151,26,0.4)', color: 'var(--color-brand-gold)' }}>
                OCAPL Member
              </div>
            </div>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Offices
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-2">
                <MapPin size={16} style={{ color: 'var(--color-brand-gold)' }} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Oklahoma City, OK</p>
                  <p>Primary Operations Office</p>
                </div>
              </div>
              <div className="flex gap-2">
                <MapPin size={16} style={{ color: 'var(--color-brand-gold)' }} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Bakersfield, CA</p>
                  <p>West Coast Operations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-xs flex flex-col sm:flex-row justify-between gap-2" style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'var(--color-brand-gray)' }}>
          <p>© {new Date().getFullYear()} Meadows Oil and Gas. All rights reserved.</p>
          <p>Professional members of AAPL &amp; OCAPL</p>
        </div>
      </div>
    </footer>
  )
}
