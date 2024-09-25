import tailwindTypography from '@tailwindcss/typography'
import type { PluginUtils } from 'tailwindcss/types/config'
import { addDynamicIconSelectors } from '@iconify/tailwind'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      css: {

      },
      typography: ({ theme }: PluginUtils) => ({
        neutral: {
          css: {
            '--tw-prose-headings': theme('colors.gray.600'),
            '--tw-prose-body': theme('colors.gray.600'),
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
            'a[data-footnote-backref]': {
              'fontFamily': 'sans-serif',
              'textDecoration': 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            'sup > a': {
              'fontSize': theme('fontSize.base')[0],
              'textDecoration': 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
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