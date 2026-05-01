import { render, screen } from '@testing-library/react'
import StatsBar from '@/components/home/StatsBar'

describe('StatsBar', () => {
  it('renders Established year', () => {
    render(<StatsBar />)
    expect(screen.getByText('2009')).toBeInTheDocument()
  })

  it('renders experience figure', () => {
    render(<StatsBar />)
    expect(screen.getByText('10+')).toBeInTheDocument()
  })

  it('renders coverage states', () => {
    render(<StatsBar />)
    expect(screen.getByText(/OK.*KS.*TX/)).toBeInTheDocument()
  })

  it('renders core services count', () => {
    render(<StatsBar />)
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText(/Core Services/i)).toBeInTheDocument()
  })
})
