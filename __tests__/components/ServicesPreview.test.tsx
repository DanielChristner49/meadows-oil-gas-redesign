import { render, screen } from '@testing-library/react'
import ServicesPreview from '@/components/home/ServicesPreview'

describe('ServicesPreview', () => {
  it('renders Leasehold Acquisitions card', () => {
    render(<ServicesPreview />)
    expect(screen.getByText(/Leasehold Acquisitions/i)).toBeInTheDocument()
  })

  it('renders Title Services card', () => {
    render(<ServicesPreview />)
    expect(screen.getByText(/Title Services/i)).toBeInTheDocument()
  })

  it('renders Right-of-Ways card', () => {
    render(<ServicesPreview />)
    expect(screen.getByText(/Right-of-Ways/i)).toBeInTheDocument()
  })

  it('renders Wind Leasing card', () => {
    render(<ServicesPreview />)
    expect(screen.getByText(/Wind Leasing/i)).toBeInTheDocument()
  })
})
