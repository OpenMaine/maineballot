import { z } from 'zod'

export const siteMetaSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().url(),
})

export const candidateDataSchema = z.object({
  Office: z.string(),
  Dist: z.string(),
  County: z.string(),
  Party: z.string(),
  LastName: z.string(),
  FirstName: z.string(),
  MiddleName: z.string(),
  Suffix: z.string(),
  Type: z.string(),
  ballotpedia: z.string(),
  website: z.string(),
  website_text: z.string(),
  comparison: z.string(),
  comparison_text: z.string(),
})
