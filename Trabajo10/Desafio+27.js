let personas = [
    { nombre: "Locuraaaa", edad: 30 },
    { nombre: "Vegeta", edad: 25 },
    { nombre: "Luis", edad: 28 },
    { nombre: "Antonela", edad: 45 },
    { nombre: "Damian", edad: 27 },
    { nombre: "Alejandro", edad: 17 }
  ];
  
  let mayoresDe27 = personas.filter(persona => persona.edad > 27);
  console.log(mayoresDe27);
  