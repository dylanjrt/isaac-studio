import imageBlock from './blocks/imageBlock'
import videoBlock from './blocks/videoBlock'
import textBlock from './blocks/textBlock'

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [{type: 'imageBlock'}, {type: 'videoBlock'}, {type: 'textBlock'}],
    },
  ],
}
