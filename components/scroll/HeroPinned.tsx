'use client'

import { ReactNode, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

interface HeroPinnedProps {
  children: ReactNode
  bgSrc: string
  className?: string
  style?: React.CSSProperties
  pinDuration?: string
}

export default function HeroPinned({
  children,
  bgSrc,
  className = '',
  style,
  pinDuration = '+=200%',
}: HeroPinnedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const midRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
    if (prefersReduced) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: pinDuration,
        pin: true,
        scrub: 1,
      },
    })

    tl.to(bgRef.current, { y: '-20%', ease: 'none' }, 0)
    tl.to(midRef.current, { y: '-40%', ease: 'none' }, 0)
  }, { scope: containerRef, dependencies: [pinDuration] })

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} style={style}>
      <div
        ref={bgRef}
        data-layer="bg"
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${bgSrc})`, top: '-20%', bottom: '-20%' }}
        aria-hidden="true"
      />
      <div
        ref={midRef}
        data-layer="mid"
        className="absolute inset-0 will-change-transform pointer-events-none"
        style={{ top: '-20%', bottom: '-20%' }}
        aria-hidden="true"
      />
      <div data-layer="fg" className="relative z-10">
        {children}
      </div>
    </div>
  )
}
