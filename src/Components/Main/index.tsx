'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePromosQuery } from '../../../src/hooks/usePromosQuery'
import styles from './Main.module.scss'

const Main: React.FC = () => {
  const { data: promos, isError, isLoading } = usePromosQuery()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading promotions</div>

  return (
    <div className={styles.secondslide}>
      <div className={styles.container}>
        <div className={styles.klubok}>
          {
            <Image
              src="/assets/klubok 1.png"
              alt="klubok 1"
              width={460}
              height={274}
            />
          }
        </div>
        <div className={styles.container1}>
          <div className={styles.rectangle1}>
            <div className={styles.numandtxt}>
              <h1 className={styles.num}>01</h1>
              <h2 className={styles.h2}>Введи текст</h2>
            </div>
            <h3 className={styles.h3}>
              Здесь можно ввести свой текст или вставить любимую книгу
            </h3>
          </div>

          <div className={styles.rectangle2}>
            <div className={styles.numandtxt}>
              <h1 className={styles.num}>02</h1>
              <h2 className={styles.h2}>Добавь разметку</h2>
            </div>
            <h3 className={styles.h3}>
              Разметка позволяет добавить в аудиодорожку различные звуковые
              эффекты
            </h3>
          </div>

          <div className={styles.rectangle1}>
            <div className={styles.numandtxt}>
              <h1 className={styles.num}>03</h1>
              <h2 className={styles.h2}>Запусти генерацию</h2>
            </div>
            <h3 className={styles.h3}>
              Как только наступит твоя очередь генерация аудиофайла запустится
              автоматически, нужно лишь немного подождать
            </h3>
          </div>

          <div className={styles.rectangle2}>
            <div className={styles.numandtxt}>
              <h1 className={styles.num}>04</h1>
              <h2 className={styles.h2}>Готово !</h2>
            </div>
            <h3 className={styles.h3}>
              Появится только что созданный файл, который можно скачать и
              наслаждаться прослушиванием
            </h3>
          </div>
        </div>
        <div className={styles.mouse}>
          {
            <Image
              src="/assets/mouse 1.png"
              alt="mouse 1"
              width={400}
              height={400}
            />
          }
        </div>
        <h1 className={styles.videotxt}>Посмотри видео как это работает</h1>
        <Image
          src="/assets/play.png"
          alt="mouse 1"
          width={1520}
          height={855}
          className={styles.playimg}
        />

        <div className={styles.container3}>
          {promos &&
            promos.map((promo: PromoItem) => (
              <div key={promo.id} className={styles.promo1}>
                <div className={styles.containerpromo}>
                  <div>
                    <h1 className={styles.promoh1}>{promo.title}</h1>
                    <h2 className={styles.promoh2}>{promo.text}</h2>
                  </div>
                  <Link className={styles.link} href="/registr">
                    <button className={styles.promobutton}>Попробовать</button>
                  </Link>
                </div>
              </div>
            ))}
          {/* <div className={styles.promo2}>
            <div className={styles.containerpromo}>
              <h1 className={styles.promoh1}>
                -10% при оплате более <br />5 шт
              </h1>
              <h2 className={styles.promoh2}>
                Плати за наш сервис выгодно
                <br /> Создавай несколько дорожек и
                <br /> получай дополнительные выгоды
                <br /> уже сегодня
              </h2>
              <Link className={styles.link} href="/registr">
                <button className={styles.promobutton}>Попробовать</button>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
      <Image
        className={styles.puziri2}
        src="/assets/pyziri2.png"
        alt="pyzizi2"
        width={210}
        height={556}
      />
      <Image
        className={styles.puziri3}
        src="/assets/pyziri3.png"
        alt="pyzizi3"
        width={183}
        height={223}
      />
      <div>
        <Image
          className={styles.bottomimg}
          src="/assets/bottom.png"
          alt="bottom"
          width={1920}
          height={452}
        />
      </div>
    </div>
  )
}
export default Main
