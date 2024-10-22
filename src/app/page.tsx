import { asLink, asText } from '@prismicio/client'
import { MailIcon, MoveUpRightIcon } from 'lucide-react'
import Template from '#components/template'
import { SinglePrismicType } from '#constants/PrismicType'
import { asTextLines, getSingleByType } from '#lib/prismic'

export default async function Home() {
  const { data } = await getSingleByType(SinglePrismicType.HOME)
  const email = asLink(data.email)
  const links = [
    {
      title: 'Zoomで参加',
      url: asLink(data.zoom_link)
    },
    {
      title: 'Google Map',
      url: asLink(data.google_map_link)
    }
  ]
  return (
    <Template
      title={asText(data.title)}
      subtitle={asText(data.title)}
      headerSrc={data.header.url}
    >
      <section>
        <div className='whitespace-break-spaces'>
          {asTextLines(data.first_section_body)}
        </div>
        <ul className='mt-4'>
          {links.map(({ title, url }) => (
            <li key={url} className='py-1'>
              <MoveUpRightIcon className='inline mr-2 align-middle' size={14} />
              <a href={url || ''} target='_blank' rel='noreferrer'>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className='mt-8'>
        <h2>お問合せ</h2>
        <p className='mt-4'>
          下記のメールアドレスより、お気軽にご連絡ください。
        </p>
        <p className='mt-2'>
          <MailIcon className='inline mr-2 align-middle' size={14} />
          <a href={`mailto:${email}`} target='_blank' rel='noreferrer'>
            {email}
          </a>
        </p>
      </section>
    </Template>
  )
}
