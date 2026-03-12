# Changesets

Este diretório é gerenciado pelo [Changesets](https://github.com/changesets/changesets).

## Como usar

### Registrar uma mudança

Ao criar uma feature ou fix que deve gerar versão nova:

```bash
pnpm changeset
```

Selecione o(s) pacote(s) afetado(s), o tipo de bump (`major`, `minor`, `patch`) e escreva um resumo.

### Gerar release

```bash
# Aplica os changesets pendentes e atualiza versões + CHANGELOGs
pnpm changeset version

# Publica os pacotes (quando configurado)
pnpm changeset publish
```

### Fluxo no CI

O GitHub Action `release.yml` cria automaticamente um PR de "Version Packages" sempre que há changesets na branch `main`. Ao fazer merge desse PR, os pacotes são versionados e o CHANGELOG é atualizado.
