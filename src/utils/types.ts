import { z } from 'zod'

export const candidateDataSchema = z.object({
  Office: z.string(),
  Dist: z.string(),
  County: z.string(),
  Party: z.string(),
  LastName: z.string(),
  FirstName: z.string(),
  MiddleName: z.string(),
  Suffix: z.string(),
  Type: z.union([z.enum(['RCV', 'C', 'U']), z.undefined()]),
  ballotpedia: z.string(),
  website: z.string(),
  website_text: z.string(),
  comparison: z.string(),
  comparison_text: z.string(),
})

export const localElectionDataSchema = z.object({
  county: z.string(),
  city: z.string(),
  type: z.string(),
  website: z.string(),
  drop: z.string(),
  ballot: z.string(),
  ballot_link: z.string(),
  ballot_link_text: z.string(),
  sorting_county: z.string(),
})

export type CandidateData = z.infer<typeof candidateDataSchema>

export type LocalElectionData = z.infer<typeof localElectionDataSchema>

interface NavigationItem {
  title: string
  url: string
}

export type Navigation = NavigationItem[]

interface ElectionItem {
  date: string
  title?: string
}

export interface Elections {
  upcoming: Required<ElectionItem>
  past: ElectionItem[]
}

export interface SiteMeta {
  title: string
  description: string
}

export interface SiteMetaProps {
  title: string
  description: string
  image: string
}

// https://docs.astro.build/en/reference/api-reference/#other-files
export interface CustomDataFile {
  default: Record<string, any>
}
