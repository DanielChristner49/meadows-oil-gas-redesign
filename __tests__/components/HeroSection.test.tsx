import { render, screen } from '@testing-library/react'
import HeroSection from '@/components/home/HeroSection'

describe('HeroSection', () => {
  it('renders AI Infrastructure headline', () => {
    render(<HeroSection />)
    expect(screen.getByText(/AI INFRASTRUCTURE/i)).toBeInTheDocument()
  })

  it('renders tagline', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Turning Your Vision Into Reality/i)).toBeInTheDocument()
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
