<script lang="ts">
  import ActiveTask from './components/ActiveTask/ActiveTask.svelte';
  import type { ActiveTaskProps } from './components/ActiveTask/ActiveTaskProps.props';
  import BoardVoting from './components/BoardVoting/BoardVoting.svelte';

  const task: ActiveTaskProps = {
    title: 'AP-102: Implement Real-Time Websocket layer for voting states',
    description:
      'Create a resilient WebSocket connection to handle concurrent voting events. Ensure state consistency across clients and implement a reconnection strategy for unstable networks.',
    relatorName: 'Carlos Eduardo',
  };
</script>

<div class="w-full px-5">
  <ActiveTask {task} />
  <BoardVoting />
</div>
