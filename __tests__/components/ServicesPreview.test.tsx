import { render, screen } from '@testing-library/react'
import ServicesPreview from '@/components/home/ServicesPreview'

describe('ServicesPreview', () => {
  it('renders Land Brokerage service card', () => {
    render(<ServicesPreview />)
    expect(screen.getByText(/Land Brokerage & Title/i)).toBeInTheDocument()
  })

  it('renders Technical & Mapping service card', () => {
    render(<ServicesPreview />)
    expect(screen.getByText(/Technical & Mapping/i)).toBeInTheDocument()
  })

  it('renders Wind Leasing service card', () => {
    render(<ServicesPreview />)
    expect(screen.getByText(/Wind Leasing/i)).toBeInTheDocument()
  })

  it('service cards link to correct pages', () => {
    render(<ServicesPreview />)
    const brokerageLinks = screen.getAllByRole('link', { name: /Land Brokerage/i })
    expect(brokerageLinks[0]).toHaveAttribute('href', '/services/brokerage')
  })
})
