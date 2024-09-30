import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig, envField } from 'astro/config'
import dsv from '@rollup/plugin-dsv'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  site: 'https://maineballot.org',

  integrations: [
    tailwind(),
    sitemap(),
    react(),
    mdx({
      remarkRehype: {
        footnoteLabel: 'References',
        footnoteLabelProperties: {
          class: null,
        },
      },
    }),
  ],

  markdown: {
    remarkRehype: {
      footnoteLabel: 'References',
      footnoteLabelProperties: {
        class: null,
      },
    },
  },

  vite: {
    plugins: [
      dsv(),
    ],
  },

  env: {
    schema: {
      GOOGLE_MEASUREMENT_ID: envField.string({
        context: 'server',
        access: 'public',
        default: 'G-FRBHPKMW0S',
      }),
      GOOGLE_SITE_VERIFICATION: envField.string({
        context: 'server',
        access: 'public',
        default: 'gqHgkOyPBANMIktwSO-L23jON_rj7qk1PJRfsYpfvmY',
      }),
    },
  },

  output: 'static',
  adapter: netlify(),
  // redirects: {
  //   '/blog/old-post': '/blog/new-post',
  // },
})
