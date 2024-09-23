
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <MainPage />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
