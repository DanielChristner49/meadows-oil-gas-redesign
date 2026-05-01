import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://meadows-oil-gas-redesign.vercel.app/sitemap.xml',
  }
}
