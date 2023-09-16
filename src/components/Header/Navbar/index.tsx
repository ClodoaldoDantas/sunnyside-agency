'use client'

import { useMediaQuery } from 'react-responsive'
import { NavbarMobile } from './Mobile'
import { NavbarDesktop } from './Desktop'

export function Navbar() {
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  return isDesktop ? <NavbarDesktop /> : <NavbarMobile />
}
