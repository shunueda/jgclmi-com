import { asText } from '@prismicio/client'
import type { Metadata } from 'next'
import { SinglePrismicType } from '#constants/PrismicType'
import { getSingleByType } from '#lib/prismic'
import type { LayoutProps } from '#types/props'

export async function generateMetadata() {
  const home = await getSingleByType(SinglePrismicType.HOME)
  return {
    title: `${asText(home.data.title)} - Manna`,
    description: '旧グリニッチ福音キリスト教会・Mannaアーカイブ'
  } satisfies Metadata
}

export default function Layout({ children }: LayoutProps) {
  return children
}
