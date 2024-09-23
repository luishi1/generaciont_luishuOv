import logo from './logo.svg';
import './App.css';
import React from 'react';
import SuperHeroe from './components/SuperHeroe';
import Dinosaurio from './components/Dinosaurio';
import Comida from './components/Comida';
import Vehiculo from './components/Vehiculo';
import JuegoDeMesa from './components/JuegoDeMesa';
import HolaMundo from './components/HolaMundo'; // Importa el nuevo componente

const App = () => {
  const mostrarAlerta = (nombre) => {
    alert(`Juego: ${nombre}`);
  };

  return (
    <div>
      <HolaMundo />
      <SuperHeroe nombre="Spider-Man" superpoder="Sentido arácnido" />
      <Dinosaurio nombre="Tyrannosaurus Rex" dieta="Carnívoro" />
      <Comida tipo="Pizza" ingredientes={["Harina", "Tomate", "Queso", "Pepperoni"]} />
      <Vehiculo nombre="Millennium Falcon" velocidadMaxima={1050} />
      <JuegoDeMesa nombre="Catan" mostrarAlerta={mostrarAlerta} />
    </div>
  );
};

export default App;


