import { asText } from '@prismicio/client'
import type { Metadata } from 'next'
import { SinglePrismicType } from '#constants/PrismicType'
import { getById, getSingleByType } from '#lib/prismic'
import type { LayoutProps } from '#types/props'

export interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: LayoutProps & Props) {
  const { slug } = await params
  const article = await getById(slug)
  const home = await getSingleByType(SinglePrismicType.HOME)
  return {
    title: `${asText(home.data.title)} - ${asText(article.data.title)}`,
    description: asText(article.data.body)
  } satisfies Metadata
}

export default function Layout({ children }: LayoutProps & Props) {
  return children
}
