<script lang="ts">
  import type { TableProps } from './Table.types';

  let {
    columns,
    rows,
    loading  = false,
    empty    = 'Nenhum resultado encontrado.',
    class: className = '',
  }: TableProps = $props();
</script>

<div class="w-table-wrap {className}">
  <table class="w-table" aria-busy={loading}>
    <thead>
      <tr>
        {#each columns as col}
          <th
            class="w-table__th {col.align ? `w-table__th--${col.align}` : ''}"
            style={col.width ? `width:${col.width}` : undefined}
          >{col.label}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#if loading}
        {#each Array(4) as _}
          <tr class="w-table__row w-table__row--skeleton">
            {#each columns as _}
              <td class="w-table__td"><span class="w-table__skeleton"></span></td>
            {/each}
          </tr>
        {/each}
      {:else if rows.length === 0}
        <tr>
          <td colspan={columns.length} class="w-table__empty">{empty}</td>
        </tr>
      {:else}
        {#each rows as row}
          <tr class="w-table__row">
            {#each columns as col}
              <td class="w-table__td {col.align ? `w-table__td--${col.align}` : ''}">
                {row[col.key] ?? '—'}
              </td>
            {/each}
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>

<style>
  .w-table-wrap {
    overflow-x: auto;
    border: 1px solid var(--color-border-default, #1E2D3D);
    border-radius: var(--radius-card, 14px);
  }

  .w-table {
    width: 100%;
    border-collapse: collapse;
    font-family: var(--font-sans, 'Space Grotesk', sans-serif);
    font-size: 13px;
  }

  .w-table__th {
    padding: 10px 14px;
    text-align: left;
    font-size: 11px;
    font-weight: 600;
    color: var(--color-text-secondary, #8A9BB0);
    letter-spacing: var(--typography-letter-spacing-wide, 0.05em);
    text-transform: uppercase;
    border-bottom: 1px solid var(--color-border-default, #1E2D3D);
    white-space: nowrap;
    background: var(--color-bg-surface, #111D27);
  }

  .w-table__th--right, .w-table__td--right { text-align: right; }
  .w-table__th--center, .w-table__td--center { text-align: center; }

  .w-table__row { transition: background var(--motion-duration-fast, 150ms); }
  .w-table__row:hover { background: var(--color-bg-hover, #1C2733); }
  .w-table__row:not(:last-child) { border-bottom: 1px solid var(--color-border-default, #1E2D3D); }

  .w-table__td {
    padding: 12px 14px;
    color: var(--color-text-primary, #fff);
    vertical-align: middle;
  }

  .w-table__empty {
    padding: 40px;
    text-align: center;
    color: var(--color-text-secondary, #8A9BB0);
    font-size: 13px;
  }

  /* Skeleton */
  .w-table__skeleton {
    display: block;
    height: 14px;
    border-radius: 6px;
    background: var(--color-bg-hover, #1C2733);
    animation: w-skeleton-pulse 1.5s ease-in-out infinite;
  }
  @keyframes w-skeleton-pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.4; }
  }
</style>
