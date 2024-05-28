import Image from 'next/image'
import Link from 'next/link'
import '../globals.css'
import styles from './page.module.scss'
import BurgerMenu from '../BurgerMenu/page';

export default function Home() {
  return (
    <html>
      <head>
        <title>Генерация</title>
      </head>
      <body>
        <div className={styles.container}>
          <BurgerMenu />
          <div className={styles.sidebar}>
            <div className={styles.logodiv}>
              <Image
                src="/assets/logo.png"
                alt="logo"
                height={85}
                width={115}
              />
            </div>
            <div className={styles.strip}></div>
            <div className={styles.sidebarsmall}>
              <Link className={styles.link} href="/profile">
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
            <div className={styles.sidebarbig}>
              <Link className={styles.link} href="#">
                <p className={styles.p}>Генерация</p>
              </Link>
            </div>
            <div className={styles.strip}></div>
          </div>
          <div className={styles.maincontent}>
            <div className={styles.containerinfo}>
              <div className={styles.topdiv}>
                <h1 className={styles.h1}>Генерация Аудио</h1>
                <div className={styles.logoutdiv}>
                  <p>Вы вошли как vasilenko@gmail.com</p>
                  <button className={styles.logout}>Выйти</button>
                </div>
              </div>
              <div className={styles.seconddiv}>
                <div className={styles.selectdiv}>
                  <select className={styles.select} id="dropdown">
                    <option value="placeholder" disabled selected>
                      Фоновое звучание
                    </option>
                    <option value="red">Звук 1</option>
                    <option value="blue">Звук 2</option>
                    <option value="green">Нет</option>
                  </select>

                  <select className={styles.select} id="dropdown">
                    <option value="placeholder" disabled selected>
                      Голос
                    </option>
                    <option className={styles.selectopen} value="red">Максим</option>
                    <option value="blue">Алена</option>
                    <option value="green">Дмитрий</option>
                    <option value="green">Алиса</option>
                  </select>
                </div>
                <div className={styles.balance}>
                  <p>Баланс</p>
                  <div className={styles.tocen}>
                    <p>10 tocens</p>
                  </div>
                  <p>Генераций: 0</p>
                  <Link className={styles.balancebutton} href="#">
                    Пополнить
                  </Link>
                </div>
              </div>
              <div className={styles.gendiv}>
              <textarea
                className={styles.input}
                placeholder="Введите текст c разметкой"
              />
              <button className={styles.genbutton}>Генерировать</button>
              
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}






