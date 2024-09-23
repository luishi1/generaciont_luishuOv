import './App.css';
import React from 'react';
import Contador from './components/Contador';
import CalculadoraCuadrados from './components/CalculadoraCuadrados';
import PrecioTotal from './components/PrecioTotal';

function App() {
  return (
    <div>
      <Contador />
      <CalculadoraCuadrados />
      <PrecioTotal />
    </div>
  );
}

export default App;

