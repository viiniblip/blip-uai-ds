# overview-setup.md — Base correta do UAI

> Verificado nos pacotes reais (`blip-ds` / `blip-ds-react` @ 2.0.0-rc.16 e `blip-tokens` @ 1.103.0).

## Pacotes
- Instale os **dois**: `blip-ds-react` e `blip-ds`. O `blip-ds-react` **não declara** o
  `blip-ds` como dependência — sem o core, os componentes não montam.
- React 18.3.1+ como peer. Compatível com Vite (build system do Figma Make).
- Sem dependências de workspace/monorepo (o kit roda isolado).

## Tokens e estilo
- Os tokens (`var(--color-*)` etc.) **só existem dentro do `BdsThemeProvider`** —
  são escopados ao `:host` do provider, NÃO ao `:root`. Envolva o app inteiro.
- **NÃO** existe `blip-ds/dist/blip-ds/blip-ds.css` para importar — esse import dá erro.
  Os estilos de componente ficam no shadow DOM via loader do Stencil.
- Temas: `light`, `dark`, `high-contrast`.

## Fonte
- A fonte da marca é **Nunito Sans** (fallback Helvetica). O provider só seta
  `font-family`; o webfont precisa ser carregado (o kit já importa via `@fontsource`).

## Raiz mínima
```tsx
import { UaiKitProvider, BdsButton } from 'blip-uai-ds';

export default function App() {
  return (
    <UaiKitProvider theme="light">
      <BdsButton variant="primary">Entrar</BdsButton>
    </UaiKitProvider>
  );
}
```

## BdsGrid — regras e armadilhas

### Grid raiz (nível 1)
```tsx
<BdsGrid container gap="3">
  <BdsGrid xs="12" md="6">...</BdsGrid>
  <BdsGrid xs="12" md="6">...</BdsGrid>
</BdsGrid>
```

### Grid aninhado (nível 2+)
**NUNCA** use `container` nem `gap` em grids internos.
- `container` aplica `max-width: 944px; margin: auto` via Shadow CSS e estoura a coluna pai.
- `gap` + largura percentual = overflow aritmético (`50% + 50% + gap > 100%`).

Use `direction="row"` e `flexWrap="wrap"`. O gutter vem do padding nativo das células:
```tsx
<BdsGrid container gap="3">
  <BdsGrid xs="12" md="6">
    {/* grid interno: sem container, sem gap */}
    <BdsGrid direction="row" flexWrap="wrap">
      <BdsGrid xs="6">...</BdsGrid>
      <BdsGrid xs="6">...</BdsGrid>
    </BdsGrid>
  </BdsGrid>
</BdsGrid>
```

## Eventos (lembrete do wrapper Stencil)
- Eventos são `onBds*` e o payload vem em `event.detail`
  (ex.: `onBdsChange={(e) => e.detail.value}`).
