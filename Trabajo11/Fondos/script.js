const colorForm = document.getElementById('colorForm');
const colorInput = document.getElementById('colorInput');
const body = document.body;
const message = document.getElementById('message');

colorForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const color = colorInput.value.trim(); 

    body.style.backgroundColor = color;

    if (isColorValid(color)) {
        message.className = 'hidden';
    } else {
        message.innerHTML = 'El color "' + color + '" no existe.<br>Solamente se acepta el nombre del color en inglés.';
        message.className = ''; 
        body.style.backgroundColor = 'white'; 
    }

    colorInput.value = ''; 
});

function isColorValid(color) {
    const s = new Option().style;
    s.color = color;
    return s.color !== ''; 
}
