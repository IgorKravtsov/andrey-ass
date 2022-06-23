import {useState} from 'react'

import './App.scss'
import Login from '../../pages/Login/Login'
import Register from '../../pages/Register/Register'
import Home from '../../pages/Home/Home'
import PeoplePage from '../../pages/People-page/PeoplePage'
import PersonInfo from '../../pages/PersonInfo/PersonInfo'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'

function App() {
  const [currPage, setCurrPage] = useState('login')

  return (
   <Router>
    <Header/>
    <main className='App'>   
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/people-page" element={<PeoplePage/>}/>
        <Route path="/people-page/person" element={<PersonInfo/>}/>
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
