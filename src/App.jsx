import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

export default function App() {

  return (
    <>
    <Navbar/>
     <Home/>
    </>
  )
}
