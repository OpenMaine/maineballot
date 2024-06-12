import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import dsv from '@rollup/plugin-dsv'

// https://astro.build/config
export default defineConfig({
  site: 'https://maineballot.org',
  integrations: [tailwind(), sitemap()],
  vite: {
    plugins: [dsv()],
  },
})
