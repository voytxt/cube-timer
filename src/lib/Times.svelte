<script lang="ts">
  import { useTimes } from '$stores/times.svelte';

  const times = useTimes();
</script>

<table class="p-4">
  <tbody>
    {#each times.value.toReversed() as time, i}
      {@const index = (times.value.length - i)
        .toString()
        .padStart(Math.floor(Math.log10(times.value.length)) + 1, '0')}
      {@const date = time.date.toLocaleString(undefined, {
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })}
      <tr>
        <td class="text-right">{time.formattedTime}</td>
        <td class="text-gray-400">#{index}</td>
        <td class="text-gray-400">{date}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style lang="postcss">
  td {
    @apply px-2 py-1;
  }
</style>
