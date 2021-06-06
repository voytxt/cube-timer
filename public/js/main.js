import { onClick } from './sections/actionButtons.js';
import { newScramble } from './sections/scramble.js';
import { onKey, onMouse, onTouch } from './sections/timer.js';

newScramble();

document.addEventListener('keydown', (event) => onKey(event));
document.addEventListener('keyup', (event) => onKey(event));
// document.addEventListener('mousedown', (event) => onMouse(event));
// document.addEventListener('mouseup', (event) => onMouse(event));
document.addEventListener('touchstart', (event) => onTouch(event));
document.addEventListener('touchend', (event) => onTouch(event));
document.addEventListener('click', (event) => onClick(event));
