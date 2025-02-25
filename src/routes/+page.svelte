<script lang="ts">
  import Info from '$lib/Info.svelte';
  import Scramble from '$lib/Scramble.svelte';
  import Stats from '$lib/Stats.svelte';
  import Timer from '$lib/Timer.svelte';
  import Times from '$lib/Times.svelte';
  import { setSearchDebug } from 'cubing/search';
  import '../app.css';
  import { useScramble } from '$stores/scramble.svelte';

  setSearchDebug({ logPerf: false });

  useScramble().generateScramble();
</script>

<header
  class="bg-card-background grid min-w-56 place-items-center rounded-xl border-slate-500 shadow-xl dark:border"
>
  <Info />
</header>
<div
  class="bg-card-background grid place-items-center rounded-xl border-slate-500 px-6 shadow-xl dark:border"
>
  <Scramble />
</div>
<aside
  class="bg-card-background rounded-xl border-slate-500 p-4 shadow-xl [grid-area:span_2] dark:border"
>
  <Stats />
</aside>
<aside
  class="bg-card-background overflow-y-scroll rounded-xl border-slate-500 p-4 shadow-xl dark:border"
>
  <Times />
</aside>
<main
  class="bg-card-background grid place-items-center rounded-xl border-slate-500 shadow-xl dark:border"
>
  <Timer />
</main>
