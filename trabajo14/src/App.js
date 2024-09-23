import './App.css';
import 'semantic-ui-css/semantic.min.css';
import React, { useState, useEffect } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import { Container } from 'semantic-ui-react';

const App = () => {
  const [personajes, setPersonajes] = useState([]);
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setPersonajes(data.results);
    };
    fetchData();
  }, []);

  const mostrarDetalles = (personaje) => {
    setPersonajeSeleccionado(personaje);
  };

  const volverALaLista = () => {
    setPersonajeSeleccionado(null);
  };

  return (
    <Container>
      {personajeSeleccionado ? (
        <CharacterDetail personaje={personajeSeleccionado} volver={volverALaLista} />
      ) : (
        <CharacterList personajes={personajes} mostrarDetalles={mostrarDetalles} />
      )}
    </Container>
  );
};

export default App;

