import antfu from '@antfu/eslint-config'

export default antfu({
  // formatters: true, // this can be uncommented when astro is no longer in a nested dir, @antfu/eslint-config looks for astro to be installed and will automatically enable
  formatters: {
    astro: 'prettier',
    css: 'prettier',
    html: 'prettier',
    markdown: 'prettier',
  },
  astro: true,
  ignores: [
    // # build output
    'dist/',
    // # generated types
    '.astro/',

    // # dependencies
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
    'astro/src/assets/*',
  ],
})
