<script lang="ts">
  import { Check, Hourglass } from 'lucide-svelte';
  import type { VoteCardProps } from './VoteCard.props';

  const { vote }: { vote: VoteCardProps } = $props();
  const statusClasses = {
    voted: 'border-[#10B981]',
    voting: 'border-[#2b384f]',
  };
</script>

<div class="w-fit">
  <div
    class={`flex h-[200px] w-[130px] items-center justify-center rounded-xl border-3 bg-[#15263f] px-9 py-16 ${statusClasses[vote.status]}`}
  >
    {#if vote.status === 'voted'}
      <div class="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#10B981]">
        <Check size={16} strokeWidth={6} color="#15263f" />
      </div>
    {:else if vote.status === 'voting'}
      <Hourglass color="#2b384f" size={32} />
    {:else}{/if}
  </div>
  <div class="text-center">{vote.userName}</div>
</div>
