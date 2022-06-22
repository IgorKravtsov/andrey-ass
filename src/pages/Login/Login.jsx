import React, {useState} from 'react'
import { Link } from "react-router-dom"
import "./style.scss"
const Login = () => {
  const [name, setName] = useState("");
  const [passwdLogin, setpasswdLogin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkUser = localStorage.getItem('user');
    const checkObj = JSON.parse(checkUser);
    if (checkObj.name === name && checkObj.passwd === passwdLogin) {
      alert("Логин верный");
    } 
    else {
      alert("Логин или пароль неверный");
    }
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
      <div className='div2'><h1>LOGIN</h1>
      <form onSubmit={handleSubmit}  className="login">
        <input value={name}
        onChange={(e) => handleOnChange(e,setName)} required type="text" className="loginName" placeholder="Enter your name" />
        <input value={passwdLogin}
        onChange={(e) => handleOnChange(e,setpasswdLogin)} required type="password" className="passwdLogin" placeholder="Enter your password" />
        <button type="submit" className="submBttn">Submit</button>
      </form>
      <Link className='toReg' to={'/register'}>Registration</Link>
      <Link className='toHome' to={"/"}>Home</Link>
      </div>
    </>
  )
}

export default Login
