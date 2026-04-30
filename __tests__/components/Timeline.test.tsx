import { render, screen } from '@testing-library/react'
import Timeline from '@/components/about/Timeline'

const events = [
  { year: '1980', title: 'Founded', description: 'Meadows Oil and Gas established in Oklahoma City.' },
  { year: '2005', title: 'West Coast Expansion', description: 'Bakersfield, CA office opened.' },
  { year: '2018', title: 'Renewable Pivot', description: 'Wind leasing division launched.' },
]

describe('Timeline', () => {
  it('renders all event years', () => {
    render(<Timeline events={events} />)
    expect(screen.getByText('1980')).toBeInTheDocument()
    expect(screen.getByText('2005')).toBeInTheDocument()
    expect(screen.getByText('2018')).toBeInTheDocument()
  })

  it('renders event titles', () => {
    render(<Timeline events={events} />)
    expect(screen.getByText('Founded')).toBeInTheDocument()
    expect(screen.getByText('West Coast Expansion')).toBeInTheDocument()
  })

  it('renders event descriptions', () => {
    render(<Timeline events={events} />)
    expect(screen.getByText(/Oklahoma City/i)).toBeInTheDocument()
  })
})
