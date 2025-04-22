import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import spanishflag from '../../../assets/spanish.png'
import englishflag from '../../../assets/english.png'
import { backgroundContext } from '../../../Context/BackgroundContext';

function MenuNav() {
  const [show, setShow] = useState(false);
  const {language, handleLanguage, navBackground, colorWhiteBlack, navLinksBorderColor} = useContext(backgroundContext)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='menu-nav-btn' variant="primary" onClick={handleShow}>
      <i className="bi bi-list"></i>
      </Button>

      <Offcanvas style={navBackground} show={show} onHide={handleClose} className="menu-nav-body">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <nav>
                <Link style={navLinksBorderColor} to={"/"} onClick={() => setShow(!show)} className='nav-link'>
                {language === "ES" ? "Inicio" : "Home" }
                </Link>
                <Link style={navLinksBorderColor} to={"/sobremi"} onClick={() => setShow(!show)} className='nav-link'>
                {language === "ES" ? "Sobre mi" : "About me" }
                </Link>
                <Link style={navLinksBorderColor} to={"/skills"} onClick={() => setShow(!show)} className='nav-link'>
                  Skills
                </Link>
                <Link style={navLinksBorderColor} to={"/proyectos"} onClick={() => setShow(!show)} className='nav-link'>
                {language === "ES" ? "Proyectos" : "Projects" }
                </Link>
                <Link style={navLinksBorderColor} to={"/certificaciones"} onClick={() => setShow(!show)} className='nav-link'>
                {language === "ES" ? "Certificaciones" : "Certifications" }
                </Link>
                <Link style={navLinksBorderColor} to={"/contacto"} onClick={() => setShow(!show)} className='nav-link'>
                {language === "ES" ? "Contacto" : "Contact" }
                </Link>
            </nav>

            <div onClick={() => {
                handleLanguage()
                setShow(!show)}} 
              className='language-container'>
              <button style={colorWhiteBlack}>{language === "ES" ? "ES" : "EN"} </button>
              <img className='mobile-lang-img' src={language === "ES" ? spanishflag : englishflag} alt='idioma_bandera'/>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MenuNav;