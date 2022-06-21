import React, {useState} from 'react'
import { Link } from "react-router-dom"
import "./style.scss"

  const Register = () => {
        
  
    const [state, setState] = useState({
      name: "",
      passwd: "",
      repeatPasswd: ""
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const {name, passwd} = state;
      const user = {
        name,
        passwd
      }
      localStorage.setItem ('user',  JSON.stringify(user));
      console.log(state);
    };
  
    const handleOnChange = (e) => {
      const zalupa = e.target.name;
      setState({
        ...state,
        [zalupa]: e.target.value
      });
    };
  return (
    <>
      <h1>REGISTER</h1>
      <form onSubmit={handleSubmit} className="register">
        <input name="name" value={state.name} onChange={handleOnChange} type="text" className="regName" placeholder="Enter your name" />
        <input name="passwd" value={state.passwd} onChange={handleOnChange} type="password" className="passwdReg" placeholder="Enter your password" />
        <input name="repeatPasswd" value={state.repeatPasswd} onChange={handleOnChange} type="password" className="confirmReg" placeholder="Confirm your password" />
        <button type="submit" className="submBttn">Submit</button>
      </form>
      <Link className='toLogin' to={"/login"}>Sign in</Link>
      <Link className='toHome' to={"/"}>Home</Link>
    </>
  )
}

export default Register