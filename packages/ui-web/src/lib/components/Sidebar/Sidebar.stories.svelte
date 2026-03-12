<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Sidebar from './Sidebar.svelte';

  const { Story } = defineMeta({
    title:     'Components/Sidebar',
    component: Sidebar,
    tags:      ['autodocs'],
    argTypes: {
      collapsed: { control: 'boolean' },
      active:    { control: 'text' },
    },
    args: { active: 'home', collapsed: false },
  });

  const items = [
    { id: 'home',      label: 'Início' },
    { id: 'approvals', label: 'Aprovações', badge: '3' },
    { id: 'history',   label: 'Histórico' },
    { id: 'agents',    label: 'Agentes' },
    { id: 'divider1',  divider: true },
    { id: 'settings',  label: 'Configurações' },
  ];
</script>

<Story name="Default" args={{ items, active: 'home' }}>
  {#snippet children(args)}
    <div style="height:360px;display:flex;">
      <Sidebar {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Collapsed" args={{ items, active: 'approvals', collapsed: true }}>
  {#snippet children(args)}
    <div style="height:360px;display:flex;">
      <Sidebar {...args} />
    </div>
  {/snippet}
</Story>

<Story name="With Footer" args={{ items, active: 'home' }}>
  {#snippet children(args)}
    <div style="height:360px;display:flex;">
      <Sidebar {...args}>
        {#snippet footer()}
          <div style="font-family:var(--font-sans);font-size:12px;color:var(--color-text-secondary);padding:4px 10px;">
            v1.0.0
          </div>
        {/snippet}
      </Sidebar>
    </div>
  {/snippet}
</Story>
