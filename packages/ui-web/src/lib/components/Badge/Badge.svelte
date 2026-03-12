<script lang="ts">
  import type { BadgeProps } from './Badge.types';

  let {
    variant  = 'default',
    pulse    = false,
    size     = 'md',
    class: className = '',
    children,
  }: BadgeProps = $props();
</script>

<span
  class="w-badge w-badge--{variant} w-badge--{size} {pulse ? 'w-badge--pulse' : ''} {className}"
  role={variant === 'pending' ? 'status' : undefined}
>
  {#if children}{@render children()}{/if}
</span>

<style>
  .w-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-family: var(--font-sans, 'Space Grotesk', sans-serif);
    font-weight: 600;
    letter-spacing: var(--typography-letter-spacing-wide, 0.05em);
    border-radius: var(--radius-pill, 100px);
    border: 1px solid transparent;
    white-space: nowrap;
  }

  /* Sizes */
  .w-badge--sm { font-size: 10px; padding: 2px 8px; }
  .w-badge--md { font-size: 11px; padding: 3px 10px; }
  .w-badge--lg { font-size: 12px; padding: 4px 12px; }

  /* Variants */
  .w-badge--default {
    background: var(--color-bg-hover, #1C2733);
    color: var(--color-text-secondary, #8A9BB0);
    border-color: var(--color-border-default, #1E2D3D);
  }
  .w-badge--pending {
    background: var(--color-brand-orange-bg, rgba(255,85,0,0.08));
    color: var(--color-brand-orange, #FF5500);
    border-color: var(--color-brand-orange-border, rgba(255,85,0,0.22));
  }
  .w-badge--success {
    background: var(--color-semantic-success-bg, rgba(52,211,153,0.08));
    color: var(--color-semantic-success, #34D399);
    border-color: var(--color-semantic-success-border, rgba(52,211,153,0.20));
  }
  .w-badge--danger {
    background: var(--color-semantic-danger-bg, rgba(192,58,43,0.08));
    color: var(--color-semantic-danger-fg, #E05040);
    border-color: var(--color-semantic-danger-border, rgba(192,58,43,0.22));
  }
  .w-badge--info {
    background: rgba(96,165,250,0.08);
    color: var(--color-semantic-info, #60A5FA);
    border-color: rgba(96,165,250,0.22);
  }
  .w-badge--teal {
    background: var(--color-brand-teal-bg, rgba(26,122,138,0.08));
    color: var(--color-brand-teal, #1A7A8A);
    border-color: var(--color-brand-teal-border, rgba(26,122,138,0.22));
  }

  /* Pulse animation for pending */
  .w-badge--pulse {
    animation: w-badge-pulse 2s ease-in-out infinite;
  }
  @keyframes w-badge-pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.55; }
  }
</style>
