import '../globals.css'
import styles from './page.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <html className={styles.slide}>
      <title>Вход</title>
      <div className={styles.container}>
        <h1 className={styles.h1}>Вход в личный кабинет</h1>
        
        <div className={styles.inputdiv}>
            <p className={styles.inputtxt}>E-mail</p>
          <input
            className={styles.input}
            type="email"
            placeholder="Введите e-mail"
          />
          
          <p className={styles.inputtxt}>Пароль</p>
          <input
            className={styles.input}
            type="password"
            placeholder="Пароль"
          />
        </div>
        <div className={styles.loginbuttondiv}>
        <Link href="/line">
        <button className={styles.button}>Вход</button>
        </Link>
        <Link className={styles.linkregistr} href="/registr">
        <p>Регистрация</p>
        </Link>
        </div>
        

      </div>
    </html>
  )
}
