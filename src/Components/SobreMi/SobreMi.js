import React, { useContext, useEffect, useState } from 'react'
import fotoPerfil from '../../assets/perfil.png'
import "transition-style"
import '../ContentLoaders/Transitions.css'
import { backgroundContext } from '../../Context/BackgroundContext'

export const SobreMi = () => {
  
  const {language, textColors, colorWhiteBlack} = useContext(backgroundContext);

  useEffect(() => {
    const card = document.querySelector("#fotoperfil");
    const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
    const THRESHOLD = 15;
    
    function handleHover(e) {
      const { clientX, clientY, currentTarget } = e;
      const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
    
      const horizontal = (clientX - offsetLeft) / clientWidth;
      const vertical = (clientY - offsetTop) / clientHeight;
      const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
      const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
    
      card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    }
    
    function resetStyles(e) {
      card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }
    
    if (!motionMatchMedia.matches) {
      card.addEventListener("mousemove", handleHover);
      card.addEventListener("mouseleave", resetStyles);
    }
  }, [])
 

  return (
    <section id="sobremi-container" transition-style="in:square:center">
      <article className='presentacion-container'>
            <div className="sobremi-texto-container">
              <h2 style={textColors}>{language === "ES" ? "Sobre mi" : "About me"}</h2>

            {language === "ES" ? <p style={textColors} className="sobremi-text text-theme" transition-style="in:wipe:right"> Mi nombre es Lucas, tengo 22 años y soy un desarrollador Front End Junior con experiencia de 1 año.</p>
                : <p style={textColors} className="sobremi-text text-theme" transition-style="in:wipe:top"> My name is Lucas, I'm a 22 years old Junior Front-End developer with 1 year of experience.</p>
            } 
              <button className='cv-btn' id="descargar-cv"> <i className="bi bi-file-earmark-text-fill"></i> Descargar CV (Español) </button>
              <button className='cv-btn' id="descargar-cv-en"> <i className="bi bi-file-earmark-text-fill"></i> Download CV (English) </button>
            </div>


            <div className="sobremi-img-container" transition-style="in:circle:center">
              <img id='fotoperfil' src={fotoPerfil} alt="lucasoliva" loading="lazy"/>
            </div>
      </article>
    </section>
  )
}
