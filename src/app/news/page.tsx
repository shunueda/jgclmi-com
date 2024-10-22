import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { asText } from '@prismicio/client'
import Link from 'next/link'
import Template from '#components/template'
import { RepeatablePrismicType } from '#constants/PrismicType'
import { formatDate } from '#lib/date'
import { getAllByType } from '#lib/prismic'

export default async function Page() {
  const news = await getAllByType(RepeatablePrismicType.NEWS)
  return (
    <Template title='News' subtitle='過去のニュース一覧'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='text-center'>公開日</TableHead>
            <TableHead className='text-center'>タイトル</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {news.map(it => (
            <TableRow key={it.id}>
              <TableCell className='text-center text-xs'>
                {formatDate(new Date(it.last_publication_date))}
              </TableCell>
              <TableCell>
                <Link href={`/article/${it.id}`}>{asText(it.data.title)}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Template>
  )
}
