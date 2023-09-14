'use client'

import Image from 'next/image'
import classNames from 'classnames'
import { useState } from 'react'
import { useKeyPress } from '@/hooks/useKeyPress'
import styles from './styles.module.scss'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggleMenu() {
    setIsOpen((state) => !state)
  }

  useKeyPress('Escape', () => {
    setIsOpen(false)
  })

  return (
    <nav className={styles.navbar}>
      <Image src="/images/logo.svg" alt="sunnyside" height={24} width={124} />

      <button type="button" onClick={handleToggleMenu} aria-label="Abrir Menu">
        <Image src="/images/icon-hamburger.svg" alt="" height={18} width={24} />
      </button>

      <ul
        className={classNames(styles.navbarMenu, { [styles.active]: isOpen })}
      >
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
