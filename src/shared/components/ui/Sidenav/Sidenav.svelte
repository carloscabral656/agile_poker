<script lang="ts">
  import type { SidenavItemProps } from './SidenavItem.props';
  import SidenavItem from './SidenavItem.svelte';

  let { items }: { items: SidenavItemProps[] } = $props();
</script>

<nav class="h-svh w-[200px] bg-[#061326]">
  <ul class="flex flex-col gap-2 p-2 text-white">
    {#each items as item (item.id)}
      <SidenavItem {item} />
    {/each}
  </ul>
</nav>
