let miAuto = {}

miAuto.marca = "Toyota";
miAuto.año = 2020;      
miAuto.nuevo = true;    

let propertyKey = "modelo"; 
miAuto[propertyKey] = "Corolla"; 

let anotherPropertyKey = "precio"; 
miAuto[anotherPropertyKey] = 15000; 

let nextProperty = "color"; 
miAuto[nextProperty] = "Rojo"; 

for (let key in miAuto) {
  console.log(`${key}: ${miAuto[key]}`);
}

// Preguntas
console.log(miAuto[propertyKey]); // Devuelve "Corolla"
console.log(miAuto["modelo"]); // Devuelve "Corolla"
console.log(miAuto[nextProperty]); // Devuelve "Rojo"
console.log(miAuto["color"]); // Devuelve "Rojo"
