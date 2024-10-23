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
import { Template } from '#components/template'
import { RepeatablePrismicType } from '#constants/PrismicType'
import { formatDate } from '#lib/date'
import { getAllByType } from '#lib/prismic'
import { generateMetadata } from './layout'

export default async function Page() {
  const articles = await getAllByType(RepeatablePrismicType.ARTICLE)
  const { description } = await generateMetadata()
  return (
    <Template title='Article' subtitle={description}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='text-center'>公開日</TableHead>
            <TableHead className='text-center'>タイトル</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {articles.map(({ id, last_publication_date, data }) => (
            <TableRow key={id}>
              <TableCell className='text-center text-xs'>
                {formatDate(new Date(last_publication_date))}
              </TableCell>
              <TableCell>
                <Link href={`/article/${id}`}>{asText(data.title)}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Template>
  )
}
