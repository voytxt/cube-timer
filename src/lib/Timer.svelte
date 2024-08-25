<script lang="ts">
  import { useScramble } from '$stores/scramble.svelte';
  import { useTimer } from '$stores/timer.svelte';
  import { useTimes } from '$stores/times.svelte';

  const scramble = useScramble();
  const timer = useTimer();
  const times = useTimes();

  const KEYBOARD_KEY = ' ';
  const MIN_HOLD_TIME = 300;

  let colorClass: '' | 'red' | 'green' = $state('');
  let colorTimeout: null | number = $state(null);

  /**
   * Time at which user started holding the `KEYBOARD_KEY`
   */
  let holdStart: number | null = $state(null);

  /**
   * Is the `KEYBOARD_KEY` is being held down
   */
  let isHeld = $state(false);

  /**
   * After stopping the timer, did the user let go of the `KEYBOARD_KEY`
   */
  let didLetGo = $state(true);

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key !== KEYBOARD_KEY) return;

    if (!timer.isRunning && !isHeld) {
      holdStart = new Date().getTime();

      colorClass = 'red';
      clearTimeout(colorTimeout ?? undefined);
      colorTimeout = setTimeout(() => {
        colorClass = 'green';
      }, MIN_HOLD_TIME);
    } else if (timer.isRunning) {
      didLetGo = false;

      timer.stop();
      times.addTime(timer.time, scramble.value!);
      scramble.generateScramble();
    }

    isHeld = true;
  }

  function handleKeyUp(event: KeyboardEvent) {
    if (event.key !== KEYBOARD_KEY) return;

    colorClass = '';
    clearTimeout(colorTimeout ?? undefined);

    if (!timer.isRunning && isHeld && didLetGo) {
      const holdTime = new Date().getTime() - holdStart!;

      if (holdTime > MIN_HOLD_TIME) {
        timer.start();
      }
    } else if (!timer.isRunning) {
      didLetGo = true;
    }

    isHeld = false;
  }
</script>

<svelte:window onkeydown={handleKeyDown} onkeyup={handleKeyUp} />

<div class="text-center text-8xl {colorClass}">
  {(timer.time / 1000).toFixed(timer.isRunning ? 1 : 3)}
</div>

<style lang="postcss">
  .red {
    @apply text-red-500;
  }
  .green {
    @apply text-green-500;
  }
</style>
