'use client'
import { RegisterUser } from '@/src/services/fetch'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import '../globals.css'
import styles from './page.module.scss'

export default function Home() {
  const [formData, setFormData] = useState({
    id: 0,
    email: '',
    password: '',
    username:'',
    name: '',
    tokens: 0,
    createdAt: '',
    roleid: 0,
  })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

  const handleLoginClick = async () => {
    try {
      await RegisterUser(formData)
      console.log(formData)
      console.log('Пользователь успешно авторизован!')
    } catch (error) {
      console.log(formData)
      console.error('Ошибка во время авторизовации пользователя:', error)
    }
  }
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
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <p className={styles.inputtxt}>Имя Фамилия</p>
          <input
            className={styles.input}
            type="text"
            placeholder="Введите имя и Фамилию"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <p className={styles.inputtxt}>Имя пользователя</p>
          <input
            className={styles.input}
            type="text"
            placeholder="Введите username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <p className={styles.inputtxt}>Пароль</p>
          <input
            className={styles.input}
            type="password"
            placeholder="Пароль"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <p className={styles.inputtxt}>Повторите пароль</p>
          <input
            className={styles.input}
            type="password"
            placeholder="Пароль"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        
          <button className={styles.button} onClick={handleLoginClick}>
            <Link className={styles.lr} href={'/registr'? '/profile' : '/registr'}>
              Зарегистрироваться
            </Link>
          </button>
        
      </div>
    </html>
  )
}
