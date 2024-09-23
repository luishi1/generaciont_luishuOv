import React from 'react';
import { useCart } from '../contexts/CartContext';

export const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} (Cantidad: {item.quantity})
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
