<script lang="ts">
  import type { TabsProps, TabItem } from './Tabs.types';

  let {
    items,
    active    = $bindable(0),
    class: className = '',
    onchange,
  }: TabsProps = $props();

  function select(index: number) {
    active = index;
    onchange?.(items[index], index);
  }
</script>

<div class="w-tabs {className}" role="tablist">
  {#each items as item, i}
    <button
      class="w-tabs__tab {active === i ? 'w-tabs__tab--active' : ''} {item.disabled ? 'w-tabs__tab--disabled' : ''}"
      role="tab"
      aria-selected={active === i}
      aria-disabled={item.disabled}
      tabindex={active === i ? 0 : -1}
      onclick={() => !item.disabled && select(i)}
      type="button"
    >
      {item.label}
      {#if item.count !== undefined}
        <span class="w-tabs__count">{item.count}</span>
      {/if}
    </button>
  {/each}
</div>

<style>
  .w-tabs {
    display: flex;
    gap: 2px;
    border-bottom: 1px solid var(--color-border-default, #1E2D3D);
    overflow-x: auto;
    scrollbar-width: none;
  }
  .w-tabs::-webkit-scrollbar { display: none; }

  .w-tabs__tab {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 10px 14px;
    font-family: var(--font-sans, 'Space Grotesk', sans-serif);
    font-size: 13px;
    font-weight: 500;
    color: var(--color-text-secondary, #8A9BB0);
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    cursor: pointer;
    white-space: nowrap;
    transition: color var(--motion-duration-fast, 150ms);
    outline: none;
  }

  .w-tabs__tab:focus-visible {
    outline: 2px solid var(--color-brand-orange, #FF5500);
    outline-offset: 2px;
    border-radius: 4px 4px 0 0;
  }

  .w-tabs__tab--active {
    color: var(--color-text-primary, #fff);
    border-bottom-color: var(--color-brand-orange, #FF5500);
    font-weight: 600;
  }

  .w-tabs__tab:hover:not(.w-tabs__tab--active):not(.w-tabs__tab--disabled) {
    color: var(--color-text-primary, #fff);
  }

  .w-tabs__tab--disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  .w-tabs__count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    background: var(--color-bg-hover, #1C2733);
    border-radius: var(--radius-pill, 100px);
    font-size: 10px;
    font-weight: 600;
    color: var(--color-text-secondary, #8A9BB0);
  }

  .w-tabs__tab--active .w-tabs__count {
    background: var(--color-brand-orange-bg, rgba(255,85,0,0.08));
    color: var(--color-brand-orange, #FF5500);
  }
</style>
