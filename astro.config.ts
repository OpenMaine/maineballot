import type { AstroIntegration } from 'astro'
import { writeFile } from 'node:fs/promises'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import dsv from '@rollup/plugin-dsv'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, envField } from 'astro/config'

function emitRedirectsFile(): AstroIntegration {
  let redirects: Record<string, string | { destination: string, status?: number }> = {}
  return {
    name: 'emit-redirects-file',
    hooks: {
      'astro:config:done': ({ config }) => {
        redirects = config.redirects ?? {}
      },
      'astro:build:done': async ({ dir }) => {
        const lines: string[] = []
        for (const [from, value] of Object.entries(redirects)) {
          const destination = typeof value === 'string' ? value : value.destination
          const status = typeof value === 'string' ? 301 : value.status ?? 301
          lines.push(`${from} ${destination} ${status}`)
          if (from.endsWith('/*')) {
            // also match trailing-slash variant: /path/*/ → /path/foo/
            lines.push(`${from}/ ${destination} ${status}`)
          }
          else if (!from.endsWith('/')) {
            // also match trailing-slash variant for static paths: /old/ → /new
            lines.push(`${from}/ ${destination} ${status}`)
          }
        }
        await writeFile(new URL('_redirects', dir), `${lines.join('\n')}\n`)
      },
    },
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.maineballot.org',

  experimental: {
    contentIntellisense: true,
  },

  integrations: [
    emitRedirectsFile(),
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
    plugins: [dsv(), tailwindcss()],
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
  redirects: {
    '/november%202024%20election/*': '/ballot-question/november-2024/:splat',
    '/november%202023%20election/*': '/ballot-question/november-2023/:splat',
    '/november%202021%20election/*': '/ballot-question/november-2021/:splat',
    '/july%202020%20election/*': '/ballot-question/july-2020/:splat',
    '/march%202020%20election/*': '/ballot-question/march-2020/:splat',
    '/november%202019%20election/*': '/ballot-question/november-2019/:splat',
    '/november%202018%20election/*': '/ballot-question/november-2018/:splat',
    '/june%202018%20election/*': '/ballot-question/june-2018/:splat',
    '/november%202017%20election/*': '/ballot-question/november-2017/:splat',
    '/june%202017%20election/*': '/ballot-question/june-2017/:splat',
    '/november%202016%20election/*': '/ballot-question/november-2016/:splat',
    //
    '/categories': '/elections',
    // Random redirects for broken links in the wild
    '/minimum-wage-1': '/ballot-question/november-2016/q4_minimumwage',
  },
})
