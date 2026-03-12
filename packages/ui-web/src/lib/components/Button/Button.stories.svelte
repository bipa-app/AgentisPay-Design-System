<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';

  const { Story } = defineMeta({
    title:     'Components/Button',
    component: Button,
    tags:      ['autodocs'],
    argTypes: {
      variant:  { control: 'select', options: ['primary','secondary','ghost','outline','teal','danger','success','muted'] },
      size:     { control: 'select', options: ['sm','md','lg'] },
      disabled: { control: 'boolean' },
      loading:  { control: 'boolean' },
    },
    args: { variant: 'primary', size: 'md', disabled: false, loading: false },
  });
</script>

<!-- Default -->
<Story name="Default" args={{ variant: 'primary' }}>
  {#snippet children(args)}
    <Button {...args}>Aprovar pagamento</Button>
  {/snippet}
</Story>

<!-- All variants -->
<Story name="Variants">
  {#snippet children()}
    <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="teal">Teal</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
      <Button variant="muted">Muted</Button>
    </div>
  {/snippet}
</Story>

<!-- Sizes -->
<Story name="Sizes">
  {#snippet children()}
    <div style="display:flex;gap:12px;align-items:center;">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  {/snippet}
</Story>

<!-- States -->
<Story name="States">
  {#snippet children()}
    <div style="display:flex;gap:12px;flex-wrap:wrap;">
      <Button variant="primary">Normal</Button>
      <Button variant="primary" loading>Loading</Button>
      <Button variant="primary" disabled>Disabled</Button>
    </div>
  {/snippet}
</Story>
