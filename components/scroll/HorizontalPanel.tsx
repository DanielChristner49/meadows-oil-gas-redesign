'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

export interface PanelItem {
  id: string
  title: string
  description: string
  detail: string
  accent?: string
}

interface HorizontalPanelProps {
  items: PanelItem[]
  label?: string
  className?: string
}

export default function HorizontalPanel({ items, label, className = '' }: HorizontalPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const stripRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
    if (prefersReduced || !stripRef.current) return

    const totalWidth = stripRef.current.scrollWidth - stripRef.current.offsetWidth

    gsap.to(stripRef.current, {
      x: () => -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          if (progressRef.current) {
            progressRef.current.style.width = `${self.progress * 100}%`
          }
        },
      },
    })
  }, { scope: containerRef, dependencies: [items.length] })

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {label && (
        <div className="absolute top-8 left-8 z-10">
          <span className="section-label">{label}</span>
        </div>
      )}

      <div
        ref={stripRef}
        className="flex gap-6 px-16 items-center will-change-transform"
        style={{ width: `${items.length * 420 + 128}px`, minHeight: '100vh' }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            data-panel-card
            className="flex-shrink-0 flex flex-col justify-between rounded-lg p-8"
            style={{
              width: '380px',
              minHeight: '320px',
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: `1px solid ${item.accent ? `${item.accent}40` : 'rgba(200,146,26,0.2)'}`,
            }}
          >
            <div>
              <div
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: item.accent ?? 'var(--color-brand-gold)' }}
              >
                {item.title}
              </div>
              <div
                className="w-6 mb-4"
                style={{ height: '1px', backgroundColor: item.accent ?? 'var(--color-brand-gold)' }}
              />
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {item.description}
              </p>
            </div>
            <p className="text-xs mt-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {item.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.06)' }}
      >
        <div
          ref={progressRef}
          data-progress-bar
          className="h-full transition-none"
          style={{ width: '0%', backgroundColor: 'var(--color-brand-gold)' }}
        />
      </div>
    </div>
  )
}
