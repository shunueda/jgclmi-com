import type { LayoutProps } from '#types/props'

export interface Props {
  params: Promise<{
    slug: string
  }>
}

export default function Layout({ children }: LayoutProps & Props) {
  return children
}
