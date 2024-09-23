const autoRojo = document.querySelector('#autoRojo');
const autoAzul = document.querySelector('#autoAzul');
const autoVerde = document.querySelector('#autoVerde'); // Referencia al auto verde
const pista = document.querySelector('#pista');

let acumuladorRojo = 0;
let acumuladorAzul = 0;
let acumuladorVerde = 0; 

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a': 
            acumuladorRojo += 10; 
            autoRojo.style.marginLeft = acumuladorRojo + 'px'; 
            verificarGanador(acumuladorRojo, autoRojo, 'Rojo');
            break;
        case 'l': 
            acumuladorAzul += 10; 
            autoAzul.style.marginLeft = acumuladorAzul + 'px'; 
            verificarGanador(acumuladorAzul, autoAzul, 'Azul');
            break;
        case 'g': 
            acumuladorVerde += 10;
            autoVerde.style.marginLeft = acumuladorVerde + 'px';
            verificarGanador(acumuladorVerde, autoVerde, 'Verde');
            break;
    }
});

// Función para verificar si hay un ganador
function verificarGanador(acumulador, auto, color) {
    const anchoPista = pista.clientWidth;
    const anchoAuto = auto.clientWidth;

    if (acumulador + anchoAuto >= anchoPista) {
        alert(`¡El auto ${color} ganó la carrera!`);
        acumuladorRojo = 0;
        acumuladorAzul = 0;
        acumuladorVerde = 0; 
        autoRojo.style.marginLeft = '0px';
        autoAzul.style.marginLeft = '0px';
        autoVerde.style.marginLeft = '0px'; 
    }
}
