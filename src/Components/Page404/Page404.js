import React, { useContext } from 'react'
import { backgroundContext } from '../../Context/BackgroundContext';

export const Page404 = () => {
    const {language, textColors} = useContext(backgroundContext);
    
  return (
    <section className='pagina404-section'>
        <div className='container h-100 w-100'>
            <div className='d-flex flex-column h-100 w-100 px-2 gap-2 justify-content-center align-items-center'>
                    <h3 style={textColors}>404</h3>
                    <h4 className='text-center' style={textColors}>
                        {language === "ES" ? "¡Oops! Esa página no existe" : "Oops! That page doesn't exist." }
                    </h4>
                    <a className='bg-azul' style={textColors} href='/'>
                        {language === "ES" ? "¡Oops! Esa página no existe" : "Click to return to the home page" }
                    </a>
            </div>

        </div>

    </section>
  )
}
