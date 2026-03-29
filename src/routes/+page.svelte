<script lang="ts">
  import { Radio, Users, ListCheck, MessageCircle } from '@lucide/svelte';
  import Sidenav from '../shared/components/ui/Sidenav/Sidenav.svelte';
  import type { SidenavItemProps } from '../shared/components/ui/Sidenav/SidenavItem.props';
  import { v4 as uuidv4 } from 'uuid';
  import Header from '../shared/components/ui/Header/Header.svelte';

  const items: SidenavItemProps[] = [
    {
      id: uuidv4(),
      name: 'Live Feed',
      icon: Radio,
      active: true,
    },
    {
      id: uuidv4(),
      name: 'Live Feed',
      icon: Users,
      active: true,
    },
    {
      id: uuidv4(),
      name: 'Story Queue',
      icon: ListCheck,
      active: true,
    },
    {
      id: uuidv4(),
      name: 'Story Queue',
      icon: MessageCircle,
      active: true,
    },
  ];
</script>

<div class="min-h-screen">
  <Header />

  <div class="grid grid-cols-12">
    <aside class="col-span-2">
      <Sidenav {items} />
    </aside>

    <main class="col-span-10 p-4">
      <h1>zsdasdasdadsasd</h1>
    </main>
  </div>
</div>
