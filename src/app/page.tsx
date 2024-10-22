import { Button } from '@/components/ui/button'
import { asLink, asText } from '@prismicio/client'
import { MailIcon, MapPinIcon, VideoIcon } from 'lucide-react'
import Link from 'next/link'
import Template from '#components/template'
import { Table, TableBody, TableCell, TableRow } from '#components/ui/table'
import {
  RepeatablePrismicType,
  SinglePrismicType
} from '#constants/PrismicType'
import { formatDate } from '#lib/date'
import { asTextLines, getAllByType, getSingleByType } from '#lib/prismic'
import { cn } from '#lib/utils'

export default async function Home() {
  const today = new Date()
  const { data } = await getSingleByType(SinglePrismicType.HOME)
  const news = (await getAllByType(RepeatablePrismicType.NEWS)).filter(
    ({ data }) => new Date(data.display_until_date) >= today
  )
  const articles = await getAllByType(RepeatablePrismicType.ARTICLE)
  const email = asLink(data.email)
  const links = [
    {
      icon: <MapPinIcon color={'#74d769'} />,
      title: 'Google Map',
      url: asLink(data.google_map_link)
    },
    {
      icon: <VideoIcon color={'#698cd7'} />,
      title: 'Zoomリンク',
      url: asLink(data.zoom_link)
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
          {asTextLines(data.first_section_body)}
        </div>
        <div className='mt-4 flex'>
          {links.map(({ title, url, icon }, i) => (
            <Button
              key={title}
              className={cn(i !== 0 && 'ml-4')}
              variant='outline'
            >
              {icon}
              <a href={url || ''} target='_blank' rel='noreferrer'>
                {title}
              </a>
            </Button>
          ))}
        </div>
      </section>
      {news.length > 0 && (
        <section className='mt-8'>
          <h2>ニュース</h2>
          <Table className='mt-4'>
            <TableBody>
              {news.map(it => (
                <TableRow key={it.id}>
                  <TableCell className=' text-xs'>
                    ~{formatDate(new Date(it.data.display_until_date))}
                  </TableCell>
                  <TableCell>
                    <Link href={`/article/${it.id}`}>
                      {asText(it.data.title)}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      )}
      {articles.length > 0 && (
        <section className='mt-8'>
          <h2>注目記事</h2>
          <Table className='mt-4'>
            <TableBody>
              {articles.map(it => (
                <TableRow key={it.id}>
                  <TableCell className=' text-xs'>
                    {formatDate(new Date(it.last_publication_date))}
                  </TableCell>
                  <TableCell>
                    <Link href={`/article/${it.id}`}>
                      {asText(it.data.title)}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
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
