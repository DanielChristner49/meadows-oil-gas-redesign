import { render, screen } from '@testing-library/react'
import HeroParallax from '@/components/home/HeroParallax'

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, style }: React.HTMLAttributes<HTMLDivElement>) => (
      <div className={className} style={style} data-testid="parallax-bg">{children}</div>
    ),
  },
  useScroll: () => ({ scrollYProgress: { current: 0 } }),
  useTransform: () => '0%',
}))

describe('HeroParallax', () => {
  it('renders children inside the z-10 content layer', () => {
    render(
      <HeroParallax imageSrc="/test.jpg">
        <h1>Oil field hero</h1>
      </HeroParallax>
    )
    expect(screen.getByText('Oil field hero')).toBeInTheDocument()
  })

  it('renders the parallax background element', () => {
    render(
      <HeroParallax imageSrc="/test.jpg">
        <span>content</span>
      </HeroParallax>
    )
    expect(screen.getByTestId('parallax-bg')).toBeInTheDocument()
  })

  it('sets backgroundImage style from imageSrc prop', () => {
    render(
      <HeroParallax imageSrc="/images/hero.jpg">
        <span>content</span>
      </HeroParallax>
    )
    const bg = screen.getAllByTestId('parallax-bg')[0]
    expect(bg).toHaveStyle({ backgroundImage: 'url(/images/hero.jpg)' })
  })
})
