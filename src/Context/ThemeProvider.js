import React, { useState } from 'react'
import { backgroundContext } from './BackgroundContext'

export const ThemeProvider = ({children}) => {
    const [themeNight, setThemeNight] = useState(true);
    const [themeLight, setThemeLight] = useState(false);
    const [language, setLanguage] = useState("ES")
  
    function handleTheme() {
      setThemeLight(!themeLight);
      setThemeNight(!themeNight);
    }

    const colorWhiteBlack = {
      color: themeNight ? "#efefef" : "#030303"
    }

    const textColors = {
      color: themeNight ? "#efefef" : "#080808", // #cbfafd
      textShadow: themeNight ? "2px 2px 4px #030303" : "2px 2px 8px #efefef",
      transition: "200ms"
    }

    const subtitleColors = {
      color: themeNight ? "#efefef98" : "#161616de",
      transition: "200ms"
    }

    const btnColors = {
      border: themeNight ? "2px solid #e9e9e962" : "2px solid #202020c5" ,
      color: themeNight ? "#efefef" : "#030303"
    }

    const cardSkills = {
      background: themeNight ? "linear-gradient(147deg, rgba(104, 134, 163, 0.692) 25%, rgba(14, 24, 61, 0.789) 45%)" :
      "linear-gradient(147deg, rgba(49, 65, 80, 0.692) 25%, rgba(2, 10, 19, 0.789) 45%)",
      border: "2px 2px 4px #efefef"
    }
    const navBackground = {
      background: themeNight ? "#000000de" : "#e4e4e4",
      color: themeNight ? "#efefef" : "#000"
    }
    
    const navLinksBorderColor = {
      borderBottom: themeNight ? "1px solid #c5c5c5" : "1px solid #030303"
    }

    function handleLanguage() {
      language === "ES" ? setLanguage("EN") : setLanguage("ES")
    }

  return (
    <backgroundContext.Provider value={{
        themeNight,
        themeLight,
        setThemeLight,
        setThemeNight,
        handleTheme,
        language,
        handleLanguage, 

        textColors,
        subtitleColors,
        btnColors,
        colorWhiteBlack,
        cardSkills,
        navBackground,
        navLinksBorderColor
        }}>
        {children}
    </backgroundContext.Provider>
  )
}
