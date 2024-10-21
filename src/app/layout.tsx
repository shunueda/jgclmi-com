import './globals.css'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Footer } from '#components/footer'
import { Nav } from '#components/nav'
import { cn } from '#lib/utils'
import type { LayoutProps } from '#types/props'

export default async function Layout({ children }: LayoutProps) {
  return (
    <html lang='ja'>
      <body
        className={cn(GeistSans.variable, GeistMono.variable, 'antialiased')}
      >
        <main className='mt-8 mx-auto max-w-xl w-10/12'>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
