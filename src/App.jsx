import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import InvestmentStrategy from './pages/InvestmentStrategy'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/investment-strategy' element={<InvestmentStrategy />} />
      </Routes>
    </Router>
  )
}

export default App