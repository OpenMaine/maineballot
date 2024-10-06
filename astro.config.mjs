import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig, envField } from 'astro/config'
import dsv from '@rollup/plugin-dsv'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.maineballot.org',

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
  adapter: netlify({
    imageCDN: false,
  }),
  redirects: {
    '/november%202024%20election/*': '/ballot-question/2024-11-05/:splat',
    '/november%202023%20election/*': '/ballot-question/2023-11-07/:splat',
    '/november%202021%20election/*': '/ballot-question/2021-11-02/:splat',
    '/july%202020%20election/*': '/ballot-question/2020-07-14/:splat',
    '/march%202020%20election/*': '/ballot-question/2020-03-03/:splat',
    '/november%202019%20election/*': '/ballot-question/2019-11-05/:splat',
    '/november%202018%20election/*': '/ballot-question/2018-11-06/:splat',
    '/june%202018%20election/*': '/ballot-question/2018-06-12/:splat',
    '/november%202017%20election/*': '/ballot-question/2017-11-07/:splat',
    '/june%202017%20election/*': '/ballot-question/2017-06-13/:splat',
    '/november%202016%20election/*': '/ballot-question/2016-11-08/:splat',
    '/categories': '/elections',
  },
})
