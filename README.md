# Maine Ballot Website

MaineBallot.org was created by Shannon McHarg, a user experience designer living in Maine, and is supported by [Open Maine](openmaine.org) volunteers. The goal of MaineBallot.org is to provide concise, non-partisan information to make it easy to understand the ballot questions pending in Maine.

While MaineBallot.org strives to present all sides of the arguments for and against the pending ballot questions, there is always a potential for error or bias. We encourage you to consult with other sources of information before you vote. Your choice to access these pages constitutes an acknowledgement that the information provided is not legal or voting advice of any kind. We will be updating this site on a regular basis until election day.

Please let us know if we missed something or if you have any suggestions to improve our site.
Contact us at: maineballot@gmail.com

## Want to create a similar site for your state?

Go ahead and clone the repository! [Learn how to create your own ballot website.](https://github.com/OpenMaine/maineballot/wiki/How-to-create-your-own-ballot-website)

<br />

---

<br />

## Project Structure

Inside of this Astro project, you'll see the following folders and files:

```
├── .github/
├── .husky/
├── .vscode/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/config.ts
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   └── env.d.ts
├── .editorconfig
├── CNAME
├── eslint.config.js
├── LICENSE
├── netlify.toml
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Directories

### `public`

This is where static, uncompiled files are stored. Things like the site's meta image, resources like PDF's and text documents, and any other files that are served "as-is".

### `src`

This is where the bulk of the project lives. Everything in here is bundled into the project files

### `src/assets`

Assets that are used by and bundled into the site. These files are optimized and compiled at "build" time.

### `src/components`

Reusable pieces of code that are referenced regularly throughout the site. Can be `.astro` or `.tsx` components.

### `src/content/config.ts`

Where we define the site's content schemas. This let's us know the "shape" of our various content as we're working with it in our templates and components.

### `src/data`

Where our site's content lives. This can be (mostly) any data type: `markdown`, `json`, `csv`, etc. It's reference and loaded into our site as defined in `src/content/config.ts`.

### `src/layouts`

Similar to `src/components` in that it's a reusable piece of code. Except these components are used to "wrap around" rather than "injected into".

### `src/pages`

This is where Astro looks to create all the pages on the site. Pages can be `.astro` or `markdown` files. In our case, we're using `.astro` and pulling in `markdown` content manually. Each page is exposed as a route based on its file name.

- `src/pages/blog.astro` creates a `/blog` route.
- `src/pages/blog/[slug]` creates a dynamic `/blog/blog-slug` route.
- `src/pages/blog/[...slug]` creates a dynamic `/blog/a/b/c` route.

[More details on Astro routing](https://docs.astro.build/en/guides/routing/)

### `src/utils`

Various reusable functions that we use throught the site.

## File Types

This project uses various file and content types, most importantly `markdown`, `.astro`, and `.tsx`

### `markdown`

This site uses both `.md` and `.mdx` to render content. `.mdx` is a special type of `markdown` that is compiled with JavaScript. This means we can do some fancy things with it like use HTML directly, embed components, and reference frontmatter within a document.

[More about MDX](https://mdxjs.com/)

### `.astro`

Astro files are written with `JSX`, a special type of markup similar to HTML. You can use any type of valid HTML in these files. You can also write JavaScript functions and reference components.

The "frontmatter" is where the any variables are defined. These files are statically generated at build time so they cannot be used to run as client-side JavaScript (unless its written in a `<script>` tag).

### `.tsx`

These files are where our most of the site's client-side JavaScript is written. Anything that is interactive to users, like the mobile menu and sortable tables, lives here. In our case, these are React components that are embedded into the site as "[islands](https://docs.astro.build/en/concepts/islands/)".

While these components are typically rendered on the client (as opposed to statically during the build-step), there are ways to ensure data referenced in these components is available without having to wait. This is useful for things like SEO and perceived loading times.

<br />

---

<br />

## Credits

### Creator

[Shannon McHarg](https://github.com/shannonmcharg)

### Contributors

See the [contributors](https://maineballot.org/contributors/) page on maineballot.org.

### Image Credits

Most images on the site are in the public domain or have been purchased and don't require attribution, except:

Commencement Exercises University of Maine Orono 05132017 by Regan Vercruysse, [Creative Commons 2.0 license](https://creativecommons.org/licenses/by-sa/2.0/), [Original Image](https://www.flickr.com/photos/rverc/34666710781)

<br />

### Site Theme

This site uses an adaptation of the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/).

[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/mmistakes/minimal-mistakes/master/LICENSE)
[![Jekyll](https://img.shields.io/badge/jekyll-%3E%3D%203.6-blue.svg)](https://jekyllrb.com/)
[![Ruby gem](https://img.shields.io/gem/v/minimal-mistakes-jekyll.svg)](https://rubygems.org/gems/minimal-mistakes-jekyll)
[![Tip Me via PayPal](https://img.shields.io/badge/PayPal-tip%20me-green.svg?logo=paypal)](https://www.paypal.me/mmistakes)

#### Creator

**Michael Rose**

- <https://mademistakes.com>
- <https://twitter.com/mmistakes>
- <https://github.com/mmistakes>

#### License

The MIT License (MIT)

Copyright (c) 2013-2018 Michael Rose and contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
