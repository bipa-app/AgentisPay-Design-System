# AgentisPay — Design System

Design system oficial da Agentis Pay. Contém tokens de design, guia de identidade visual, componentes mobile e web.

**Preview:** [agentispay-ds.netlify.app](https://agentispay-ds.netlify.app)

---

## Estrutura

```
branding/
├── assets/
│   ├── logo/           → Variantes da logo (PNG + SVG)
│   ├── mascot/         → Hermes — variantes + SVG
│   └── illustrations/  → Ilustrações dot-matrix (símbolo, moeda)
├── tokens/
│   └── tokens.css      → CSS custom properties — fonte única de tokens
├── design-system.html  → Design system completo (Brand · Mobile DS · Web DS)
├── CHANGELOG.md        → Histórico de versões
└── README.md
```

---

## Como usar os tokens

### Web (CSS)

```css
@import 'tokens/tokens.css';

.btn-primary {
  background: var(--orange);
  border-radius: var(--r-btn);
  color: var(--primary-foreground);
}
```

### React Native / NativeWind

Os tokens para mobile estão em [`mobile/src/lib/theme.ts`](../agent-pay/mobile/src/lib/theme.ts).

```ts
import { colors, radius, fonts } from '@/lib/theme';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors['ap-bg2'],
    borderRadius: radius.card,
  },
});
```

Classes NativeWind disponíveis: `bg-ap-bg2`, `text-ap-t1`, `border-ap-border`, `rounded-card`, `font-mono`.

---

## Tokens principais

| Token | Valor | Uso |
|-------|-------|-----|
| `--orange` | `#FF5500` | Brand primary, CTAs |
| `--teal` | `#1A7A8A` | Ação secundária |
| `--bg` | `#0D1117` | Page background |
| `--bg2` | `#111D27` | Card surface |
| `--t` | `#FFFFFF` | Texto primário |
| `--t2` | `#8A9BB0` | Texto secundário |
| `--success` | `#34D399` | Confirmação, aprovação |
| `--danger` | `#C03A2B` | Erro, recusa |
| `--r-card` | `14px` | Border radius padrão |
| `--font-sans` | `Space Grotesk` | Interface |
| `--font-mono` | `Space Mono` | Valores monetários, IDs |
| `--font-serif` | `Philosopher` | Headlines, brand |

Lista completa em [`tokens/tokens.css`](./tokens/tokens.css).

---

## Assets

Todos os assets em `assets/` seguem nomenclatura semântica:

```
logo-{fundo}-{variante}.png/svg
wordmark-{fundo}.png/svg
hermes-{fundo}-{cor}.png
hermes-icon-dark.svg
```

**Regra de uso de logo:**
- Fundo escuro → `logo-dark-orange.png` ou `logo-transparent-dark.svg`
- Fundo claro → `logo-light-orange.png` ou `logo-transparent-light.svg`
- Em código (escalável) → sempre preferir `.svg`

---

## Deploy

O site é publicado automaticamente no Netlify a cada push na branch `main`.

Para publicar manualmente:
```sh
netlify deploy --dir . --prod
```

---

## Versionamento

Seguimos [Semantic Versioning](https://semver.org):
- **Major** — mudança de identidade visual ou tokens breaking
- **Minor** — novos componentes, novos tokens
- **Patch** — correções, ajustes de documentação

Ver histórico completo em [CHANGELOG.md](./CHANGELOG.md).
