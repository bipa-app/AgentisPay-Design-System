<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Tabs from './Tabs.svelte';

  const { Story } = defineMeta({
    title:     'Components/Tabs',
    component: Tabs,
    tags:      ['autodocs'],
    argTypes: {
      active: { control: 'number' },
    },
  });

  const basicItems = [
    { label: 'Todas' },
    { label: 'Pendentes' },
    { label: 'Aprovadas' },
    { label: 'Recusadas' },
  ];

  const countItems = [
    { label: 'Todas',     count: 47 },
    { label: 'Pendentes', count: 3  },
    { label: 'Aprovadas', count: 41 },
    { label: 'Recusadas', count: 3  },
  ];

  const disabledItems = [
    { label: 'Visão Geral' },
    { label: 'Transações' },
    { label: 'Relatórios', disabled: true },
    { label: 'Exportar',   disabled: true },
  ];
</script>

<Story name="Default" args={{ items: basicItems, active: 0 }}>
  {#snippet children(args)}
    <Tabs {...args} />
  {/snippet}
</Story>

<Story name="With Counts" args={{ items: countItems, active: 1 }}>
  {#snippet children(args)}
    <Tabs {...args} />
  {/snippet}
</Story>

<Story name="With Disabled" args={{ items: disabledItems, active: 0 }}>
  {#snippet children(args)}
    <Tabs {...args} />
  {/snippet}
</Story>
