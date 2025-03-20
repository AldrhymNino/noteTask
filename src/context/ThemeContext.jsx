import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const themes = {
    light: {
        primary: '#f3f3f3',
        secondary: '#f0f0f0',
        primaryText: '#414141',
        secondaryText: '#5a5a5a',
        shadowColor: '#555555',
        hover: '#dfdfdf',
    },

    dark: {
        primary: '#050816',
        secondary: '#0a0b0f',
        primaryText: '#dddddd',
        secondaryText: '#757575',
        shadowColor: '#1a1a1a',
        hover: '#00000048'
    }
};

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        const themeSelected = themes[theme];
        for(let key in themeSelected) {
            document.documentElement.style.setProperty(`--${key}`, themeSelected[key]);
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ?  'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };