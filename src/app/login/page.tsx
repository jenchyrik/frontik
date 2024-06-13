'use client'
import '../globals.css'
import styles from './page.module.scss'
import Link from 'next/link'
import { useState, ChangeEvent } from 'react'
import { LoginUser } from '@/src/services/fetch'

export default function Home() {
  const [formData, setFormData] = useState({
    id: 0,
    email: '',
    password: '',
  })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

  const handleLoginClick = async () => {
    try {
      await LoginUser(formData)
      console.log(formData)
      console.log('Пользователь успешно авторизован!')
    } catch (error) {
      console.log(formData)
      console.error('Ошибка во время авторизовации пользователя:', error)
    }
  }
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
            name="email"
            placeholder="Введите e-mail"
            value={formData.email}
            onChange={handleInputChange}
          />
          
          <p className={styles.inputtxt}>Пароль</p>
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.loginbuttondiv}>
        <Link href={'/login'? '/profile' : '/login'}>
        <button className={styles.button} onClick={handleLoginClick}>Вход</button>
        </Link>
        
        <Link className={styles.linkregistr} href="/registr">
        <p>Регистрация</p>
        </Link>
        </div>
        

      </div>
    </html>
  )
}
