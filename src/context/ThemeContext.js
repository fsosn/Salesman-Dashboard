import {createContext, useState} from 'react';

export const ThemeContext = createContext({
    isDarkTheme: false,
});

export const ThemeProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(
        localStorage.getItem("isDark") === "true" || false);

    const toggleTheme = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        localStorage.setItem("isDark", newTheme.toString());
    }

    return (
        <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};