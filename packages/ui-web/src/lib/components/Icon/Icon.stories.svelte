<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Story } from '@storybook/addon-svelte-csf';

  const { Story: S } = defineMeta({
    title: 'Foundation/Icons',
    tags:  ['autodocs'],
  });
</script>

<Story name="All Icons">
  {#snippet children()}
    <div style="font-family:var(--font-sans);color:var(--color-text-secondary);font-size:11px;">
      <p style="color:var(--color-text-secondary);margin:0 0 24px;font-size:13px;">
        45 ícones · 24×24px · stroke-based · <code style="font-family:var(--font-mono);">currentColor</code>
      </p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:8px;">

        {#each [
          { name: 'home',          svg: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10' },
          { name: 'history',       svg: 'M1 4v6h6 M3.51 15a9 9 0 1 0 .49-4.95 M12 6v6l4 2' },
          { name: 'settings',      svg: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z' },
          { name: 'agents',        svg: 'M6 8h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z M8 8V5a4 4 0 0 1 8 0v3 M9 14h.01 M15 14h.01 M9 18h6' },
          { name: 'wallet',        svg: 'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M16 3H8L4 7h16l-4-4z M16.5 13.5h.01' },
          { name: 'bell',          svg: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0' },
          { name: 'search',        svg: 'M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0' },
          { name: 'filter',        svg: 'M22 3H2l8 9.46V19l4 2v-8.54z' },
          { name: 'close',         svg: 'M18 6 6 18 M6 6l12 12' },
          { name: 'check',         svg: 'M20 6 9 17 4 12' },
          { name: 'check-circle',  svg: 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01l-3-3' },
          { name: 'alert-circle',  svg: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 8v4 M12 16h.01' },
          { name: 'info',          svg: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 16v-4 M12 8h.01' },
          { name: 'arrow-right',   svg: 'M5 12h14 M12 5l7 7-7 7' },
          { name: 'arrow-left',    svg: 'M19 12H5 M12 19l-7-7 7-7' },
          { name: 'chevron-down',  svg: 'M6 9l6 6 6-6' },
          { name: 'chevron-up',    svg: 'M18 15l-6-6-6 6' },
          { name: 'chevron-left',  svg: 'M15 18l-6-6 6-6' },
          { name: 'chevron-right', svg: 'M9 18l6-6-6-6' },
          { name: 'pix',           svg: 'M5.5 5.5L12 2l6.5 3.5v9L12 18l-6.5-3.5v-9z M12 2v16M5.5 5.5l6.5 3.5 6.5-3.5 M5.5 14.5L12 11l6.5 3.5' },
          { name: 'qr-code',       svg: 'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 17h3v3h-3z M17 14h.01 M20 14h.01 M20 20h.01 M20 17h.01' },
          { name: 'send',          svg: 'M22 2L11 13 M22 2l-7 20-4-9-9-4z' },
          { name: 'receive',       svg: 'M12 3v14 M5 14l7 7 7-7 M5 3h14' },
          { name: 'transfer',      svg: 'M17 1l4 4-4 4 M3 11V9a4 4 0 0 1 4-4h14 M7 23l-4-4 4-4 M21 13v2a4 4 0 0 1-4 4H3' },
          { name: 'copy',          svg: 'M20 9h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' },
          { name: 'eye',           svg: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6' },
          { name: 'eye-off',       svg: 'M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94 M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19 M1 1l22 22' },
          { name: 'lock',          svg: 'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z M7 11V7a5 5 0 0 1 10 0v4' },
          { name: 'unlock',        svg: 'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z M7 11V7a5 5 0 0 1 9.9-1' },
          { name: 'user',          svg: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8' },
          { name: 'users',         svg: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75' },
          { name: 'refresh',       svg: 'M23 4v6h-6 M1 20v-6h6 M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15' },
          { name: 'clock',         svg: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2' },
          { name: 'shield-check',  svg: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4' },
          { name: 'shield-x',      svg: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M14.5 9.5l-5 5 M9.5 9.5l5 5' },
          { name: 'plus',          svg: 'M12 5v14 M5 12h14' },
          { name: 'minus',         svg: 'M5 12h14' },
          { name: 'menu',          svg: 'M3 6h18 M3 12h18 M3 18h18' },
          { name: 'bank',          svg: 'M3 21h18 M3 10h18 M5 10v11 M19 10v11 M9 10v11 M15 10v11 M3 10L12 3l9 7' },
          { name: 'card',          svg: 'M1 4h22a0 0 0 0 1 0 0v16a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M1 10h22' },
          { name: 'logout',        svg: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9' },
          { name: 'download',      svg: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3' },
          { name: 'external-link', svg: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6 M15 3h6v6 M10 14L21 3' },
          { name: 'trash',         svg: 'M3 6h18 M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6 M10 11v6 M14 11v6 M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2' },
        ] as icon}
          <div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:12px 8px;background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:var(--radius-inner);">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-text-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              {#each icon.svg.split(' M ').map((p, i) => i === 0 ? p : 'M ' + p) as d}
                <path d={d} />
              {/each}
            </svg>
            <span style="font-size:10px;color:var(--color-text-secondary);text-align:center;word-break:break-all;">{icon.name}</span>
          </div>
        {/each}

      </div>
    </div>
  {/snippet}
</Story>

<Story name="Sizes">
  {#snippet children()}
    <div style="display:flex;align-items:center;gap:24px;flex-wrap:wrap;">
      {#each [16, 20, 24, 32, 40, 48] as size}
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
          <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="var(--color-brand-orange)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
          <span style="font-family:var(--font-sans);font-size:11px;color:var(--color-text-secondary);">{size}px</span>
        </div>
      {/each}
    </div>
  {/snippet}
</Story>

<Story name="Colors">
  {#snippet children()}
    <div style="display:flex;gap:20px;flex-wrap:wrap;align-items:center;">
      {#each [
        { color: 'var(--color-text-primary)',   label: 'primary'   },
        { color: 'var(--color-text-secondary)', label: 'secondary' },
        { color: 'var(--color-brand-orange)',   label: 'orange'    },
        { color: 'var(--color-brand-teal)',     label: 'teal'      },
        { color: 'var(--color-semantic-success)', label: 'success' },
        { color: 'var(--color-semantic-danger-fg)', label: 'danger' },
      ] as item}
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke={item.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <span style="font-family:var(--font-sans);font-size:11px;color:var(--color-text-secondary);">{item.label}</span>
        </div>
      {/each}
    </div>
  {/snippet}
</Story>
