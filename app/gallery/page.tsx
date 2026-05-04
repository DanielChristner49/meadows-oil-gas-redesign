import type { Metadata } from 'next'
import GalleryClient from '@/components/gallery/GalleryClient'
import { sanityClient } from '@/lib/sanity/client'
import { galleryQuery } from '@/lib/sanity/queries'
import type { SanityGalleryImage } from '@/lib/sanity/types'

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

export default async function GalleryPage() {
  const sanityImages = await sanityClient.fetch<SanityGalleryImage[]>(galleryQuery).catch(() => [])

  const images = sanityImages.length > 0
    ? sanityImages.map((img) => ({ src: img.imageUrl, alt: img.alt, caption: img.caption }))
    : Array.from({ length: 30 }, (_, i) => ({
        src: `/images/gallery-${String(i + 1).padStart(2, '0')}.jpg`,
        alt: `Meadows Oil and Gas field operations ${i + 1}`,
      }))

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(gallerySchema).replace(/&/g, "\\u0026")}</script>
      <GalleryClient images={images} />
    </>
  )
}
