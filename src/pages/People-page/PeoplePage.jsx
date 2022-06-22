import React, { useEffect, useState }  from 'react'
import styles from  './style.module.scss'
import { Link } from 'react-router-dom'
import axios from 'axios';

function PeoplePage (){
  const [appState, setAppState] = useState("");
    useEffect(()=>{
        const apiUrl = 'https://swapi.dev/api/people/1/';
        axios.get(apiUrl).then((resp) =>{
            const allPersons = resp.data;
            setAppState(allPersons);
        });
    }, [setAppState]);
    useEffect(() =>{
        console.log(appState);
    }, [appState]);
    return(
        <>
        <Link className={styles.toHome} to={"/"}>Home</Link>
        </>
        
    )
    
}

export default PeoplePage