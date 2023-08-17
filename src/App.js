import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import TopStories from './components/TopStories'
import Login from './Pages/LoginPage'
import Signup from './Pages/SignupPage'


function App() {
  const apiKey = "G0hi9JktPaMmV6i0GVcnNZXjoA4RXkQ9";


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='News-App/' element={<Login/>}></Route>
          <Route  path='News-App/signup' element={<Signup/>}></Route>
          <Route  path='News-App/hero' element={<TopStories apiKey={apiKey} section="home" />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
