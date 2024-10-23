import { CalendarIcon, PencilIcon } from 'lucide-react'
import { Row } from '#components/row'
import { Template } from '#components/template'
import { Button } from '#components/ui/button'
import { Endpoint } from '#constants/Endpoint'

export default async function Page() {
  const editorLinks = [
    {
      title: '一覧',
      path: '/documents'
    },
    {
      title: 'ホーム画面',
      path: '/builder/pages/YOWUDBMAACAAm6VI'
    },
    {
      title: 'マナメール',
      path: '/builder/pages/YPGMNxMAACEAz0_J'
    }
  ]
  return (
    <Template title='Manual' subtitle='編集者用マニュアル' className='prose'>
      編集にはパスワード・ユーザー名が必要です。管理者に問い合わせてください。
      <h3 className='mt-4'>編集用リンク集</h3>
      <ul>
        {editorLinks.map(({ path, title }) => (
          <a
            href={`${Endpoint.PRISMIC}${path}`}
            key={path}
            target='_blank'
            rel='noreferrer'
          >
            <li key={path}>{title}</li>
          </a>
        ))}
      </ul>
      <h3>新しく作成（記事・ニュース）</h3>
      <ol>
        <li>リンク集の「一覧」をクリック</li>
        <li>
          右上の緑のボタンをクリック（英語ならこのような見た目）
          <br />
          <Row>
            <Button className='bg-green-600'>
              <PencilIcon color='white' />
            </Button>
            <Button className='bg-green-600'>Create new</Button>
          </Row>
        </li>
        <li>メニューが表示されるので、記事・ニュースのいずれかを選択</li>
        <li>
          エディターが開くので、執筆する。ヘッダー画像は任意で（なくてもok）。
        </li>
        <li>
          「記事」は、「注目記事」に設定することができる。「注目記事」はホームに表示される。
        </li>
        <li>「保存して公開」する（以下を参照）。</li>
      </ol>
      <h3>マナメールの追加・ホームの編集</h3>
      <b>
        注：「マナメール」と「ホーム」は絶対にUnpublishしないこと（このボタンを押さないこと）。
      </b>
      <br />
      <Button className='mt-2 bg-purple-700'>Unpublish</Button>
      <ol>
        <li>リンク集の「マナメール」か「ホーム画面」をクリック</li>
        <li>マナメールの追加・ホーム画面の編集を行う</li>
        <li>「保存して公開」する（以下を参照）。</li>
      </ol>
      <h3>保存して公開</h3>
      <ol>
        <li>
          右上の保存ボタンをクリック（英語ならこのような見た目）
          <br />
          <Button variant='outline' className='mt-2'>
            Save
          </Button>
        </li>
        <li>
          右上の公開ボタンをクリック（英語ならこのような見た目。前述の通り、「マナメール」と「ホーム」を編集した際は、Unpublishではないことを確認）
          <br />
          <Button className='mt-2 bg-purple-700'>
            Publish
            <CalendarIcon color='white' />
          </Button>
        </li>
        <li>画面上部が緑になれば成功</li>
      </ol>
    </Template>
  )
}
