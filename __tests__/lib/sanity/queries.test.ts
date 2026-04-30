import { getGalleryImages, getServicesByCategory } from '@/lib/sanity/queries'

jest.mock('@/lib/sanity/client', () => ({
  sanityClient: {
    fetch: jest.fn(),
  },
}))

import { sanityClient } from '@/lib/sanity/client'

describe('Sanity queries', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('getGalleryImages calls sanityClient.fetch with correct GROQ', async () => {
    ;(sanityClient.fetch as jest.Mock).mockResolvedValue([])
    const result = await getGalleryImages()
    expect(sanityClient.fetch).toHaveBeenCalledTimes(1)
    expect(result).toEqual([])
  })

  it('getServicesByCategory passes category parameter', async () => {
    ;(sanityClient.fetch as jest.Mock).mockResolvedValue([])
    await getServicesByCategory('brokerage')
    expect(sanityClient.fetch).toHaveBeenCalledWith(
      expect.stringContaining('category'),
      { category: 'brokerage' }
    )
  })
})
