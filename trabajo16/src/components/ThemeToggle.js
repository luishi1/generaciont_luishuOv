import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
    </button>
  );
};

export default ThemeToggle;
