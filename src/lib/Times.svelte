<script lang="ts">
  import { useTimes } from '$stores/times.svelte';

  const times = useTimes();
</script>

<table>
  <tbody>
    {#each times.value.toReversed() as time, i}
      {@const index = (times.value.length - i).toString().padStart(Math.floor(Math.log10(times.value.length)) + 1, '0')}
      {@const date = time.date.toLocaleString(undefined, {
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })}
      <tr>
        <td class="time">{time.formattedTime}</td>
        <td class="index">#{index}</td>
        <td class="date">{date}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    padding: 1rem;
  }

  td {
    padding: 0.25rem 0.5rem;

    &.time {
      text-align: right;
    }
    &.index {
      color: gray;
    }
    &.date {
      color: gray;
    }
  }
</style>
