'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export interface RevealItem {
  id: string
  number: string
  title: string
  body: string
  detail?: string[]
  accent?: string
}

interface PinnedRevealProps {
  items: RevealItem[]
  label?: string
  className?: string
}

export default function PinnedReveal({ items, label, className = '' }: PinnedRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const progressLineRef = useRef<HTMLDivElement>(null)
  const navRefs = useRef<(HTMLDivElement | null)[]>([])
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false

    // Pin the whole section for items.length viewports
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${items.length * 100}%`,
        pin: true,
        scrub: 1,
      },
    })

    items.forEach((item, i) => {
      const contentEl = contentRefs.current[i]
      const navEl = navRefs.current[i]
      if (!contentEl) return

      gsap.set(contentEl, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : (prefersReduced ? 0 : 30) })

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: `top+=${(i / items.length) * 100}% top`,
        end: `top+=${((i + 1) / items.length) * 100}% top`,
        onEnter: () => {
          gsap.to(contentEl, { opacity: 1, y: 0, duration: prefersReduced ? 0 : 0.4 })
          if (navEl) navEl.style.color = item.accent ?? 'var(--color-brand-gold)'
          if (progressLineRef.current) {
            gsap.to(progressLineRef.current, {
              height: `${((i + 1) / items.length) * 100}%`,
              duration: 0.3,
            })
          }
          if (i > 0 && contentRefs.current[i - 1]) {
            gsap.to(contentRefs.current[i - 1], { opacity: 0.5, scale: 0.97, duration: 0.3 })
          }
          if (i > 0 && navRefs.current[i - 1]) {
            navRefs.current[i - 1]!.style.color = 'rgba(255,255,255,0.3)'
          }
        },
        onLeaveBack: () => {
          gsap.to(contentEl, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : (prefersReduced ? 0 : 30), duration: 0.3 })
          if (navEl) navEl.style.color = 'rgba(255,255,255,0.3)'
          if (i > 0 && contentRefs.current[i - 1]) {
            gsap.to(contentRefs.current[i - 1], { opacity: 1, scale: 1, duration: 0.3 })
          }
          if (i > 0 && navRefs.current[i - 1]) {
            navRefs.current[i - 1]!.style.color = items[i - 1].accent ?? 'var(--color-brand-gold)'
          }
        },
      })
    })
  }, { scope: containerRef, dependencies: [items.length] })

  return (
    <div ref={containerRef} className={`relative min-h-screen ${className}`}>
      <div
        className="container-max px-6 sm:px-8 lg:px-10 py-24 grid gap-16"
        style={{ gridTemplateColumns: '200px 1fr' }}
      >
        {/* Left nav */}
        <div className="relative flex flex-col gap-6 pt-2">
          <div
            className="absolute left-0 top-0 w-px"
            style={{ height: '100%', backgroundColor: 'rgba(200,146,26,0.15)' }}
          >
            <div
              ref={progressLineRef}
              data-progress-line
              className="absolute top-0 left-0 w-full"
              style={{ height: '0%', backgroundColor: 'var(--color-brand-gold)', transition: 'height 0.3s ease' }}
            />
          </div>
          {label && (
            <span className="section-label mb-4">{label}</span>
          )}
          {items.map((item, i) => (
            <div
              key={item.id}
              data-nav-item
              ref={(el) => { navRefs.current[i] = el }}
              className="pl-4 text-xs font-bold tracking-widest uppercase cursor-default transition-colors duration-300"
              style={{ color: i === 0 ? (item.accent ?? 'var(--color-brand-gold)') : 'rgba(255,255,255,0.3)' }}
            >
              {item.number} {item.title}
            </div>
          ))}
        </div>

        {/* Right content — stacked, revealed by GSAP */}
        <div className="relative" style={{ minHeight: '60vh' }}>
          {items.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => { contentRefs.current[i] = el }}
              className="absolute inset-0 flex flex-col justify-center will-change-transform"
            >
              <div
                className="text-xs font-bold tracking-widest uppercase mb-6"
                style={{ color: item.accent ?? 'var(--color-brand-gold)', fontFamily: 'var(--font-display)' }}
              >
                {item.number}
              </div>
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 800,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}
              >
                {item.title}
              </h3>
              <div
                className="mb-6"
                style={{ width: '2.5rem', height: '1px', backgroundColor: item.accent ?? 'var(--color-brand-gold)' }}
              />
              <p
                className="max-w-lg leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)', color: 'rgba(209,213,219,1)', fontSize: '1rem' }}
              >
                {item.body}
              </p>
              {item.detail && (
                <ul className="mt-6 flex flex-col gap-2">
                  {item.detail.map((d, j) => (
                    <li
                      key={j}
                      className="text-sm flex items-start gap-3"
                      style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-sans)' }}
                    >
                      <span style={{ color: item.accent ?? 'var(--color-brand-gold)', marginTop: '2px' }}>—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
