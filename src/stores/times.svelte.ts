/**
 * rawTime = number of milliseconds
 * formattedTime = number of seconds
 */
type Time = {
  rawTime: number;
  formattedTime: string;
  // penalty: ?; // todo
  date: Date;
  scramble: string;
};

const times: Time[] = $state([]);

export function useTimes() {
  return {
    get value() {
      return times;
    },
    addTime: (time: number, scramble: string) => {
      times.push({
        rawTime: time,
        formattedTime: (time / 1000).toFixed(3),
        date: new Date(),
        scramble,
      });
    },
  };
}
