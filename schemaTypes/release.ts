export const release = {
  name: 'release',
  title: 'Release',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
    },
    {
      name: 'coverArt',
      title: 'Cover Art',
      type: 'image',
    },
    {
      name: 'bandcampEmbedUrl',
      title: 'Bandcamp Embed URL',
      type: 'url',
    },
    {
      name: 'appleMusicUrl',
      title: 'Apple Music URL',
      type: 'url',
    },
    {
      name: 'tidalUrl',
      title: 'Tidal URL',
      type: 'url',
    },
    {
      name: 'tracklist',
      title: 'Tracklist',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
