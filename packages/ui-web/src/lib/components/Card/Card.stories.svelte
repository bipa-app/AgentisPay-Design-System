<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Card from './Card.svelte';

  const { Story } = defineMeta({
    title:     'Components/Card',
    component: Card,
    tags:      ['autodocs'],
    argTypes: {
      padding:  { control: 'select', options: ['none','sm','md','lg'] },
      bordered: { control: 'boolean' },
      shadow:   { control: 'boolean' },
    },
    args: { padding: 'md', bordered: true, shadow: false },
  });
</script>

<Story name="Default">
  {#snippet children(args)}
    <Card {...args}>
      <p style="color:var(--color-text-primary);margin:0;font-family:var(--font-sans);">Conteúdo do card</p>
    </Card>
  {/snippet}
</Story>

<Story name="Stat Card">
  {#snippet children()}
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:600px;">
      {#each [
        { label: 'Saldo disponível', value: 'R$ 3.450,00', color: 'var(--color-semantic-success)' },
        { label: 'Pendente', value: 'R$ 200,00', color: 'var(--color-brand-orange)' },
        { label: 'Transações', value: '47', color: 'var(--color-text-primary)' },
      ] as stat}
        <Card padding="md">
          <p style="font-family:var(--font-sans);font-size:11px;color:var(--color-text-secondary);margin:0 0 6px;text-transform:uppercase;letter-spacing:0.05em;">{stat.label}</p>
          <p style="font-family:var(--font-mono);font-size:20px;font-weight:700;color:{stat.color};margin:0;">{stat.value}</p>
        </Card>
      {/each}
    </div>
  {/snippet}
</Story>
