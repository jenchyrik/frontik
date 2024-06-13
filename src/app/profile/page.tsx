'use client'

import Image from 'next/image'
import Link from 'next/link'
import '../globals.css'
import styles from './page.module.scss'
import { useGetUserQuery } from '../../../src/hooks/useGetUserQuery'
import BurgerMenu from '../BurgerMenu/page'

const Profile: React.FC = () => {
  const { data, isError, isLoading } = useGetUserQuery()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading userdata</div>

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
                  <p>Вы вошли как {data.email}</p>
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
                {/* <div>
                {
              <div key={data.id} >
                  <div>
                    <h1 className={styles.promoh1}>{data.name}</h1>
                    <h2 className={styles.promoh2}>{data.email}</h2>
                  </div>
                
              </div>
            }
                </div > */}

                <div key={data.id} className={styles.nofotodiv}>
                  <div className={styles.profiletext}>
                    <h1 className={styles.name}>{data.name}</h1>
                    <h2 className={styles.username}>{data.username}</h2>
                    <div className={styles.userinfodiv}>
                      <p>E-mail:</p>
                      <p>{data.email}</p>
                    </div>
                    <div className={styles.userinfodiv}>
                      <p>Генераций:</p>
                      <p>{(data.tokens/10)|0}</p>
                    </div>
                    <div className={styles.userinfodiv}>
                      <p>Баланс:</p>
                      <p>{data.tokens}</p>
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
export default Profile