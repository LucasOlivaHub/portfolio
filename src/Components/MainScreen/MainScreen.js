import React, { useContext, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import moonimg from '../../assets/moonimg-700x800.webp'
import sunimg from '../../assets/sunimg-700x800.webp'
import { backgroundContext } from '../../Context/BackgroundContext'
import "transition-style";

export const MainScreen = () => {

  const {themeNight, textColors, btnColors, language} = useContext(backgroundContext);
  const textoAnimacionRef = useRef();
  const textoAnimado = document.getElementById("text-write-anim");

  useEffect(() => {
    const textoAnimado = document.getElementById("text-write-anim");
    //Funcion para eliminar la clase
    const handleAnimationEnd = () => {
      // Eliminar la clase al final de la animación
      if (textoAnimado) {
        setTimeout(() => {
          textoAnimado.classList.remove('write-animation');
        }, 4000)
      }
    };

    // Agregar el event listener para 'animationend'
    if (textoAnimado) {
      textoAnimado.addEventListener('animationend', handleAnimationEnd);
    }

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      if (textoAnimado) {
        textoAnimado.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [textoAnimado]); 

  useEffect(() => {
    const textoAnimado = document.getElementById("text-write-anim");
    textoAnimado && textoAnimado.classList.add('write-animation');
    const animarTexto = setInterval(() => {
      if (textoAnimado) {
        textoAnimado.classList.add('write-animation');
      }
    }, 200);

    return () => {
      // Limpiar el intervalo cuando el componente se desmonta
      clearInterval(animarTexto);
    };
  }, [textoAnimado]);

  

  function animateAstronautAppear() {
    const astronauta = document.querySelector(".astronauta-element");
    astronauta.classList.add("astronauta-anim-appear")

    astronauta.addEventListener("animationend", () => {

      setTimeout(() => {
        astronauta.classList.add("astronauta-anim-disappear");
      }, 200)

      setTimeout( () => {
        astronauta.classList.remove("astronauta-anim-disappear");
        astronauta.classList.remove("astronauta-anim-appear");
      }, 8000)
    })
  }


  return (

    <section id='main-screen' transition-style="in:wipe:bottom-left">
      <div className='astronauta-element'></div>
          <article className='main-content-container' transition-style="in:square:center">
              <h1 onMouseEnter={animateAstronautAppear}
              style={textColors}>Lucas Oliva</h1>
              <h2 style={textColors} ref={textoAnimacionRef} id='text-write-anim'>Front-End Developer</h2>
              <br/>
              <div className='main-text-container' style={textColors}>
                {language === "ES" ? <p transition-style="in:wipe:right" style={textColors}>¡Hola! Soy Lucas, desarrollador Front-End Junior</p> : <p style={textColors} transition-style="in:wipe:top">Hey! My name is Lucas, I'm a Junior Front-End Developer</p> }
              </div>
              <div className='main-links-container'>
                <Link style={btnColors} className='main-sobremi-link' to={"/sobremi"}>{language === "ES" ? "Sobre mi" : "About me"}</Link>
                <div className='redes-container'>
                      <a href='mailto:lucasolivah@gmail.com'><i className="bi bi-envelope-at"></i></a>
                      <a href='https://www.linkedin.com/in/lucas-oliva-38858320b/' target="_blank"  rel="noreferrer noopener"><i className="bi bi-linkedin"></i></a>
                      <a href="https://github.com/LucasOlivaHub" target="_blank" rel="noreferrer noopener"><i className="bi bi-github"></i></a>
                </div>
              </div>
          </article>
          <article className='main-img-container'>
             {themeNight ? <img 
             transition-style="in:circle:center" 
             src={moonimg} 
             fetchpriority="high"
             decoding="async"
             loading="eager"
             alt="moon_image"></img> : 
             <img 
             transition-style="in:circle:center" 
             className='light-theme-img' 
             src={sunimg} 
             fetchpriority="high"
             decoding="async"
             loading="eager"
             alt="sun_image"></img>}
          </article>
    </section>
  )
}
