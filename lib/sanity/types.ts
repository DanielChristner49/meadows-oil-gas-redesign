export interface SanityImageAsset {
  _ref: string
  _type: 'reference'
}

export interface SanityImage {
  _type: 'image'
  asset: SanityImageAsset
  hotspot?: { x: number; y: number; height: number; width: number }
}

export interface SanityHero {
  headline: string
  subheadline?: string
  tagline?: string
  bodyCopy?: string
  primaryCtaText?: string
  secondaryCtaText?: string
  backgroundImage?: SanityImage
}

export interface SanityService {
  _id: string
  title: string
  slug: { current: string }
  category: 'brokerage' | 'technical' | 'wind'
  description?: string
  bulletPoints?: string[]
  deliverables?: string[]
  displayOrder?: number
}

export interface SanityGalleryImage {
  _id: string
  alt: string
  caption?: string
  displayOrder?: number
  image: SanityImage
  imageUrl: string
}

export interface SanityTestimonial {
  _id: string
  quote: string
  author: string
  role?: string
  company?: string
  displayOrder?: number
}

export interface SanityJobPosting {
  _id: string
  title: string
  employmentType: 'CONTRACT' | 'FULL_TIME' | 'PART_TIME'
  description?: string
  requirements?: string[]
  active: boolean
}

export interface SanityFaqItem {
  _id: string
  question: string
  answer: string
  category: 'scope' | 'title' | 'leasing' | 'wind' | 'logistics'
  displayOrder?: number
}

export interface SanityGlossaryTerm {
  _id: string
  term: string
  definition: string
  category: 'title' | 'leasing' | 'operations' | 'wind'
}
