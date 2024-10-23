import { asText } from '@prismicio/client'
import type { Metadata } from 'next'
import { SinglePrismicType } from '#constants/PrismicType'
import { getSingleByType } from '#lib/prismic'
import type { LayoutProps } from '#types/props'

export async function generateMetadata() {
  const home = await getSingleByType(SinglePrismicType.HOME)
  const manamail = await getSingleByType(SinglePrismicType.MANAMAIL)
  return {
    title: `${asText(home.data.title)} - マニュアル`,
    description: asText(manamail.data.about)
  } satisfies Metadata
}

export default function Layout({ children }: LayoutProps) {
  return children
}
