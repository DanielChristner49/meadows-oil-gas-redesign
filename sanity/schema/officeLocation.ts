import { defineType, defineField } from 'sanity'

export const officeLocation = defineType({
  name: 'officeLocation',
  title: 'Office Location',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'City Name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'latitude',
      title: 'Latitude',
      type: 'number',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'longitude',
      title: 'Longitude',
      type: 'number',
      validation: (r) => r.required(),
    }),
  ],
})
