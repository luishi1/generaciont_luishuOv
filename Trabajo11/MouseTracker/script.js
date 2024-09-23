const body = document.body;
const tracker = document.getElementById('tracker');
let isMouseDown = false;

body.addEventListener('mousedown', () => {
    isMouseDown = true;
});

body.addEventListener('mouseup', () => {
    isMouseDown = false;
});

body.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        tracker.style.top = event.clientY + 'px';
        tracker.style.left = event.clientX + 'px';
    }
});
