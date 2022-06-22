import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'

import { SwapiApi } from '../../api/swapi/swapi-api'

function PeoplePage() {
  const [appState, setAppState] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const getPeople = async () => {
    setIsLoading(true)
    const data = await SwapiApi.getPeople()
    setIsLoading(false)
    setAppState(data.results)
  }

  useEffect(() => {
    getPeople()
  }, [])

  useEffect(() => {
    console.log(appState)
  }, [appState])

  const appComp = appState.map((item) => {
    return (
      <ul className={styles.ul1}>
        <img
          className={styles.img}
          src="data:image/png;base64,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"
          alt=""
        />
        <div className={styles.jopa}>
          <li className={styles.name}>Name:{item.name}</li>
          <li className={styles.height}>Height:{item.height}</li>
          <li className={styles.mass}>Mass:{item.mass}</li>
          <li className={styles.films}>Films:{item.films}</li>
        </div>
      </ul>
    )
  })

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      {appComp}
      <Link className={styles.toHome} to={'/'}>
        Home
      </Link>
    </>
  )
}

export default PeoplePage
