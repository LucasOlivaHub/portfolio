import React from 'react'
import './LightBackground.css'
import black1 from '../../assets/background/light/black-1.png'
import black2 from '../../assets/background/light/black-2.png'

export const LightBackground = () => {
  return (
    <div className='light-theme-container'>
        <div className='light-imgs-container'>

            <img className='black1-img' loading="lazy" src={black1}/>
            <img className='black2-img' loading="lazy" src={black2}/>
            
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
