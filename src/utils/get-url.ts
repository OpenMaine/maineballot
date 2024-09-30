import type { CollectionEntry, CollectionKey } from 'astro:content'
import { match } from 'ts-pattern'

export function getEntryUrl(
  entry: CollectionEntry<CollectionKey>,
) {
  return match<CollectionEntry<CollectionKey>>(entry)
    .with({ collection: 'candidates' }, entry => `/candidates-archive/${entry.slug}`)
    .with({ collection: 'ballot-questions' }, entry => `/ballot-question/${entry.slug}`)
    .with({ collection: 'local' }, entry => `/local-archive/${entry.slug}`)
    .with({ collection: 'elections' }, entry => `/elections/${entry.id}`)
    .with({ collection: 'tags' }, entry => `/tags/${entry.id}`)
    .exhaustive()
}
