# SVGs Faltantes — Exportar do Figma

Arquivo Figma: `HGOaGqzFJvEyAqEKYT8pYc`

Todos os assets abaixo existem como PNG mas ainda **não têm versão SVG**.
Para exportar: abrir o arquivo no Figma → selecionar o frame/componente → Export → SVG → Salvar na pasta indicada.

---

## Logo (`assets/logo/`)

| Arquivo alvo | Frame no Figma | Observação |
|---|---|---|
| `logo-orange-bg.svg` | Logo / Orange BG | Fundo laranja `#FF5500`, símbolo branco |
| `logo-teal-bg.svg` | Logo / Teal BG | Fundo teal `#1A7A8A`, símbolo branco |
| `logo-inverted.svg` | Logo / Inverted | Invertido (escuro sobre claro) |
| `logo-dark-orange.svg` | Logo / Dark Orange | Fundo escuro, accento laranja |
| `logo-dark-teal.svg` | Logo / Dark Teal | Fundo escuro, accento teal |
| `logo-light-orange.svg` | Logo / Light Orange | Fundo claro, accento laranja |
| `logo-light-teal.svg` | Logo / Light Teal | Fundo claro, accento teal |
| `logo-dark-orange-full.svg` | Logo / Dark Orange Full | Versão full width |
| `wordmark-dark.svg` | Wordmark / Dark | Só o texto, fundo escuro |
| `wordmark-orange-bg.svg` | Wordmark / Orange BG | Fundo laranja |
| `wordmark-teal-bg.svg` | Wordmark / Teal BG | Fundo teal |

## Mascote Hermes (`assets/mascot/`)

| Arquivo alvo | Frame no Figma | Observação |
|---|---|---|
| `hermes-dark-orange.svg` | Hermes / Dark Orange | Fundo escuro, accento laranja |
| `hermes-dark-white.svg` | Hermes / Dark White | Fundo escuro, accento branco |
| `hermes-orange-bg.svg` | Hermes / Orange BG | Fundo laranja |
| `hermes-teal.svg` | Hermes / Teal | Variante teal |

---

## SVGs já disponíveis (referência)

| Arquivo | Tamanho |
|---|---|
| `logo-transparent-dark.svg` | 59KB |
| `logo-transparent-light.svg` | 59KB |
| `wordmark-transparent-dark.svg` | 4KB |
| `wordmark-transparent-light.svg` | 4KB |
| `hermes-icon-dark.svg` | 55KB |

---

**Após exportar:** rodar `bash scripts/optimize-assets.sh` para otimizar os novos SVGs.
