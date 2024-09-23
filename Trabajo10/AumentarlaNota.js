let estudiantes = [
    { nombre: "Wonka", nota: 6 },
    { nombre: "Juanito", nota: 4 },
    { nombre: "Luis", nota: 8 }
  ];
  
  for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nota > 5) {
      estudiantes[i].nota = Math.min(estudiantes[i].nota + 2, 10); 
    }
  }
  
  console.log(estudiantes);