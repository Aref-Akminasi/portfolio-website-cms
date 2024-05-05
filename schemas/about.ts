// about.ts

export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'organization',
              type: 'string',
              title: 'Organization',
            },
            {
              name: 'period',
              type: 'string',
              title: 'Period',
            },
            {
              name: 'location',
              type: 'string',
              title: 'location',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
            },
            {
              name: 'isPresent',
              type: 'boolean',
              title: 'Present',
            },
          ],
        },
      ],
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'organization',
              type: 'string',
              title: 'Organization',
            },
            {
              name: 'period',
              type: 'string',
              title: 'Period',
            },
            {
              name: 'location',
              type: 'string',
              title: 'location',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
            },
            {
              name: 'isPresent',
              type: 'boolean',
              title: 'Present',
            },
          ],
        },
      ],
    },
  ],
}
