import type { Metadata } from 'next'
import { Oswald, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/ui/BackToTop'

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
    'Meadows Oil and Gas provides expert land brokerage, mineral rights, title opinions, seismic mapping, and wind leasing services across Oklahoma, California, and beyond.',
  keywords: [
    'oil and gas',
    'land brokerage',
    'mineral rights',
    'title services',
    'wind leasing',
    'Oklahoma City',
    'Bakersfield',
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
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
