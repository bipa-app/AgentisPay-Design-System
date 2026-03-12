<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Modal from './Modal.svelte';
  import Button from '../Button/Button.svelte';

  const { Story } = defineMeta({
    title:     'Components/Modal',
    component: Modal,
    tags:      ['autodocs'],
    argTypes: {
      open:  { control: 'boolean' },
      title: { control: 'text' },
      size:  { control: 'select', options: ['sm','md','lg','xl'] },
    },
    args: { open: true, title: 'Confirmar pagamento', size: 'md' },
  });
</script>

<Story name="Default" args={{ open: true }}>
  {#snippet children(args)}
    <div style="position:relative;height:320px;">
      <Modal {...args}>
        <p style="color:var(--color-text-secondary);font-family:var(--font-sans);margin:0;">
          Deseja aprovar o pagamento de <strong style="color:var(--color-text-primary);">R$ 200,00</strong> para João Silva solicitado pelo agente Claude?
        </p>
        {#snippet footer()}
          <Button variant="ghost" size="sm">Cancelar</Button>
          <Button variant="primary" size="sm">Confirmar</Button>
        {/snippet}
      </Modal>
    </div>
  {/snippet}
</Story>

<Story name="Sizes">
  {#snippet children()}
    <div style="display:flex;flex-direction:column;gap:12px;font-family:var(--font-sans);color:var(--color-text-secondary);">
      {#each ['sm','md','lg'] as size}
        <div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:var(--radius-card);padding:16px;">
          <strong style="color:var(--color-text-primary);">{size}</strong> — max-width: {size === 'sm' ? '400px' : size === 'md' ? '560px' : '720px'}
        </div>
      {/each}
    </div>
  {/snippet}
</Story>
