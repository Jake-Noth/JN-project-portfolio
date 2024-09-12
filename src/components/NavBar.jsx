import { useState } from 'react'
import '../css/styles.css'


export default function NavagationBar(){
    
    return (
        <nav className="navbar">
        <a href="#teebox" className="nav-item">TeeBox <span className="nav-text">{"("}Home{")"}</span></a>
        <a href="#fairway" className="nav-item">Fairway <span className="nav-text">{"("}About{")"}</span></a>
        <a href="#green" className="nav-item">Green <span className="nav-text">{"("}Projects{")"}</span></a>
        <a href="#contact" className="nav-item-contact">Podium <span className="nav-text">{"("}Contact{")"}</span></a>
      </nav>
    )


}