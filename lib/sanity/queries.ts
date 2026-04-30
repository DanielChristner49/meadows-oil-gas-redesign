import { sanityClient } from './client'

export interface SanityGalleryImage {
  _id: string
  caption: string
  alt: string
  image: { asset: { url: string } }
  order: number
}

export interface SanityService {
  _id: string
  title: string
  content: string
  category: 'brokerage' | 'technical'
  order: number
  isRenewable: boolean
}

export async function getGalleryImages(): Promise<SanityGalleryImage[]> {
  return sanityClient.fetch(
    `*[_type == "galleryImage"] | order(order asc) {
      _id, caption, alt, order,
      image { asset -> { url } }
    }`
  )
}

export async function getServicesByCategory(
  category: 'brokerage' | 'technical'
): Promise<SanityService[]> {
  return sanityClient.fetch(
    `*[_type == "service" && category == $category] | order(order asc) {
      _id, title, content, category, order, isRenewable
    }`,
    { category }
  )
}
