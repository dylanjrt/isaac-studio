import {Rule as RuleType} from 'sanity'

/**
 * Contact Item schema for Sanity Studio.
 *
 * Fields:
 *   - name: Required string
 *   - link: Required string
 *   - displayedAs: Required string
 */
export const contactItem = {
  name: 'contactItem',
  title: 'Contact Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      description: 'Name (required)',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      /**
       * Validates that the link is either a valid URL or a mailto: link.
       *
       * Args:
       *     Rule: The Sanity validation rule object.
       *
       * Returns:
       *     The validation rule with custom logic for URLs and mailto links.
       */
      validation: (Rule: RuleType) =>
        Rule.required().custom((value) => {
          if (!value) return 'Link is required'
          // Allow mailto links
          if (typeof value === 'string' && value.startsWith('mailto:')) {
            // Basic email validation
            const email = value.slice(7)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(email)) {
              return 'Invalid mailto: email address'
            }
            return true
          }
          // Allow http/https URLs
          if (typeof value === 'string') {
            try {
              const url = new URL(value)
              if (url.protocol === 'http:' || url.protocol === 'https:') {
                return true
              }
              return 'Only http, https, or mailto: links are allowed'
            } catch (e) {
              // Not a valid URL
              return 'Link must be a valid URL or mailto: link'
            }
          }
          return 'Link must be a valid URL or mailto: link'
        }),
      description: 'Link (required, must be a valid URL or mailto: link)',
    },
    {
      name: 'displayedAs',
      title: 'Displayed As',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      description: 'Displayed as (required)',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule: RuleType) => Rule.required().integer().min(0),
      description: 'Order in which this contact item should be displayed (lower numbers appear first)',
    },
  ],
}
