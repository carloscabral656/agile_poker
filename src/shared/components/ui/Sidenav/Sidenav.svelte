<script lang="ts">
  import type { SidenavItemProps } from './SidenavItem.props';
  import SidenavItem from './SidenavItem.svelte';

  let { items }: { items: SidenavItemProps[] } = $props();
</script>

<nav class="h-svh w-[200px] bg-[#061326] py-4">
  <h3 class="px-6 font-bold text-[#E2E8F0]">Sprint 24</h3>
  <h4 class="px-6 text-sm text-[#64748B]">Active Session</h4>

  <ul class="mt-4 flex flex-col gap-2 p-2 text-white">
    {#each items as item (item.id)}
      <SidenavItem {item} />
    {/each}
  </ul>
</nav>
