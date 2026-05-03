import { render, screen } from '@testing-library/react'
import PinnedReveal from '@/components/scroll/PinnedReveal'

jest.mock('@/lib/gsap', () => ({
  gsap: {
    to: jest.fn(),
    fromTo: jest.fn(),
    set: jest.fn(),
    timeline: jest.fn(() => ({ to: jest.fn(), fromTo: jest.fn(), add: jest.fn() })),
  },
  ScrollTrigger: { refresh: jest.fn(), killAll: jest.fn(), create: jest.fn() },
}))
jest.mock('@gsap/react', () => ({
  useGSAP: (fn: () => void) => { fn() },
}))

const items = [
  { id: '1', number: '01', title: 'Experience', body: 'Body A', accent: undefined },
  { id: '2', number: '02', title: 'Precision', body: 'Body B', accent: undefined },
]

describe('PinnedReveal', () => {
  it('renders all item titles', () => {
    render(<PinnedReveal items={items} />)
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Precision')).toBeInTheDocument()
  })

  it('renders nav indicators for each item', () => {
    const { container } = render(<PinnedReveal items={items} />)
    expect(container.querySelectorAll('[data-nav-item]')).toHaveLength(2)
  })

  it('renders a progress line', () => {
    const { container } = render(<PinnedReveal items={items} />)
    expect(container.querySelector('[data-progress-line]')).toBeInTheDocument()
  })
})
