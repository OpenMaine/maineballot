import type { ImageFunction } from 'astro:content'
import { file, glob } from 'astro/loaders'
import { defineCollection, reference, z } from 'astro:content'
import dayjs from 'dayjs'

const ballotMeasureCollection = defineCollection({
  loader: glob({ pattern: '**\/[^_]*.(md|mdx)', base: './src/data/ballot-questions' }),
  schema: ({ image }: { image: ImageFunction }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      electionDate: z.string().transform(str => dayjs(str).toDate()),
      header: z.object({
        overlay_image: image(),
        teaser: image(),
        overlay_filter: z.number(),
        image_description: z.string(),
      }),
      election: reference('elections'),
      tags: z.array(reference('tags')).optional(),
      yes_vote: z.string(),
      no_vote: z.string(),
      lastModifiedDate: z.string().transform(str => dayjs(str).toDate()),
    }),
})

const candidatesCollection = defineCollection({
  loader: glob({ pattern: '**\/[^_]*.(md|mdx)', base: './src/data/candidates' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    election: reference('elections'),
    datafile: z.string(),
  }),
})

const localCollection = defineCollection({
  loader: glob({ pattern: '**\/[^_]*.(md|mdx)', base: './src/data/local' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    election: reference('elections'),
    datafile: z.string(),
  }),
})

const tagsCollection = defineCollection({
  loader: file('src/data/tags.json'),
  schema: z.object({
    title: z.string(),
  }),
})

const electionCollection = defineCollection({
  loader: file('src/data/elections.json'),
  schema: z.object({
    title: z.string(),
    date: z.string().transform(str => dayjs(str).toDate()),
  }),
})

export const collections = {
  'candidates': candidatesCollection,
  'elections': electionCollection,
  'local': localCollection,
  'ballot-questions': ballotMeasureCollection,
  'tags': tagsCollection,
}
