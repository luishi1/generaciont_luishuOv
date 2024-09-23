let personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 28 }
  ];
  
  personas.sort((a, b) => a.edad - b.edad);
  
  for (let i = 0; i < personas.length; i++) {
    personas[i].posicion = i + 1; // Asignar posición
  }
  
  console.log(personas);
  