import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import Header from '../../components/Header/Header'
import styles from "./style.module.scss"
import { useSelector, useDispatch } from 'react-redux' 
import {PlaceHolderApi} from '../../api/placeHolderApi/placeHolderApi'
import { setTodos } from '../../redux/sliceToDo'


function Home (){
    const {value} = useSelector(state => state.counter)
    const {todosvalue} = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const getListToDos = async () =>{
        const todosFromApi = await PlaceHolderApi.getToDos();
        dispatch(setTodos(todosFromApi))
    } 

    

    useEffect(() => {
        getListToDos()
      }, [])

    return (
        <> 
        <h1>{value}</h1>
        <div className={styles.listToDo}>{
            todosvalue.map((item) => {
                return (
                    <>
                    <div>{item.userId}</div>
                    <div>{item.id}</div>
                    <div>{item.title}</div>
                    <input type="checkbox" checked={item.completed} ></input>
                    <Link to={`/todos/${item.id}`} className={styles.person}>Open more...</Link>
                    </>
                   
                )
            })
        }</div>
        </>
    )
}
export default Home