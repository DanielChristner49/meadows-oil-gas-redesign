'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ScrollTrigger } from '@/lib/gsap'

export default function ScrollTriggerRefresh() {
  const pathname = usePathname()

  useEffect(() => {
    ScrollTrigger.refresh()
    return () => ScrollTrigger.killAll()
  }, [pathname])

  return null
}
