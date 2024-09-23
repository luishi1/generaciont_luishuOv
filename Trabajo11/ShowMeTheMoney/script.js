const btnMoney = document.getElementById('btnMoney');
const imgMoney = document.getElementById('imgMoney');

const btnMiami = document.getElementById('btnMiami');
const imgMiami = document.getElementById('imgMiami');

const btnMaiameee = document.getElementById('btnMaiameee');
const imgMaiameee = document.getElementById('imgMaiameee');

function toggleImage(button, image) {
    button.addEventListener('click', () => {
        if (image.classList.contains('oculto')) {
            image.classList.remove('oculto');
        } else {
            image.classList.add('oculto');
        }
    });

    image.addEventListener('click', () => {
        image.classList.add('oculto');
    });
}

toggleImage(btnMoney, imgMoney);
toggleImage(btnMiami, imgMiami);
toggleImage(btnMaiameee, imgMaiameee);