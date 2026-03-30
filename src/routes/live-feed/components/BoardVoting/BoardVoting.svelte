<script lang="ts">
  import { v4 as uuidv4 } from 'uuid';
  import type { VoteCardProps } from '../../../../shared/components/ui/VoteCard/VoteCard.props';
  import VoteCard from '../../../../shared/components/ui/VoteCard/VoteCard.svelte';

  const votes: VoteCardProps[] = [
    {
      id: uuidv4(),
      status: 'voted',
      userName: 'Carlos',
      value: 8,
    },
    {
      id: uuidv4(),
      status: 'voted',
      userName: 'Carlos',
      value: 8,
    },
    {
      id: uuidv4(),
      status: 'voting',
      userName: 'Eduardo',
      value: 8,
    },
  ];
</script>

<div class="py-6">
  <div class="grid grid-cols-6 gap-6">
    {#each votes as vote (vote.id)}
      <div class="flex items-center justify-center">
        <VoteCard {vote} />
      </div>
    {/each}
  </div>
</div>
