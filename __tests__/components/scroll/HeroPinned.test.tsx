import { render, screen } from '@testing-library/react'
import HeroPinned from '@/components/scroll/HeroPinned'

jest.mock('@/lib/gsap', () => ({
  gsap: {
    to: jest.fn(),
    timeline: jest.fn(() => ({ to: jest.fn(), fromTo: jest.fn() })),
  },
  ScrollTrigger: { refresh: jest.fn(), killAll: jest.fn() },
}))

jest.mock('@gsap/react', () => ({
  useGSAP: (fn: () => void) => { fn() },
}))

describe('HeroPinned', () => {
  it('renders children in the foreground layer', () => {
    render(
      <HeroPinned bgSrc="/hero.jpg">
        <h1>Test Heading</h1>
      </HeroPinned>
    )
    expect(screen.getByText('Test Heading')).toBeInTheDocument()
  })

  it('renders background and midground layers', () => {
    const { container } = render(
      <HeroPinned bgSrc="/hero.jpg">
        <span>content</span>
      </HeroPinned>
    )
    expect(container.querySelector('[data-layer="bg"]')).toBeInTheDocument()
    expect(container.querySelector('[data-layer="mid"]')).toBeInTheDocument()
    expect(container.querySelector('[data-layer="fg"]')).toBeInTheDocument()
  })

  it('applies bgSrc as background-image on bg layer', () => {
    const { container } = render(
      <HeroPinned bgSrc="/images/hero.jpg">
        <span>content</span>
      </HeroPinned>
    )
    const bg = container.querySelector('[data-layer="bg"]') as HTMLElement
    expect(bg.style.backgroundImage).toContain('/images/hero.jpg')
  })
})
