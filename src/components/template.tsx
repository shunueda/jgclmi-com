import Image from 'next/image'
import type { ReactNode } from 'react'
import { AspectRatio } from '#components/ui/aspect-ratio'

interface Props {
  src?: string
  title: string | ReactNode | null
  subtitle: string | ReactNode | null
  children: ReactNode
  className?: string
}

export function Template({ src, title, subtitle, children, className }: Props) {
  return (
    <main>
      {src && (
        <AspectRatio ratio={16 / 9} className='mb-8'>
          <Image src={src} alt='' fill className='object-cover' />
        </AspectRatio>
      )}
      <section className='mb-4'>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </section>
      <section className={className}>{children}</section>
    </main>
  )
}
