import { defineType, defineField } from 'sanity'

export const heroSchema = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({ name: 'headline', title: 'Headline', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'subheadline', title: 'Subheadline', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline (e.g. "Serving Operators Since 2009")', type: 'string' }),
    defineField({ name: 'bodyCopy', title: 'Body Copy', type: 'text', rows: 3 }),
    defineField({ name: 'primaryCtaText', title: 'Primary CTA Text', type: 'string' }),
    defineField({ name: 'secondaryCtaText', title: 'Secondary CTA Text', type: 'string' }),
    defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
  ],
})
