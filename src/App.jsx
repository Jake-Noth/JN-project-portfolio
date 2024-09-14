import { useState } from 'react'
import './css/styles.css'
import './components/NavBar'
import NavagationBar from './components/NavBar'
import Section from './components/Section'
import TeeBoxContainer from './course_elements/TeeBoxContainer'



export default function App() {
  return (
  <>
    <NavagationBar/>
    <Section id="teebox" img="public/teeboxpicture.jpg">
      
    </Section>
    
    <Section id="fairway" img="public/teeboxpicture.jpg">
     
    </Section>

    <Section id = "green" img="public/teeboxpicture.jpg">
      
    </Section>

    <Section id = "contact" img="public/teeboxpicture.jpg">
      
    </Section>
  </>
  )
}
