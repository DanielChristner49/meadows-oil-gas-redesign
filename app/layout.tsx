import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
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
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
