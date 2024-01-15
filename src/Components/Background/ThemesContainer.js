import React, { useContext, useEffect } from 'react'
import { backgroundContext } from '../../Context/BackgroundContext';
import { BackgroundStars } from './space/BackgroundStars';
import { LightBackground } from './LightBackground';

export const ThemesContainer = () => {
    const {themeLight, themeNight} = useContext(backgroundContext);

    useEffect(() => {

    }, [themeLight, themeNight])

    const backgroundColor = {
      backgroundColor: themeNight ? "#1a1a1a" : "#f0f0f0",
      transition: "500ms",
      width: "100%",
      minHeight: "100vh",
      position: "fixed"
    }

  return (
    <div style={backgroundColor}>
      {themeNight && <BackgroundStars/>}
      {themeLight && <LightBackground/>}      
    </div>
  )
}
