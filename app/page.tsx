import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { Test } from './test'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Test.Component />
    </main>
  )
}
