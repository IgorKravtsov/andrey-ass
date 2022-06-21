import './App.css'
import Login from '../../pages/Login/Login'
import Register from '../../pages/Register/Register'

function App() {
  const [currPage, setCurrPage] = useState('login')

  return (
    <div className='App'>
      <div style={{ display: 'flex' }}>
        <button onClick={() => setCurrPage('login')}>Login</button>
        <button onClick={() => setCurrPage('register')}>Register</button>
      </div>
      {currPage === 'login' && <Login />}
      {currPage === 'register' && <Register />}
    </div>
  )
}

export default App
