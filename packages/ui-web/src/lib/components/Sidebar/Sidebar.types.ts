import type { Snippet } from 'svelte';

export interface SidebarItem {
  /** Unique identifier. */
  id: string;
  /** Display label. */
  label: string;
  /** Optional icon snippet. */
  icon?: Snippet;
  /** Optional badge count. */
  badge?: number | string;
  /** Renders a divider line instead of a nav item when true. */
  divider?: boolean;
  /** @default false */
  disabled?: boolean;
}

export interface SidebarProps {
  items: SidebarItem[];
  /** Active item id (bindable). */
  active?: string;
  /** Collapse to icon-only width. @default false */
  collapsed?: boolean;
  class?: string;
  /** Called when a nav item is clicked. */
  onnavigate?: (item: SidebarItem) => void;
  /** Rendered at the bottom of the sidebar. */
  footer?: Snippet;
}
