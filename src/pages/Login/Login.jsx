import React, {useState} from 'react'
import { Link } from "react-router-dom"
import "./style.scss"
const Login = () => {
  const [name, setName] = useState("");
  const [passwdLogin, setpasswdLogin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, passwdLogin);
    console.log({
      name,
      passwdLogin
    });
  };

  const handleOnChange = (e, setFunc) => {
    setFunc(e.target.value);
  };
  return (
    <>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}  className="login">
        <input value={name}
        onChange={(e) => handleOnChange(e,setName)} required type="text" className="loginName" placeholder="Enter your name" />
        <input value={passwdLogin}
        onChange={(e) => handleOnChange(e,setpasswdLogin)} required type="password" className="passwdLogin" placeholder="Enter your password" />
        <button type="submit" className="submBttn">Submit</button>
      </form>
      <Link className='toReg' to={'/register'}>Registration</Link>
    </>
  )
}

export default Login
