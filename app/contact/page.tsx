import type { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import { MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Reach out to Meadows Oil and Gas. 609 S. Kelly Ave., Suite G3, Edmond, OK 73003. Phone: 405.285.8500.',
  alternates: { canonical: '/contact' },
}

const FORM_ENDPOINT =
  process.env.FORMSPREE_ENDPOINT ?? 'https://formspree.io/f/placeholder'

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <div
        className="section-padding"
        style={{
          backgroundColor: '#000',
          background: 'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(200,146,26,0.07) 0%, transparent 60%), #000',
        }}
      >
        <div className="container-max px-6 sm:px-8">
          <span className="section-label">Get In Touch</span>
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            Contact Us
          </h1>
          <p
            className="mt-5 max-w-xl leading-relaxed"
            style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
          >
            Ready to discuss your land or energy project? Reach out and we&apos;ll respond promptly.
          </p>
        </div>
      </div>

      <div className="section-padding" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container-max px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2
                className="text-xl mb-6"
                style={{ fontFamily: 'var(--font-display)', color: '#000' }}
              >
                Send an Inquiry
              </h2>
              <ContactForm formEndpoint={FORM_ENDPOINT} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <h2
                className="text-xl mb-6"
                style={{ fontFamily: 'var(--font-display)', color: '#000' }}
              >
                Our Office
              </h2>
              <div className="space-y-6">
                <div
                  className="bg-white rounded-lg p-6 shadow-sm"
                  style={{ borderLeft: '4px solid var(--color-brand-gold)' }}
                >
                  <div className="flex gap-3 mb-3">
                    <MapPin
                      className="shrink-0 mt-0.5"
                      size={18}
                      style={{ color: 'var(--color-brand-gold)' }}
                    />
                    <h3 className="text-sm tracking-wider uppercase" style={{ color: '#000', fontFamily: 'var(--font-display)' }}>
                      Meadows Oil &amp; Gas Corp.
                    </h3>
                  </div>
                  <div className="pl-7 text-sm space-y-1" style={{ color: 'var(--color-brand-gray)' }}>
                    <p>609 S. Kelly Ave., Suite G3</p>
                    <p>Edmond, OK 73003</p>
                  </div>
                </div>

                <div
                  className="bg-white rounded-lg p-6 shadow-sm"
                  style={{ borderLeft: '4px solid var(--color-brand-gold)' }}
                >
                  <div className="flex gap-3 mb-3">
                    <Phone
                      className="shrink-0 mt-0.5"
                      size={18}
                      style={{ color: 'var(--color-brand-gold)' }}
                    />
                    <h3 className="text-sm tracking-wider uppercase" style={{ color: '#000', fontFamily: 'var(--font-display)' }}>
                      Phone &amp; Fax
                    </h3>
                  </div>
                  <div className="pl-7 text-sm space-y-1">
                    <p>
                      <span style={{ color: 'var(--color-brand-gray)' }}>Phone: </span>
                      <a
                        href="tel:4052858500"
                        className="transition-opacity hover:opacity-80"
                        style={{ color: 'var(--color-brand-gold)', fontFamily: 'var(--font-sans)' }}
                      >
                        405.285.8500
                      </a>
                    </p>
                    <p style={{ color: 'var(--color-brand-gray)' }}>Fax: 405.285.8598</p>
                  </div>
                </div>

                <div
                  className="bg-white rounded-lg p-6 shadow-sm"
                  style={{ borderLeft: '4px solid var(--color-brand-gold)' }}
                >
                  <p className="text-sm" style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)' }}>
                    For urgent inquiries related to active projects, please indicate in your message
                    and we will prioritize your request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
