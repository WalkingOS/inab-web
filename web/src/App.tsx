import React from 'react'
import './App.css'
import { Navbardesktop, Navbarmobile } from 'components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import AllGlobalStyles from "./utils/styles"


const App = () => {
  return (
    <>
      <AllGlobalStyles/>
      <Router>
        <Navbardesktop/>
        <Navbarmobile/>
      </Router>
    </>
  )
}

export default App

