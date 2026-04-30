import { render, screen } from '@testing-library/react'
import HeroSection from '@/components/home/HeroSection'

describe('HeroSection', () => {
  it('renders primary headline containing "Energy"', () => {
    render(<HeroSection />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/Energy/i)
  })

  it('renders CTA link to /services', () => {
    render(<HeroSection />)
    const link = screen.getByRole('link', { name: /Our Services/i })
    expect(link).toHaveAttribute('href', '/services')
  })

  it('renders contact CTA link', () => {
    render(<HeroSection />)
    expect(screen.getByRole('link', { name: /Contact Us/i })).toBeInTheDocument()
  })
})
