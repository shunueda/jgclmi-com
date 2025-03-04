import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { type RichTextField, asText } from '@prismicio/client'
import { MoveUpRightIcon } from 'lucide-react'
import Link from 'next/link'
import { Row } from '#components/row'
import { Template } from '#components/template'
import { SinglePrismicType } from '#constants/PrismicType'
import { format, getClosestSunday } from '#lib/date'
import { asTextSafe, getSingleByType } from '#lib/prismic'

interface Manamail {
  title: RichTextField
  subtitle: RichTextField
  date?: string
  pdf: {
    url: string
  }
}

export default async function Page() {
  const { data } = await getSingleByType(SinglePrismicType.MANAMAIL)
  const pivot = getClosestSunday()
  return (
    <Template title='Manamail' subtitle={asText(data.about)}>
      <Row>
        <MoveUpRightIcon size={14} />
        <Link href='/manna' className='text-sm'>
          旧グリニッチ福音キリスト教会・Mannaアーカイブ
        </Link>
      </Row>
      <Table className='mt-4'>
        <TableHeader>
          <TableRow>
            <TableHead className='text-center'>公開日</TableHead>
            <TableHead className='text-center'>タイトル</TableHead>
            <TableHead className='text-center'>章節</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.group
            .reverse()
            .map(({ title, subtitle, date, pdf }: Manamail, index: number) => {
              if (date) {
                pivot.setDate(new Date(date).getDate())
              } else if (index !== 0) {
                pivot.setDate(pivot.getDate() - 7)
              }
              return (
                <TableRow key={Math.random()}>
                  <TableCell className='text-center text-xs'>
                    {format(pivot)}
                  </TableCell>
                  <TableCell className='text-center font-semibold'>
                    <a href={pdf.url} target='_blank' rel='noreferrer'>
                      {asTextSafe(title)}
                    </a>
                  </TableCell>
                  <TableCell className='text-center text-xs'>
                    {asTextSafe(subtitle)}
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
    </Template>
  )
}
