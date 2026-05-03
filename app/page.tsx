import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import StatsBar from '@/components/home/StatsBar'
import WhySection from '@/components/home/WhySection'
import ServicesPreview from '@/components/home/ServicesPreview'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import LinkedInStrip from '@/components/home/LinkedInStrip'
import CTASection from '@/components/home/CTASection'
import ProcessSection from '@/components/home/ProcessSection'
import ClientTypesSection from '@/components/home/ClientTypesSection'

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
      <ClientTypesSection />
      <ProcessSection />
      <TestimonialsSection />
      <LinkedInStrip />
      <CTASection />
    </>
  )
}
