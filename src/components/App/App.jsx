import {useState} from 'react'

import './App.scss'
import Login from '../../pages/Login/Login'
import Register from '../../pages/Register/Register'
import Home from '../../pages/Home/Home'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [currPage, setCurrPage] = useState('login')

  return (
   <Router>   
    <main className='App'>   
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
 {/* <div className='App'>
 <div style={{ display: 'flex' }}>
   <button onClick={() => setCurrPage('login')}>Login</button>
   <button onClick={() => setCurrPage('register')}>Register</button>
 </div>
 {currPage === 'login' && <Login />}
 {currPage === 'register' && <Register />}
</div> */}
    </main>
    </Router>

 
  )
}

export default App
