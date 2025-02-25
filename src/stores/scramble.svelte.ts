import type { Alg } from 'cubing/alg';
import { randomScrambleForEvent } from 'cubing/scramble';

let scramble: Alg | null = $state(null);

export function useScramble() {
  async function generateScramble() {
    scramble = null;
    scramble = await randomScrambleForEvent('333');
  }

  return {
    get value() {
      return scramble?.toString() ?? null;
    },
    generateScramble,
  };
}
