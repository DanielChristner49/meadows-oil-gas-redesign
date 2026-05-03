import { defineType, defineField } from 'sanity'

export const glossaryTermSchema = defineType({
  name: 'glossaryTerm',
  title: 'Glossary Term',
  type: 'document',
  fields: [
    defineField({ name: 'term', title: 'Term', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'definition', title: 'Definition', type: 'text', rows: 5, validation: (r) => r.required() }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['title', 'leasing', 'operations', 'wind'] } }),
  ],
})
