import FadeUp from '@/components/ui/FadeUp'
import type { SanityTestimonial } from '@/lib/sanity/types'

interface Props {
  testimonials: SanityTestimonial[]
}

export default function TestimonialsSection({ testimonials }: Props) {
  return (
    <section style={{ backgroundColor: 'var(--color-brand-surface)', borderTop: '1px solid rgba(212,151,26,0.1)' }}>
      <div className="container-max px-6 sm:px-8" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <FadeUp>
          <div className="mb-12">
            <span className="section-label">Client Perspective</span>
            <h2 className="section-title" style={{ color: 'white' }}>What Operators Say</h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ _id, quote, author, role, company }, i) => (
            <FadeUp key={_id} delay={i * 100}>
              <div className="flex flex-col h-full p-8 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', lineHeight: 0.8, color: 'var(--color-brand-gold)', opacity: 0.4, marginBottom: '1.25rem', userSelect: 'none' }} aria-hidden="true">&ldquo;</div>
                <blockquote className="flex-1">
                  <p className="leading-relaxed text-sm mb-6" style={{ color: 'rgba(209,213,219,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>
                    {quote}
                  </p>
                </blockquote>
                <footer>
                  <div style={{ width: '2rem', height: '1px', backgroundColor: 'var(--color-brand-gold)', opacity: 0.4, marginBottom: '0.75rem' }} />
                  <p className="text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-gold)' }}>{author}</p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)' }}>{role} · {company}</p>
                </footer>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
