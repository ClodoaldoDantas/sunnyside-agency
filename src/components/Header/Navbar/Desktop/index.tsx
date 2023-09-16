import Image from 'next/image'
import styles from './styles.module.scss'

export function NavbarDesktop() {
  return (
    <nav className={styles.navbar}>
      <Image src="/images/logo.svg" alt="sunnyside" width={170} height={33} />

      <ul className={styles.navbarMenu}>
        <li>
          <a href="#">About</a>
        </li>

        <li>
          <a href="#">Services</a>
        </li>

        <li>
          <a href="#">Projects</a>
        </li>

        <li>
          <button>Contact</button>
        </li>
      </ul>
    </nav>
  )
}
