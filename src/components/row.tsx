import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Row({ children }: Props) {
  return (
    <div className='inline-flex items-center justify-center gap-2 my-2'>
      {children}
    </div>
  )
}
