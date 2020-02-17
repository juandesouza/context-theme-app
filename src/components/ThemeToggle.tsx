import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

interface Props {
    
}

const ThemeToggle: React.FC<Props> = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <button className="themeToggleButton" onClick={toggleTheme}>Toggle theme</button>
    )
}

export default ThemeToggle
