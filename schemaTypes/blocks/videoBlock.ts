export default {
  name: 'videoBlock',
  title: 'Video Block',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'YouTube or Vimeo URL',
      type: 'url',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
  ],
}
