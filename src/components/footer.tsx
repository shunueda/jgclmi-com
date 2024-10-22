import { asLink } from '@prismicio/client'
import { MoveUpRightIcon } from 'lucide-react'
import pkg from '~/package.json'
import { Separator } from '#components/ui/separator'
import { SinglePrismicType } from '#constants/PrismicType'
import { getSingleByType } from '#lib/prismic'

export async function Footer() {
  const { data } = await getSingleByType(SinglePrismicType.HOME)
  const links = [
    {
      name: '笹川雅弘宣教師を支える会',
      url: 'https://nymissionsasakawa.wixsite.com/support'
    },
    {
      name: 'Liebenzell USA',
      url: 'https://lmusa.org/give/my-sasakawa/'
    },
    {
      name: '465 Ridgeway Cir, White Plains, NY 10605',
      url: asLink(data.google_map_link)
    }
  ]
  return (
    <footer className='text-gray-500 text-xs pt-4'>
      <Separator className='my-4' />
      <ul>
        {links.map(({ name, url }) => (
          <li key={url} className='py-1'>
            <a href={url || ''} target='_blank' rel='noreferrer'>
              <MoveUpRightIcon className='inline mr-2' size={16} />
              {name}
            </a>
          </li>
        ))}
      </ul>
      <Separator className='my-4' />
      <div className='flex h-4 items-center space-x-4 text-xs mb-4'>
        <div>ニューヨークめぐみ教会</div>
        <Separator orientation='vertical' />
        <div>
          &copy; {new Date().getUTCFullYear()} {pkg.author.name}.
        </div>
      </div>
    </footer>
  )
}
