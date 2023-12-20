import React from 'react'
import './LightBackground.css'
import mountainimg from '../../assets/mountain.png'

export const BackgroundLight = () => {
  return (
    <div className="lightheme-container">
      <img className='mountainimg' src={mountainimg}/>
      <div id="cloud-intro"></div>
    </div>
  )
}
