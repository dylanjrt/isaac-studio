import {Rule as RuleType} from 'sanity'

/**
 * Collaborations schema for Sanity Studio.
 *
 * Fields:
 *   - albumCover: Required image
 *   - albumName: Optional string
 *   - songs: Optional list of strings (displayed if album name not present)
 *   - releaseDate: Required date
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
    },
    {
      name: 'contributions',
      title: 'Contributions',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of contributions (e.g., "Engineering", "Mixing")',
    },
  ],
  orderings: [
    {
      title: 'Release Date, Newest First',
      name: 'releaseDateDesc',
      by: [{field: 'releaseDate', direction: 'desc'}],
    },
    {
      title: 'Release Date, Oldest First',
      name: 'releaseDateAsc',
      by: [{field: 'releaseDate', direction: 'asc'}],
    },
  ],
}
