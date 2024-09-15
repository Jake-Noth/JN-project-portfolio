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
      <TeeBoxContainer/>
    </Section>
    
    <Section id="fairway" img="public/spritesheets/driverSpriteSheet-1.png.png">
      <TeeBoxContainer/>
    </Section>

    <Section id = "green" img="public/teeboxpicture.jpg">
      <TeeBoxContainer/>
    </Section>

    <Section id = "contact" img="public/spritesheets/driverSpriteSheet-1.png.png">
      <TeeBoxContainer/>
    </Section>
  </>
  )
}
