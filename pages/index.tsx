import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useUser } from '../context/user'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      Здесь будет лэндинг
    </div>
  )
}

export default Home
