import type { Route } from 'next'
import Link from 'next/link'

interface NavItem {
  label: string
  href: Route
}

const items: NavItem[] = [
  {
    label: 'ホーム',
    href: '/'
  },
  {
    label: '記事',
    href: '/article'
  },
  {
    label: 'ニュース',
    href: '/news'
  },
  {
    label: 'マナメール',
    href: '/manamail'
  }
]

export function Nav() {
  return (
    <nav className='py-12 flex gap-6'>
      {items.map(({ href, label }) => (
        <Link className='hover:text-gray-500 font-bold' href={href} key={href}>
          {label}
        </Link>
      ))}
    </nav>
  )
}
