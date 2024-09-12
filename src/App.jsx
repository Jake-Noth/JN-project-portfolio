import { useState } from 'react'
import './css/styles.css'
import './components/NavBar'
import NavagationBar from './components/NavBar'
import TeeBox from './sections/TeeBox'
import Green from './sections/Green'
import Fairway from './sections/Fairway'


export default function App() {
  return (
  <>
    <NavagationBar/>
    <Fairway/>
  </>
  )
}
