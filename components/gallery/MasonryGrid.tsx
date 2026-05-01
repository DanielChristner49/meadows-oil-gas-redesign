'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryImage {
  src: string
  alt: string
  caption: string
}

export default function MasonryGrid({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() => setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null)), [images.length])
  const next = useCallback(() => setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null)), [images.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    // Move focus into dialog for accessibility
    closeButtonRef.current?.focus()
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    // Lock scroll while lightbox is open
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, close, prev, next])

  const lightbox = lightboxIndex !== null ? images[lightboxIndex] : null

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image, i) => (
          <div
            key={image.src}
            className="break-inside-avoid rounded-lg overflow-hidden cursor-pointer group relative bg-gray-100"
            onClick={() => setLightboxIndex(i)}
            role="button"
            tabIndex={0}
            aria-label={`View ${image.caption}`}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightboxIndex(i) } }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover group-hover:scale-105"
              style={{ transition: 'transform 0.6s cubic-bezier(0.32,0.72,0,1)' }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0"
              style={{ transition: 'transform 0.5s cubic-bezier(0.32,0.72,0,1)', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}
            >
              <p className="text-white text-sm font-medium">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          style={{
            backgroundColor: 'rgba(0,0,0,0.92)',
            animation: 'lightboxFadeIn 0.3s cubic-bezier(0.32,0.72,0,1) forwards',
          }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white flex items-center justify-center rounded-full"
            style={{
              width: '2.5rem',
              height: '2.5rem',
              backgroundColor: 'rgba(255,255,255,0.1)',
              transition: 'background-color 0.25s cubic-bezier(0.32,0.72,0,1)',
            }}
            ref={closeButtonRef}
            aria-label="close lightbox"
            onClick={close}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.18)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.1)')}
          >
            <X size={18} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white flex items-center justify-center rounded-full"
            style={{
              width: '2.5rem',
              height: '2.5rem',
              backgroundColor: 'rgba(255,255,255,0.1)',
              transition: 'background-color 0.25s cubic-bezier(0.32,0.72,0,1)',
            }}
            aria-label="previous image"
            onClick={(e) => { e.stopPropagation(); prev() }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.18)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.1)')}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white flex items-center justify-center rounded-full"
            style={{
              width: '2.5rem',
              height: '2.5rem',
              backgroundColor: 'rgba(255,255,255,0.1)',
              transition: 'background-color 0.25s cubic-bezier(0.32,0.72,0,1)',
            }}
            aria-label="next image"
            onClick={(e) => { e.stopPropagation(); next() }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.18)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.1)')}
          >
            <ChevronRight size={20} />
          </button>

          {/* Image */}
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={800}
              className="w-full h-auto rounded"
            />
            <div className="flex items-center justify-between mt-3 px-1">
              <p className="text-white text-sm">{lightbox.caption}</p>
              <p className="text-xs" style={{ color: 'rgba(156,163,175,1)' }}>
                {lightboxIndex! + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
