import { render, screen } from '@testing-library/react'
import StatsBar from '@/components/home/StatsBar'

describe('StatsBar', () => {
  it('renders office locations stat', () => {
    render(<StatsBar />)
    const twos = screen.getAllByText('2')
    expect(twos.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Office Locations')).toBeInTheDocument()
  })

  it('renders years of experience stat', () => {
    render(<StatsBar />)
    expect(screen.getByText('30+')).toBeInTheDocument()
  })

  it('renders all 4 stats', () => {
    render(<StatsBar />)
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('Industry Affiliations')).toBeInTheDocument()
  })
})
