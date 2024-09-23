import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Cambiar a {isDarkMode ? 'modo claro' : 'modo oscuro'}
    </button>
  );
};
