'use client'
import { useEffect, useRef, useState } from 'react'

interface Props {
  value: string
  duration?: number
}

export default function AnimatedCounter({ value, duration = 1200 }: Props) {
  const hasPlus = value.endsWith('+')
  const target = parseInt(value.replace('+', ''), 10)
  // Start at target so SSR and initial paint show the real number, not "0"
  const [count, setCount] = useState(target)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          setCount(0)
          const start = performance.now()
          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} suppressHydrationWarning>
      {count}{hasPlus ? '+' : ''}
    </span>
  )
}
