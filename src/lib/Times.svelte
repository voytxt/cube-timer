<script lang="ts">
  import { useTimes } from '$stores/times.svelte';

  const times = useTimes();
</script>

<table>
  <tbody>
    {#each times.value.toReversed() as time, index}
      <tr>
        <td class="time">{time.formattedTime}</td>
        <td class="date"
          >{time.date.toLocaleString(undefined, {
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          })}</td
        >
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
    &.date {
      color: gray;
    }
  }
</style>
