'use client'
import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface GalleryImage {
  src: string
  alt: string
  caption: string
}

export default function MasonryGrid({ images }: { images: GalleryImage[] }) {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null)

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image) => (
          <div
            key={image.src}
            className="break-inside-avoid rounded-lg overflow-hidden cursor-pointer group relative bg-gray-100"
            onClick={() => setLightbox(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}
            >
              <p className="text-white text-sm font-medium">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="close lightbox"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={800}
              className="w-full h-auto rounded"
            />
            <p className="text-white text-center mt-3 text-sm">{lightbox.caption}</p>
          </div>
        </div>
      )}
    </>
  )
}
