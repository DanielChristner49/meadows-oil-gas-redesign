import { defineType, defineField } from 'sanity'

export const jobPostingSchema = defineType({
  name: 'jobPosting',
  title: 'Job Posting',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Job Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'employmentType', title: 'Employment Type', type: 'string', options: { list: ['CONTRACT', 'FULL_TIME', 'PART_TIME'] } }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 6 }),
    defineField({ name: 'requirements', title: 'Requirements', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'active', title: 'Active (visible on site)', type: 'boolean', initialValue: true }),
  ],
})
