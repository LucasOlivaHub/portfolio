import React, { useContext } from 'react'
import "transition-style"
import '../ContentLoaders/Transitions.css'
import educacionit from '../../assets/educacionit.png'
import efset from '../../assets/efset.png'
import { backgroundContext } from '../../Context/BackgroundContext'

export const Certificaciones = () => {

  const {language, textColors} = useContext(backgroundContext)

  return (
    <section id='certificaciones-container' transition-style="in:square:top-left">
        <h2 style={textColors}>{language === "ES" ? "Certificaciones" : "Certifications"}</h2>
        <div className='certificaciones-links' transition-style="in:circle:center">
          <a href='#'>React JS Developer - EducacionIT (2023)  <img src={educacionit}/> </a>
          <a href='#'>JavaScript Developer - EducacionIT (2023) <img src={educacionit}/> </a>
          <a href='#'>Web Designer - EducacionIT (2022) <img src={educacionit}/> </a>
          <a href='#'>{language === "ES" ? "Inglés" : "English"} C1 Advanced - EF SET Test <img src={efset}/> </a>
        </div>
    </section>
  )
}
