import type { HTMLInputAttributes } from 'svelte/elements';

export interface InputProps extends Omit<HTMLInputAttributes, 'class' | 'value'> {
  /** Visible label above the input. */
  label?: string;
  /** Placeholder text. */
  placeholder?: string;
  /** Bindable value. */
  value?: string;
  /** Input type. @default 'text' */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'search' | 'url';
  /** Error message — shows below input in red and sets aria-invalid. */
  error?: string;
  /** Helper message — shows below input in muted color. */
  helper?: string;
  /** @default false */
  disabled?: boolean;
  /** @default false */
  required?: boolean;
  /** Explicit id. Auto-generated if omitted. */
  id?: string;
  name?: string;
  class?: string;
  oninput?: (e: Event) => void;
  onchange?: (e: Event) => void;
}
