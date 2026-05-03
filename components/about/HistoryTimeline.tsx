'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export interface TimelineEra {
  year: string
  title: string
  body: string
  isMeadows?: boolean
}

interface HistoryTimelineProps {
  eras: TimelineEra[]
}

export default function HistoryTimeline({ eras }: HistoryTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const eraRefs = useRef<(HTMLDivElement | null)[]>([])
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${eras.length * 100}%`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          if (progressRef.current) {
            progressRef.current.style.height = `${self.progress * 100}%`
          }
        },
      },
    })

    eras.forEach((_, i) => {
      const eraEl = eraRefs.current[i]
      const dotEl = dotRefs.current[i]
      if (!eraEl) return

      gsap.set(eraEl, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : (prefersReduced ? 0 : 30) })

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: `top+=${(i / eras.length) * 100}% top`,
        end: `top+=${((i + 1) / eras.length) * 100}% top`,
        onEnter: () => {
          gsap.to(eraEl, { opacity: 1, y: 0, duration: prefersReduced ? 0 : 0.4 })
          if (dotEl) gsap.to(dotEl, { scale: 1.4, backgroundColor: '#c8921a', boxShadow: '0 0 16px rgba(200,146,26,0.7)', duration: 0.3 })
          if (i > 0 && eraRefs.current[i - 1]) {
            gsap.to(eraRefs.current[i - 1], { opacity: 0.4, scale: 0.96, duration: 0.3 })
          }
          if (i > 0 && dotRefs.current[i - 1]) {
            gsap.to(dotRefs.current[i - 1], { scale: 1, backgroundColor: 'rgba(200,146,26,0.3)', boxShadow: 'none', duration: 0.3 })
          }
        },
        onLeaveBack: () => {
          gsap.to(eraEl, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : (prefersReduced ? 0 : 30), duration: 0.3 })
          if (dotEl) gsap.to(dotEl, { scale: 1, backgroundColor: 'rgba(200,146,26,0.3)', boxShadow: 'none', duration: 0.3 })
          if (i > 0 && eraRefs.current[i - 1]) {
            gsap.to(eraRefs.current[i - 1], { opacity: 1, scale: 1, duration: 0.3 })
          }
          if (i > 0 && dotRefs.current[i - 1]) {
            gsap.to(dotRefs.current[i - 1], { scale: 1.4, backgroundColor: '#c8921a', boxShadow: '0 0 16px rgba(200,146,26,0.7)', duration: 0.3 })
          }
        },
      })
    })
  }, { scope: containerRef, dependencies: [eras.length] })

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#050505] overflow-hidden">
      <div className="container-max px-6 sm:px-8 lg:px-10 py-24 flex items-center min-h-screen">
        {/* Center spine */}
        <div
          className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
          style={{ width: '1px', backgroundColor: 'rgba(200,146,26,0.15)' }}
        >
          <div
            ref={progressRef}
            className="absolute top-0 left-0 w-full"
            style={{ height: '0%', backgroundColor: 'var(--color-brand-gold)' }}
          />
        </div>

        {/* Eras */}
        <div className="relative w-full">
          {eras.map((era, i) => (
            <div
              key={era.year + '-' + i}
              ref={(el) => { eraRefs.current[i] = el }}
              className="absolute inset-0 flex items-center will-change-transform"
            >
              {/* Dot on spine */}
              <div
                ref={(el) => { dotRefs.current[i] = el }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-10"
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: i === 0 ? '#c8921a' : 'rgba(200,146,26,0.3)',
                  boxShadow: i === 0 ? '0 0 16px rgba(200,146,26,0.7)' : 'none',
                }}
              />

              {/* Left content (even eras) */}
              {i % 2 === 0 && (
                <div className="w-5/12 pr-16 text-right">
                  <div
                    className="text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: era.isMeadows ? '#c8921a' : 'rgba(200,146,26,0.7)', fontFamily: 'var(--font-display)' }}
                  >
                    {era.year}{era.isMeadows && ' · Meadows'}
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: '#fff', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '-0.01em' }}
                  >
                    {era.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}
                  >
                    {era.body}
                  </p>
                </div>
              )}

              {/* Right content (odd eras) */}
              {i % 2 !== 0 && (
                <div className="w-5/12 ml-auto pl-16">
                  <div
                    className="text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: era.isMeadows ? '#c8921a' : 'rgba(200,146,26,0.7)', fontFamily: 'var(--font-display)' }}
                  >
                    {era.year}{era.isMeadows && ' · Meadows'}
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: '#fff', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '-0.01em' }}
                  >
                    {era.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}
                  >
                    {era.body}
                  </p>
                </div>
              )}

              {/* Progress dots */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {eras.map((_, j) => (
                  <div
                    key={j}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: j === i ? '#c8921a' : 'rgba(200,146,26,0.2)',
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
