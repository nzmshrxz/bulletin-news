const { createContext, useState, useEffect, useContext } = require("react");

const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
   const savedTheme = localStorage.getItem('theme')
   if (savedTheme === "dark") {
    document.documentElement.classList.add('dark')
    setDarkMode(true)
   }
  }, [])

  const toggleTheme = ()=>{
    const newTheme = !darkMode
    setDarkMode(newTheme)
    document.documentElement.classList.toggle('dark', newTheme)
    localStorage.setItem('theme', newTheme? 'dark' : "light")
  }

  return (
    <ThemeContext.Provider value={{darkMode, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = ()=> useContext(ThemeContext)
