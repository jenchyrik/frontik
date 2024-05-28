'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'

function Header() {
  return (
    <header >
      <title>Чтец</title>
      <div className={styles.firstslide}>
        <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/assets/logo.png" alt="logo" height={85} width={115} />
          <div className={styles.buttons}>
            <Link href="/login">
              <button className={styles.button}>Вход</button>
            </Link>
            <Link href="/registr">
              <button className={styles.button}>Регистрация</button>
            </Link>
          </div>
        </div>
          <div>
            <div className={styles.centerimg}>
              
                <Image
                  src="/assets/cat1.png"
                  alt="cat"
                  width={1120}
                  height={628}
                  className={styles.cat}/>
              
              <h1 className={styles.h1}>Создавай свои аудиокниги</h1>
              <h2 className={styles.h2}>
                Размечай свои тексты самостоятельно, добавляй звуковые эффекты и
                
                наслаждайся прослушиванием любимых книг. Попробуй сейчас!
              </h2>
              <Link href="/registr">
              <button className={styles.popr}>ПОПРОБОВАТЬ</button>
              </Link>
            </div>
          </div>

          <div>
            <Image
              className={styles.puziri}
              src="/assets/pyziri.png"
              alt="pyzizi"
              width={110}
              height={196}
            />
            <Image
              className={styles.puziri1}
              src="/assets/pyziri1.png"
              alt="pyzizi1"
              width={130}
              height={228}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
