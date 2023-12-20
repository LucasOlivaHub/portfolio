import React from 'react'
import './NightBackground.css'
import pink from '../../assets/background/night/night-1.png'
import blue1 from '../../assets/background/night/blue-1.png'
import blue2 from '../../assets/background/night/blue-2.png'

export const NightBackground = () => {
  return (
    <div className='night-theme-container'>
        <div className='night-imgs-container'>
   
            <img className='blue1-img' src={blue1}/>
            <img className='blue2-img' src={blue2}/>
        </div>
    </div>
  )
}
