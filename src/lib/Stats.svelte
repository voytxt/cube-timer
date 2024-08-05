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
        <td title={stat.description}>{stat.name}</td>
        <td>{stat.current?.formattedTime}</td>
        <td>{stat.best?.formattedTime}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
</style>
