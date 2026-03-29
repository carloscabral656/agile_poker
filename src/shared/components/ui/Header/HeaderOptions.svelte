<script src="ts">
  import { BellRing, Cog } from 'lucide-svelte';
  import UserProfile from '../UserProfile/UserProfile.svelte';
</script>

<div class="flex items-center justify-center gap-4">
  <button class="flex-1 shrink-0 grow cursor-pointer rounded-sm bg-[#6366F1] px-4"
    >Create Session</button
  >

  <div class="flex cursor-pointer items-center justify-center rounded-full">
    <BellRing color="#64748B" size={16} />
  </div>

  <div class="flex cursor-pointer items-center justify-center rounded-full">
    <Cog color="#64748B" size={16} />
  </div>

  <UserProfile userName="Carlos Cabral" userInitials="CA" />
</div>
