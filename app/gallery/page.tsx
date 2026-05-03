import type { Metadata } from 'next'
import GalleryClient from '@/components/gallery/GalleryClient'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Field operations photography from Meadows Oil & Gas — land services across Oklahoma, Kansas, and Texas.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Field Operations Gallery | Meadows Oil and Gas',
    description: 'Field operations photography from Meadows Oil & Gas — land services across Oklahoma, Kansas, and Texas.',
  },
}

const gallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Meadows Oil & Gas — Field Operations Gallery',
  description: 'Field operations photography from Meadows Oil & Gas — land services across Oklahoma, Kansas, and Texas.',
  url: 'https://meadows-oil-gas-redesign.vercel.app/gallery',
}

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(gallerySchema).replace(/&/g, "\\u0026")}</script>
      <GalleryClient />
    </>
  )
}
