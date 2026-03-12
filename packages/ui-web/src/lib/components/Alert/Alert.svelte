<script lang="ts">
  import type { AlertProps } from './Alert.types';

  let {
    variant     = 'info',
    title,
    dismissible = false,
    class: className = '',
    ondismiss,
    children,
  }: AlertProps = $props();

  let visible = $state(true);

  function dismiss() {
    visible = false;
    ondismiss?.();
  }
</script>

{#if visible}
  <div
    class="w-alert w-alert--{variant} {className}"
    role="alert"
    aria-live="polite"
  >
    <div class="w-alert__body">
      {#if title}
        <strong class="w-alert__title">{title}</strong>
      {/if}
      {#if children}
        <span class="w-alert__text">{@render children()}</span>
      {/if}
    </div>

    {#if dismissible}
      <button
        class="w-alert__close"
        onclick={dismiss}
        aria-label="Fechar alerta"
        type="button"
      >✕</button>
    {/if}
  </div>
{/if}

<style>
  .w-alert {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    padding: 14px 16px;
    border-radius: var(--radius-card, 14px);
    border: 1px solid transparent;
    font-family: var(--font-sans, 'Space Grotesk', sans-serif);
    font-size: 13px;
    line-height: var(--typography-line-height-normal, 1.5);
  }

  .w-alert__body { display: flex; flex-direction: column; gap: 2px; flex: 1; }
  .w-alert__title { font-weight: 600; font-size: 13px; }
  .w-alert__text  { color: inherit; opacity: 0.85; }

  .w-alert__close {
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    opacity: 0.5;
    padding: 0;
    font-size: 13px;
    line-height: 1;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .w-alert__close:hover { opacity: 0.9; }

  /* Variants */
  .w-alert--info {
    background: rgba(96,165,250,0.08);
    border-color: rgba(96,165,250,0.22);
    color: #60A5FA;
  }
  .w-alert--success {
    background: var(--color-semantic-success-bg, rgba(52,211,153,0.08));
    border-color: var(--color-semantic-success-border, rgba(52,211,153,0.20));
    color: var(--color-semantic-success, #34D399);
  }
  .w-alert--danger {
    background: var(--color-semantic-danger-bg, rgba(192,58,43,0.08));
    border-color: var(--color-semantic-danger-border, rgba(192,58,43,0.22));
    color: var(--color-semantic-danger-fg, #E05040);
  }
  .w-alert--warning {
    background: rgba(255,144,0,0.08);
    border-color: rgba(255,144,0,0.22);
    color: var(--color-brand-orange-light, #FF9000);
  }
  .w-alert--muted {
    background: var(--color-bg-elevated, #161F2A);
    border-color: var(--color-border-default, #1E2D3D);
    color: var(--color-text-secondary, #8A9BB0);
  }
</style>
