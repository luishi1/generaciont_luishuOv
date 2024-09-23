const button = document.getElementById('beepButton');
const colores = ['color1', 'color2', 'color3', 'color4', 'color5'];

function seEjecutaEnEvento() {
    document.body.insertAdjacentHTML('beforeend', '<p>BEEP</p>');
    colores.forEach(color => document.body.classList.remove(color));
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.classList.add(colorAleatorio);
}

button.addEventListener('click', seEjecutaEnEvento);
