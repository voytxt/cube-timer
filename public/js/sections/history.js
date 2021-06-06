import { update as updatePB } from './personalBests.js';
import { Solve } from '../common/index.js';

const history = document.getElementById('history');

let solves = [];

const updateUI = () => {
  let finalHTML = '';
  solves.forEach((solve) => {
    finalHTML += /* html */ `
      <div>${solve.formattedTime}</div>
    `;
  });
  history.innerHTML = finalHTML;

  updatePB();
};

const add = (rawTime, formattedTime, penalty = null) => {
  solves.unshift(new Solve(rawTime));
  // console.log(solves);
  updateUI();
};

const editLastPenalty = (newPenalty) => {
  solves[0].changePenalty(newPenalty);
  document.getElementById('timer').innerText = solves[0].formattedTime;
  updateUI();
};

const getBestSolves = () => {
  if (solves.length === 0) return null;

  const bestSingle = [...solves].sort((a, b) => {
    return a.rawTimeWithPenalties - b.rawTimeWithPenalties;
  })[0];

  return {
    single: [bestSingle, 'pbSingle'],
  };
};

// setInterval(() => console.log(getBestSolves()), 3000);

export { add, getBestSolves, editLastPenalty };
