import type { Snippet } from 'svelte';

export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps {
  /** Internal padding. @default 'md' */
  padding?: CardPadding;
  /** Show border. @default true */
  bordered?: boolean;
  /** Apply drop shadow. @default false */
  shadow?: boolean;
  class?: string;
  children?: Snippet;
}
