'use client'

import { CSSProperties, ReactNode, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface HeroParallaxProps {
  children: ReactNode
  imageSrc: string
  className?: string
  style?: CSSProperties
}

export default function HeroParallax({ children, imageSrc, className = '', style }: HeroParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={style}>
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${imageSrc})`, y }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
