import Image from 'next/image'
import meet from '/public/meet.jpg'
import { AspectRatio } from '#components/ui/aspect-ratio'

export default function Home() {
  const ratio = 16 / 9
  return (
    <main>
      <AspectRatio ratio={ratio}>
        <Image src={meet} alt={meet.src} fill className='object-cover' />
      </AspectRatio>
      <section className='mt-4'>
        <h1>ニューヨークめぐみ教会</h1>
        <h4>Japanese Grace Church of NY</h4>
      </section>
    </main>
  )
}
