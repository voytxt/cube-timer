import { getScramble } from './scramble/scramby.js';

const scramble = document.getElementById('scramble');

const newScramble = () => {
  scramble.innerText = getScramble();
};

export { newScramble };
