import { ScrollDownButton } from '../ScrollDownButton'
import styles from './styles.module.scss'

export function Hero() {
  return (
    <div className={styles.hero}>
      <h1>We are creatives</h1>
      <ScrollDownButton elementId="transform-your-brand" />
    </div>
  )
}
