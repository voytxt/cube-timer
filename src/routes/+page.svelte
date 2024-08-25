<script lang="ts">
  import Info from '$lib/Info.svelte';
  import Scramble from '$lib/Scramble.svelte';
  import Stats from '$lib/Stats.svelte';
  import Timer from '$lib/Timer.svelte';
  import Times from '$lib/Times.svelte';
  import { setSearchDebug } from 'cubing/search';
  import '../main.css';

  setSearchDebug({ logPerf: false });
</script>

<header class="card flex justify-center px-8 py-2">
  <Info />
</header>
<div class="card flex items-center justify-center">
  <Scramble />
</div>
<aside class="card px-8 py-2 [grid-area:span_2]">
  <Stats />
</aside>
<aside
  class="card overflow-y-scroll p-4 scrollbar-thin scrollbar-color-light dark:scrollbar-color-dark"
>
  <Times />
</aside>
<main class="card flex items-center justify-center">
  <Timer />
</main>

<style lang="postcss">
  .card {
    @apply rounded-2xl bg-card-background-light dark:bg-card-background-dark;
  }
</style>
