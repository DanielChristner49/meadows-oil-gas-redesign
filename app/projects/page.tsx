import type { Metadata } from 'next'
import MasonryGrid from '@/components/gallery/MasonryGrid'

export const metadata: Metadata = { title: 'Projects & Gallery' }

const galleryImages = [
  { src: '/images/placeholder-hero.jpg', alt: 'Oil field operations', caption: 'Mid-Continent Basin Operations' },
  { src: '/images/placeholder-hero.jpg', alt: 'Land survey', caption: 'Title Research — Oklahoma County' },
  { src: '/images/placeholder-hero.jpg', alt: 'Wind turbines', caption: 'Wind Leasing Project — Kansas' },
  { src: '/images/placeholder-hero.jpg', alt: 'Mapping work', caption: 'Seismic Survey — San Joaquin Valley' },
  { src: '/images/placeholder-hero.jpg', alt: 'Office operations', caption: 'Bakersfield Operations Center' },
  { src: '/images/placeholder-hero.jpg', alt: 'Field crew', caption: 'Right-of-Way Crew — Oklahoma' },
]

export default function ProjectsPage() {
  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Projects & Gallery</h1>
      <p className="section-subtitle mb-10">
        Visual documentation of our field operations, land projects, and technical services across the United States.
      </p>
      <MasonryGrid images={galleryImages} />
    </div>
  )
}
