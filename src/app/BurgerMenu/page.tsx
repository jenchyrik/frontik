'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

// import Header from '../Header';
import styles from './page.module.scss'

function Burger() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => {
    setIsOpen(false)
  }
  return (
    <header className={styles.mobileHeader}>
      <button
        className={styles.burgerButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image className={styles.logoburg} src="/assets/burger 1.png" alt="burger" width={24} height={18} />
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <Image src="/assets/logo.png" alt="logo" height={85} width={115} />
        <Link className={styles.text} href="/profile">
          Профиль
        </Link>
        <Link className={styles.text} href="/line">
          Лента
        </Link>
        <Link className={styles.text} href="/generation">
          Генерация{' '}
        </Link>

        <Image
          onClick={closeMenu}
          src="/assets/close.png"
          alt="close"
          height={15}
          width={15}
        />
      </nav>
    </header>
  )
}

export default Burger
