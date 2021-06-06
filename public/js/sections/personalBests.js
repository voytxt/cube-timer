import { getBestSolves } from './history.js';

const elements = {
  single: document.getElementById('pbSingle'),
};

const update = () => {
  const bestSolves = getBestSolves();
  Object.values(bestSolves).forEach(([solve, id]) => {
    const element = document.getElementById(id);
    element.innerText = solve.formattedTime;
    element.parentElement.style.display = 'block';
  });
};

export { update };
