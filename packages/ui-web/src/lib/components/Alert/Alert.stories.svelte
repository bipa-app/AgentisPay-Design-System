<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Alert from './Alert.svelte';

  const { Story } = defineMeta({
    title:     'Components/Alert',
    component: Alert,
    tags:      ['autodocs'],
    argTypes: {
      variant:     { control: 'select', options: ['info','success','danger','warning','muted'] },
      title:       { control: 'text' },
      dismissible: { control: 'boolean' },
    },
    args: { variant: 'info', title: 'Atenção', dismissible: false },
  });
</script>

<Story name="Default">
  {#snippet children(args)}
    <div style="max-width:480px;">
      <Alert {...args}>Sua sessão expira em 5 minutos.</Alert>
    </div>
  {/snippet}
</Story>

<Story name="Variants">
  {#snippet children()}
    <div style="display:flex;flex-direction:column;gap:12px;max-width:480px;">
      <Alert variant="info"    title="Informação">Pagamento via PIX disponível.</Alert>
      <Alert variant="success" title="Aprovado!">Transferência de R$ 200,00 confirmada.</Alert>
      <Alert variant="danger"  title="Erro">Saldo insuficiente para a operação.</Alert>
      <Alert variant="warning" title="Atenção">Limite de 3 aprovações pendentes atingido.</Alert>
      <Alert variant="muted">Nenhuma transação nos últimos 7 dias.</Alert>
    </div>
  {/snippet}
</Story>

<Story name="Dismissible">
  {#snippet children()}
    <div style="max-width:480px;">
      <Alert variant="success" title="Aprovado!" dismissible>
        Pagamento de R$ 200,00 para João Silva processado com sucesso.
      </Alert>
    </div>
  {/snippet}
</Story>
