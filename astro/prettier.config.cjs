/** @type {import('prettier').Options} */
module.exports = {
  singleQuote: true,
  semi: false,
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
