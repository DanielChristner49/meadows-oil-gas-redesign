'use client'

import Link from 'next/link'
import HeroParallax from '@/components/home/HeroParallax'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

export default function HeroSection() {
  const reduceMotion = useReducedMotion()

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } },
  }
  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
  }

  return (
    <HeroParallax
      imageSrc="/images/hero.jpg"
      className="flex items-end"
      style={{ minHeight: 'calc(100dvh - 4.75rem)' }}
    >
      {/* Gradient overlays */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.1) 100%)' }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }}
      />

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
        style={{ animation: 'scrollBounce 2.2s ease-in-out infinite' }}
        aria-hidden="true"
      >
        <span style={{ fontFamily: 'var(--font-display)', color: 'rgba(200,146,26,0.6)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '2rem', background: 'linear-gradient(to bottom, rgba(200,146,26,0.6), transparent)' }} />
      </div>

      <div className="relative z-10 w-full container-max px-6 sm:px-8 lg:px-10 pb-20 md:pb-28">
        <motion.div className="max-w-2xl" variants={container} initial="hidden" animate="visible">

          {/* Badge */}
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 mb-6"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.65rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-brand-gold)',
              border: '1px solid rgba(200,146,26,0.35)',
              borderRadius: '9999px',
              padding: '0.35rem 0.875rem',
            }}
          >
            <span style={{ width: '0.4rem', height: '0.4rem', borderRadius: '9999px', backgroundColor: 'var(--color-brand-gold)', display: 'inline-block' }} />
            Oklahoma Land Services
          </motion.span>

          {/* Heading */}
          <h1
            className="text-white leading-none mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.75rem, 8vw, 6.5rem)', letterSpacing: '-0.02em', textTransform: 'uppercase', fontWeight: 800 }}
          >
            <motion.span variants={item} className="block">Trusted</motion.span>
            <motion.span variants={item} className="block">Land &amp;</motion.span>
            <motion.span variants={item} className="block" style={{ color: 'var(--color-brand-gold)' }}>Title Services</motion.span>
          </h1>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(0.75rem, 1.5vw, 1rem)', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}
          >
            Serving Operators Since 2009
          </motion.p>

          {/* Body copy */}
          <motion.p
            variants={item}
            className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
            style={{ fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
          >
            Precise, dependable land and title solutions that empower our clients to move with confidence.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="group inline-flex items-center justify-between gap-3"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#000',
                backgroundColor: 'var(--color-brand-gold)',
                borderRadius: '9999px',
                padding: '0.875rem 0.875rem 0.875rem 1.5rem',
                transition: 'background-color 0.4s cubic-bezier(0.32,0.72,0,1), transform 0.4s cubic-bezier(0.32,0.72,0,1)',
              }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'var(--color-brand-gold-light)'; el.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'var(--color-brand-gold)'; el.style.transform = 'translateY(0)' }}
            >
              Our Services
              <span className="flex items-center justify-center shrink-0" style={{ width: '2rem', height: '2rem', borderRadius: '9999px', backgroundColor: 'rgba(0,0,0,0.18)', fontSize: '0.875rem' }}>
                →
              </span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.35)',
                borderRadius: '9999px',
                padding: '0.875rem 1.75rem',
                transition: 'border-color 0.4s cubic-bezier(0.32,0.72,0,1), color 0.4s cubic-bezier(0.32,0.72,0,1), transform 0.4s cubic-bezier(0.32,0.72,0,1)',
              }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--color-brand-gold)'; el.style.color = 'var(--color-brand-gold)'; el.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.35)'; el.style.color = 'white'; el.style.transform = 'translateY(0)' }}
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </HeroParallax>
  )
}
