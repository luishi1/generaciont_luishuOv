const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'ElSeñorDeLaNoche',
    'chili',
    'serendipity',    
    'mellifluous',   
    'abuelita',      
    'mariposa',       
    'wonder',         
    'felicidad',      
    'exquisite',     
    'tranquilo',      
    'perception',    
    'esperanza',     
    'symphony',      
    'caracol',       
    'kaleidoscope',  
    'murcielago',     
    'ethereal',      
    'sabroso',        
    'galaxy',       
    'paz',            
    'infinity',      
    'corazón'         
];


const randomWordElement = document.getElementById('randomWord');
const inputElement = document.getElementById('text');
const timeSpanElement = document.getElementById('timeSpan');
const scoreElement = document.getElementById('score');
const endGameContainer = document.getElementById('end-game-container');

let palabraAleatoria;
let time = 10;
let score = 0;
let timer;

function randomWords() {
    return words[Math.floor(Math.random() * words.length)];
}

function addToDOM() {
    palabraAleatoria = randomWords();
    randomWordElement.textContent = palabraAleatoria;
}

inputElement.addEventListener('input', (e) => {
    const palabraIngresada = e.target.value;
    
    if (palabraIngresada === palabraAleatoria) {
        time += 3;
        score++;
        scoreElement.textContent = score;
        e.target.value = '';
        addToDOM();
    }
});

function actualizarTiempo() {
    timer = setInterval(() => {
        time--;
        timeSpanElement.textContent = `${time}s`;
        
        if (time <= 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
}

function updateScore() {
    score++;
    scoreElement.textContent = score;
}

function gameOver() {
    endGameContainer.innerHTML = `
        <h2>¡Se acabó el tiempo!</h2>
        <p>Puntaje final: ${score}</p>
        <button onclick="location.reload()">Reiniciar juego</button>
    `;
    document.querySelector('.main').style.display = 'none';
}

addToDOM();
actualizarTiempo();
