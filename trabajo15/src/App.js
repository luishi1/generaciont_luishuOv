import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
