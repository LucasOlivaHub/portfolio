import React, { useContext, useEffect, useState } from 'react'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import sass from '../../assets/sass.png'
import git from '../../assets/git.png'
import github from '../../assets/github.png'
import bootstrap from '../../assets/bootstrap.png'
import ingles from '../../assets/ingles.png'
import photoshop from '../../assets/photoshop.png'

import "transition-style"
import '../ContentLoaders/Transitions.css'
import { backgroundContext } from '../../Context/BackgroundContext'


export const Skills = () => {

  const {language, textColors, subtitleColors} = useContext(backgroundContext)

  useEffect(() => {
    const skillShineElements = document.querySelectorAll('.skill-shine');
    
    let index = 0;

    const addShineClass = () => {
      // Remover la clase .shine de todos los elementos
      skillShineElements.forEach(element => {
        element.classList.remove('shine');
      });

      // Agregar la clase .shine al elemento del indice
      skillShineElements[index].classList.add('shine');

      // Incrementar el índice para el siguiente elemento
      index = (index + 1) % skillShineElements.length;
    };

    // Iniciar la secuencia cada 2 segundos
    const intervalId = setInterval(addShineClass, 3000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id='skills-container' transition-style="in:diamond:center">
      <h2 style={textColors} className='skills-title'>Skills</h2>

            {language === "ES" ? <span style={subtitleColors} className="skills-text" transition-style="in:wipe:right"> Mis skills actuales</span>
                : <span style={subtitleColors} className="skills-text" transition-style="in:wipe:top"> My current skills</span>} 
      <h3 style={textColors}>Front-End</h3>
        <div id="frontend-skills" className="skills">
              <div className="card-skill animation-fade" id="react">
                <div id="react-glow" className="skill-glow animation-react">
                  <div className='skill-shine shine-react'></div>
                  <img src={react} alt="react" id="react-img" loading="lazy"/>
                  <h2>ReactJS</h2>
                </div>
              </div>
              <div className="card-skill animation-fade" id="javascript">
                <div id="javascript-glow" className="skill-glow">
                <div className='skill-shine shine-js'></div>
                  <img src={js} alt="js" id="javascript-img" loading="lazy"/>
                  <h2>JavaScript</h2>
                </div>
              </div>

              <div className="card-skill animation-fade" id="css">
                <div id="css-glow" className="skill-glow">
                <div className='skill-shine shine-css'></div>
                  <img src={css} alt="css" id="css-img" loading="lazy"/>
                  <h2>CSS</h2>
                  </div>
              </div>

              <div className="card-skill animation-fade" id="html">
                <div id="html-glow" className="skill-glow">
                <div className='skill-shine shine-html'></div>
                  <img src={html} alt="html" id="html-img" loading="lazy"/>
                  <h2>HTML</h2>
                </div>
              </div>
   
              <div className="card-skill animation-fade" id="sass">
                <div id="sass-glow" className="skill-glow">
                <div className='skill-shine shine-sass'></div>
                  <img src={sass} alt="sass" id="sass-img" loading="lazy"/>
                  <h2>Sass</h2>
                </div>
              </div>

     
              <div className="card-skill animation-fade" id="bootstrap">
                  <div id="bootstrap-glow" className="skill-glow">
                  <div className='skill-shine shine-bootstrap'></div>
                    <img src={bootstrap} alt="bootstrap" id="bootstrap-img" loading="lazy"/>
                    <h2>Bootstrap</h2>
                  </div>
              </div>

                <div className="card-skill animation-fade" id="git">
                  <div id="git-glow" className="skill-glow">
                  <div className='skill-shine shine-git'></div>
                    <img src={git} alt="git" id="git-img" loading="lazy"/>
                    <h2>Git</h2>
                  </div>
              </div>
                <div className="card-skill animation-fade" id="github">
                  <div id="github-glow" className="skill-glow">
                  <div className='skill-shine shine-github'></div>
                    <img src={github} alt="github" id="github-img" loading="lazy"/>
                    <h2>GitHub</h2>
                  </div>
              </div>
            </div>
            {language === "ES" ? <h3 style={textColors} transition-style="in:wipe:right">Otros</h3> : <h3 style={textColors} transition-style="in:wipe:top">Others</h3> }
            <div id="otros-skills" className="skills">
              <div className="card-skill animation-fade" id="ingles">
                <div className="skill-glow">
                  <img src={ingles} alt="ingles" id="ingles-img" loading="lazy"/>
                  <h2>Inglés</h2>
                </div>
                
              </div>

              <div className="card-skill animation-fade" id="photoshop">
                <div className="skill-glow">
                  <img src={photoshop} alt="photoshop" id="photoshop-img" loading="lazy"/>
                  <h2>Photoshop</h2>
                </div>
              
              </div>
          </div>
    </div>
  )
}
