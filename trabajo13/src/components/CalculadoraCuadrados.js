import React, { useState } from 'react';

const CalculadoraCuadrados = () => {
  const [numero, setNumero] = useState('');
  const [cuadrado, setCuadrado] = useState(null);

  const calcularCuadrado = () => {
    setCuadrado(numero * numero);
  };

  return (
    <div>
      <h2>Calculadora de Cuadrados</h2>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      <button onClick={calcularCuadrado}>Calcular Cuadrado</button>
      {cuadrado !== null && <p>El cuadrado de {numero} es: {cuadrado}</p>}
    </div>
  );
};

export default CalculadoraCuadrados;
