import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'teal' | 'danger' | 'success' | 'muted';
export type ButtonSize    = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<HTMLButtonAttributes, 'class'> {
  /** Visual style of the button. @default 'primary' */
  variant?: ButtonVariant;
  /** Height size of the button. @default 'md' */
  size?: ButtonSize;
  /** Disables interaction. */
  disabled?: boolean;
  /** Shows a loading spinner and disables interaction. */
  loading?: boolean;
  /** HTML button type. @default 'button' */
  type?: 'button' | 'submit' | 'reset';
  /** Optional icon snippet rendered on the left. */
  icon?: Snippet;
  /** Optional icon snippet rendered on the right. */
  iconRight?: Snippet;
  /** Additional CSS classes. */
  class?: string;
  /** Click handler. */
  onclick?: (event: MouseEvent) => void;
  /** Button label content. */
  children?: Snippet;
}
