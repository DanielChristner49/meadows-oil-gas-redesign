import { render, screen } from '@testing-library/react'
import Footer from '@/components/layout/Footer'

describe('Footer', () => {
  it('renders AAPL affiliation badge', () => {
    render(<Footer />)
    expect(screen.getAllByText(/AAPL/i)[0]).toBeInTheDocument()
  })

  it('renders OCAPL affiliation badge', () => {
    render(<Footer />)
    expect(screen.getAllByText(/OCAPL/i)[0]).toBeInTheDocument()
  })

  it('renders Oklahoma City office', () => {
    render(<Footer />)
    expect(screen.getAllByText(/Oklahoma City/i)[0]).toBeInTheDocument()
  })

  it('renders Bakersfield office', () => {
    render(<Footer />)
    expect(screen.getAllByText(/Bakersfield/i)[0]).toBeInTheDocument()
  })
})
