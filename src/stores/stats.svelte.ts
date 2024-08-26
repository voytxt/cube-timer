import { useTimes, type Time } from './times.svelte';

type Stat = {
  name: string;
  description: string | null;
  current: Time | Average | null;
  best: Time | Average | null;
};

type Average = {
  rawTime: number;
  formattedTime: string;
};

/**
 * Calculate the average of N times (aoN), where the worst 5 % of times and the best 5 % of times get removed
 * then the final average is calculated as an arithmetic mean from the remaining 90 % of times
 * @param times - array of Times
 * @returns the average
 */
function calculateAverage(times: Time[]): number {
  const n = times.length;

  if (n < 2) throw new Error('not possible to calculate an average of less than 2 times');

  if (n === 2) {
    return times.reduce((a, c) => a + c.rawTime, 0) / 2;
  }

  const sum = times
    .toSorted()
    .slice(Math.ceil(n * 0.05), Math.floor(n * 0.95))
    .reduce((a, c) => a + c.rawTime, 0);

  return sum / n;
}

const statsPreset: string[] = $state([
  'single',
  'mo3',
  'ao5',
  'ao12',
  'ao50',
  'ao100',
  'ao500',
  'aoall',
]);

const stats: Stat[] = $derived.by(() => {
  const times = useTimes().value;

  return statsPreset.map((preset) => {
    const stat: Stat = {
      name: preset,
      description: null,
      current: null,
      best: null,
    };

    if (preset === 'single') {
      if (times.length >= 1) {
        stat.current = times.at(-1) ?? null;
        stat.best = times.toSorted((a, b) => a.rawTime - b.rawTime)[0] ?? null;
      }
    } else if (preset.startsWith('mo')) {
      const arg = preset.slice(2);

      if (/^\d+$/.test(arg)) {
        const numberOfSolves = Number.parseInt(arg);

        if (times.length >= numberOfSolves) {
          const means: number[] = [];

          for (let i = 0; i < times.length - numberOfSolves + 1; i++) {
            means.push(times.slice(i, i + numberOfSolves).reduce((a, c) => a + c.rawTime, 0));
          }

          const bestMean = means.toSorted((a, b) => a - b)[0];

          stat.description = `arithmetic mean of ${numberOfSolves} consecutive solves`;
          stat.current = {
            rawTime: means.at(-1)!,
            formattedTime: (means.at(-1)! / 1000).toFixed(3),
          };
          stat.best = {
            rawTime: bestMean,
            formattedTime: (bestMean / 1000).toFixed(3),
          };
        }
      }
    } else if (preset.startsWith('ao')) {
      const arg = preset.slice(2);

      if (/^\d+$/.test(arg)) {
        const numberOfSolves = Number.parseInt(arg);

        if (times.length >= numberOfSolves) {
          const averages: number[] = [];

          for (let i = 0; i < times.length - numberOfSolves + 1; i++) {
            averages.push(calculateAverage(times.slice(i, i + numberOfSolves)));
          }

          const bestMean = averages.toSorted((a, b) => a - b)[0];

          // stat.description = `arithmetic mean of ${numberOfSolves} consecutive solves, where the ${}`;
          stat.current = {
            rawTime: averages.at(-1)!,
            formattedTime: (averages.at(-1)! / 1000).toFixed(3),
          };
          stat.best = {
            rawTime: bestMean,
            formattedTime: (bestMean / 1000).toFixed(3),
          };
        }
      } else if (arg === 'all') {
        if (times.length >= 2) {
          const averages: number[] = [];

          for (let i = 2; i <= times.length; i++) {
            averages.push(calculateAverage(times.slice(0, i)));
          }

          const bestMean = averages.toSorted((a, b) => a - b)[0];

          // stat.description = `arithmetic mean of ${numberOfSolves} consecutive solves`;
          stat.current = {
            rawTime: averages.at(-1)!,
            formattedTime: (averages.at(-1)! / 1000).toFixed(3),
          };
          stat.best = {
            rawTime: bestMean,
            formattedTime: (bestMean / 1000).toFixed(3),
          };
        }
      }
    }

    return stat;
  });
});

export function useStats() {
  return {
    get value() {
      return stats;
    },
  };
}
