'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import LocationMap from '@/components/about/LocationMap'

export default function MapReveal() {
  const mapRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
    if (prefersReduced || !mapRef.current) return

    gsap.fromTo(
      mapRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: mapRef.current,
          start: 'top 75%',
          once: true,
        },
      }
    )
  }, { scope: mapRef })

  return (
    <div ref={mapRef}>
      <LocationMap />
    </div>
  )
}
