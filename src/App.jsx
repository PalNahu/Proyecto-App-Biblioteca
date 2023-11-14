import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Register } from './pages/register/register'
import { Login } from './pages/login/login'
import { Principal } from './pages/principal/principal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Principal/>
    </>
  )
}

export default App
