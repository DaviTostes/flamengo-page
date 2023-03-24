import styles from '@/styles/titles.module.css'
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from 'react'

const Titles = ({title} : {title: object}) => {
  const [titlesArray, setTitlesArray] = useState(Object.values(title)[0])

  const {titles} = styles
  return (
    <div className={titles}>
      <p>{Object.keys(title)[0]}</p>
      {titlesArray.map((v: string, index: number) => {
        return <p key={index}>{v}</p>
      })}
    </div>
  )
}

export default Titles