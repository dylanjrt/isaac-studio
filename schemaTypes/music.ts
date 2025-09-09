import {Rule as RuleType} from 'sanity'

/**
 * Music schema for Sanity Studio.
 *
 * Fields:
 *   - musicTitle: Required string
 *   - artistTitle: Required string
 *   - date: Required date
 *   - bandcampLink: Required url
 *   - description: Required text
 */
export const music = {
  name: 'music',
  title: 'Music',
  type: 'document',
  fields: [
    {
      name: 'albumCover',
      title: 'Album Cover',
      type: 'image',
      validation: (Rule: RuleType) => Rule.required(),
      description: 'Album cover image (required)',
    },
    {
      name: 'albumName',
      title: 'Album Name',
      type: 'string',
      description: 'Album name (optional)',
    },
    {
      name: 'songs',
      title: 'Songs',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of song names (displayed if album name not present, optional)',
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      validation: (Rule: RuleType) => Rule.required(),
      description: 'Release date (required)',
    },
    {
      name: 'artistName',
      title: 'Artist Name',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      description: 'Artist name (required)',
      initialValue: 'Isaac Tea',
    },
    {
      name: 'bandcampEmbed',
      title: 'Bandcamp Embed Iframe',
      type: 'text',
      validation: (Rule: RuleType) => Rule.required(),
      description: 'Paste the full Bandcamp embed iframe here (required). Example: <iframe style="border: 0; width: 100%; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=4093567650/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/" seamless><a href="https://isaactea.bandcamp.com/album/up-above-push-pull">Up Above / Push &amp; Pull by Isaac Tea</a></iframe>',
    },
    {
      name: 'bandcampLink',
      title: 'Bandcamp Link',
      type: 'url',
      validation: (Rule: RuleType) => Rule.required(),
      description: 'Bandcamp link (required)',
    },
    {
      name: 'appleMusicUrl',
      title: 'Apple Music URL',
      type: 'url',
      validation: (Rule: RuleType) => Rule.required(),
      description: 'Apple Music URL (required)',
    },
    {
      name: 'spotifyUrl',
      title: 'Spotify URL',
      type: 'url',
      validation: (Rule: RuleType) => Rule.required(),
      description: 'Spotify URL (required)',
    },
  ],
}
