'use client'
import { ElementType, useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
}

export default function ScrollReveal({ children, delay = 0, className = '', as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('is-visible'), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <Tag ref={ref} className={`reveal-up ${className}`}>
      {children}
    </Tag>
  )
}
