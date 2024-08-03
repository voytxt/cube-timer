<script>
  import Info from '$lib/Info.svelte';
  import Scramble from '$lib/Scramble.svelte';
  import Timer from '$lib/Timer.svelte';
  import Times from '$lib/Times.svelte';
  import '../main.css';
</script>

<header class="card info">
  <Info />
</header>
<div class="card scramble">
  <Scramble />
</div>
<aside class="card times">
  <Times />
</aside>
<main class="card timer">
  <Timer />
</main>

<style>
  :global(body) {
    font-family: sans-serif;
    background-color: var(--background);
    color: white;
    margin: 0;
    font-family: 'Cartograph CF', monospace; /* todo switch font https://www.google.com/search?client=firefox-b-d&q=fonts+like+cartograph+cf */
    gap: 1rem;
    height: 100vh;
    padding: 1rem;
    margin: 0;
    box-sizing: border-box;

    display: grid;
    grid-template: 6rem 1fr / max-content 1fr;
  }

  .card {
    background-color: var(--header-background);
    border-radius: 1rem;

    &.info {
      display: flex;
      justify-content: center;
      padding: 0.5rem 2rem;
    }

    &.scramble {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.times {
      overflow-y: scroll;
      scrollbar-color: var(--background) var(--header-background);
      scrollbar-width: thin;
    }

    &.timer {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
