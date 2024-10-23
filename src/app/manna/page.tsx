import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { MoveUpRightIcon } from 'lucide-react'
import Link from 'next/link'
import data from '~/public/manna/data.json'
import { Row } from '#components/row'
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
      <Row>
        <MoveUpRightIcon size={14} />
        <Link href='/manamail' className='text-sm'>
          現ニューヨークめぐみ教会・マナメール
        </Link>
      </Row>
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
                topics: '---'
              }
              return (
                <TableRow key={number}>
                  <TableCell className='text-center text-xs'>
                    {number}
                  </TableCell>
                  <TableCell className='text-center text-xs'>{date}</TableCell>
                  <TableCell className='text-center font-semibold'>
                    <a
                      target='_blank'
                      href={`/manna/manna${number.toString().padStart(3, '0')}.pdf`}
                      rel='noreferrer'
                    >
                      {title}
                    </a>
                  </TableCell>
                  <TableCell className='text-center text-xs'>
                    {topics}
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
    </Template>
  )
}
