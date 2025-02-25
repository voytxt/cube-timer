<script lang="ts">
  import { useStats } from '$stores/stats.svelte';

  const stats = useStats();
</script>

<table>
  <tbody>
    <tr>
      <th></th>
      <th title="current">curr</th>
      <th>best</th>
    </tr>

    {#each stats.value as stat}
      <tr>
        <td title={stat.description} class="px-3 py-1">{stat.name}</td>
        <td class="px-3 py-1">{stat.current?.formattedTime}</td>
        <td class="px-3 py-1">{stat.best?.formattedTime}</td>
      </tr>
    {/each}
  </tbody>
</table>
