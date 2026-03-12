<script lang="ts">
  import type { ModalProps } from './Modal.types';

  let {
    open     = false,
    title,
    size     = 'md',
    class: className = '',
    onclose,
    children,
    footer,
  }: ModalProps = $props();

  function handleBackdrop(e: MouseEvent) {
    if ((e.target as HTMLElement).classList.contains('w-modal__backdrop')) onclose?.();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') onclose?.();
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
  <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
  <div
    class="w-modal__backdrop"
    onclick={handleBackdrop}
    aria-hidden="true"
    style="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:var(--z-index-modal,200);display:flex;align-items:center;justify-content:center;padding:24px;"
  >
    <div
      class="w-modal w-modal--{size} {className}"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'w-modal-title' : undefined}
    >
      {#if title}
        <div class="w-modal__header">
          <h2 id="w-modal-title" class="w-modal__title">{title}</h2>
          <button class="w-modal__close" onclick={() => onclose?.()} aria-label="Fechar" type="button">✕</button>
        </div>
      {/if}

      <div class="w-modal__body">
        {#if children}{@render children()}{/if}
      </div>

      {#if footer}
        <div class="w-modal__footer">{@render footer()}</div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .w-modal {
    background: var(--color-bg-surface, #111D27);
    border: 1px solid var(--color-border-default, #1E2D3D);
    border-radius: var(--radius-card-lg, 20px);
    box-shadow: var(--shadow-xl, 0 16px 48px rgba(0,0,0,0.8));
    width: 100%;
    max-height: calc(100vh - 48px);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .w-modal--sm  { max-width: 400px; }
  .w-modal--md  { max-width: 560px; }
  .w-modal--lg  { max-width: 720px; }
  .w-modal--xl  { max-width: 960px; }

  .w-modal__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px 0;
  }

  .w-modal__title {
    font-family: var(--font-sans, 'Space Grotesk', sans-serif);
    font-size: 17px;
    font-weight: 600;
    color: var(--color-text-primary, #fff);
    margin: 0;
  }

  .w-modal__close {
    background: none;
    border: none;
    color: var(--color-text-secondary, #8A9BB0);
    cursor: pointer;
    font-size: 16px;
    padding: 4px;
    line-height: 1;
    border-radius: var(--radius-inner, 8px);
    transition: color var(--motion-duration-fast, 150ms);
  }
  .w-modal__close:hover { color: var(--color-text-primary, #fff); }

  .w-modal__body   { padding: 20px 24px; overflow-y: auto; flex: 1; }
  .w-modal__footer {
    padding: 0 24px 20px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    border-top: 1px solid var(--color-border-default, #1E2D3D);
    padding-top: 16px;
  }
</style>
