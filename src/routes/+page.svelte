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

<header class="card min-w-56 grid-center">
  <Info />
</header>
<div class="card px-6 grid-center">
  <Scramble />
</div>
<aside class="card p-4 [grid-area:span_2]">
  <Stats />
</aside>
<aside class="card overflow-y-scroll p-4">
  <Times />
</aside>
<main class="card grid-center">
  <Timer />
</main>

<style lang="postcss">
  .card {
    @apply rounded-xl border-slate-500 bg-card-background shadow-card dark:border;
  }
</style>
