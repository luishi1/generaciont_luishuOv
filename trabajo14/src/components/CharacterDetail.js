import React from 'react';
import { Segment, Image, List, Button } from 'semantic-ui-react';

const CharacterDetail = ({ personaje, volver }) => {
  if (!personaje) {
    return <p>No se encontró información del personaje.</p>;
  }

  return (
    <Segment>
      <Button onClick={volver}>Volver a la lista</Button>
      <Image src={personaje.image} size='medium' />
      <h2>{personaje.name}</h2>
      <List>
        <List.Item>Especie: {personaje.species || 'Desconocida'}</List.Item>
        <List.Item>Estado: {personaje.status || 'Desconocido'}</List.Item>
        <List.Item>Género: {personaje.gender || 'Desconocido'}</List.Item>
        <List.Item>Origen: {personaje.origin?.name || 'Desconocido'}</List.Item>
      </List>
    </Segment>
  );
};

export default CharacterDetail;
