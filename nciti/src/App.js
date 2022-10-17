import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Layout/Home/Index'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App