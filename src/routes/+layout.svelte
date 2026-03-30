<script lang="ts">
  import { ListCheck, MessageCircle, Radio, Users } from '@lucide/svelte';
  import { v4 as uuidv4 } from 'uuid';
  import Header from '../shared/components/ui/Header/Header.svelte';
  import Sidenav from '../shared/components/ui/Sidenav/Sidenav.svelte';
  import type { SidenavItemProps } from '../shared/components/ui/Sidenav/SidenavItem.props';
  import './layout.css';

  let { children } = $props();

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

    <main class="col-span-10 bg-[#040e1f] text-[#E2E8F0]">
      {@render children()}
    </main>
  </div>
</div>
