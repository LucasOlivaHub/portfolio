import React, { useContext, useEffect } from 'react'
import fotoPerfil from '../../assets/perfil.png'
import star from '../../assets/star.png'
import education from '../../assets/education.png'
import profile from '../../assets/profile.png'
import target from '../../assets/target.png'

import developer from '../../assets/sobremi/developer.webp'
import ageofempires from '../../assets/sobremi/ageofempires.webp'
import princeofpersia from '../../assets/sobremi/princeofpersia.webp'
import starwars from '../../assets/sobremi/star-wars.webp'
import futbol from '../../assets/sobremi/futbol.webp'
import "transition-style"
import '../ContentLoaders/Transitions.css'
import { backgroundContext } from '../../Context/BackgroundContext'

export const SobreMi = () => {
  
  const {language, textColors, subtitleColors, labelColors} = useContext(backgroundContext);

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
              <button className='cv-btn' id="descargar-cv" onClick={() => window.open('/recursos/cv/LucasOliva-FrontDev-CV2025.pdf')}> <i className="bi bi-file-earmark-text-fill"></i> Descargar CV (Español) </button>
              <button className='cv-btn' id="descargar-cv-en" onClick={() => window.open('/recursos/cv/en_LucasOliva-FrontDev-CV2025.pdf')}> <i className="bi bi-file-earmark-text-fill"></i> Download CV (English) </button>
            </div>

            <div className="sobremi-img-container" transition-style="in:circle:center">
              <img id='fotoperfil' src={fotoPerfil} alt="lucasoliva" fetchpriority="high"/>
            </div>
      </article>

      <article className='sobremi-info-container'>
      <div className='perfil-texto-container'>
          <h2 style={textColors}>{language === "ES" ? "¿Quién soy?" : "Who I am?"}<img className='sobremi-icon' src={profile} alt='star-experience' loading="lazy"/></h2>
            {language === "ES" ? (
              <>
                <p style={subtitleColors} className="sobremi-text text-theme" transition-style="in:wipe:right">
                Me llamo Lucas, tengo 22 años y soy de Argentina. 
                <br/>
                <br/>
                Mi interés en el desarrollo web surgió por querer saber cómo se desarrollan las cosas, por el hábito de siempre 
                estar al día con las novedades en la tecnología y por mi curiosidad para aprender cosas nuevas. 
                <br/>
                <br/>
                Desde que tengo memoria mi mejor amiga es la computadora. Jugar videojuegos siempre fue
                  mi pasatiempo favorito. Recuerdo que aprendí a leer y
                escribir con juegos como el Age Of Empires o Prince of Persia.
                <br/>
                También me gusta mucho el espacio, soy fanático de Star Wars y me encanta el fútbol.
                </p>
                
                <div className='d-flex align-items-center justify-content-center justify-content-md-start py-2 flex-wrap gap-4 gap-md-3'>
                  <img src={developer} alt='dev_img' width={80}></img>
                  <img src={princeofpersia} alt='pop_img' width={80}></img>
                  <img src={ageofempires} alt='ageofempires_img' width={80}></img>
                  <img src={starwars} alt='starwars_img' width={80}></img>
                  <img src={futbol} alt='futbol_img' width={80}></img>
                </div>
              </>
              )
                :
              <>
                <p style={subtitleColors} className="sobremi-text text-theme" transition-style="in:wipe:top"> 
                My name is Lucas, I'm 22 years old, and I'm from Argentina.
                <br/>
                <br/>
                I started getting interested in Web Development because of knowing how things are developed, my habit of always being
                updated with any tech news and my curiosity to learn new things. 
                <br/>
                <br/>
                For as long as I can remember, my best friend has been the computer. Playing videogames always
                has been my favorite hobby. I remember that I learned
                to read and write with games such as Age Of Empires or Prince of Persia.
                <br/>
                As well, I like space a lot, I'm a Star Wars fan and I love Football.
                </p>
                <div className='d-flex align-items-center justify-content-center justify-content-md-start py-2 flex-wrap gap-4 gap-md-3'>
                  <img src={developer} alt='dev_img' width={80}></img>
                  <img src={princeofpersia} alt='pop_img' width={80}></img>
                  <img src={ageofempires} alt='ageofempires_img' width={80}></img>
                  <img src={starwars} alt='starwars_img' width={80}></img>
                  <img src={futbol} alt='futbol_img' width={80}></img>
                </div>
              </>
            } 
        </div>

        <div className='experiencia-texto-container'>
          <h2 style={textColors}>{language === "ES" ? "Experiencia" : "Experience"}<img className='sobremi-icon' src={star} alt='star-experience' loading="lazy"/></h2>
            {language === "ES" ? <p style={subtitleColors} className="sobremi-text text-theme" transition-style="in:wipe:right">
               Cuento con experiencia en desarrollo de páginas web dinámicas, con diversas funcionalidades, adaptables
               a la pantalla de cualquier dispositivo aplicando Responsive Design y centradas en garantizar una buena
              experiencia del usuario (Diseño UX / UI).
              </p>
                :
              <p style={subtitleColors} className="sobremi-text text-theme" transition-style="in:wipe:top"> 
              I have experience in developing dynamic web pages, with multiple features, adaptable to all screens in any device
              by applying Responsive Design and focused in assure an optimal user experience (UX / UI Design).
              </p>
            } 

            <div className='d-flex flex-column'>
            {language === "ES" ? <p style={labelColors} className="sobremi-text text-theme" transition-style="in:wipe:right">
              DOMO - Desarrollador Front End <span className='ms-2' style={subtitleColors}>(Mar-Oct 2024)</span>
              </p>
                :
              <p style={labelColors} className="sobremi-text text-theme" transition-style="in:wipe:top"> 
              DOMO - Front End Developer <span className='ms-2' style={subtitleColors}>(Mar-Oct 2024)</span>
              </p>
            } 

            {language === "ES" ? 
             <ul className="sobremi-text text-theme experiencia-lista d-flex flex-column gap-2" transition-style="in:wipe:top">
                <li style={subtitleColors}><b className='me-1'>•</b> Desarrollo Front del sitio actual de <a href='https://www.centralpuerto.com/' target='_blank' rel='noopener noreferrer'>Central Puerto</a> utilizando Wordpress, PHP, JavaScript, Bootstrap y HTML & CSS.</li>
                <li style={subtitleColors}><b className='me-1'>•</b> Participación en múltiples proyectos e interacción directa con clientes como AstraZeneca, Central Puerto, CloudHesive y Grupo Lucci.</li>
                <li style={subtitleColors}><b className='me-1'>•</b> Maquetado de páginas web a partir de diseños en Adobe XD.</li>
                <li style={subtitleColors}><b className='me-1'>•</b> Funcionalidades interactivas: filtros dinámicos de datos provenientes de un Backend utilizando JavaScript y PHP, calculadoras, líneas de tiempo y carruseles.</li>
                <li style={subtitleColors}><b className='me-1'>•</b> Desarrollo y mantenimiento de contenido autoadministrable para sitios Wordpress a través de campos personalizados (ACF) y posteos (Custom Post Type).</li>
                <li style={subtitleColors}><b className='me-1'>•</b> Tecnologías utilizadas: Wordpress & PHP, Adobe Experience Manager, React, JavaScript, Swiper.js, Bootstrap, CSS, HTML, Git, GitHub.</li>
              </ul>
                :
              <ul className="sobremi-text text-theme experiencia-lista d-flex flex-column gap-2" transition-style="in:wipe:right">
                <li style={subtitleColors}><b className='me-1'>•</b> Front-end development for <a href='https://www.centralpuerto.com/en/' target='_blank' rel='noopener noreferrer'>Central Puerto</a>’s current website using WordPress, PHP, JavaScript, Bootstrap, and HTML & CSS.</li>
                <li style={subtitleColors}><b className='me-1'>•</b> Participation in multiple projects, directly interacting with clients such as AstraZeneca, Central Puerto, CloudHesive, and Grupo Lucci.</li>
                <li style={subtitleColors}><b className='me-1'>•</b> Web page layout based on Adobe XD designs.</li>
                <li style={subtitleColors}><b className='me-1'>•</b> Interactive functionalities: dynamic data filters fetching from a backend using JavaScript and PHP, calculators, timelines and carousels.</li>
                <li style={subtitleColors}><b className='me-1'>•</b> Development and maintenance of self-managed content for WordPress websites through custom fields (ACF) and posts (Custom Post Type).</li>
                <li style={subtitleColors}><b className='me-1'>•</b> Technologies used: WordPress & PHP, Adobe Experience Manager, React, JavaScript, Swiper.js, Bootstrap, CSS, HTML, Git, GitHub.</li>
              </ul>
              
            } 
            </div>
        </div>

        <div className='educacion-texto-container'>
          <h2 style={textColors}>{language === "ES" ? "Educación" : "Education"}<img className='sobremi-icon' src={education} alt='education-books' loading="lazy"/></h2>
            {language === "ES" ? 
            <p style={subtitleColors} className="sobremi-text text-theme" transition-style="in:wipe:right">
               Mi camino en desarrollo web comenzó de la mano de EducacionIT en 2022, donde decidí centrarme en
               el area Front-End. 
              <br/>
              <br/>
               Gracias a ello, hoy en día cuento con un gran conocimiento en React, domino las bases del desarrollo web como lo son JavaScript, 
               CSS y HTML, sumé conocimiento en Bootstrap, SASS & LESS, en el Responsive Design 
               y el diseño UX/UI.
              </p>
                :
              <p style={subtitleColors} className="sobremi-text text-theme" transition-style="in:wipe:top"> 
              My journey in web development started with EducacionIT in 2022, where I decided to focus in
              the Front-End area.
              <br/>
              <br/>
              Thanks to that, I now have extensive knowledge in React. I master the fundamentals of web development, such as JavaScript, CSS, and HTML,
              and have gained expertise in Bootstrap, SASS & LESS, as well as Responsive Design and UX/UI design.
              </p>
            } 
        </div>

        <div className='objetivos-texto-container'>
          <h2 style={textColors}>{language === "ES" ? "Objetivos" : "Goals"}<img className='sobremi-icon' src={target} alt='objetives' loading="lazy"/></h2>
            {language === "ES" ? <p style={subtitleColors} className="sobremi-text text-theme" transition-style="in:wipe:right">
               Mi objetivo siempre es crecer constantemente como profesional 
               con un gran equipo de trabajo que me permita
               aplicar todos mis conocimientos y seguir aprendiendo para continuar mejorando
              como desarrollador.
               <br/>
               <br/>
               Actualmente, estoy centrado en el desarrollo Front End, pero también
               me gustaría formarme en el área del Back End para convertirme en un Desarrollador
               Full Stack.
              </p>
                :
              <p style={subtitleColors} className="sobremi-text text-theme" transition-style="in:wipe:top"> 
                My main goal is always to grow as a professional, working with a great team that allows me
                to apply all of my knowledge and keep learning to improve as a developer.
                <br/>
                <br/>
                Currently, my focus is on Front-End development, but I am also interested 
                in learning Back-End development to become a Full Stack Developer.
              </p>
            } 
        </div>

      </article>
    </section>
  )
}
