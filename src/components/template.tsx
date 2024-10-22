import Image from 'next/image'
import type { ReactNode } from 'react'
import { AspectRatio } from '#components/ui/aspect-ratio'

interface Props {
  headerSrc?: string
  title: string | null
  subtitle: string | null
  children: ReactNode
}

export default function Template({
  headerSrc,
  title,
  subtitle,
  children
}: Props) {
  return (
    <main>
      {headerSrc && (
        <AspectRatio ratio={16 / 9} className='mb-8'>
          <Image src={headerSrc} alt='' fill className='object-cover' />
        </AspectRatio>
      )}
      <section className='mb-8'>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </section>
      {children}
    </main>
  )
}
