// src/components/ProductList.js
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const products = [
  { id: 1, name: 'Producto 1', price: '$10' },
  { id: 2, name: 'Producto 2', price: '$20' },
  { id: 3, name: 'Producto 3', price: '$30' },
];

export const ProductList = () => {
  const { isDarkMode } = useTheme();

  return (
    <div style={{ background: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000', padding: '20px' }}>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
