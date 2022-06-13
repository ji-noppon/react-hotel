import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Hotel from './pages/Hotel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
