<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Toast from './Toast.svelte';

  const { Story } = defineMeta({
    title:     'Components/Toast',
    component: Toast,
    tags:      ['autodocs'],
    argTypes: {
      variant:  { control: 'select', options: ['default','success','danger','warning'] },
      position: { control: 'select', options: ['bottom-right','bottom-left','top-right','top-left','top-center','bottom-center'] },
      duration: { control: 'number' },
      message:  { control: 'text' },
    },
    args: { message: 'Pagamento processado com sucesso.', variant: 'success', duration: 0, visible: true },
  });
</script>

<Story name="Default" args={{ variant: 'default', message: 'Operação realizada.', duration: 0 }}>
  {#snippet children(args)}
    <div style="position:relative;height:80px;">
      <Toast {...args} style="position:absolute;bottom:0;right:0;" />
    </div>
  {/snippet}
</Story>

<Story name="Variants">
  {#snippet children()}
    <div style="display:flex;flex-direction:column;gap:10px;max-width:360px;">
      <Toast message="Operação realizada." variant="default" duration={0} visible={true} />
      <Toast message="Transferência de R$ 200,00 confirmada." variant="success" duration={0} visible={true} />
      <Toast message="Saldo insuficiente para a operação." variant="danger" duration={0} visible={true} />
      <Toast message="Limite de aprovações pendentes atingido." variant="warning" duration={0} visible={true} />
    </div>
  {/snippet}
</Story>
