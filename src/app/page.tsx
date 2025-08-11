import { asLink, asText } from '@prismicio/client'
import { MailIcon, MapPinIcon } from 'lucide-react'
import Link from 'next/link'
import { Template } from '#components/template'
import {
  RepeatablePrismicType,
  SinglePrismicType
} from '#constants/PrismicType'
import { getAllByType, getSingleByType } from '#lib/prismic'

export default async function Home() {
  const today = new Date()
  const { data } = await getSingleByType(SinglePrismicType.HOME)
  const news = (await getAllByType(RepeatablePrismicType.NEWS)).filter(
    ({ data }) => new Date(data.display_until_date) >= today
  )
  const articles = (await getAllByType(RepeatablePrismicType.ARTICLE)).filter(
    ({ data }) => data.pickup
  )
  const email = asLink(data.email)
  const links = [
    {
      icon: <MapPinIcon color={'#74d769'} />,
      title: 'Google Map',
      url: asLink(data.google_map_link)
    }
  ]
  const lists = [
    {
      title: 'ニュース',
      items: news
    },
    {
      title: '注目記事',
      items: articles
    }
  ]
  return (
    <Template
      title={asText(data.title)}
      subtitle={asText(data.subtitle)}
      src={data.header.url}
    >
      <section>
        <div className='whitespace-break-spaces'>
          笹川雅弘牧師はこのたびNYめぐみ教会での職務を終了し7月に日本へ帰国することになりました。笹川牧師の後任候補が与えられることを祈ってまいりましたが残念ながらそれがかなわなかったことを受け、リッジウェイ教会はJapanese
          Ministryの活動を6月いっぱいをもって終了する決定をいたしました。このことに伴いNYめぐみ教会は2025年6月いっぱいをもってCloseすることとなりました。これまでさまざまな形で教会とかかわりを持たれてきた方すべての上に主の豊かな祝福と導きがありますように。
        </div>
      </section>
      {lists.map(
        ({ title, items }) =>
          items.length > 0 && (
            <section className='mt-8' key={title}>
              <h2>{title}</h2>
              <ul className='mt-2'>
                {items.map(({ id, data }) => (
                  <li key={id}>
                    <Link href={`/article/${id}`} className='flex text-sm py-1'>
                      <p>・</p>
                      <p>{asText(data.title)}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )
      )}
      <section className='mt-8'>
        <h2>お問合せ</h2>
        <p className='mt-4'>
          下記のメールアドレスより、お気軽にご連絡ください。
        </p>
        <p className='mt-2 text-sm'>
          <MailIcon className='inline mr-2' size={12} />
          <a href={`mailto:${email}`} target='_blank' rel='noreferrer'>
            {email}
          </a>
        </p>
      </section>
    </Template>
  )
}
