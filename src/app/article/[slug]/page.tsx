import { asText } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import { Template } from '#components/template'
import { formatDate } from '#lib/date'
import { getById } from '#lib/prismic'
import { cn } from '#lib/utils'
import type { Props } from './layout'

export default async function Page({ params }: Props) {
  const { slug } = await params
  const { last_publication_date, data } = await getById(slug)
  return (
    <Template
      title={asText(data.title)}
      subtitle={`公開日: ${formatDate(new Date(last_publication_date))}`}
      src={data.header.url}
    >
      <section className={cn('prose', 'prose-img:mx-auto')}>
        <PrismicRichText field={data.body} />
      </section>
    </Template>
  )
}
