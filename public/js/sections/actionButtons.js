import { editLastPenalty as editLastSolvePenalty } from './history.js';

const onClick = (event) => {
  switch (event.target.id) {
    case 'ok':
      editLastSolvePenalty(null);
      break;
    case 'plusTwo':
      editLastSolvePenalty('+2');
      break;
    case 'dnf':
      editLastSolvePenalty('DNF');
      break;
    case 'delete':
      alert('Not yet inplemented');
  }
};

export { onClick };
