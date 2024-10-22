import { type RichTextField, asText, createClient } from '@prismicio/client'
import { Endpoint } from '#constants/Endpoint'
import type { SinglePrismicType } from '#constants/PrismicType'

export const client = createClient(Endpoint.PRISMIC)

export async function getSingleByType(type: SinglePrismicType) {
  const { results } = await client.getByType(type)
  return results[0]
}

export function asTextLines(element: RichTextField) {
  return asText(element, {
    separator: '\n\n'
  })
}
