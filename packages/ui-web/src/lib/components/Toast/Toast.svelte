<script lang="ts">
  import type { ToastProps } from './Toast.types';

  let {
    message,
    variant  = 'default',
    duration = 4000,
    position = 'bottom-right',
    visible  = $bindable(true),
    ondismiss,
  }: ToastProps = $props();

  $effect(() => {
    if (visible && duration > 0) {
      const timer = setTimeout(() => {
        visible = false;
        ondismiss?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  });
</script>

{#if visible}
  <div
    class="w-toast w-toast--{variant} w-toast--{position}"
    role="status"
    aria-live="polite"
  >
    <span class="w-toast__message">{message}</span>
    <button
      class="w-toast__close"
      onclick={() => { visible = false; ondismiss?.(); }}
      aria-label="Fechar"
      type="button"
    >✕</button>
  </div>
{/if}

<style>
  .w-toast {
    position: fixed;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: var(--radius-btn, 12px);
    border: 1px solid var(--color-border-strong, #263545);
    background: var(--color-bg-surface, #111D27);
    box-shadow: var(--shadow-lg, 0 8px 32px rgba(0,0,0,0.7));
    font-family: var(--font-sans, 'Space Grotesk', sans-serif);
    font-size: 13px;
    font-weight: 500;
    color: var(--color-text-primary, #fff);
    z-index: var(--z-index-toast, 300);
    max-width: 360px;
    animation: w-toast-in var(--motion-duration-base, 250ms) var(--motion-easing-spring, cubic-bezier(0.34,1.56,0.64,1));
  }

  /* Positions */
  .w-toast--bottom-right  { bottom: 24px; right: 24px; }
  .w-toast--bottom-left   { bottom: 24px; left: 24px; }
  .w-toast--top-right     { top: 24px; right: 24px; }
  .w-toast--top-left      { top: 24px; left: 24px; }
  .w-toast--top-center    { top: 24px; left: 50%; transform: translateX(-50%); }
  .w-toast--bottom-center { bottom: 24px; left: 50%; transform: translateX(-50%); }

  /* Variants */
  .w-toast--success { border-color: var(--color-semantic-success-border, rgba(52,211,153,0.20)); }
  .w-toast--danger  { border-color: var(--color-semantic-danger-border, rgba(192,58,43,0.22)); }
  .w-toast--warning { border-color: rgba(255,144,0,0.22); }

  .w-toast__message { flex: 1; }

  .w-toast__close {
    background: none;
    border: none;
    color: var(--color-text-secondary, #8A9BB0);
    cursor: pointer;
    font-size: 12px;
    padding: 0;
    line-height: 1;
    flex-shrink: 0;
  }
  .w-toast__close:hover { color: var(--color-text-primary, #fff); }

  @keyframes w-toast-in {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .w-toast--top-center,
  .w-toast--top-left,
  .w-toast--top-right {
    @keyframes w-toast-in {
      from { opacity: 0; transform: translateY(-12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  }
</style>
