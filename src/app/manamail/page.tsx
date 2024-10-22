import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { type RichTextField, asText } from '@prismicio/client'
import Template from '#components/template'
import { SinglePrismicType } from '#constants/PrismicType'
import { formatDate, getClosestSunday } from '#lib/date'
import { getSingleByType } from '#lib/prismic'

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
  let pivot = getClosestSunday()
  return (
    <Template title='Manamail' subtitle={asText(data.about)}>
      <Table>
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
                pivot = new Date(date)
              } else if (index !== 0) {
                pivot.setDate(pivot.getDate() - 7)
              }
              return (
                <TableRow key={Math.random()}>
                  <TableCell className='text-center text-xs'>
                    {formatDate(pivot)}
                  </TableCell>
                  <TableCell className='text-center'>
                    <a href={pdf.url} target='_blank' rel='noreferrer'>
                      {asText(title)}
                    </a>
                  </TableCell>
                  <TableCell className='text-center text-xs'>
                    {asText(subtitle)}
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
    </Template>
  )
}
