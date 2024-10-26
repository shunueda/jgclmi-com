import { EOL } from 'node:os'
import { type RichTextField, asText, createClient } from '@prismicio/client'
import { Endpoint } from '#constants/Endpoint'
import type {
  RepeatablePrismicType,
  SinglePrismicType
} from '#constants/PrismicType'

const client = createClient(Endpoint.PRISMIC_CDN_API)

export async function getSingleByType(type: SinglePrismicType) {
  const { results } = await client.getByType(type)
  return results[0]
}

export async function getAllByType(type: RepeatablePrismicType) {
  const results = await client.getAllByType(type)
  return results.sort((a, b) =>
    a.last_publication_date > b.last_publication_date ? -1 : 1
  )
}

export async function getById(id: string) {
  return await client.getByID(id)
}

export function asTextLines(element: RichTextField, fallback = '') {
  try {
    return asText(element, {
      separator: EOL.repeat(2)
    })
  } catch (_) {
    return fallback
  }
}

export function asTextSafe(element: RichTextField, fallback = '') {
  try {
    return asText(element)
  } catch (_) {
    return fallback
  }
}
