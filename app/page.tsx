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
import { sanityClient } from '@/lib/sanity/client'
import { testimonialsQuery } from '@/lib/sanity/queries'
import type { SanityTestimonial } from '@/lib/sanity/types'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default async function HomePage() {
  const testimonials = await sanityClient
    .fetch<SanityTestimonial[]>(testimonialsQuery)
    .catch(() => [] as SanityTestimonial[])

  return (
    <>
      <HeroSection />
      <StatsBar />
      <WhySection />
      <ServicesPreview />
      <ClientTypesSection />
      <ProcessSection />
      <TestimonialsSection testimonials={testimonials} />
      <LinkedInStrip />
      <CTASection />
    </>
  )
}
