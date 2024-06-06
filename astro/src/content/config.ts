import { type ImageFunction, defineCollection, reference, z } from 'astro:content'

const postCollection = defineCollection({
  type: 'content',
  schema: ({ image }: { image: ImageFunction }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      electionDate: z.date(),
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
      lastModifiedDate: z.date(),
    }),
})

const candidatesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    election: reference('elections'),
  }),
})

const localCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    election: reference('elections'),
    description: z.string(),
  }),
})

const tagsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
  }),
})

const electionCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    electionDate: z.string().transform(val => new Date(val)),
  }),
})

export const collections = {
  candidates: candidatesCollection,
  elections: electionCollection,
  local: localCollection,
  posts: postCollection,
  tags: tagsCollection,
}