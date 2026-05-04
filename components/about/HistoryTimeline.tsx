'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export interface TimelineEra {
  year: string
  title: string
  body: string
  isMeadows?: boolean
  image: string
  imageAlt: string
}

export default function HistoryTimeline({ eras }: { eras: TimelineEra[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const eraRefs = useRef<(HTMLDivElement | null)[]>([])
  const imgRefs = useRef<(HTMLDivElement | null)[]>([])
  const textRefs = useRef<(HTMLDivElement | null)[]>([])
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([])

  useGSAP(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false

    // Pin and drive the gold spine progress
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${eras.length * 100}%`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate(self) {
          if (progressRef.current) progressRef.current.style.height = `${self.progress * 100}%`
        },
      },
    })

    // Set initial states — first era fully visible, rest hidden
    eras.forEach((_, i) => {
      const era = eraRefs.current[i]
      const img = imgRefs.current[i]
      const text = textRefs.current[i]
      if (!era) return

      const isFirst = i === 0
      gsap.set(era, { zIndex: isFirst ? 1 : 0 })
      if (img) {
        gsap.set(img, {
          opacity: isFirst ? 1 : 0,
          scale: isFirst ? 1 : (reduced ? 1 : 1.07),
        })
      }
      if (text) {
        gsap.set(Array.from(text.children), {
          opacity: isFirst ? 1 : 0,
          y: isFirst ? 0 : (reduced ? 0 : 30),
        })
      }
    })

    // Per-era scroll triggers
    eras.forEach((_, i) => {
      const era = eraRefs.current[i]
      const img = imgRefs.current[i]
      const text = textRefs.current[i]
      const dot = dotRefs.current[i]
      if (!era) return

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: `top+=${(i / eras.length) * 100}% top`,
        end: `top+=${((i + 1) / eras.length) * 100}% top`,

        onEnter() {
          gsap.set(era, { zIndex: 1 })

          if (img) {
            gsap.to(img, { opacity: 1, scale: 1, duration: reduced ? 0 : 0.75, ease: 'power2.out' })
          }
          if (text) {
            gsap.to(Array.from(text.children), {
              opacity: 1,
              y: 0,
              duration: reduced ? 0 : 0.55,
              ease: 'power2.out',
              stagger: reduced ? 0 : 0.09,
            })
          }
          if (dot) gsap.to(dot, { width: '22px', backgroundColor: '#c8921a', duration: 0.25 })

          // Fade out the previous era
          if (i > 0) {
            const prev = {
              era: eraRefs.current[i - 1],
              img: imgRefs.current[i - 1],
              text: textRefs.current[i - 1],
              dot: dotRefs.current[i - 1],
            }
            if (prev.img) gsap.to(prev.img, { opacity: 0, scale: reduced ? 1 : 0.96, duration: reduced ? 0 : 0.45 })
            if (prev.text) gsap.to(Array.from(prev.text.children), { opacity: 0, y: reduced ? 0 : -18, duration: reduced ? 0 : 0.3 })
            if (prev.dot) gsap.to(prev.dot, { width: '5px', backgroundColor: 'rgba(200,146,26,0.25)', duration: 0.25 })
            if (prev.era) gsap.to(prev.era, { zIndex: 0, duration: 0.01, delay: 0.5 })
          }
        },

        onLeaveBack() {
          // Animate current era out (user scrolling back)
          if (img) gsap.to(img, { opacity: 0, scale: reduced ? 1 : 1.05, duration: reduced ? 0 : 0.4 })
          if (text) gsap.to(Array.from(text.children), { opacity: 0, y: reduced ? 0 : 20, duration: reduced ? 0 : 0.3 })
          if (dot) gsap.to(dot, { width: '5px', backgroundColor: 'rgba(200,146,26,0.25)', duration: 0.25 })
          gsap.to(era, { zIndex: 0, duration: 0.01, delay: 0.45 })

          // Restore previous era
          if (i > 0) {
            const prev = {
              era: eraRefs.current[i - 1],
              img: imgRefs.current[i - 1],
              text: textRefs.current[i - 1],
              dot: dotRefs.current[i - 1],
            }
            if (prev.era) gsap.set(prev.era, { zIndex: 1 })
            if (prev.img) gsap.to(prev.img, { opacity: 1, scale: 1, duration: reduced ? 0 : 0.5 })
            if (prev.text) {
              gsap.to(Array.from(prev.text.children), { opacity: 1, y: 0, duration: reduced ? 0 : 0.45 })
            }
            if (prev.dot) gsap.to(prev.dot, { width: '22px', backgroundColor: '#c8921a', duration: 0.25 })
          }
        },
      })
    })
  }, { scope: containerRef, dependencies: [eras.length] })

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden min-h-screen"
      style={{ backgroundColor: '#050505' }}
    >
      {/* Gold progress spine — left edge */}
      <div
        className="absolute left-0 top-0 bottom-0 z-40"
        style={{ width: '3px', backgroundColor: 'rgba(200,146,26,0.07)' }}
      >
        <div ref={progressRef} style={{ width: '100%', height: '0%', backgroundColor: '#c8921a' }} />
      </div>

      {/* Era slides */}
      {eras.map((era, i) => (
        <div
          key={era.year + '-' + i}
          ref={(el) => { eraRefs.current[i] = el }}
          className="absolute inset-0"
        >
          {/* Full-bleed background image with Ken Burns */}
          <div
            ref={(el) => { imgRefs.current[i] = el }}
            className="absolute inset-0 will-change-transform"
            style={{ transformOrigin: 'center center' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={era.image}
              alt=""
              className="w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />

            {/* Left-side text gradient */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: [
                  'linear-gradient(108deg,',
                  '  rgba(5,5,5,0.97) 0%,',
                  '  rgba(5,5,5,0.92) 25%,',
                  '  rgba(5,5,5,0.62) 48%,',
                  '  rgba(5,5,5,0.22) 68%,',
                  '  rgba(5,5,5,0.06) 85%,',
                  '  transparent 100%)',
                ].join(''),
              }}
            />

            {/* Top vignette */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(5,5,5,0.45) 0%, transparent 22%, transparent 75%, rgba(5,5,5,0.35) 100%)',
              }}
            />

            {/* Image credit — bottom right */}
            <div
              style={{
                position: 'absolute',
                bottom: '4rem',
                right: '1.75rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.52rem',
                color: 'rgba(255,255,255,0.22)',
                letterSpacing: '0.07em',
                textAlign: 'right',
                maxWidth: '42ch',
              }}
            >
              {era.imageAlt}
            </div>
          </div>

          {/* Text content */}
          <div className="absolute inset-0 flex flex-col justify-center" style={{ pointerEvents: 'none' }}>
            <div
              ref={(el) => { textRefs.current[i] = el }}
              style={{
                paddingLeft: 'clamp(3rem, 9vw, 8.5rem)',
                paddingRight: 'clamp(1.5rem, 6vw, 4rem)',
                maxWidth: '56rem',
              }}
            >
              {/* Child 0: Meadows badge (always present to keep children count stable) */}
              <div style={{ marginBottom: era.isMeadows ? '1rem' : '0.1rem' }}>
                {era.isMeadows && (
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--color-brand-gold)',
                  }}>
                    ★ Meadows Milestone
                  </span>
                )}
              </div>

              {/* Child 1: Year — massive decorative number */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(5rem, 13vw, 10.5rem)',
                fontWeight: 900,
                color: era.isMeadows
                  ? 'rgba(200,146,26,0.88)'
                  : 'rgba(200,146,26,0.14)',
                lineHeight: 0.88,
                letterSpacing: '-0.04em',
                marginBottom: '1.25rem',
              }}>
                {era.year}
              </div>

              {/* Child 2: Gold rule */}
              <div style={{
                width: '3.25rem',
                height: '2px',
                backgroundColor: '#c8921a',
                marginBottom: '1.35rem',
              }} />

              {/* Child 3: Title */}
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.05rem, 2.6vw, 1.8rem)',
                fontWeight: 700,
                color: '#fff',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                lineHeight: 1.12,
                marginBottom: '1.1rem',
                maxWidth: '22ch',
              }}>
                {era.title}
              </h3>

              {/* Child 4: Body */}
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.8rem, 1.4vw, 0.935rem)',
                color: 'rgba(185,188,200,1)',
                lineHeight: 1.8,
                maxWidth: '48ch',
              }}>
                {era.body}
              </p>

              {/* Child 5: Era counter */}
              <div style={{
                marginTop: '2.25rem',
                fontFamily: 'var(--font-display)',
                fontSize: '0.5rem',
                letterSpacing: '0.24em',
                color: 'rgba(255,255,255,0.18)',
                textTransform: 'uppercase',
              }}>
                {String(i + 1).padStart(2, '0')} / {String(eras.length).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Progress dots — bottom center */}
      <div
        className="absolute z-30 flex items-center"
        style={{ bottom: '1.75rem', left: '50%', transform: 'translateX(-50%)', gap: '7px' }}
      >
        {eras.map((_, i) => (
          <span
            key={i}
            ref={(el) => { dotRefs.current[i] = el }}
            style={{
              display: 'block',
              height: '5px',
              borderRadius: '3px',
              width: i === 0 ? '22px' : '5px',
              backgroundColor: i === 0 ? '#c8921a' : 'rgba(200,146,26,0.22)',
              flexShrink: 0,
            }}
          />
        ))}
      </div>

      {/* Scroll hint — vertical text, bottom right */}
      <div
        className="absolute z-30"
        style={{
          bottom: '5rem',
          right: '2rem',
          fontFamily: 'var(--font-display)',
          fontSize: '0.48rem',
          letterSpacing: '0.24em',
          color: 'rgba(255,255,255,0.16)',
          textTransform: 'uppercase',
          writingMode: 'vertical-rl',
          userSelect: 'none',
        }}
      >
        Scroll to Explore
      </div>
    </div>
  )
}
