import { type ImageFunction, defineCollection, z } from 'astro:content'

const postCollection = defineCollection({
  type: 'content',
  schema: ({ image }: { image: ImageFunction }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      election: z.date(),
      header: z.object({
        overlay_image: image(),
        teaser: image(),
        overlay_filter: z.number(),
        image_description: z.string(),
      }),
      search: z.boolean(),
      categories: z.array(z.string()),
      tags: z.array(z.string()),
      yes_vote: z.string(),
      no_vote: z.string(),
      last_modified_at: z.string().transform(val => new Date(val)),
    }).strict(),
})

export const collections = {
  posts: postCollection,
}
