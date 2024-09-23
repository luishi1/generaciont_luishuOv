// Ejercicio 1: Variables
let uno = 5;
let dos = uno;
uno = 10;
console.log(`Ejercicio 1: El valor de la variable dos es ${dos}.`); // Output: 5

// Ejercicio 2: Mi Primera Página Con JavaScript
alert("¡Bienvenido a mi sitio!");
let nombre = prompt("¿Cuál es tu nombre?");
alert(`¡Hola, ${nombre}!`);
let edad = prompt("¿Cuántos años tienes?");
console.log(`Ejercicio 2: Tienes ${edad} años.`);
alert(`Tu nombre es ${nombre} y tienes ${edad} años.`);

// Ejercicio 3: Mensaje Con Variables
let miNombre = "Luis";
let miEdad = 18;
let cumpleaños = "4 de mayo";
let ciudad = "Ciudad Autonoma de Buenos Aires";
let ocupacion = "vago";
let pasatiempos = "Entrenar, Jugar basquet, Comer, Dormir";
console.log(`Ejercicio 3: Hola, me llamo ${miNombre}, tengo ${miEdad} años, nací el ${cumpleaños}, vivo en ${ciudad}, soy ${ocupacion} y mis pasatiempos son ${pasatiempos}.`);

// Ejercicio 4: Cantidad De Caracteres
let texto = prompt("Ejercicio 4: Ingresa un texto breve:");
console.log(`El texto tiene ${texto.length} caracteres.`);

// Ejercicio 5: Calculadora De Edad
let edadUsuario = prompt("Ejercicio 5: ¿Cuántos años tienes?");
let dias = edadUsuario * 365;
alert(`Tienes aproximadamente ${dias} días.`);

// Ejercicio 6: Suma De Valores
let num1 = prompt("Ejercicio 6: Asigna un valor a num1:");
let num2 = prompt("Asigna un valor a num2:");
let resultado = parseFloat(num1) + parseFloat(num2);
console.log(`El resultado de la suma es: ${resultado}`);

// Ejercicio 7: Calculador De Abastecimiento De Por Vida
// a
let edadSnack = 25; // Cambia este valor según tu edad
let edadMaxima = 80; // Cambia este valor según tu edad máxima
let snacksPorDia = 3; // Estimación de snacks diarios
let snacksRestantes = (edadMaxima - edadSnack) * 365 * snacksPorDia;
alert(`Ejercicio A: Necesitarás ${snacksRestantes} snacks para que te alcancen hasta los ${edadMaxima} años.`);
let precioPorSnack = 1.5; // Cambia este valor según el precio
let gastoTotal = snacksRestantes * precioPorSnack;
console.log(`Vas a gastar un total de $${gastoTotal} en snacks el resto de tu vida.`);

// b
let diasViaje = prompt("Ejercicio B: ¿Cuántos días estarás de viaje?");
let presupuestoMaximo = prompt("¿Cuál es tu presupuesto máximo para el viaje?");
let comidas = prompt("¿Cuántas comidas vas a tener en todo tu viaje?");
let gastoPorComida = presupuestoMaximo / comidas;
alert(`Podés gastar $${gastoPorComida.toFixed(2)} en cada comida para que te alcance la plata durante los ${diasViaje} días de viaje.`);
