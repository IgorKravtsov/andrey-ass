import React,{ useEffect, useState } from 'react'
import { SwapiApi } from '../../api/swapi/swapi-api';
import styles from './style.module.scss'




function PeopleInfo(){

    const [userId,setUserId]=useState(Math.floor(Math.random() * (82 - 1) + 1));
    const [isLoading, setIsLoading] = useState(false)
    const [personInfo, setPersonInfo] = useState({})
    const getPerson = async () =>{
        setIsLoading(true);
        const data = await SwapiApi.getPerson(userId);
        setIsLoading(false);
        setPersonInfo(data);
    }

    useEffect(() =>{
        getPerson()
    }, [])

    console.log(userId);
    return (
        <>
        <img className={styles.personimg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/IMG_logo_%282017%29.svg/1200px-IMG_logo_%282017%29.svg.png" alt="" />
        <div className={styles.personinfo}>Name:{personInfo.name} Height:{personInfo.height} Gender:{personInfo.gender}</div>
        <div className={styles.otherinfo}>Eye Color:{personInfo.eye_color} Birth Year:{personInfo.birth_year} </div>
        </>
    )
}

export default React.memo(PeopleInfo) 