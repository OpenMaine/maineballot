import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    formatters: true,
    astro: true,
    ignores: [
      // # build output
      'dist/',
      // # generated types
      '.astro/',

      // # dependencies
      '**/node_modules/*',
      'node_modules/',

      // # logs
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      'pnpm-debug.log*',

      // # environment variables
      '.env',
      '.env.production',

      // # macOS-specific files
      '.DS_Store',
    ],
  },
  ...tailwind.configs['flat/recommended'],
)
