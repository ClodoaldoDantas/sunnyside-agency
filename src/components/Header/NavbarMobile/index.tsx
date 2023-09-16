'use client'

import Image from 'next/image'
import classNames from 'classnames'

import { useState } from 'react'
import { useKeyPress } from '@/hooks/useKeyPress'
import { useOutsideClick } from '@/hooks/useOutsideClick'

import styles from './styles.module.scss'

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggleMenu() {
    setIsOpen((state) => !state)
  }

  useKeyPress('Escape', () => {
    setIsOpen(false)
  })

  const ref = useOutsideClick(() => {
    if (isOpen) {
      setIsOpen(false)
    }
  })

  return (
    <nav ref={ref} className={styles.navbar}>
      <Image src="/images/logo.svg" alt="sunnyside" height={24} width={124} />

      <button
        type="button"
        onClick={handleToggleMenu}
        aria-label={isOpen ? 'Fechar Menu' : 'Abrir Menu'}
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        <Image src="/images/icon-hamburger.svg" alt="" height={18} width={24} />
      </button>

      <ul
        id="mobile-menu"
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
