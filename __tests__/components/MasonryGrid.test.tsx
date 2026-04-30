import { render, screen } from '@testing-library/react'
import MasonryGrid from '@/components/gallery/MasonryGrid'

const images = [
  { src: '/images/field-1.jpg', alt: 'Oil field operations', caption: 'Oklahoma Basin Operations' },
  { src: '/images/field-2.jpg', alt: 'Wind turbines', caption: 'Wind Project Development' },
  { src: '/images/mapping-1.jpg', alt: 'Seismic mapping', caption: 'Seismic Survey' },
]

describe('MasonryGrid', () => {
  it('renders all images', () => {
    render(<MasonryGrid images={images} />)
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })

  it('renders image captions', () => {
    render(<MasonryGrid images={images} />)
    expect(screen.getByText('Oklahoma Basin Operations')).toBeInTheDocument()
    expect(screen.getByText('Wind Project Development')).toBeInTheDocument()
  })

  it('images have correct alt text', () => {
    render(<MasonryGrid images={images} />)
    expect(screen.getByAltText('Oil field operations')).toBeInTheDocument()
  })
})
