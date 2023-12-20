import React, { useContext, useEffect, useState } from 'react'
import "transition-style"
import '../ContentLoaders/Transitions.css'
import emailjs from '@emailjs/browser'
import { backgroundContext } from '../../Context/BackgroundContext'

export const Contacto = () => {

  const {language, textColors, colorWhiteBlack} = useContext(backgroundContext);

  const [textBtn, setTextBtn] = useState(language === "ES" ? 'Enviar' : 'Send');

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    setTextBtn(language === "ES" ? 'Enviar' : 'Send')
  }, [language])


  function handleSubmit(e)  {
    e.preventDefault();

    const nombreError = document.querySelector(".nombre-error");
    const emailError = document.querySelector(".email-error");
    const msgError = document.querySelector(".mensaje-error");

    if(nombre !== "" && email !== "" && mensaje !== "") {
      enviarEmail()
    } 
    if (nombre === "") {
      nombreError.classList.remove("disabled")
    } 
    if (email === "") {
      emailError.classList.remove("disabled")
    }
    
    if (mensaje === "") {
      msgError.classList.remove("disabled")
    } 

   
  }

  function enviarEmail() {
    const btnEnviar = document.querySelector(".enviar-form-btn");

    //Enviando
    btnEnviar.classList.add("enviando");
    
    setTextBtn(language === "ES" ? 'Enviando..' : 'Sending...')
    
 
    const serviceID = 'default_service';
    const templateID = 'template_4x7n3fk';

    const form = document.querySelector("#form");

    emailjs.sendForm(serviceID, templateID, form, "AEiY-BLjgAhrIV6Qd")
     .then(() => {
      //Enviado
      setTextBtn(language === "ES" ? 'Enviado' : 'Sent')
      
      btnEnviar.classList.remove("enviando");
      btnEnviar.classList.add("enviado");


        setTimeout( () => {
          btnEnviar.classList.remove("enviado");
          setTextBtn(language === "ES" ? 'Enviar' : 'Send')
          reiniciarInputs();
        }, 2500)
     }, (err) => {

      //No enviado
        btnEnviar.classList.remove("enviando");
        btnEnviar.classList.add("no-enviado");
        setTextBtn(language === "ES" ? 'Error al enviar' : 'Sending error')
 
         setTimeout( () => {
            btnEnviar.classList.remove("no-enviado");
            setTextBtn(language === "ES" ? 'Enviar' : 'Send')
            reiniciarInputs();
         }, 2500)

       alert(language === "ES" ? 'Error al enviar, revisar consola' : 'Sending error, check console for details')
       console.log(JSON.stringify(err));
     });
  }

function reiniciarInputs() {
  setNombre("");
  setEmail("");
  setMensaje("");
}

function handleNombre(e) {
  const nombreError = document.querySelector(".nombre-error");
  nombreError.classList.add("disabled");
  setNombre(e.target.value);
}

function handleEmail(e) {
  const emailError = document.querySelector(".email-error");
  emailError.classList.add("disabled");
  setEmail(e.target.value);
}


function handleMensaje(e) {
  const msgError = document.querySelector(".mensaje-error");
  msgError.classList.add("disabled");
  setMensaje(e.target.value);
}
//  

  return (
    <section id='contacto-container' transition-style="in:wipe:bottom">
      <h2 style={textColors} className='contacto-title'>
        {language === "ES" ? 'Contacto' : 'Contact'}
      </h2>
      <div className='form-container'>
        {language === "ES" ? 
        <span style={colorWhiteBlack} className='form-title' transition-style="in:wipe:right">¡Enviame un mensaje!</span> 
        : <span style={colorWhiteBlack} className='form-title' transition-style="in:wipe:top">¡Send me a message!</span>}
        
        <form id='form'>
              <label style={textColors}>
              {language === "ES" ? 'Nombre:' : 'Name:'}
                <input type='text' name="from_name" id="from_name" 
                value={nombre}
                onChange={(e) => handleNombre(e)}
                required placeholder={language === "ES" ? 'Ingrese su nombre' : 'Enter your name'}/>
                <span className='nombre-error error-msg disabled'>{language === "ES" ? 'Ingrese su nombre' : 'Enter your name'}</span>
              </label>
              <br/>
              <label style={textColors}>
              {language === "ES" ? 'Email:' : 'Email:'}
                <input type='email' name="email_id" id="email_id" 
                value={email} 
                onChange={(e) => handleEmail(e)}
                required placeholder={language === "ES" ? 'Ingrese su email' : 'Enter your email'}/>
                <span className='email-error error-msg disabled'>{language === "ES" ? 'Ingrese su email' : 'Enter your email'}</span>
              </label>
              <br/>
              <label style={textColors}>
              {language === "ES" ? 'Mensaje:' : 'Message:'}
                <textarea name="message" id="message" 
                value={mensaje}
                onChange={(e) => handleMensaje(e)}
                required placeholder={language === "ES" ? 'Hola Lucas...' : 'Hey Lucas...'}/>
                <span className='mensaje-error error-msg disabled'>{language === "ES" ? 'Ingrese un mensaje' : 'Enter a message'}</span>
              </label>
            <div className='btn-enviar-container'>
              <button onClick={(e) => handleSubmit(e)} className='enviar-form-btn'>{textBtn}</button>
            </div>
   
          </form>
          <script type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

        <script type="text/javascript">
          emailjs.init('AEiY-BLjgAhrIV6Qd')
        </script>
      </div>
        
    </section>
  )
}
