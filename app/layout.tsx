import type { Metadata } from 'next'
import { Oswald, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/ui/BackToTop'
import MobileStickyBar from '@/components/ui/MobileStickyBar'
import PageTransition from '@/components/layout/PageTransition'

const BASE_URL = 'https://meadows-oil-gas-redesign.vercel.app'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${BASE_URL}/#organization`,
  name: 'Meadows Oil & Gas Corporation',
  legalName: 'Meadows Oil & Gas Corporation',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  foundingDate: '2009',
  description:
    'Expert land brokerage, title opinions, leasehold acquisitions, right-of-way, and wind leasing services across Oklahoma, Kansas, Texas, and beyond.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '609 S. Kelly Ave., Suite G3',
    addressLocality: 'Edmond',
    addressRegion: 'OK',
    postalCode: '73003',
    addressCountry: 'US',
  },
  telephone: '+14052858500',
  faxNumber: '+14052858598',
  email: 'info@meadowsoilandgas.com',
  areaServed: ['Oklahoma', 'Kansas', 'Texas'],
  sameAs: ['https://www.linkedin.com/company/meadowsoil'],
  memberOf: [
    {
      '@type': 'Organization',
      name: 'American Association of Professional Landmen',
      url: 'https://www.landman.org',
    },
    {
      '@type': 'Organization',
      name: 'Oklahoma City Association of Professional Landmen',
      url: 'https://www.ocapl.org',
    },
  ],
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Meadows Oil and Gas',
  publisher: { '@id': `${BASE_URL}/#organization` },
}

const oswald = Oswald({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://meadows-oil-gas-redesign.vercel.app'),
  title: {
    template: '%s | Meadows Oil and Gas',
    default: 'Meadows Oil and Gas — Land Brokerage & Energy Services',
  },
  description:
    'Meadows Oil and Gas provides expert land brokerage, title opinions, leasehold acquisitions, right-of-way, and wind leasing services across Oklahoma, Kansas, Texas, and beyond.',
  keywords: [
    'oil and gas',
    'land brokerage',
    'mineral rights',
    'title services',
    'wind leasing',
    'leasehold acquisitions',
    'right of way',
    'Oklahoma',
    'Kansas',
    'Texas',
    'AAPL',
    'OCAPL',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Meadows Oil and Gas',
    title: 'Meadows Oil and Gas — Land Brokerage & Energy Services',
    description:
      'Expert land brokerage, mineral rights, title services, and wind leasing across the United States.',
    images: [
      {
        url: '/images/gallery-01.jpg',
        width: 1200,
        height: 630,
        alt: 'Meadows Oil and Gas — Field Operations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meadows Oil and Gas — Land Brokerage & Energy Services',
    description: 'Expert land brokerage, mineral rights, title services, and wind leasing across the United States.',
    images: ['/images/gallery-01.jpg'],
  },
  other: {
    'theme-color': '#1a2744',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${dmSans.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:text-xs focus:tracking-widest focus:uppercase"
          style={{ backgroundColor: 'var(--color-brand-gold)', color: 'var(--color-brand-navy)', fontFamily: 'var(--font-display)', borderRadius: '0.25rem' }}
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="pb-[3.5rem] md:pb-0"><PageTransition>{children}</PageTransition></main>
        <Footer />
        <BackToTop />
        <MobileStickyBar />
        <script type="application/ld+json">{JSON.stringify([localBusinessSchema, webSiteSchema]).replace(/&/g, '\\u0026')}</script>
      </body>
    </html>
  )
}
