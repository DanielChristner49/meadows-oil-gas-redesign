import { render, screen } from '@testing-library/react'
import HeroSection from '@/components/home/HeroSection'

describe('HeroSection', () => {
  it('renders main heading text', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Trusted/i)).toBeInTheDocument()
  })

  it('renders Title Services headline', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Title Services/i)).toBeInTheDocument()
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
