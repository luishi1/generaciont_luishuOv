import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

const CharacterList = ({ personajes, mostrarDetalles }) => {
  return (
    <Grid>
      {personajes.map((personaje) => (
        <Grid.Column key={personaje.id} width={4}>
          <Card onClick={() => mostrarDetalles(personaje)}>
            <Card.Content>
              <Card.Header>{personaje.name}</Card.Header>
              <Card.Meta>{personaje.species}</Card.Meta>
              <Card.Description>
                <img src={personaje.image} alt={personaje.name} style={{ width: '100%' }} />
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default CharacterList;
