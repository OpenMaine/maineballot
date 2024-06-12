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
  Type: z.enum(['RCV', 'C', 'U']),
  ballotpedia: z.string(),
  website: z.string(),
  website_text: z.string(),
  comparison: z.string(),
  comparison_text: z.string(),
})

// https://docs.astro.build/en/reference/api-reference/#other-files
export interface CustomDataFile {
  default: any[]
}
