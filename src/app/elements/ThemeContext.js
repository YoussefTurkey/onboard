'use client';
// importing react components
import { createContext, useState, useContext, useEffect } from "react"

// create a context
const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    
    const [darkMode, setDarkMode] = useState( ()=> {
        if(typeof window !== undefined){
            return localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
        }
        return true; // Default to dark mode
    })

    // Save to localStorage when darkMode changes
    useEffect( ()=>{
        localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    }, [darkMode])

    // Update body class based on darkMode
    useEffect(() => {
        if (darkMode) {
        document.body.classList.add('dark-mode');
        } else {
        document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    // Make a toggle mode button
    const toggleDarkMode = ()=> {
        setDarkMode(prevMode => !prevMode);
    }

  return (
    <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

// Create a custome hook to use the ThemeContext
export function useTheme(){
    return useContext(ThemeContext)
}