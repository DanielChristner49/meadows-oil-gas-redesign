import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-brand-navy)' }} className="text-gray-300 border-t border-gray-700">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <span style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-brand-gold)' }} className="text-lg font-bold tracking-wide block mb-2">
              Meadows Oil &amp; Gas
            </span>
            <p className="text-sm text-gray-400 mb-4">
              Premier land brokerage and energy services across the United States.
            </p>
            {/* Affiliations */}
            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-1 px-2 py-1 border border-gray-600 rounded text-xs font-semibold text-gray-300">
                AAPL
              </div>
              <div className="flex items-center gap-1 px-2 py-1 border border-gray-600 rounded text-xs font-semibold text-gray-300">
                OCAPL
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Office Locations</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white font-medium mb-1">Oklahoma City</p>
                <p className="text-gray-400">
                  Oklahoma City, Oklahoma<br />
                  Phone: (405) 555-0123
                </p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Bakersfield</p>
                <p className="text-gray-400">
                  Bakersfield, California<br />
                  Phone: (661) 555-0456
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Meadows Oil and Gas. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
