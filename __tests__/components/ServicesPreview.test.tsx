import { render, screen } from '@testing-library/react'
import ServicesPreview from '@/components/home/ServicesPreview'

describe('ServicesPreview', () => {
  it('renders Leasing & Acquisitions card', () => {
    render(<ServicesPreview />)
    expect(screen.getByText(/Leasing & Acquisitions/i)).toBeInTheDocument()
  })

  it('renders Title Services card', () => {
    render(<ServicesPreview />)
    expect(screen.getByText(/Title Services/i)).toBeInTheDocument()
  })

  it('renders AI Data Center Development card', () => {
    render(<ServicesPreview />)
    expect(screen.getByText(/AI Data Center Development/i)).toBeInTheDocument()
  })

  it('all service cards link to /services', () => {
    render(<ServicesPreview />)
    const links = screen.getAllByRole('link', { name: /Learn More/i })
    links.forEach(link => expect(link).toHaveAttribute('href', '/services'))
  })
})
