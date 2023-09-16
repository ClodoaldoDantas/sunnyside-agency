'use client'

import Image from 'next/image'
import styles from './styles.module.scss'

interface ScrollDownButtonProps {
  elementId: string
}

export function ScrollDownButton({ elementId }: ScrollDownButtonProps) {
  function handleScrollNextSection() {
    const element = document.getElementById(elementId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button
      className={styles.trigger}
      onClick={handleScrollNextSection}
      aria-label="Ir para próxima seção"
    >
      <Image src="/images/icon-arrow-down.svg" alt="" height={107} width={30} />
    </button>
  )
}
