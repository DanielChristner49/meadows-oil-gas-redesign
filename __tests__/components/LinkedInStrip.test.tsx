import { render, screen } from '@testing-library/react'
import LinkedInStrip from '@/components/home/LinkedInStrip'

describe('LinkedInStrip', () => {
  it('renders "Follow our work" label', () => {
    render(<LinkedInStrip />)
    expect(screen.getByText(/Follow our work/i)).toBeInTheDocument()
  })

  it('renders LinkedIn link to company page', () => {
    render(<LinkedInStrip />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/company/meadowsoil')
  })

  it('LinkedIn link opens in new tab', () => {
    render(<LinkedInStrip />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
