'use client'
import Image from 'next/image'
import Link from 'next/link'
import BurgerMenu from '../BurgerMenu/page'
import '../globals.css'
import styles from './page.module.scss'
import { useGetUserQuery } from '@/src/hooks/useGetUserQuery'

const Line: React.FC = () => {
  const { data, isError, isLoading } = useGetUserQuery()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading userdata</div>
  // const { data, isLoading, isError } = useGetProductQuery();
  //   console.log(data)

  //   // Если данные загружаются, отобразите сообщение о загрузке
  //   if (isLoading) {
  //       return <div>Loading...</div>;
  //   }

  //   // Если произошла ошибка при загрузке данных, отобразите сообщение об ошибке
  //   if (isError) {
  //       return <div>Error fetching </div>;
  //   }


    

  return (
    <html>
      <head>
        <title>Лента</title>
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
            <div className={styles.sidebarbig}>
              <Link className={styles.link} href="#">
                <p className={styles.p}>Лента</p>
              </Link>
            </div>
            <div className={styles.strip}></div>
            <div className={styles.sidebarsmall}>
              <Link className={styles.link} href="generation">
                <p className={styles.p}>Генерация</p>
              </Link>
            </div>
            <div className={styles.strip}></div>
          </div>
          <div className={styles.maincontent}>
            <div className={styles.containerinfo}>
              <div className={styles.topdiv}>
                <h1 className={styles.h1}>Лента</h1>
                <div className={styles.logoutdiv}>
                  <p>Вы вошли как {data.email}</p>
                  <button className={styles.logout}>Выйти</button>
                </div>
              </div>
              <div className={styles.seconddiv}>
                <input
                  type="search"
                  name="search"
                  placeholder="Поиск"
                  className={styles.search}
                />
                <div className={styles.balance}>
                  <p>Баланс</p>
                  <div className={styles.tocen}>
                    <p>{data.tokens} tokens</p>
                  </div>
                  <p>Генераций: {(data.tokens/10)|0}</p>
                  <Link className={styles.balancebutton} href="#">
                    Пополнить
                  </Link>
                </div>
              </div>
              
              <div className={styles.productcard}>
                <div className={styles.cardcontainer}>
                  <div className={styles.topdivpc}>
                    <div className={styles.aboutuser}>
                      <Image
                      
                        src="/assets/victor.png"
                        alt="victor"
                        height={75}
                        width={75}
                      />
                      <div className={styles.topdiv1pc}>
                        <h1 className={styles.username}>Владимир Иванов</h1>
                        <h2 className={styles.date}>28.05.2024 12:00</h2>
                      </div>
                    </div>
                    <h1 className={styles.productname}>Мишка в лесу</h1>
                  </div>
                  <div className={styles.audiodiv}>
                    <audio controls className={styles.audio}>
                      <source src="/assets/audio.mp3" type="audio/mpeg" />
                    </audio>
                  </div>
                  <h3 className={styles.description}>
                    Короткие истории о лесных зверятах для самых маленьких. В
                    этой книге ребята познакомятся с главными героями — мишкой
                    Мишей и его друзьями — и узнают их характеры. А еще дети
                    научатся дружить, поймут, что такое храбрость и доброта и
                    почему нехорошо жадничать. После каждой истории есть
                    небольшое стихотворение, которое можно выучить. В конце
                    книги бабушка Сова рассказывает всем сказку, а мишка Миша
                    придумывает доброе стихотворение, под которое так приятно
                    засыпать
                  </h3>
                </div>
              </div>


              <div className={styles.productcard}>
                <div className={styles.cardcontainer}>
                  <div className={styles.topdivpc}>
                    <div className={styles.aboutuser}>
                      <Image
                      
                        src="/assets/victor.png"
                        alt="victor"
                        height={75}
                        width={75}
                      />
                      <div className={styles.topdiv1pc}>
                        <h1 className={styles.username}>Владимир Иванов</h1>
                        <h2 className={styles.date}>28.05.2024 12:00</h2>
                      </div>
                    </div>
                    <h1 className={styles.productname}>Мишка в лесу</h1>
                  </div>
                  <div className={styles.audiodiv}>
                    <audio controls className={styles.audio}>
                      <source src="/assets/audio.mp3" type="audio/mpeg" />
                    </audio>
                  </div>
                  <h3 className={styles.description}>
                    Короткие истории о лесных зверятах для самых маленьких. В
                    этой книге ребята познакомятся с главными героями — мишкой
                    Мишей и его друзьями — и узнают их характеры. А еще дети
                    научатся дружить, поймут, что такое храбрость и доброта и
                    почему нехорошо жадничать. После каждой истории есть
                    небольшое стихотворение, которое можно выучить. В конце
                    книги бабушка Сова рассказывает всем сказку, а мишка Миша
                    придумывает доброе стихотворение, под которое так приятно
                    засыпать
                  </h3>
                </div>
              </div>
              <div className={styles.productcard}>
                <div className={styles.cardcontainer}>
                  <div className={styles.topdivpc}>
                    <div className={styles.aboutuser}>
                      <Image
                      
                        src="/assets/victor.png"
                        alt="victor"
                        height={75}
                        width={75}
                      />
                      <div className={styles.topdiv1pc}>
                        <h1 className={styles.username}>Владимир Иванов</h1>
                        <h2 className={styles.date}>28.05.2024 12:00</h2>
                      </div>
                    </div>
                    <h1 className={styles.productname}>Мишка в лесу</h1>
                  </div>
                  <div className={styles.audiodiv}>
                    <audio controls className={styles.audio}>
                      <source src="/assets/audio.mp3" type="audio/mpeg" />
                    </audio>
                  </div>
                  <h3 className={styles.description}>
                    Короткие истории о лесных зверятах для самых маленьких. В
                    этой книге ребята познакомятся с главными героями — мишкой
                    Мишей и его друзьями — и узнают их характеры. А еще дети
                    научатся дружить, поймут, что такое храбрость и доброта и
                    почему нехорошо жадничать. После каждой истории есть
                    небольшое стихотворение, которое можно выучить. В конце
                    книги бабушка Сова рассказывает всем сказку, а мишка Миша
                    придумывает доброе стихотворение, под которое так приятно
                    засыпать
                  </h3>
                </div>
              </div>
              <div className={styles.productcard}>
                <div className={styles.cardcontainer}>
                  <div className={styles.topdivpc}>
                    <div className={styles.aboutuser}>
                      <Image
                      
                        src="/assets/victor.png"
                        alt="victor"
                        height={75}
                        width={75}
                      />
                      <div className={styles.topdiv1pc}>
                        <h1 className={styles.username}>Владимир Иванов</h1>
                        <h2 className={styles.date}>28.05.2024 12:00</h2>
                      </div>
                    </div>
                    <h1 className={styles.productname}>Мишка в лесу</h1>
                  </div>
                  <div className={styles.audiodiv}>
                    <audio controls className={styles.audio}>
                      <source src="/assets/audio.mp3" type="audio/mpeg" />
                    </audio>
                  </div>
                  <h3 className={styles.description}>
                    Короткие истории о лесных зверятах для самых маленьких. В
                    этой книге ребята познакомятся с главными героями — мишкой
                    Мишей и его друзьями — и узнают их характеры. А еще дети
                    научатся дружить, поймут, что такое храбрость и доброта и
                    почему нехорошо жадничать. После каждой истории есть
                    небольшое стихотворение, которое можно выучить. В конце
                    книги бабушка Сова рассказывает всем сказку, а мишка Миша
                    придумывает доброе стихотворение, под которое так приятно
                    засыпать
                  </h3>
                </div>
              </div>
              <div className={styles.productcard}>
                <div className={styles.cardcontainer}>
                  <div className={styles.topdivpc}>
                    <div className={styles.aboutuser}>
                      <Image
                      
                        src="/assets/victor.png"
                        alt="victor"
                        height={75}
                        width={75}
                      />
                      <div className={styles.topdiv1pc}>
                        <h1 className={styles.username}>Владимир Иванов</h1>
                        <h2 className={styles.date}>28.05.2024 12:00</h2>
                      </div>
                    </div>
                    <h1 className={styles.productname}>Мишка в лесу</h1>
                  </div>
                  <div className={styles.audiodiv}>
                    <audio controls className={styles.audio}>
                      <source src="/assets/audio.mp3" type="audio/mpeg" />
                    </audio>
                  </div>
                  <h3 className={styles.description}>
                    Короткие истории о лесных зверятах для самых маленьких. В
                    этой книге ребята познакомятся с главными героями — мишкой
                    Мишей и его друзьями — и узнают их характеры. А еще дети
                    научатся дружить, поймут, что такое храбрость и доброта и
                    почему нехорошо жадничать. После каждой истории есть
                    небольшое стихотворение, которое можно выучить. В конце
                    книги бабушка Сова рассказывает всем сказку, а мишка Миша
                    придумывает доброе стихотворение, под которое так приятно
                    засыпать
                  </h3>
                </div>
              </div>

              {/* <div>
                {data?.map((productItem) => (
                  <div key={productItem.id}>
                      <p>
                          {productItem.name}
                      </p>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
export default Line