<script lang="ts">
  import { useScramble } from '$stores/scramble.svelte';
  import { useTimes } from '$stores/times.svelte';

  const scramble = useScramble();
  const times = useTimes();

  let status: 'stopped' | 'running' = $state('stopped');
  let start: null | number = $state(null);
  let timer = $state(0);

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === ' ') startStop();
  }

  function startStop() {
    if (status === 'stopped') {
      status = 'running';
      start = new Date().getTime();
      updateTimer();
    } else {
      status = 'stopped';
      start = null;
      times.addTime(timer, scramble.value!);
      scramble.generateScramble();
    }
  }

  function updateTimer() {
    if (status !== 'running') return;

    timer = new Date().getTime() - start!;
    requestAnimationFrame(updateTimer);
  }
</script>

<svelte:window onkeypress={handleKeyPress} />

<div>{(timer / 1000).toFixed(status === 'running' ? 1 : 3)}</div>

<style>
  div {
    text-align: center;
    font-size: 5rem;
  }
</style>
