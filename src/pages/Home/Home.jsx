import React from 'react'
import { Link } from "react-router-dom"
import "./style.scss"
function Home (){
    return (
        <> 
          <Link className='toLogin' to={"/login"}>Sign in</Link>
          <Link className='toReg' to={"/register"}>Registration</Link>
          <Link className='to-people' to={"/people-page"}>People Page</Link>
        </>
    )
}
export default Home