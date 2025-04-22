import React, { useContext, useEffect, useState } from 'react'
import "transition-style"
import '../ContentLoaders/Transitions.css'
import CarouselProyectos from './Carousel/CarouselProyectos'
import ModalProyecto from './ModalProyecto/ModalProyecto'
import { backgroundContext } from '../../Context/BackgroundContext'
import useGetProjects from '../../data/projects'

export const Proyectos = () => {

  const [showProjects, setShowProjects] = useState(false);
  const {language, textColors} = useContext(backgroundContext);


  //Custom hook: obtener proyectos
  const proyectosArr = useGetProjects();

  useEffect(() => {

    const proyectosContainer = document.querySelector(".todos-proyectos-container");

    if(proyectosContainer && showProjects) {
      const rect = proyectosContainer.getBoundingClientRect();
      // Realizar un scroll hacia los proyectos
      window.scrollTo({
        top: rect.top + window.scrollY, 
        behavior: 'smooth' 
      });
    }

  }, [showProjects])


  function handleShowProjects() {
    setShowProjects(!showProjects)
  }
  
  return (
    <section id="proyectos-container" className="animation-fade" transition-style="in:wipe:right">
        <h2 className="proyectos-title" style={textColors}>
        {language === "ES" ? "Proyectos recientes" : "Latest projects"}
        </h2>
        <CarouselProyectos className="proy-recientes-carousel"/>

        <article className="proyectos-recientes-container">

        {proyectosArr && proyectosArr.map((p) => {
            return p.destacado === true && (
              <a href={p.url} className="card" target="_blank" key={p.id} rel="noreferrer">
                <img src={p.image} alt="proyecto" className="card-image" fetchpriority="high"/>
                <figcaption className="card-body">
                  {p.nombre}
                  {p.desc}
                </figcaption>
              </a>
            );
        })}
        </article>

        <h2 style={textColors} className="proyectos-title todosproyectos-btn" onClick={() => handleShowProjects()}>
        {showProjects ? language === "ES" ? "Ocultar todos los proyectos" : "Hide all projects" : 
            language === "ES" ? "Ver todos los proyectos" : "Show all projects"}
        {showProjects ?  <i className="bi bi-caret-up-fill"></i> :  <i className="bi bi-caret-down-fill"></i>}
        </h2>
        {showProjects &&
        
        <article className='todos-proyectos-container' transition-style="in:wipe:top">
          <span className='todosproyectos-text' style={textColors}>{language === "ES" ? "Todos mis proyectos responsive" : "All responsive projects"} ({proyectosArr.length})</span>
          <div className='proyectos-center-container'>
            {proyectosArr && proyectosArr.map(p => {
              return (
              <article className='proyecto' key={p.id}>
                <a href={p.url} target='_blank' rel="noreferrer">
                  <img className='proyecto-img' src={p.image} loading="lazy" alt='proyecto_portada'/>
                </a>
              
                <div className='proyecto-desc-container' >
                  {p.nombre}
                  {p.desc}
                <div className='proyecto-footer-container'>
                  <ModalProyecto 
                  nombre={p.nombre}
                  desc={p.desc}
                  fulldesc={p.fulldesc}
                  img={p.image}
                  url={p.url}
                  lenguajes={p.lenguajes}
                  github={p.github}
                  className="modal-proyectos-btn"/>
                  {p.lenguajes}
                </div>
                </div>
              </article>
              )
            })}
            

          

          </div>
        </article>
       }
      </section>
  )
}
