import Link from 'next/link'
import '../globals.css'
import styles from './page.module.scss'

export default function Home() {
  return (
    <html className={styles.slide}>
      <title>Регистрация</title>
      <div className={styles.container}>
        <h1 className={styles.h1}>Регистрация</h1>

        <h2 className={styles.h2}>
          После регистрации вы получите:
          <br />
          Одну генерацию - бесплатно
        </h2>

        <div className={styles.inputdiv}>
          <div className={styles.div1}>
            <div>
              <p className={styles.inputtxt}>E-mail</p>
            </div>
            <div className={styles.div2}>
              <Link className={styles.linklogin} href="/login">
                <p>уже есть аккаунт?</p>
              </Link>
            </div>
          </div>
          <input
            className={styles.input}
            type="email"
            placeholder="Введите e-mail"
          />
          <p className={styles.inputtxt}>Имя</p>
          <input
            className={styles.input}
            type="name"
            placeholder="Введите имя"
          />
          <p className={styles.inputtxt}>Имя пользователя</p>
          <input
            className={styles.input}
            type="username"
            placeholder="Введите username"
          />
          <p className={styles.inputtxt}>Пароль</p>
          <input
            className={styles.input}
            type="password"
            placeholder="Пароль"
          />
          <p className={styles.inputtxt}>Повторите пароль</p>
          <input
            className={styles.input}
            type="password"
            placeholder="Пароль"
          />
        </div>
        
          <button className={styles.button}><Link className={styles.lr} href="/login">Зарегистрироваться</Link></button>
        
      </div>
    </html>
  )
}
