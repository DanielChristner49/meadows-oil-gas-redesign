import { defineType, defineField } from 'sanity'

export const faqItemSchema = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 5, validation: (r) => r.required() }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['scope', 'title', 'leasing', 'wind', 'logistics'] } }),
    defineField({ name: 'displayOrder', title: 'Display Order', type: 'number' }),
  ],
})
