let peliculas = [
    { titulo: "Inception", rating: 8.8, loHasVisto: true },
    { titulo: "Interstellar", rating: 8.6, loHasVisto: false }
  ];
  
  for (let i = 0; i < peliculas.length; i++) {
    console.log(`Título: ${peliculas[i].titulo}, Rating: ${peliculas[i].rating}, Lo has visto: ${peliculas[i].loHasVisto}`);
  }
  