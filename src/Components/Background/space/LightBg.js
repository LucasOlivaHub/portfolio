import React, { useEffect } from 'react'
import './LightBg.css'

export const LightBg = () => {

 useEffect(() => {
    const stars = document.querySelectorAll('.offlineStar');

    const showRandomStar = () => {
      // Obtener un índice aleatorio para seleccionar una estrella
      const randomIndex = Math.floor(Math.random() * stars.length);
      const randomStar = stars[randomIndex];

      // Agregar la clase para mostrar la estrella
      randomStar.classList.add('visible');
      randomStar.classList.add('star');

      // Eliminar la clase después de un tiempo (puedes ajustar el tiempo según tus necesidades)

      setTimeout(() => {
        randomStar.classList.remove('visible');
        randomStar.classList.remove('star');
      }, 4000);
    };

    // Mostrar una estrella aleatoria cada 5 segundos
    const starInterval = setInterval(showRandomStar, 4500);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(starInterval);
  }, []);

  return (
    <div className='light-stars-background'>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div className="shootingstars-container">
          <div className="offlineStar"></div>
          <div className="offlineStar"></div>
          <div className="offlineStar"></div>
          <div className="offlineStar"></div>
        </div>
    </div>
  )
}
