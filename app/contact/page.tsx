import type { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = { title: 'Contact Us' }

const FORM_ENDPOINT =
  process.env.FORMSPREE_ENDPOINT ?? 'https://formspree.io/f/placeholder'

export default function ContactPage() {
  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Contact Us</h1>
      <p className="section-subtitle mb-12">
        Ready to discuss your land or energy project? Reach out and we'll respond within one business day.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Form */}
        <div className="lg:col-span-3">
          <h2
            className="text-xl mb-6"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-brand-navy)' }}
          >
            Send an Inquiry
          </h2>
          <ContactForm formEndpoint={FORM_ENDPOINT} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-2">
          <h2
            className="text-xl mb-6"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-brand-navy)' }}
          >
            Our Offices
          </h2>
          <div className="space-y-6">
            {[
              { city: 'Oklahoma City, OK', role: 'Primary Operations', detail: 'Mid-Continent Basin Focus' },
              { city: 'Bakersfield, CA', role: 'West Coast Office', detail: 'San Joaquin Valley Operations' },
            ].map(({ city, role, detail }) => (
              <div
                key={city}
                className="bg-white rounded-lg p-6 shadow-sm"
                style={{ borderLeft: '4px solid var(--color-brand-gold)' }}
              >
                <div className="flex gap-3 mb-2">
                  <MapPin
                    className="shrink-0 mt-0.5"
                    size={18}
                    style={{ color: 'var(--color-brand-gold)' }}
                  />
                  <h3 className="font-semibold" style={{ color: 'var(--color-brand-navy)' }}>
                    {city}
                  </h3>
                </div>
                <p className="text-sm pl-7" style={{ color: 'var(--color-brand-gray)' }}>{role}</p>
                <p className="text-sm pl-7" style={{ color: 'var(--color-brand-gray)' }}>{detail}</p>
              </div>
            ))}
            <div className="rounded-lg p-6 text-white" style={{ backgroundColor: 'var(--color-brand-navy)' }}>
              <p className="text-sm text-gray-300">
                For urgent inquiries related to active projects, please indicate in your message
                and we will prioritize your request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
