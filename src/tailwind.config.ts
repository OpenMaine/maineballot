import type { PluginUtils } from 'tailwindcss/plugin'
import { addDynamicIconSelectors } from '@iconify/tailwind'
import tailwindTypography from '@tailwindcss/typography'

export default {
  theme: {
    extend: {
      typography: ({ theme }: PluginUtils) => ({
        neutral: {
          css: {
            '--tw-prose-headings': theme('colors.gray.600'),
            '--tw-prose-body': theme('colors.gray.600'),
            '--tw-prose-bold': theme('colors.gray.600'),
            '--tw-prose-quotes': theme('colors.gray.600'),
            '--tw-prose-bullets': theme('colors.gray.600'),
          },
        },
        DEFAULT: {
          css: {
            'fontSize': theme('fontSize.xl')[0],
            'lineHeight': theme('fontSize.3xl')[1].lineHeight,
            'h1': {
              fontSize: theme('fontSize.4xl')[0],
              fontWeight: '700',
            },
            'h2': {
              fontSize: theme('fontSize.3xl')[0],
              fontWeight: '700',
            },
            'h3': {
              fontSize: theme('fontSize.2xl')[0],
              fontWeight: '700',
            },
            'h4': {
              fontSize: theme('fontSize.xl')[0],
              fontWeight: '700',
            },
            'h5': {
              fontSize: theme('fontSize.lg')[0],
              fontWeight: '700',
            },
            'h6': {
              fontSize: theme('fontSize.base')[0],
              fontWeight: '700',
            },
            'a': {
              color: '#2f7d95',
              fontWeight: '500',
            },
            'ul': {
              paddingInlineStart: theme('space.4'),
            },
            'ul > li': {
              paddingInlineStart: theme('space.1'),
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
              'font-size': theme('fontSize.base')[0],
              'line-height': theme('fontSize.lg')[1].lineHeight,
            },
            '.footnotes li': {
              'margin-top': theme('space.4'),
              'margin-bottom': theme('space.4'),
            },
            '.footnotes li p': {
              'margin-top': theme('space.0'),
              'margin-bottom': theme('space.0'),
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
