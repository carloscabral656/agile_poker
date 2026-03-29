<script lang="ts">
  import type { SidenavItemProps } from './SidenavItem.props';

  let { item }: { item: SidenavItemProps } = $props();
</script>

<li
  class="flex items-center gap-2 rounded-md px-4 py-2 text-[#64748B] hover:cursor-pointer hover:bg-[#102036] hover:text-[#a3a6ff]"
>
  <item.icon size={16} />
  <span>{item.name}</span>
</li>
