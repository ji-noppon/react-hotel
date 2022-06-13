import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import User from './pages/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
