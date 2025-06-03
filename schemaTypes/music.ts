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
      name: 'musicTitle',
      title: 'Music Title',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      description: 'Music title (required)',
    },
    {
      name: 'artistTitle',
      title: 'Artist Title',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      description: 'Artist title (required)',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule: RuleType) => Rule.required(),
      description: 'Release date (required)',
    },
    {
      name: 'bandcampLink',
      title: 'Bandcamp Link',
      type: 'url',
      validation: (Rule: RuleType) => Rule.required(),
      description: 'Bandcamp link (required)',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: RuleType) => Rule.required(),
      description: 'Description (required)',
    },
  ],
}
