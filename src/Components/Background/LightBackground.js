import React from 'react'
import './LightBackground.css'
import black1 from '../../assets/background/light/black-1.webp'
import black2 from '../../assets/background/light/black-2.webp'

export const LightBackground = () => {
  return (
    <div className='light-theme-container'>
        <div className='light-imgs-container'>

            <img className='black1-img' fetchpriority="high" src={black1} alt='light-bg-img'/>
            <img className='black2-img' fetchpriority="high" src={black2} alt='light-bg-img'/>
            
        </div>
        <ul className='squares'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
    </div>
  )
}
