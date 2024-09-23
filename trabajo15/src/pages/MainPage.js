import React from 'react';
import { ProductList } from '../components/ProductList';
import { ThemeToggle } from '../components/ThemeToggle';

const MainPage = () => {
  return (
    <div>
      <header>
        <h1>E-commerce prueba modo oscuro/claro</h1>
        <ThemeToggle />
      </header>
      <ProductList />
    </div>
  );
};

export default MainPage;
