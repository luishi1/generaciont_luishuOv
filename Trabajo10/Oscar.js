let actoresPrincipales = [
    { nombre: "Robert", apellido: "De Niro" },
    { nombre: "Al", apellido: "Pacino" },
    { nombre: "Ethan", apellido: "Hawke" }
  ];
  
  let actoresVocales = [];
  
  for (let actor of actoresPrincipales) {
    if (actor.nombre[0].match(/[AEIOU]/i) || actor.apellido[0].match(/[AEIOU]/i)) {
      actoresVocales.push(actor);
    }
  }
  
  console.log(actoresVocales);
  