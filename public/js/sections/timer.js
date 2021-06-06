import { newScramble } from './scramble.js';
import { add as addSolve } from './history.js';
import { Solve } from '../common/index.js';

const timer = document.getElementById('timer');

let startingValue = null;
let startTimeout;

let starting = false; // holding down spacebar
let canStart = false; // spacebar was held for at least 0.3s
let running = false; // solving the cube
let canRestart = true; // spacebar was released after stopping the timer

const setColor = (colorName) => {
  const colorClasses = {
    default: 'text-black',
    green: 'text-emerald-500',
    red: 'text-red-500',
    blue: 'text-blue-500',
  };

  timer.classList.remove(...Object.values(colorClasses));
  timer.classList.add(colorClasses[colorName]);
};

const onKey = (event) => {
  if (event.key !== ' ') return;

  event.preventDefault(); // disable pressing buttons and stuff with the spacebar

  onPress(event.type);
};

const onMouse = (event) => {
  onPress(event.type);
};

const onTouch = (event) => {
  if (['ok', 'plusTwo', 'dnf', 'delete'].includes(event.target.id)) return;

  event.preventDefault(); // disable pressing stuff when it's basically invisible

  onPress(event.type);
};

const onPress = (type) => {
  switch (type) {
    case 'keydown':
    case 'mousedown':
    case 'touchstart':
      // start the 0.3s cooldown
      if (!running && !starting && canRestart) {
        startTimeout = setTimeout(() => {
          canStart = true;
          hideUI();
          setColor('green');
        }, 300);

        starting = true;

        setColor('red');
      }

      // stop the timer
      if (running && !starting) {
        stop();

        canRestart = false;
        running = false;

        hideUI(true);

        setColor('blue');
      }

      break;

    case 'keyup':
    case 'mouseup':
    case 'touchend':
      // start the timer
      if (canStart) {
        start();

        canStart = false;
        running = true;
        starting = false;

        setColor('default');
      }

      // reset the 0.3s cooldown
      if (starting) {
        clearTimeout(startTimeout);
        starting = false;
        setColor('blue');
      }

      // the timer can start again
      canRestart = true;

      break;
  }
};

let rawTime, formattedTime;

const hideUI = (show = false) => {
  [...document.getElementsByClassName('hide-when-timing')].forEach((element) => {
    // using remove and add instead of toggle, because we don't want to see action buttons when there is no solve completed yet
    show ? element.classList.remove('hidden') : element.classList.add('hidden');
  });
};

const updateUI = () => {
  rawTime = performance.now() - startingValue;
  formattedTime = Solve.formatTime(rawTime);

  if (running) {
    timer.innerText = formattedTime;
    requestAnimationFrame(updateUI);
  }
};

const start = () => {
  startingValue = performance.now();
  running = true;
  requestAnimationFrame(updateUI);
};

const stop = () => {
  addSolve(rawTime, formattedTime);
  running = false;
  newScramble();
};

export { start, stop, onKey, onMouse, onTouch };
