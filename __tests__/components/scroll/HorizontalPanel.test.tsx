import { render, screen } from '@testing-library/react'
import HorizontalPanel from '@/components/scroll/HorizontalPanel'

jest.mock('@/lib/gsap', () => ({
  gsap: { to: jest.fn() },
  ScrollTrigger: { refresh: jest.fn(), killAll: jest.fn() },
}))
jest.mock('@gsap/react', () => ({
  useGSAP: (fn: () => void) => { fn() },
}))

const items = [
  { id: '1', title: 'Service A', description: 'Desc A', detail: 'Detail A' },
  { id: '2', title: 'Service B', description: 'Desc B', detail: 'Detail B' },
]

describe('HorizontalPanel', () => {
  it('renders all item titles', () => {
    render(<HorizontalPanel items={items} />)
    expect(screen.getByText('Service A')).toBeInTheDocument()
    expect(screen.getByText('Service B')).toBeInTheDocument()
  })

  it('renders the correct number of cards', () => {
    const { container } = render(<HorizontalPanel items={items} />)
    expect(container.querySelectorAll('[data-panel-card]')).toHaveLength(2)
  })

  it('renders a progress bar', () => {
    const { container } = render(<HorizontalPanel items={items} />)
    expect(container.querySelector('[data-progress-bar]')).toBeInTheDocument()
  })
})
