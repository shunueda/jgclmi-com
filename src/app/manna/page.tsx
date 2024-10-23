import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Template } from '#components/template'

export default async function Page() {
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
        <TableBody />
      </Table>
    </Template>
  )
}
