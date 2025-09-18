import type { PluginUtils } from 'tailwindcss/plugin'
import { addDynamicIconSelectors } from '@iconify/tailwind'
import tailwindTypography from '@tailwindcss/typography'

export default {
  theme: {
    extend: {
      typography: ({ theme }: PluginUtils) => ({
        neutral: {
          css: {
            '--tw-prose-headings': theme('--color-gray-600'),
            '--tw-prose-body': theme('--color-gray-600'),
            '--tw-prose-bold': theme('--color-gray-600'),
            '--tw-prose-quotes': theme('--color-gray-600'),
            '--tw-prose-bullets': theme('--color-gray-600'),
          },
        },
        DEFAULT: {
          css: {
            'fontSize': theme('--text-xl'),
            'lineHeight': theme('--leading-9'),
            'h1': {
              fontSize: theme('--text-4xl'),
              fontWeight: '700',
            },
            'h2': {
              fontSize: theme('--text-3xl'),
              fontWeight: '700',
            },
            'h3': {
              fontSize: theme('--text-2xl'),
              fontWeight: '700',
            },
            'h4': {
              fontSize: theme('--text-xl'),
              fontWeight: '700',
            },
            'h5': {
              fontSize: theme('--text-lg'),
              fontWeight: '700',
            },
            'h6': {
              fontSize: theme('--text-base'),
              fontWeight: '700',
            },
            'a': {
              color: '#2f7d95',
              fontWeight: '500',
            },
            'ul': {
              paddingInlineStart: '--spacing(4)',
            },
            'ul > li': {
              paddingInlineStart: '--spacing(1)',
            },
            'sup > a': {
              'fontSize': 'inherit',
              'textDecoration': 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            '.footnotes a[data-footnote-backref]': {
              'fontFamily': 'sans-serif',
              'textDecoration': 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            '.footnotes ol': {
              'font-size': theme('--text-base'),
              'line-height': theme('--leading-6'),
            },
            '.footnotes li': {
              'margin-top': '--spacing(4)',
              'margin-bottom': '--spacing(4)',
            },
            '.footnotes li p': {
              'margin-top': '--spacing(0)',
              'margin-bottom': '--spacing(0)',
            },
          },
        },
      }),
    },
  },
  plugins: [
    tailwindTypography,
    addDynamicIconSelectors({
      scale: 0,
    }),
  ],
}
