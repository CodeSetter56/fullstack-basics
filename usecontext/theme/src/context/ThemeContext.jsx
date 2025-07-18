import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
})

export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
    useEffect(() => {
      const html = document.documentElement;
      if (theme === "dark") {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark"); 
      }
    }, [theme]);
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}