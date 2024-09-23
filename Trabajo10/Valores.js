let objeto_demo = {
    uno: 1,
    dos: 2,
    tres: 3 
 }
 let uno = "tres";
 
 console.log(objeto_demo['dos']);  // Devuelve 2
 console.log(objeto_demo[uno]);     // Devuelve 3 

//Ejercicio 2

let capitales = {
    Argentina: 'Buenos Aires',
    Uruguay: 'Montevideo'
}
let lugar = 'Uruguay';

console.log(capitales['lugar']);        // Nada :p
console.log(capitales.lugar);           // Nada otra vez
console.log(capitales[lugar]);          // Devuelve "Montevideo" // busca al string correspondiente al contendi de lugar
console.log(capitales['Argentina']);    // Devuelve "Buenos Aires"
console.log(capitales.Argentina);       // Devuelve "Buenos Aires"
console.log(capitales[Argentina]);      // nadita


