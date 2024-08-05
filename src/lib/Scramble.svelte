<script lang="ts">
  import { useScramble } from '../stores/scramble.svelte';

  export const scramble = useScramble();
</script>

{#if scramble.value === null}
  <div class="text-2xl">Loading...</div>
{:else}
  <div class="text-2xl">{scramble.value}</div>
{/if}
