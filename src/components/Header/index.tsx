import { Hero } from './Hero'
import { NavbarMobile } from './NavbarMobile'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <NavbarMobile />
      <Hero />
    </header>
  )
}
