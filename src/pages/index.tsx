import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import getData from '../api/getData'
import Titles from '@/components/titles'

export default function Home() {
  const [titles, setTitles] = useState([])

  useEffect(() => {
    const awaitData = async () => {
      setTitles(await getData())
    }

    awaitData()
  }, [])

  const {Home, header, h1, main, h3, titlesWrapper} = styles
  return (
    <div className={Home}>
      <header className={header}>
        <h1 className={h1}>Clube de Regatas do Flamengo</h1>
      </header>
      <main className={main}>
        <h3 className={h3}>Titulos</h3>
        <div className={titlesWrapper}>
          {titles.map((title, index) => {
            return (
              <Titles
                key={index}
                title={title}
              />
            )
          })}
        </div>
      </main>
    </div>
  )
}
