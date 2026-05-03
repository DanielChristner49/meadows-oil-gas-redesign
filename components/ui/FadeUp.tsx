'use client'

import { ElementType, ReactNode, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface FadeUpProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
}

export default function FadeUp({ children, delay = 0, className = '', as: Tag = 'div' }: FadeUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const reduceMotion = useReducedMotion()

  const MotionTag = (motion[Tag as keyof typeof motion] ?? motion.div) as typeof motion.div

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduceMotion ? 0 : 24 }}
      transition={{ duration: 0.5, delay: delay / 1000, ease: 'easeOut' }}
    >
      {children}
    </MotionTag>
  )
}
