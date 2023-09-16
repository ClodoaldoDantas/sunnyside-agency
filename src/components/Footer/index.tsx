import Image from 'next/image'
import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src="/images/logo-footer.svg"
        alt="sunnyside"
        width={170}
        height={33}
      />

      <nav className={styles.navigation}>
        <ul className={styles.menu}>
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Services</a>
          </li>

          <li>
            <a href="#">Projects</a>
          </li>
        </ul>

        <ul className={styles.socialLinks}>
          <li>
            <a href="#" aria-label="Navigate to facebook">
              <Image
                src="/images/icon-facebook.svg"
                alt=""
                height={20}
                width={20}
              />
            </a>
          </li>

          <li>
            <a href="#" aria-label="Navigate to instagram">
              <Image
                src="/images/icon-instagram.svg"
                alt=""
                height={20}
                width={20}
              />
            </a>
          </li>

          <li>
            <a href="#" aria-label="Navigate to twitter">
              <Image
                src="/images/icon-twitter.svg"
                alt=""
                height={20}
                width={20}
              />
            </a>
          </li>

          <li>
            <a href="#" aria-label="Navigate to pinterest">
              <Image
                src="/images/icon-pinterest.svg"
                alt=""
                height={20}
                width={20}
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
