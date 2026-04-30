import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from '@/components/layout/Navbar'

describe('Navbar', () => {
  it('renders company name', () => {
    render(<Navbar />)
    expect(screen.getByText(/Meadows Oil & Gas/i)).toBeInTheDocument()
  })

  it('renders all top-level nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument()
  })

  it('shows mobile menu button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
