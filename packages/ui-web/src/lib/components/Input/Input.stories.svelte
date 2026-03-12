<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Input from './Input.svelte';

  const { Story } = defineMeta({
    title:     'Components/Input',
    component: Input,
    tags:      ['autodocs'],
    argTypes: {
      label:    { control: 'text' },
      placeholder: { control: 'text' },
      error:    { control: 'text' },
      helper:   { control: 'text' },
      disabled: { control: 'boolean' },
      required: { control: 'boolean' },
    },
    args: { label: 'Nome completo', placeholder: 'Ex: João Silva' },
  });
</script>

<Story name="Default">
  {#snippet children(args)}
    <div style="max-width:360px;">
      <Input {...args} />
    </div>
  {/snippet}
</Story>

<Story name="States">
  {#snippet children()}
    <div style="display:flex;flex-direction:column;gap:20px;max-width:360px;">
      <Input label="Normal" placeholder="Digite aqui..." />
      <Input label="Com helper" placeholder="CPF" helper="Somente números" />
      <Input label="Com erro" placeholder="E-mail" error="E-mail inválido" value="nao@é@valido" />
      <Input label="Desabilitado" placeholder="Bloqueado" disabled />
      <Input label="Obrigatório" placeholder="Campo obrigatório" required />
    </div>
  {/snippet}
</Story>
