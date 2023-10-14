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
              type: 'text',
              title: 'Organization',
            },
            {
              name: 'period',
              type: 'text',
              title: 'Period',
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
              type: 'text',
              title: 'Organization',
            },
            {
              name: 'period',
              type: 'text',
              title: 'Period',
            },
          ],
        },
      ],
    },
    {
      name: 'languages',
      title: 'Languages',
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
              name: 'text',
              type: 'text',
              title: 'Text',
            },
          ],
        },
      ],
    },
  ],
}
