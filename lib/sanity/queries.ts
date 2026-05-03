// Hero
export const heroQuery = `*[_type == "hero"][0] {
  headline, subheadline, tagline, bodyCopy,
  primaryCtaText, secondaryCtaText, backgroundImage
}`

// Services
export const servicesQuery = `*[_type == "service"] | order(displayOrder asc) {
  _id, title, slug, category, description, bulletPoints, deliverables, displayOrder
}`

export const servicesByCategoryQuery = (category: string) =>
  `*[_type == "service" && category == "${category}"] | order(displayOrder asc) {
    _id, title, slug, description, bulletPoints, deliverables
  }`

// Gallery
export const galleryQuery = `*[_type == "galleryImage"] | order(displayOrder asc) {
  _id, alt, caption, displayOrder,
  "imageUrl": image.asset->url
}`

// Testimonials
export const testimonialsQuery = `*[_type == "testimonial"] | order(displayOrder asc) {
  _id, quote, author, role, company
}`

// Jobs
export const jobPostingsQuery = `*[_type == "jobPosting" && active == true] {
  _id, title, employmentType, description, requirements
}`

// FAQ
export const faqQuery = `*[_type == "faqItem"] | order(category asc, displayOrder asc) {
  _id, question, answer, category
}`

// Glossary
export const glossaryQuery = `*[_type == "glossaryTerm"] | order(category asc, term asc) {
  _id, term, definition, category
}`
