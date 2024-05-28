import Image from 'next/image'
import Link from 'next/link'
import '../globals.css'
import styles from './page.module.scss'
import BurgerMenu from '../BurgerMenu/page'

export default function Home() {
  return (
    <html>
      <head>
        <title>Профиль</title>
      </head>
      <body>
        <div className={styles.container}>
        <BurgerMenu />
          <div className={styles.sidebar}>
            <div className={styles.burger}>
              <span></span>
            </div>
            <div className={styles.logodiv}>
              <Image
                src="/assets/logo.png"
                alt="logo"
                height={85}
                width={115}
              />
            </div>
            <div className={styles.strip}></div>
            <div className={styles.sidebarbig}>
              <Link className={styles.link} href="#">
                <p className={styles.p}>Профиль</p>
              </Link>
            </div>
            <div className={styles.strip}></div>
            <div className={styles.sidebarsmall}>
              <Link className={styles.link} href="/line">
                <p className={styles.p}>Лента</p>
              </Link>
            </div>
            <div className={styles.strip}></div>
            <div className={styles.sidebarsmall}>
              <Link className={styles.link} href="/generation">
                <p className={styles.p}>Генерация</p>
              </Link>
            </div>
            <div className={styles.strip}></div>
          </div>
          <div className={styles.maincontent}>
            <div className={styles.containerinfo}>
              <div className={styles.topdiv}>
                <h1 className={styles.h1}>Профиль</h1>
                <div className={styles.logoutdiv}>
                  <p>Вы вошли как vasilenko@gmail.com</p>
                  <button className={styles.logout}>Выйти</button>
                </div>
              </div>
              <div className={styles.profileinfo}>
                <Image
                  src="/assets/victor.png"
                  alt="photoprofile"
                  height={400}
                  width={400}
                  className={styles.photoprofile}
                />
                <div className={styles.nofotodiv}>
                  <div className={styles.profiletext}>
                    <h1 className={styles.name}>Владимир Иванов</h1>
                    <h2 className={styles.username}>ivanov_12_05</h2>
                    <div className={styles.userinfodiv}>
                      <p>E-mail:</p>
                      <p>ivanov_vladimir@gmailmcom</p>
                    </div>
                    <div className={styles.userinfodiv}>
                      <p>Генераций:</p>
                      <p>0</p>
                    </div>
                    <div className={styles.userinfodiv}>
                      <p>Баланс:</p>
                      <p>10tocens</p>
                    </div>
                  </div>
                  <div className={styles.password}>
                    <button className={styles.passwordbutton}>
                      Сменить пароль
                    </button>
                  </div>
                </div>
              </div>
              <h1 className={styles.h1}>Ваши аудио</h1>
              <p className={styles.audioname}>Мишка в лесу</p>
              <audio controls className={styles.audio}>
                <source src="/assets/audio.mp3" type="audio/mpeg" />
              </audio>
              <p className={styles.audioname}>Евгений Онегин</p>
              <audio controls className={styles.audio}>
                <source src="/assets/audio.mp3" type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
