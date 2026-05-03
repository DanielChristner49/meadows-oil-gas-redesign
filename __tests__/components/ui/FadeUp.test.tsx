import { render, screen } from '@testing-library/react'
import FadeUp from '@/components/ui/FadeUp'

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className }: React.HTMLAttributes<HTMLDivElement>) => (
      <div className={className} data-testid="fade-up">{children}</div>
    ),
    section: ({ children, className }: React.HTMLAttributes<HTMLElement>) => (
      <section className={className} data-testid="fade-up">{children}</section>
    ),
  },
  useInView: () => true,
  useReducedMotion: () => false,
}))

describe('FadeUp', () => {
  it('renders children', () => {
    render(<FadeUp><p>Hello world</p></FadeUp>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('passes className to wrapper', () => {
    render(<FadeUp className="my-section"><p>Content</p></FadeUp>)
    expect(screen.getByTestId('fade-up')).toHaveClass('my-section')
  })

  it('renders as a custom element when as prop is provided', () => {
    render(<FadeUp as="section"><p>Content</p></FadeUp>)
    expect(screen.getByTestId('fade-up').tagName).toBe('SECTION')
  })
})
