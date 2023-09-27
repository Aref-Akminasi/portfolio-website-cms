// skillset.ts

export default {
  name: 'skillset',
  title: 'Skillset',
  type: 'document',
  fields: [
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Skill Title',
            },
            {
              name: 'img',
              type: 'image',
              title: 'Image',
            },
          ],
        },
      ],
    },
  ],
}
