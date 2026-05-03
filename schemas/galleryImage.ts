import { defineType, defineField } from 'sanity'

export const galleryImageSchema = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({ name: 'alt', title: 'Alt Text', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'caption', title: 'Caption (optional)', type: 'string' }),
    defineField({ name: 'displayOrder', title: 'Display Order', type: 'number' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, validation: (r) => r.required() }),
  ],
  orderings: [{ title: 'Display Order', name: 'displayOrderAsc', by: [{ field: 'displayOrder', direction: 'asc' }] }],
})
