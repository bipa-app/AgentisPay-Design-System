<script lang="ts">
  import type { CardProps } from './Card.types';

  let {
    padding  = 'md',
    bordered = true,
    shadow   = false,
    class: className = '',
    children,
  }: CardProps = $props();
</script>

<div class="w-card w-card--pad-{padding} {bordered ? 'w-card--bordered' : ''} {shadow ? 'w-card--shadow' : ''} {className}">
  {#if children}{@render children()}{/if}
</div>

<style>
  .w-card {
    background: var(--color-bg-surface, #111D27);
    border-radius: var(--radius-card, 14px);
  }

  .w-card--bordered {
    border: 1px solid var(--color-border-default, #1E2D3D);
  }

  .w-card--shadow {
    box-shadow: var(--shadow-md, 0 4px 16px rgba(0,0,0,0.6));
  }

  /* Padding */
  .w-card--pad-none { padding: 0; }
  .w-card--pad-sm   { padding: var(--spacing-4, 16px); }
  .w-card--pad-md   { padding: var(--spacing-6, 24px); }
  .w-card--pad-lg   { padding: var(--spacing-8, 32px); }
</style>
