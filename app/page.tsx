import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import StatsBar from '@/components/home/StatsBar'
import WhySection from '@/components/home/WhySection'
import ServicesPreview from '@/components/home/ServicesPreview'
import LinkedInStrip from '@/components/home/LinkedInStrip'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <WhySection />
      <ServicesPreview />
      <LinkedInStrip />
      <CTASection />
    </>
  )
}
