import type { Snippet } from 'svelte';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ModalProps {
  /** Controls visibility. */
  open?: boolean;
  /** Modal title shown in the header. */
  title?: string;
  /** Max width preset. @default 'md' */
  size?: ModalSize;
  class?: string;
  /** Called when backdrop is clicked or Escape is pressed. */
  onclose?: () => void;
  /** Main modal content. */
  children?: Snippet;
  /** Footer slot — right-aligned by default. */
  footer?: Snippet;
}
