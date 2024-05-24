import { z } from 'zod'

export const siteMetaSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().url(),
})
