import { file, glob } from 'astro/loaders'
import { type ImageFunction, defineCollection, reference, z } from 'astro:content'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

const ballotMeasureCollection = defineCollection({
  loader: glob({ pattern: '**\/[^_]*.(md|mdx)', base: './src/data/ballot-questions' }),
  schema: ({ image }: { image: ImageFunction }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      electionDate: z.preprocess(val => String(val), z.string()).transform(str => dayjs.tz(str, 'America/New_York').toDate()),
      header: z.object({
        overlay_image: image(),
        teaser: image(),
        overlay_filter: z.number(),
        image_description: z.string(),
      }),
      search: z.boolean(),
      election: reference('elections'),
      tags: z.array(reference('tags')).optional(),
      yes_vote: z.string(),
      no_vote: z.string(),
      lastModifiedDate: z.preprocess(val => String(val), z.string()).transform(str => dayjs.tz(str, 'America/New_York').toDate()),
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
    date: z.preprocess(val => String(val), z.string()).transform(str => dayjs.tz(str, 'America/New_York').toDate()),
  }),
})

export const collections = {
  'candidates': candidatesCollection,
  'elections': electionCollection,
  'local': localCollection,
  'ballot-questions': ballotMeasureCollection,
  'tags': tagsCollection,
}
