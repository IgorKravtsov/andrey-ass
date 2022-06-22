import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'

import { SwapiApi } from '../../api/swapi/swapi-api'

function PeoplePage() {
  const [appState, setAppState] = useState([])

  const getPeople = async () => {
    const data = await SwapiApi.getPeople()
    setAppState(data)
  }

  useEffect(() => {
    getPeople()
  }, [])

  useEffect(() => {
    console.log(appState)
  }, [appState])

  return (
    <>
      <Link className={styles.toHome} to={'/'}>
        Home
      </Link>
    </>
  )
}

export default PeoplePage
