import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { backgroundContext } from '../../Context/BackgroundContext'
import MenuNav from './MenuNav/MenuNav'
import spanishflag from '../../assets/spanish.png'
import englishflag from '../../assets/english.png'

export const Header = () => {
  const {themeLight, themeNight, handleTheme, language, handleLanguage} = useContext(backgroundContext)

  return (
    <header>
      <Link to={'/'} className='nav-home'><i className="bi bi-house-door-fill"></i></Link>

      <nav className='menu-nav'>
        <div className='theme-container'>
          <button onClick={handleTheme} className={`theme-btn btn-night ${themeNight && 'theme-selected'}`}><i className="bi bi-moon-fill"></i></button>
          <button onClick={handleTheme} className={`theme-btn btn-light ${themeLight && 'theme-selected'}`}><i className="bi bi-brightness-high-fill"></i></button>
        </div>
        <MenuNav/>
      </nav>
      

      <nav className='main-nav'>
        <Link to={"/"} className='nav-link' transition-style={language === "ES" ? "in:circle:center" : "in:wipe:top"}>
          {language === "ES" ? "Inicio" : "Home" }
        </Link>
        <Link to={"/sobremi"} className='nav-link'  transition-style={language === "ES" ? "in:circle:center" : "in:wipe:top"}>
        {language === "ES" ? "Sobre mi" : "About me" }
        </Link>
        <Link to={"/skills"} className='nav-link'  transition-style={language === "ES" ? "in:circle:center" : "in:wipe:top"}>
          Skills
        </Link>
        <Link to={"/mis-proyectos"} className='nav-link'  transition-style={language === "ES" ? "in:circle:center" : "in:wipe:top"}>
          {language === "ES" ? "Proyectos" : "Projects" }
        </Link>
        <Link to={"/certificaciones"} className='nav-link'  transition-style={language === "ES" ? "in:circle:center" : "in:wipe:top"}>
          {language === "ES" ? "Certificaciones" : "Certifications" }
        </Link>
        <Link to={"/contacto"} className='nav-link'  transition-style={language === "ES" ? "in:circle:center" : "in:wipe:top"}>
          {language === "ES" ? "Contacto" : "Contact" }
        </Link>


        <div className='options-container'>
          <div className='theme-container'>
            <button onClick={handleTheme} className={`theme-btn btn-night ${themeNight && 'theme-selected'}`}><i className="bi bi-moon-fill"></i></button>
            <button onClick={handleTheme} className={`theme-btn btn-light ${themeLight && 'theme-selected'}`}><i className="bi bi-brightness-high-fill"></i></button>
            
          </div>

          <div onClick={() => handleLanguage()} className='language-container'>
            <button >{language === "ES" ? "ES" : "EN"} </button>
            <img className='lang-img' src={language === "ES" ? spanishflag : englishflag} alt='idioma_bandera'/>
          </div>
        </div>
     
      
      </nav>
      
    </header>
  )
}
