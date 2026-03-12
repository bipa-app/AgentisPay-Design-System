<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Table from './Table.svelte';

  const { Story } = defineMeta({
    title:     'Components/Table',
    component: Table,
    tags:      ['autodocs'],
    argTypes: {
      loading: { control: 'boolean' },
      empty:   { control: 'text' },
    },
    args: { loading: false },
  });

  const columns = [
    { key: 'date',      label: 'Data',        width: '120px' },
    { key: 'recipient', label: 'Destinatário' },
    { key: 'agent',     label: 'Agente' },
    { key: 'amount',    label: 'Valor',        align: 'right' },
    { key: 'status',    label: 'Status',       align: 'center', width: '110px' },
  ];

  const rows = [
    { date: '12/03/2026', recipient: 'João Silva',    agent: 'Claude',  amount: 'R$ 200,00', status: 'Aprovado' },
    { date: '11/03/2026', recipient: 'Maria Souza',   agent: 'GPT-4',   amount: 'R$ 50,00',  status: 'Pendente' },
    { date: '10/03/2026', recipient: 'Carlos Lima',   agent: 'Claude',  amount: 'R$ 1.500,00', status: 'Aprovado' },
    { date: '09/03/2026', recipient: 'Ana Paula',     agent: 'Gemini',  amount: 'R$ 75,00',  status: 'Recusado' },
  ];
</script>

<Story name="Default" args={{ columns, rows }}>
  {#snippet children(args)}
    <Table {...args} />
  {/snippet}
</Story>

<Story name="Loading" args={{ columns, rows: [], loading: true }}>
  {#snippet children(args)}
    <Table {...args} />
  {/snippet}
</Story>

<Story name="Empty" args={{ columns, rows: [] }}>
  {#snippet children(args)}
    <Table {...args} empty="Nenhuma transação encontrada." />
  {/snippet}
</Story>
