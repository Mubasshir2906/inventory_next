import Image from 'next/image'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ['400', '700' , '900'],
  subsets: ['devanagari'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className={poppins.className}>
      <h1>Hello</h1>
    </div>
  )
}
