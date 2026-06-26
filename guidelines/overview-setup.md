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

## BdsGrid — BUG CRÍTICO: use `<bds-grid>` raw para breakpoints

### Por que `xs--undefined` aparece no DOM

`BdsGrid` (React wrapper) usa `@lit/react`, que detecta `xs`, `md`, `gap` no
prototype do elemento e os envia via `useLayoutEffect` (property setter).
O Stencil agenda o re-render via `requestAnimationFrame` — então o navegador
pinta um frame com `xs--undefined` antes da prop chegar. **Isso não se resolve
mudando o tipo do valor — é estrutural do wrapper.**

### Solução: usar `<bds-grid>` raw (lowercase) para colunas com breakpoints

React trata elementos com hífen (`bds-grid`) como custom elements HTML e passa
string props como **atributos** antes de conectar ao DOM. O Stencil lê o valor
correto já na inicialização — sem flash, sem `--undefined`.

```tsx
// ✅ CORRETO — usa <bds-grid> raw (lowercase) para breakpoints
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bds-grid': React.HTMLAttributes<HTMLElement> & {
        container?: boolean;
        'container-fluid'?: boolean;
        direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
        'flex-wrap'?: 'wrap' | 'wrap-reverse';
        'justify-content'?: string;
        'align-items'?: string;
        gap?: 'none' | 'half' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
        padding?: string;
        margin?: string;
        height?: string;
        xs?: 'auto' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
        sm?: 'auto' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
        md?: 'auto' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
        lg?: 'auto' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
        xg?: 'auto' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
        xxs?: 'auto' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
      };
    }
  }
}

// Container raiz: BdsGrid (React wrapper) — gap e container funcionam via propriedade
// Colunas: <bds-grid> raw — xs/md chegam como atributo antes do connectedCallback
<BdsGrid container gap="3">
  <bds-grid xs="12" md="4">
    <BdsCard>Card 1</BdsCard>
  </bds-grid>
  <bds-grid xs="12" md="4">
    <BdsCard>Card 2</BdsCard>
  </bds-grid>
  <bds-grid xs="12" md="4">
    <BdsCard>Card 3</BdsCard>
  </bds-grid>
</BdsGrid>
```

> **Regra prática:**
> - `<BdsGrid container gap="...">` → container raiz (sem breakpoints)
> - `<bds-grid xs="..." md="...">` → colunas filhas (com breakpoints)

## BdsGrid — Breakpoints e sistema de espaçamento

### Breakpoints reais (extraídos do CSS do componente)

| Prop | Min-width | Uso |
|---|---|---|
| `xxs` | nenhum (base) | mobile first — aplica **sempre**, sem media query |
| `xs` | 600px | pequeno (landscape mobile) |
| `sm` | 905px | tablet |
| `md` | 993px | desktop pequeno |
| `lg` | 1601px | desktop grande |
| `xg` | 1921px | ultrawide |

> **Mobile first:** use `xxs` para o valor padrão e sobreponha com `xs`, `md` etc.
> `xxs="12" xs="6" md="4"` = full width base, metade em 600px, terço em 993px.

### Gap — valores em px

| Valor | px |
|---|---|
| `none` | 0 |
| `half` | 4px |
| `1` | 8px |
| `2` | 16px |
| `3` | 24px |
| `4` | 32px |
| `6` | 48px |

### Container — max-width por breakpoint

| Min-width | max-width do container |
|---|---|
| < 905px | 100% |
| 905px | 848px |
| 993px | 944px |
| 1601px | 1328px |
| 1921px | 1424px |

> **Importante:** o container centraliza e limita a largura. Use apenas no grid raiz — nunca em grids aninhados.

### Padding nativo das células
Cada célula (`xxs`, `xs`, `md` etc.) tem `padding-left: 8px` e `padding-right: 8px` nativos. Isso cria um gutter de 16px entre colunas sem precisar de `gap`.

## BdsGrid — API real e armadilhas

### Tipos das props (fonte: `grid-interface.d.ts`)

| Prop | Tipo | Valores válidos |
|---|---|---|
| `xs` `sm` `md` `lg` `xg` `xxs` | `string` | `'auto'` \| `'1'` … `'12'` |
| `xsOffset` `smOffset` `mdOffset` `lgOffset` `xgOffset` `xxsOffset` | `string` | `'1'` … `'12'` |
| `gap` | `string` | `'none'` \| `'half'` \| `'1'` … `'12'` |
| `container` | `boolean` | `true` \| `false` |
| `containerFluid` | `boolean` | `true` \| `false` |
| `direction` | `string` | `'row'` \| `'row-reverse'` \| `'column'` \| `'column-reverse'` |
| `flexWrap` | `string` | `'wrap'` \| `'wrap-reverse'` |
| `justifyContent` | `string` | `'flex-start'` \| `'center'` \| `'flex-end'` \| `'space-between'` \| `'space-around'` \| `'space-evenly'` \| `'stretch'` |
| `alignItems` | `string` | `'flex-start'` \| `'center'` \| `'flex-end'` \| `'stretch'` \| `'baseline'` |
| `padding` | `string` | `'none'` \| `'half'` \| `'1'`…`'12'` \| `'t-1'` \| `'b-2'` \| `'l-3'` \| `'r-4'` \| `'x-2'` \| `'y-3'` etc. |
| `margin` | `string` | igual ao `padding` |
| `height` | `string` | qualquer valor CSS ex: `'100%'` |
| `bgColor` | `string` | token de cor |

> ⚠️ **CRÍTICO:** `xs`, `md`, `gap` etc. são **sempre string**. Nunca passe número:
> - ✅ `xs="6"` `md="4"` `gap="3"`
> - ❌ `xs={6}` `md={4}` `gap={3}` — renderiza `xs--undefined` no DOM

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
