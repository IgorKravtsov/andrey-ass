import React from 'react'
import "./style.scss"
const Login = () => {
  return (
    <>
      <h1>LOGIN</h1>
      <form className="login">
        <input type="text" className="loginName" placeholder="Enter your name" />
        <input type="password" className="passwdName" placeholder="Enter your password" />
      </form>
    </>
  )
}

export default Login
