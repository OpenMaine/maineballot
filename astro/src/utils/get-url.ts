import type { CollectionEntry, CollectionKey, ContentEntryMap, DataEntryMap, ValidContentEntrySlug } from 'astro:content'
import { match } from 'ts-pattern'

export function getUrl<C extends CollectionKey>(
  collection: C,
  slug: C extends keyof ContentEntryMap
    ? ValidContentEntrySlug<C>
    : C extends keyof DataEntryMap
      ? keyof DataEntryMap[C]
      : never,
) {
  return match<CollectionKey>(collection)
    .with('candidates', () => `/candidates-archive/${slug}`)
    .with('posts', () => `/ballot-measure/${slug}`)
    .with('local', () => `/local-archive/${slug}`)
    .with('elections', () => `/elections/${slug}`)
    .with('tags', () => `/tags/${slug}`)
    .exhaustive()
}

export function getEntryUrl(
  entry: CollectionEntry<CollectionKey>,
) {
  return match<CollectionEntry<CollectionKey>>(entry)
    .with({ collection: 'candidates' }, entry => `/candidates-archive/${entry.slug}`)
    .with({ collection: 'posts' }, entry => `/ballot-measure/${entry.slug}`)
    .with({ collection: 'local' }, entry => `/local-archive/${entry.slug}`)
    .with({ collection: 'elections' }, entry => `/elections/${entry.id}`)
    .with({ collection: 'tags' }, entry => `/tags/${entry.id}`)
    .exhaustive()
}
