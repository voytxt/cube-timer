<script lang="ts">
  import { useScramble } from '../stores/scramble.svelte';

  export const scramble = useScramble();
</script>

{#if scramble.value === null}
  <div>Loading...</div>
{:else}
  <div>{scramble.value}</div>
{/if}

<style>
  div {
    font-family: 'Cartograph CF';
    font-size: 1.5rem;
  }
</style>
