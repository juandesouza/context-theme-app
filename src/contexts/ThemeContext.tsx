import React, { createContext, useState } from 'react';

interface ContextProps {
    isLightTheme: boolean,
    light: { syntax: string, ui: string, bg: string },
    dark: { syntax: string, ui: string, bg: string },
    toggleTheme(): void
}


const defaultContextState: ContextProps = {
    isLightTheme: true,
    light: { syntax: '', ui: '', bg: ''},
    dark: { syntax: '', ui: '#', bg: ''},
    toggleTheme: (): void => {}
};

export const ThemeContext = createContext<ContextProps>(defaultContextState);

const ThemeContextProvider: React.FC<{children: any}> = ({ children }) => {

    const [state, setState] = useState({
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
    });

    const toggleTheme = () => {
        const { isLightTheme } = state;
        setState({
            isLightTheme: !isLightTheme,
            light: { syntax: '#555', ui: '#ddd', bg: '#eee'},
            dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
        })
    };

    return (
        <ThemeContext.Provider value={{ ...state, toggleTheme: toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;

