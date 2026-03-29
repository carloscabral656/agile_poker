import type { LucideIcon } from '@lucide/svelte';

export interface SidenavItemProps {
  id: string;
  name: string;
  icon: LucideIcon;
  active: boolean;
}
