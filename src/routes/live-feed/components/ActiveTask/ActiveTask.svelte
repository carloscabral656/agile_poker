<script lang="ts">
  import { Link } from 'lucide-svelte';
  import type { ActiveTaskProps } from './ActiveTaskProps.props';
  import { User } from '@lucide/svelte';

  let { task }: { task: ActiveTaskProps } = $props();
</script>

<div class="flex w-full flex-col gap-2 rounded-xl bg-[#0b1a2f] p-8 text-[#E2E8F0]">
  <h3 class="text-3xl">{task.title}</h3>
  <div class="text-sm">{task.description}</div>
  <div class="flex gap-4">
    <span
      class="flex w-fit cursor-pointer items-center justify-center gap-2 text-[12px] text-[#a3a6ff] hover:underline"
    >
      <Link size={12} />
      View in Jira
    </span>

    <div class="flex w-fit items-center justify-center gap-2 text-[12px]">
      <User size={12} />
      {task.relatorName}
    </div>
  </div>
</div>
