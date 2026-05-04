import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { sanityClient } from '@/lib/sanity/client'
import { jobPostingsQuery } from '@/lib/sanity/queries'
import type { SanityJobPosting } from '@/lib/sanity/types'

const BASE_URL = 'https://meadows-oil-gas-redesign.vercel.app'

const typeLabel: Record<SanityJobPosting['employmentType'], string> = {
  CONTRACT: 'Contract',
  FULL_TIME: 'Full Time',
  PART_TIME: 'Part Time',
}

const jobPostingSchema = (title: string, description: string, employmentType: string) => ({
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title,
  description,
  employmentType,
  datePosted: new Date().toISOString().split('T')[0],
  hiringOrganization: {
    '@type': 'Organization',
    name: 'Meadows Oil & Gas Corporation',
    sameAs: BASE_URL,
    logo: `${BASE_URL}/images/logo.png`,
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Edmond',
      addressRegion: 'OK',
      addressCountry: 'US',
    },
  },
  applicantLocationRequirements: {
    '@type': 'Country',
    name: 'United States',
  },
  jobLocationType: 'TELECOMMUTE',
})

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Meadows Oil & Gas — experienced landmen and mapping specialists wanted for contract and full-time positions in Oklahoma, Kansas, Texas, and beyond.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers at Meadows Oil and Gas',
    description: 'Join Meadows Oil & Gas — experienced landmen and mapping specialists wanted for contract and full-time positions in Oklahoma, Kansas, Texas, and beyond.',
  },
}

const traits = [
  'AAPL-affiliated or seeking membership — professional standards matter to us.',
  '10+ years of hands-on landman experience in oil & gas or renewables.',
  'Skilled in courthouse research, title opinion writing, and ownership runs.',
  'Self-directed and reliable — we work lean and trust our team to deliver.',
]

export default async function CareersPage() {
  const jobs = await sanityClient.fetch<SanityJobPosting[]>(jobPostingsQuery).catch(() => [])

  return (
    <div>
      {jobs.map((job) => (
        <script key={job._id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema(job.title, job.description ?? '', job.employmentType)) }} />
      ))}
      {/* Header */}
      <div
        className="section-padding"
        style={{
          backgroundColor: '#000',
          background: 'radial-gradient(ellipse 60% 60% at 100% 100%, rgba(200,146,26,0.06) 0%, transparent 60%), #000',
        }}
      >
        <div className="container-max px-6 sm:px-8">
          <span className="section-label">Join the Team</span>
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            Careers
          </h1>
          <p
            className="mt-5 max-w-xl leading-relaxed"
            style={{
              color: 'rgba(156,163,175,1)',
              fontFamily: 'var(--font-sans)',
              textTransform: 'none',
              letterSpacing: 'normal',
            }}
          >
            Meadows Oil &amp; Gas is built on experienced people who take ownership of their work.
            We engage skilled landmen and technical specialists who are ready to deliver — on
            operator timelines and without hand-holding.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="section-padding" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container-max px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* What We Look For */}
            <div className="lg:col-span-2">
              <span className="section-label">What We Look For</span>
              <h2
                className="section-title mt-2 mb-6"
                style={{ color: '#000' }}
              >
                Who Fits Here
              </h2>
              <ul className="space-y-4">
                {traits.map((trait, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle
                      size={16}
                      className="shrink-0 mt-0.5"
                      style={{ color: 'var(--color-brand-gold)' }}
                    />
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: 'var(--color-brand-gray)',
                        fontFamily: 'var(--font-sans)',
                        textTransform: 'none',
                        letterSpacing: 'normal',
                      }}
                    >
                      {trait}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Open Positions */}
            <div className="lg:col-span-3">
              <span className="section-label">Open Positions</span>
              <h2
                className="section-title mt-2 mb-6"
                style={{ color: '#000' }}
              >
                Current Openings
              </h2>
              <div className="space-y-6">
                {jobs.map((job) => (
                  <div
                    key={job._id}
                    className="p-8"
                    style={{
                      backgroundColor: 'white',
                      borderTop: '3px solid var(--color-brand-gold)',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.1rem',
                          color: '#000',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {job.title}
                      </h3>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.55rem',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--color-brand-gold)',
                          border: '1px solid rgba(200,146,26,0.3)',
                          padding: '0.25rem 0.625rem',
                          whiteSpace: 'nowrap',
                          alignSelf: 'flex-start',
                        }}
                      >
                        {typeLabel[job.employmentType]}
                      </span>
                    </div>
                    {job.description && (
                      <p
                        className="text-sm leading-relaxed mb-5"
                        style={{
                          color: 'var(--color-brand-gray)',
                          fontFamily: 'var(--font-sans)',
                          textTransform: 'none',
                          letterSpacing: 'normal',
                        }}
                      >
                        {job.description}
                      </p>
                    )}
                    {job.requirements && job.requirements.length > 0 && (
                      <ul className="space-y-2">
                        {job.requirements.map((req) => (
                          <li key={req} className="flex gap-2 text-sm" style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)' }}>
                            <span style={{ color: 'var(--color-brand-gold)', flexShrink: 0 }}>—</span>
                            <span style={{ textTransform: 'none', letterSpacing: 'normal' }}>{req}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                      <a
                        href={`mailto:info@meadowsoilandgas.com?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.7rem',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: '#000',
                          backgroundColor: 'var(--color-brand-gold)',
                          padding: '0.75rem 1.25rem',
                          textDecoration: 'none',
                          fontWeight: 600,
                        }}
                      >
                        Express Interest →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className="section-padding"
        style={{ backgroundColor: 'var(--color-brand-navy)' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div className="max-w-2xl">
            <span className="section-label">Get In Touch</span>
            <h2
              className="leading-none mb-4"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              Interested?
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{
                color: 'rgba(156,163,175,1)',
                fontFamily: 'var(--font-sans)',
                textTransform: 'none',
                letterSpacing: 'normal',
              }}
            >
              Send your resume and a brief note about your background and availability to our team.
              We review all submissions and reach out when there&apos;s a fit for an active project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@meadowsoilandgas.com?subject=Career%20Inquiry"
                className="inline-flex items-center gap-3 rounded-full"
                style={{
                  backgroundColor: 'var(--color-brand-gold)',
                  color: '#000',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  padding: '1rem 1.75rem',
                  textDecoration: 'none',
                }}
              >
                Send Resume →
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  padding: '1rem 0',
                }}
              >
                Or use our contact form →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
