const divMagia = document.getElementById('magia');
const imagenMagica = document.getElementById('imagenMagica');

divMagia.addEventListener('mouseover', () => {
    imagenMagica.style.display = 'none';
    divMagia.innerText = 'QUE HICISTE CHINCHULIN';
});

divMagia.addEventListener('mouseout', () => {
    imagenMagica.style.display = 'block';
    divMagia.innerText = 'NOOOOO NO PASES POR ACA ENCIMA NO LO HAGAS!!!!!!!!!!!!!';
});
