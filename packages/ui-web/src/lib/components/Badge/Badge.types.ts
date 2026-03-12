import type { Snippet } from 'svelte';

export type BadgeVariant = 'default' | 'pending' | 'success' | 'danger' | 'info' | 'teal';
export type BadgeSize    = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  /** Visual variant. @default 'default' */
  variant?: BadgeVariant;
  /** Animate with a pulse. Use for 'pending' states. @default false */
  pulse?: boolean;
  /** Size. @default 'md' */
  size?: BadgeSize;
  class?: string;
  children?: Snippet;
}
