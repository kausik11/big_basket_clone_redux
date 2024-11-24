import React from 'react'
import NavbarComp from './Components/NavbarComp'
import './App.css'
import RoutersComp from './Routers/RoutersComp'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='container App'>
      <RoutersComp/>
      <Footer/>
    </div>
  )
}

export default App
