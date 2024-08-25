/**
 * Is the timer running
 */
let isRunning = $state(false);

/**
 * If `isRunning`, then it's the time at the start of the timer,
 * if it's not, then it's `null`
 */
let start: null | number = $state(null);

/**
 * Current time in milliseconds, doesn't reset when `stop()` is called
 */
let time = $state(0);

export function useTimer() {
  function tick() {
    if (!isRunning) return;

    time = new Date().getTime() - start!;
    requestAnimationFrame(tick);
  }

  return {
    /**
     * Current time on the timer in milliseconds
     */
    get time() {
      return time;
    },
    /**
     * Is the timer running
     */
    get isRunning() {
      return isRunning;
    },
    /**
     * Reset the time and start the timer
     */
    start: () => {
      isRunning = true;
      start = new Date().getTime();
      tick();
    },
    /**
     * Stop the timer, don't reset the time
     */
    stop: () => {
      isRunning = false;
      start = null;
    },
  };
}
