import React, { useState } from 'react';

const PrecioTotal = () => {
  const [productos, setProductos] = useState([{ nombre: '', precio: 0 }]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState('');

  const agregarProducto = () => {
    const hayProductosVacios = productos.some(producto => producto.nombre === '' || producto.precio <= 0);
    
    if (hayProductosVacios) {
      setError('Por favor, completa todos los campos de los productos antes de agregar uno nuevo.');
      return;
    }

    setError(''); 
    setProductos([...productos, { nombre: '', precio: 0 }]);
  };

  const calcularTotal = () => {
    const totalPrecio = productos.reduce((acc, producto) => acc + Number(producto.precio), 0);
    setTotal(totalPrecio);
  };

  return (
    <div>
      <h2>Precio Total de Productos</h2>
      {productos.map((producto, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Nombre del producto"
            value={producto.nombre}
            onChange={(e) => {
              const nuevosProductos = [...productos];
              nuevosProductos[index].nombre = e.target.value;
              setProductos(nuevosProductos);
            }}
          />
          <input
            type="number"
            placeholder="Precio"
            value={producto.precio}
            onChange={(e) => {
              const nuevosProductos = [...productos];
              nuevosProductos[index].precio = e.target.value;
              setProductos(nuevosProductos);
            }}
          />
        </div>
      ))}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={agregarProducto}>Agregar Producto</button>
      <button onClick={calcularTotal}>Calcular Total</button>
      <p>Total: {total}</p>
    </div>
  );
};

export default PrecioTotal;
