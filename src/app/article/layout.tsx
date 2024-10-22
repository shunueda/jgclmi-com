import { asText } from '@prismicio/client'
import type { Metadata } from 'next'
import { SinglePrismicType } from '#constants/PrismicType'
import { getSingleByType } from '#lib/prismic'
import type { LayoutProps } from '#types/props'

export async function generateMetadata() {
  const { data } = await getSingleByType(SinglePrismicType.HOME)
  return {
    title: `${asText(data.title)} - 記事`,
    description: '記事一覧'
  } satisfies Metadata
}

export default function Layout({ children }: LayoutProps) {
  return children
}
