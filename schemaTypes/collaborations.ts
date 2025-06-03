import {Rule as RuleType} from 'sanity'

/**
 * Collaborations schema for Sanity Studio.
 *
 * Fields:
 *   - albumCover: Required image
 *   - albumName: Optional string
 *   - songName: Optional string (displayed if albumName not present)
 *   - artistName: Required string
 *   - contributions: Array of strings (example: "Engineering", "Mixing")
 */
export const collaborations = {
  name: 'collaborations',
  title: 'Collaborations',
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
      name: 'songName',
      title: 'Song Name',
      type: 'string',
      description: 'Song name (displayed if album name not present, optional)',
    },
    {
      name: 'artistName',
      title: 'Artist Name',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      description: 'Artist name (required)',
    },
    {
      name: 'contributions',
      title: 'Contributions',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of contributions (e.g., "Engineering", "Mixing")',
    },
  ],
}
