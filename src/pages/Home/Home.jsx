import React from 'react'
import { Link } from "react-router-dom"
function Home (){
    return (
        <> 
          <Link className='toLogin' to={"/login"}>Sign in</Link>
          <Link className='toReg' to={"/register"}>Registration</Link>
        </>
    )
}
export default Home