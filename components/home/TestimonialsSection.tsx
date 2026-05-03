'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import type { SanityTestimonial } from '@/lib/sanity/types'

interface Props {
  testimonials: SanityTestimonial[]
}

export default function TestimonialsSection({ testimonials }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
    if (prefersReduced) return

    const cards = containerRef.current?.querySelectorAll('[data-testimonial-card]') ?? []
    const speeds = [0, -30, -60]

    Array.from(cards).forEach((card, i) => {
      gsap.to(card, {
        y: speeds[i] ?? 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} style={{ backgroundColor: 'var(--color-brand-surface)', borderTop: '1px solid rgba(212,151,26,0.1)' }}>
      <div className="container-max px-6 sm:px-8" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="mb-12">
          <span className="section-label">Client Perspective</span>
          <h2 className="section-title" style={{ color: 'white' }}>What Operators Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ _id, quote, author, role, company }, i) => (
            <div key={_id} data-testimonial-card className="flex flex-col h-full p-8 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', lineHeight: 0.8, color: 'var(--color-brand-gold)', opacity: 0.4, marginBottom: '1.25rem', userSelect: 'none' }} aria-hidden="true">&ldquo;</div>
              <blockquote className="flex-1">
                <p className="leading-relaxed text-sm mb-6" style={{ color: 'rgba(209,213,219,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>
                  {quote}
                </p>
              </blockquote>
              <footer>
                <div style={{ width: '2rem', height: '1px', backgroundColor: 'var(--color-brand-gold)', opacity: 0.4, marginBottom: '0.75rem' }} />
                <p className="text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-gold)' }}>{author}</p>
                <p className="text-xs mt-1" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)' }}>{role} · {company}</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
