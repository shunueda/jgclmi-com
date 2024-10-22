import './globals.css'
import { asText } from '@prismicio/client'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { Footer } from '#components/footer'
import { Nav } from '#components/nav'
import { SinglePrismicType } from '#constants/PrismicType'
import { getSingleByType } from '#lib/prismic'
import { cn } from '#lib/utils'
import type { LayoutProps } from '#types/props'

export async function generateMetadata() {
  const { data } = await getSingleByType(SinglePrismicType.HOME)
  return {
    title: `${asText(data.title)} - ${asText(data.subtitle)}`,
    description:
      'ニューヨークめぐみ教会は聖書信仰に立つプロテスタントの教会です。「教会はクリスチャンだけが行くところ」と思ってはいませんか。教会は全ての人に開かれています。聖書を学んでみたいと思っている方、米国の社会の基盤ともなっているキリスト教について知りたいと思っておられる方、是非気軽にお出かけ下さい。私たちの教会は皆様をお待ちしております！'
  } satisfies Metadata
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <html lang='ja'>
      <body
        className={cn(GeistSans.variable, GeistMono.variable, 'antialiased')}
      >
        <main className='mt-8 mx-auto max-w-xl w-10/12'>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
