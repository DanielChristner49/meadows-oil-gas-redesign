import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import WhySection from '@/components/home/WhySection'
import ServicesPreview from '@/components/home/ServicesPreview'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <ServicesPreview />
      <CTASection />
    </>
  )
}
