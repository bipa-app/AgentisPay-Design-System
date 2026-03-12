<script lang="ts">
  import type { ButtonProps } from './Button.types';

  let {
    variant  = 'primary',
    size     = 'md',
    disabled = false,
    loading  = false,
    type     = 'button',
    icon,
    iconRight,
    class: className = '',
    onclick,
    children,
    ...rest
  }: ButtonProps = $props();
</script>

<button
  {type}
  {disabled}
  class="w-btn w-btn--{variant} w-btn--{size} {loading ? 'w-btn--loading' : ''} {className}"
  aria-busy={loading}
  aria-disabled={disabled}
  {onclick}
  {...rest}
>
  {#if loading}
    <span class="w-btn__spinner" aria-hidden="true"></span>
  {:else if icon}
    <span class="w-btn__icon w-btn__icon--left" aria-hidden="true">{@render icon()}</span>
  {/if}

  {#if children}
    <span class="w-btn__label">{@render children()}</span>
  {/if}

  {#if iconRight && !loading}
    <span class="w-btn__icon w-btn__icon--right" aria-hidden="true">{@render iconRight()}</span>
  {/if}
</button>

<style>
  .w-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-family: var(--font-sans, 'Space Grotesk', sans-serif);
    font-weight: 600;
    border: 1px solid transparent;
    border-radius: var(--radius-btn, 12px);
    cursor: pointer;
    transition: background var(--motion-duration-fast, 150ms) var(--motion-easing-out, ease),
                border-color var(--motion-duration-fast, 150ms) var(--motion-easing-out, ease),
                opacity var(--motion-duration-fast, 150ms);
    white-space: nowrap;
    text-decoration: none;
    outline-offset: 2px;
    position: relative;
  }

  .w-btn:focus-visible {
    outline: 2px solid var(--color-brand-orange, #FF5500);
  }

  /* Sizes */
  .w-btn--sm  { height: 32px; padding: 0 12px; font-size: 12px; }
  .w-btn--md  { height: 40px; padding: 0 18px; font-size: 14px; }
  .w-btn--lg  { height: 48px; padding: 0 24px; font-size: 15px; }

  /* Primary */
  .w-btn--primary {
    background: var(--color-brand-orange, #FF5500);
    color: #fff;
    border-color: var(--color-brand-orange, #FF5500);
  }
  .w-btn--primary:hover:not(:disabled) {
    background: var(--color-brand-orange-dark, #CC4400);
    border-color: var(--color-brand-orange-dark, #CC4400);
  }

  /* Secondary */
  .w-btn--secondary {
    background: var(--color-bg-hover, #1C2733);
    color: var(--color-text-primary, #fff);
    border-color: var(--color-border-strong, #263545);
  }
  .w-btn--secondary:hover:not(:disabled) {
    background: var(--color-bg-elevated, #161F2A);
    border-color: var(--color-border-strong, #263545);
  }

  /* Ghost */
  .w-btn--ghost {
    background: transparent;
    color: var(--color-text-primary, #fff);
    border-color: transparent;
  }
  .w-btn--ghost:hover:not(:disabled) {
    background: var(--color-bg-hover, #1C2733);
  }

  /* Outline */
  .w-btn--outline {
    background: transparent;
    color: var(--color-text-primary, #fff);
    border-color: var(--color-border-strong, #263545);
  }
  .w-btn--outline:hover:not(:disabled) {
    background: var(--color-bg-hover, #1C2733);
  }

  /* Teal */
  .w-btn--teal {
    background: var(--color-brand-teal, #1A7A8A);
    color: #fff;
    border-color: var(--color-brand-teal, #1A7A8A);
  }
  .w-btn--teal:hover:not(:disabled) {
    background: var(--color-brand-teal-dark, #0E6070);
    border-color: var(--color-brand-teal-dark, #0E6070);
  }

  /* Danger */
  .w-btn--danger {
    background: var(--color-semantic-danger-bg, rgba(192,58,43,0.08));
    color: var(--color-semantic-danger-fg, #E05040);
    border-color: var(--color-semantic-danger-border, rgba(192,58,43,0.22));
  }
  .w-btn--danger:hover:not(:disabled) {
    background: rgba(192,58,43,0.14);
  }

  /* Success */
  .w-btn--success {
    background: var(--color-semantic-success-bg, rgba(52,211,153,0.08));
    color: var(--color-semantic-success, #34D399);
    border-color: var(--color-semantic-success-border, rgba(52,211,153,0.20));
  }
  .w-btn--success:hover:not(:disabled) {
    background: rgba(52,211,153,0.14);
  }

  /* Muted */
  .w-btn--muted {
    background: var(--color-bg-elevated, #161F2A);
    color: var(--color-text-secondary, #8A9BB0);
    border-color: var(--color-border-default, #1E2D3D);
  }
  .w-btn--muted:hover:not(:disabled) {
    color: var(--color-text-primary, #fff);
    border-color: var(--color-border-strong, #263545);
  }

  /* Disabled */
  .w-btn:disabled,
  .w-btn--loading {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }

  /* Spinner */
  .w-btn__spinner {
    width: 14px;
    height: 14px;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: w-spin 0.6s linear infinite;
  }

  @keyframes w-spin {
    to { transform: rotate(360deg); }
  }

  .w-btn__icon { display: inline-flex; align-items: center; }
</style>
