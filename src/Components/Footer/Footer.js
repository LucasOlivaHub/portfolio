import React, { useContext } from 'react'
import { backgroundContext } from '../../Context/BackgroundContext'
import { Link } from 'react-router-dom';

export const Footer = () => {

    const {language} = useContext(backgroundContext);

  return (
    <footer>
        <div className='footer-text-container'>
            <span>¡Gracias por la visita! No dudes en contactarme por cualquier consulta</span>
        </div>

        <div className='footer-links-container'>
            <Link to={"/"} className='nav-link'>
            {language === "ES" ? "Inicio" : "Home"}
            </Link>
            <Link to={"/sobremi"} className='nav-link'>
            {language === "ES" ? "Sobre mi" : "About me" }
            </Link>
            <Link to={"/skills"} className='nav-link'>
            Skills
            </Link>
            <Link to={"/proyectos"} className='nav-link'>
            {language === "ES" ? "Proyectos" : "Projects" }
            </Link>
            <Link to={"/certificaciones"} className='nav-link'>
            {language === "ES" ? "Certificaciones" : "Certifications" }
            </Link>
            <Link to={"/contacto"} className='nav-link'>
            {language === "ES" ? "Contacto" : "Contact" }
            </Link>
        </div>
    </footer>
  )
}
