'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface Props {
  images: GalleryImage[]
}

export default function GalleryClient({ images }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [],
  )
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [],
  )

  useEffect(() => {
    if (lightboxIndex === null) return
    closeButtonRef.current?.focus()
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, close, prev, next])

  return (
    <>
      {/* Page header */}
      <div
        className="section-padding"
        style={{
          background: 'linear-gradient(to bottom, #000 0%, #111 100%)',
          paddingBottom: '3rem',
        }}
      >
        <div className="container-max">
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-brand-gold)',
              marginBottom: '0.75rem',
            }}
          >
            Field Operations
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 800,
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            Our Work
          </h1>
        </div>
      </div>

      {/* Masonry grid */}
      <div style={{ backgroundColor: '#0a0a0a', padding: '2rem 1rem 4rem' }}>
        <div
          className="container-max"
          style={{ columns: '3 280px', gap: '0.5rem' }}
        >
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(0,0,0,0.35)' }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="overflow-hidden rounded-lg"
              style={{
                breakInside: 'avoid',
                marginBottom: '0.5rem',
              }}
            >
              <button
                onClick={() => setLightboxIndex(i)}
                style={{
                  display: 'block',
                  width: '100%',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  background: 'none',
                }}
                aria-label={`View photo: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={900}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.45s cubic-bezier(0.32,0.72,0,1)',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'
                  }}
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            backgroundColor: 'rgba(0,0,0,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            ref={closeButtonRef}
            onClick={close}
            aria-label="Close lightbox"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.5rem',
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '2rem',
              cursor: 'pointer',
              lineHeight: 1,
              zIndex: 10,
            }}
          >
            ×
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous photo"
            style={{
              position: 'absolute',
              left: '1rem',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '50%',
              width: '2.75rem',
              height: '2.75rem',
              color: '#fff',
              fontSize: '1.1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ←
          </button>

          <Image
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            width={1400}
            height={933}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '88vh',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '0.375rem',
            }}
            priority
          />

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next photo"
            style={{
              position: 'absolute',
              right: '1rem',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '50%',
              width: '2.75rem',
              height: '2.75rem',
              color: '#fff',
              fontSize: '1.1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            →
          </button>

          <p
            style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '50%',
              transform: 'translateX(-50%)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.12em',
            }}
          >
            {lightboxIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  )
}
