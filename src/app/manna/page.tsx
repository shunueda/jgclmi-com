import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import data from '~/public/manna/data.json'
import { Template } from '#components/template'
import { range } from '#lib/utils'

export default async function Page() {
  const info = new Map<number, (typeof data)[number]>()
  data.forEach(it => info.set(it.number, it))
  return (
    <Template
      title='Manna'
      subtitle='旧グリニッチ福音キリスト教会・Mannaアーカイブ'
    >
      <Table className='mt-4'>
        <TableHeader>
          <TableRow>
            <TableHead className='text-center'>号</TableHead>
            <TableHead className='text-center'>公開日</TableHead>
            <TableHead className='text-center'>タイトル</TableHead>
            <TableHead className='text-center'>トピック</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {range(1, 145)
            .reverse()
            .map(number => {
              const { date, title, topics } = info.get(number) || {
                number,
                date: '不明',
                title: '不明',
                topic: '不明'
              }
              const padded = number.toString().padStart(3, '0')
              return (
                <TableRow key={number}>
                  <TableCell className='text-center'>{number}</TableCell>
                  <TableCell className='text-center'>{date}</TableCell>
                  <TableCell className='text-center'>
                    <a
                      target='_blank'
                      href={`/manna/manna${padded}.pdf`}
                      rel='noreferrer'
                    >
                      {title}
                    </a>
                  </TableCell>
                  <TableCell className='text-center'>{topics}</TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
    </Template>
  )
}
