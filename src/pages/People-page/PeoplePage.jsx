import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'
import { SwapiApi } from '../../api/swapi/swapi-api'
import {BillyImg} from './imgLink'
import { useSelector, useDispatch } from 'react-redux' 
import { increment } from '../../redux/counterSlice'


function PeoplePage() {
  const {value} = useSelector(state => state.counter)
  const dispatch = useDispatch()

  
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

  const handleClickPlus = () => {
    dispatch(increment())
  }

  if (isLoading) {
    return <h1 className={styles.loading}>Loading...</h1>
  }

  return (
    <div className={styles.container}>
      <h1>{value}</h1>
      <button onClick={handleClickPlus}>+</button>
      {appState.map((item) => {
        return (
          <ul className={styles.ul1}>
            <img
              className={styles.img}
              src={BillyImg}
              alt=""
            />
            <div className={styles.jopa}>
              <li className={styles.name}>Name:{item.name}</li>
              <li className={styles.height}>Height:{item.height}</li>
              <li className={styles.mass}>Mass:{item.mass}</li>
              <li className={styles.films}>Films:{item.films}</li>
              <Link to={'/people-page/person/'} className={styles.person}>Open more...</Link>
            </div>
          </ul>
        )
      })}
    </div>
  )
}

export default PeoplePage
