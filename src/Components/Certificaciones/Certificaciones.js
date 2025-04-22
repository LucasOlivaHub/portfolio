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
          <a href="https://www.educacionit.com/perfil/lucas-hernan-oliva-825541/certificado/64893" target="_blank" rel="noreferrer noopener">React JS Developer - EducacionIT (2023) <img src={educacionit} alt="EducacionIT_icon" fetchpriority="high"/> </a>
          <a href="https://www.linkedin.com/in/lucas-oliva-38858320b/details/education/1635523276985/single-media-viewer/?profileId=ACoAADVMylgBK21smmLIvV1OCTDN65Rw_kiG_w4" 
          target="_blank" rel="noreferrer noopener">JavaScript Developer - EducacionIT (2023) <img src={educacionit} alt="EducacionIT_icon" fetchpriority="high"/> </a>
          <a href="https://www.linkedin.com/in/lucas-oliva-38858320b" target="_blank" rel="noreferrer noopener">Web Designer - EducacionIT (2022) <img src={educacionit} alt="EducacionIT_icon" fetchpriority="high"/> </a>
          <a href="https://www.efset.org/cert/MScRBy" target="_blank" rel="noreferrer noopener">{language === "ES" ? "Inglés" : "English"} C1 Advanced - EF SET Test <img src={efset} alt="EFSET_icon" fetchpriority="high"/> </a>
        </div>
    </section>
  )
}
