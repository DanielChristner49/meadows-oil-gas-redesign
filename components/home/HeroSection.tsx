import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-brand-navy)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center text-white">
        <p
          className="uppercase tracking-widest text-sm font-semibold mb-4"
          style={{ color: 'var(--color-brand-gold)' }}
        >
          Oklahoma City · Bakersfield, CA
        </p>
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Energy Expertise, From the Ground Up
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Meadows Oil and Gas delivers trusted land brokerage, mineral rights,
          title services, and renewable energy solutions for domestic and
          international projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="btn-primary text-base">
            Our Services
          </Link>
          <Link href="/contact" className="btn-outline text-base">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
