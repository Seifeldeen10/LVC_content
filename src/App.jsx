import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import InvestmentStrategy from './pages/InvestmentStrategy'
import Portfolio from './pages/Portfolio'
import Networks from './pages/Networks'
import News from './pages/News'
import Resources from './pages/Resources'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/investment-strategy' element={<InvestmentStrategy />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/networks/*' element={<Networks />} />
        <Route path='/news' element={<News />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App