<script lang="ts">
  import type { SidebarProps, SidebarItem } from './Sidebar.types';

  let {
    items,
    active   = $bindable(''),
    collapsed = false,
    class: className = '',
    onnavigate,
    footer,
  }: SidebarProps = $props();

  function select(item: SidebarItem) {
    if (item.disabled) return;
    active = item.id;
    onnavigate?.(item);
  }
</script>

<nav
  class="w-sidebar {collapsed ? 'w-sidebar--collapsed' : ''} {className}"
  aria-label="Navegação principal"
>
  <ul class="w-sidebar__list" role="list">
    {#each items as item}
      {#if item.divider}
        <li class="w-sidebar__divider" role="separator"></li>
      {:else}
        <li>
          <button
            class="w-sidebar__item {active === item.id ? 'w-sidebar__item--active' : ''} {item.disabled ? 'w-sidebar__item--disabled' : ''}"
            onclick={() => select(item)}
            aria-current={active === item.id ? 'page' : undefined}
            aria-disabled={item.disabled}
            title={collapsed ? item.label : undefined}
            type="button"
          >
            {#if item.icon}
              <span class="w-sidebar__icon" aria-hidden="true">{@render item.icon()}</span>
            {/if}
            {#if !collapsed}
              <span class="w-sidebar__label">{item.label}</span>
              {#if item.badge}
                <span class="w-sidebar__badge">{item.badge}</span>
              {/if}
            {/if}
          </button>
        </li>
      {/if}
    {/each}
  </ul>

  {#if footer && !collapsed}
    <div class="w-sidebar__footer">{@render footer()}</div>
  {/if}
</nav>

<style>
  .w-sidebar {
    display: flex;
    flex-direction: column;
    width: 220px;
    height: 100%;
    background: var(--color-bg-surface, #111D27);
    border-right: 1px solid var(--color-border-default, #1E2D3D);
    padding: 12px 8px;
    transition: width var(--motion-duration-base, 250ms) var(--motion-easing-out, ease);
    box-sizing: border-box;
  }

  .w-sidebar--collapsed { width: 60px; }

  .w-sidebar__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
  }

  .w-sidebar__item {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 9px 10px;
    font-family: var(--font-sans, 'Space Grotesk', sans-serif);
    font-size: 13px;
    font-weight: 500;
    color: var(--color-text-secondary, #8A9BB0);
    background: none;
    border: none;
    border-radius: var(--radius-inner, 8px);
    cursor: pointer;
    text-align: left;
    transition: background var(--motion-duration-fast, 150ms),
                color var(--motion-duration-fast, 150ms);
  }

  .w-sidebar__item:hover:not(.w-sidebar__item--disabled) {
    background: var(--color-bg-hover, #1C2733);
    color: var(--color-text-primary, #fff);
  }

  .w-sidebar__item--active {
    background: var(--color-brand-orange-bg, rgba(255,85,0,0.08));
    color: var(--color-brand-orange, #FF5500);
    font-weight: 600;
  }

  .w-sidebar__item--disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  .w-sidebar__icon { display: inline-flex; align-items: center; flex-shrink: 0; }
  .w-sidebar__label { flex: 1; }

  .w-sidebar__badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    background: var(--color-brand-orange-bg, rgba(255,85,0,0.08));
    color: var(--color-brand-orange, #FF5500);
    border-radius: var(--radius-pill, 100px);
    font-size: 10px;
    font-weight: 700;
  }

  .w-sidebar__divider {
    height: 1px;
    background: var(--color-border-default, #1E2D3D);
    margin: 6px 0;
  }

  .w-sidebar__footer {
    border-top: 1px solid var(--color-border-default, #1E2D3D);
    padding-top: 12px;
    margin-top: 8px;
  }
</style>
