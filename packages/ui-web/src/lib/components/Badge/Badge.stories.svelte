<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Badge from './Badge.svelte';

  const { Story } = defineMeta({
    title:     'Components/Badge',
    component: Badge,
    tags:      ['autodocs'],
    argTypes: {
      variant: { control: 'select', options: ['default','pending','success','danger','info','teal'] },
      size:    { control: 'select', options: ['sm','md','lg'] },
      pulse:   { control: 'boolean' },
    },
    args: { variant: 'pending', pulse: true },
  });
</script>

<Story name="Default" args={{ variant: 'pending', pulse: true }}>
  {#snippet children(args)}
    <Badge {...args}>Aguardando aprovação</Badge>
  {/snippet}
</Story>

<Story name="Variants">
  {#snippet children()}
    <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;">
      <Badge variant="default">Default</Badge>
      <Badge variant="pending" pulse>Pendente</Badge>
      <Badge variant="success">Aprovado</Badge>
      <Badge variant="danger">Recusado</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="teal">Teal</Badge>
    </div>
  {/snippet}
</Story>

<Story name="Sizes">
  {#snippet children()}
    <div style="display:flex;gap:10px;align-items:center;">
      <Badge size="sm" variant="success">Small</Badge>
      <Badge size="md" variant="success">Medium</Badge>
      <Badge size="lg" variant="success">Large</Badge>
    </div>
  {/snippet}
</Story>
