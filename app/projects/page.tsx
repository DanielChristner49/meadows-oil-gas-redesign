import type { Metadata } from 'next'
import MasonryGrid from '@/components/gallery/MasonryGrid'
import { getGalleryImages } from '@/lib/sanity/queries'

export const metadata: Metadata = { title: 'Projects & Gallery' }

export const revalidate = 3600

const staticImages = [
  { src: '/images/placeholder-hero.jpg', alt: 'Oil field operations', caption: 'Mid-Continent Basin Operations' },
  { src: '/images/placeholder-hero.jpg', alt: 'Land survey', caption: 'Title Research — Oklahoma County' },
  { src: '/images/placeholder-hero.jpg', alt: 'Wind turbines', caption: 'Wind Leasing Project — Kansas' },
  { src: '/images/placeholder-hero.jpg', alt: 'Mapping work', caption: 'Seismic Survey — San Joaquin Valley' },
  { src: '/images/placeholder-hero.jpg', alt: 'Office operations', caption: 'Bakersfield Operations Center' },
  { src: '/images/placeholder-hero.jpg', alt: 'Field crew', caption: 'Right-of-Way Crew — Oklahoma' },
]

export default async function ProjectsPage() {
  let images = staticImages

  try {
    const sanityImages = await getGalleryImages()
    if (sanityImages.length > 0) {
      images = sanityImages.map((img) => ({
        src: img.image.asset.url,
        alt: img.alt,
        caption: img.caption,
      }))
    }
  } catch {
    // Sanity not configured yet — fall back to static content
  }

  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Projects & Gallery</h1>
      <p className="section-subtitle mb-10">
        Visual documentation of our field operations, land projects, and technical services across the United States.
      </p>
      <MasonryGrid images={images} />
    </div>
  )
}
