import { Hero } from './Hero'
import { Navbar } from './Navbar'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
      <Hero />
    </header>
  )
}
