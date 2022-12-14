import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Layout/Home/Index'
import Speakers from './Components/Layout/Speakers/Index'
import News from './Components/Layout/News/Index'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/index'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/speakers" element={ <Speakers /> } />
          <Route exact path="/news" element={ <News /> } />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App