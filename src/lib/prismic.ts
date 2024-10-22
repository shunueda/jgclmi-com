import { EOL } from 'node:os'
import { type RichTextField, asText, createClient } from '@prismicio/client'
import { Endpoint } from '#constants/Endpoint'
import type {
  RepeatablePrismicType,
  SinglePrismicType
} from '#constants/PrismicType'

const client = createClient(Endpoint.PRISMIC)

export async function getSingleByType(type: SinglePrismicType) {
  const { results } = await client.getByType(type)
  return results[0]
}

export async function getAllByType(type: RepeatablePrismicType) {
  return await client.getAllByType(type)
}

export function asTextLines(element: RichTextField) {
  return asText(element, {
    separator: EOL.repeat(2)
  })
}
