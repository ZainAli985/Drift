import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
