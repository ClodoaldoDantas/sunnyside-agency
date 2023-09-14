import Image from 'next/image'
import styles from './styles.module.scss'

export function Hero() {
  return (
    <div className={styles.hero}>
      <h1>We are creatives</h1>

      <button aria-label="Ir para próxima seção">
        <Image
          src="/images/icon-arrow-down.svg"
          alt=""
          height={107}
          width={30}
        />
      </button>
    </div>
  )
}
