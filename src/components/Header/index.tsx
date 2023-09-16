import { Hero } from './Hero'
import dynamic from 'next/dynamic'
import styles from './styles.module.scss'

const Navbar = dynamic(() => import('./Navbar'), {
  ssr: false,
})

export function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
      <Hero />
    </header>
  )
}
