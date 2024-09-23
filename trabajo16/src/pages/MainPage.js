import React from 'react';
import { ProductList } from '../components/ProductList';
import ThemeToggle from '../components/ThemeToggle'; 
import { Cart } from '../components/Cart';

const MainPage = () => {
  return (
    <div>
      <header>
        <h1>Mi E-commerce</h1>
        <ThemeToggle />
      </header>
      <ProductList />
      <Cart />
    </div>
  );
};

export default MainPage;
