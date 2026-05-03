import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Meadows Oil and Gas Corporation handles the information you share with us through our website and contact form.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | Meadows Oil and Gas',
    description: 'How Meadows Oil and Gas Corporation handles the information you share with us.',
  },
}

const sections = [
  {
    heading: 'Information We Collect',
    body: 'We collect information you provide directly to us through our contact form, including your name, email address, phone number, and the nature of your inquiry. We do not collect information automatically beyond standard web server logs.',
  },
  {
    heading: 'How We Use Your Information',
    body: 'Information submitted through our contact form is used solely to respond to your inquiry and to provide the services you request. We do not sell, trade, or rent your personal information to third parties.',
  },
  {
    heading: 'Data Retention',
    body: 'We retain contact inquiry data only as long as necessary to fulfill the purpose for which it was collected or as required by applicable law.',
  },
  {
    heading: 'Third-Party Services',
    body: 'Our website uses Vercel for hosting and Formspree for contact form processing. These services may collect limited technical data in accordance with their own privacy policies.',
  },
  {
    heading: 'Contact Us',
    body: 'If you have any questions about this Privacy Policy or how we handle your information, please contact us through our contact page.',
  },
]

export default function PrivacyPage() {
  return (
    <div>
      <PageHeader
        label="Legal"
        title="Privacy Policy"
        subtitle="How Meadows Oil and Gas handles the information you share with us."
      />
      <div className="section-padding" style={{ backgroundColor: 'var(--color-brand-cream)' }}>
        <div className="container-max px-6 sm:px-8">
          <div className="max-w-2xl">
            <p
              className="text-xs tracking-widest uppercase mb-10 pb-6"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-brand-gray)',
                borderBottom: '1px solid rgba(0,0,0,0.1)',
              }}
            >
              Last updated: May 2026
            </p>

            <div className="space-y-10">
              {sections.map(({ heading, body }) => (
                <div key={heading}>
                  <h2
                    className="mb-3 tracking-wide uppercase"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      color: 'var(--color-brand-navy)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {heading}
                  </h2>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)' }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium transition-opacity hover:opacity-70"
                style={{ color: 'var(--color-brand-gold)', fontFamily: 'var(--font-display)' }}
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
