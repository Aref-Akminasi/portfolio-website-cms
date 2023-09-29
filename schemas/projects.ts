export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Project Image',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Project Title',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'header',
      type: 'string',
      title: 'Project Header',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Step Title',
            },
            {
              name: 'text',
              type: 'text',
              title: 'Step Text',
            },
            {
              name: 'img',
              type: 'image',
              title: 'Step Image',
            },
          ],
        },
      ],
    },
    {
      name: 'githubLink',
      type: 'string',
      title: 'GitHub Link',
    },
    {
      name: 'liveDemoLink',
      type: 'string',
      title: 'Live Demo Link',
    },
  ],
}
