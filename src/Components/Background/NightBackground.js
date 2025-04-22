import React from 'react'
import './NightBackground.css'
import blue1 from '../../assets/background/night/blue-1.png'
import blue2 from '../../assets/background/night/blue-2.png'

export const NightBackground = () => {
  return (
    <div className='night-theme-container'>
        <div className='night-imgs-container'>
   
            <img className='blue1-img' src={blue1} alt='dark-bg-img'/>
            <img className='blue2-img' src={blue2} alt='dark-bg-img'/>
        </div>
    </div>
  )
}
