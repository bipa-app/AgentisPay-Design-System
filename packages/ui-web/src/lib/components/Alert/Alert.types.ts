import type { Snippet } from 'svelte';

export type AlertVariant = 'info' | 'success' | 'danger' | 'warning' | 'muted';

export interface AlertProps {
  /** Visual variant. @default 'info' */
  variant?: AlertVariant;
  /** Bold title text. */
  title?: string;
  /** Show a dismiss button. @default false */
  dismissible?: boolean;
  class?: string;
  /** Called when the alert is dismissed. */
  ondismiss?: () => void;
  children?: Snippet;
}
