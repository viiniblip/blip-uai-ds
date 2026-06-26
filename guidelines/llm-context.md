# Contexto do projeto — UAI Make Kit (`blip-uai-ds`)

Use este documento para pedir insights ao LLM sobre o kit, as decisões tomadas,
problemas encontrados e oportunidades de melhoria.

---

## O que é este projeto

`blip-uai-ds` é um **Make kit autocontido** do design system UAI (blip-ds) criado
para o **Figma Make** — ferramenta de geração de UI via LLM da Figma.

O objetivo é que o LLM do Make gere telas usando exclusivamente os componentes,
tokens e padrões do UAI, sem cair em HTML cru, Tailwind ou valores hardcoded.

**Repositório:** github.com/viiniblip/blip-uai-ds  
**npm:** npmjs.com/package/blip-uai-ds  
**Versão atual:** 0.2.0

---

## Stack técnica

| Camada | Tecnologia |
|---|---|
| Componentes | `blip-ds` + `blip-ds-react` @ 2.0.0-rc.16 (Stencil web components) |
| Wrapper React | `@stencil/react-output-target` via `@lit/react` |
| Build | Vite 5 em library mode (ESM) + `vite-plugin-dts` |
| Grid | `react-grid-system` ^8.2.0 |
| Fonte | `@fontsource/nunito-sans` (400, 600, 700) |
| Peer deps | React 18.3.1+ |
| CI/CD | GitHub Actions → npm publish via `NPM_TOKEN` |

---

## Decisões de arquitetura tomadas

### 1. Kit autocontido — não monorepo
O kit empacota `blip-ds` + `blip-ds-react` como dependências diretas porque o
`blip-ds-react` não declara `blip-ds` como dependência. Sem o core, os web
components não montam. O Make não gerencia dependências implícitas.

### 2. `BdsGrid` banido para layout de colunas
**Bug descoberto:** `BdsGrid` usa `@lit/react` que detecta props como `xs`, `md`,
`gap` no prototype do elemento e as envia via `useLayoutEffect`. O Stencil agenda
re-renders via `requestAnimationFrame` — o browser pinta um frame com `xs--undefined`
antes da prop chegar. Não tem correção sem patch no `blip-ds-react`.

**Solução adotada:** `react-grid-system` para toda estrutura de layout.
`BdsGrid` só é permitido para `padding`/`margin` internos, nunca para breakpoints.

### 3. `defineCustomElements()` explícito no entry point
O Figma Make não garante que os web components do Stencil se auto-registrem.
O kit chama `defineCustomElements()` no `src/index.ts` para garantir o registro.

### 4. CSS do `@fontsource` bundlado no kit
O Make não carrega fontes externas automaticamente. O kit importa as três
variantes da Nunito Sans diretamente no entry — sem isso a tipografia cai para
Helvetica e o Make "conserta" com CSS próprio.

### 5. `UaiKitProvider` como raiz obrigatória
Os tokens `var(--color-*)` são escopados ao `:host` do `BdsThemeProvider`, não
ao `:root`. Qualquer componente fora do provider fica sem os tokens.

---

## Problemas encontrados durante o desenvolvimento

### Problema 1 — `xs--undefined` no DOM
**Causa raiz:** `@lit/react` separa props em dois grupos: as que estão no
prototype do elemento vão para `elementProps` (set via `useLayoutEffect`); as
outras vão para `reactProps` (atributos HTML imediatos). Como `xs`, `md` etc.
estão no prototype via `proxyCustomElement` do Stencil, eles vão para
`elementProps`. O Stencil usa `requestAnimationFrame` para re-renders —
o browser pinta antes da atualização.

**Solução:** substituir `BdsGrid` por `react-grid-system` para layout responsivo.

### Problema 2 — `container` em grid aninhado estoura o pai
`BdsGrid container` aplica `max-width: 944px; margin: auto` via Shadow CSS em
viewports ≥ 993px. Dentro de uma coluna pai, o grid interno tenta crescer até
esse max-width e sai do card.

**Solução documentada:** nunca usar `container` em grids internos.

### Problema 3 — `gap` + largura percentual = overflow
Células com `xs="6"` têm `width: 50%`. Com `gap="2"` (16px CSS), a linha fica
`50% + 16px + 50% = 100% + 16px` → overflow de 16px.

**Solução documentada:** grids internos sem `gap`, usando padding nativo das células.

### Problema 4 — Make ignora props do componente e usa `style` inline
O LLM do Make tende a usar `style={{ color: 'var(--color-primary)' }}` em
`BdsTypo` e `div` estilizados no lugar de `BdsCard`. Causa: ausência de exemplos
concretos com componentes reais nas guidelines.

**Solução:** examples no `components.md` e `00-instructions.md` com proibições
explícitas e checklist de validação.

### Problema 5 — `blip-ds-react` falha em Node.js ESM puro
`blip-ds-react/dist/index.js` exporta `export * from './components'` sem extensão.
Node.js ESM exige extensão explícita. Em bundler (Vite/webpack) funciona porque
o bundler resolve extensões. O Figma Make usa Vite — não é um problema em produção.

---

## Estrutura do kit

```
blip-uai-ds/
├── src/
│   ├── index.ts          # entry: defineCustomElements, fontsource, re-exports
│   └── UaiKitProvider.tsx # wrapper de BdsThemeProvider
├── guidelines/
│   ├── 00-instructions.md # regras inegociáveis (lido primeiro pelo Make)
│   ├── overview-setup.md  # setup, grid system, armadilhas do BdsGrid
│   ├── design-tokens.md   # tokens de cor + quando usar cada grupo
│   ├── components.md      # quando usar cada componente + orientações de UX
│   └── allowed-icons.md   # lista de ícones válidos
├── vite.config.ts         # library mode ESM + externals
├── tsconfig.json
└── .github/workflows/publish.yml # build → smoke test → npm publish
```

---

## Padrão de uso correto (referência rápida)

```tsx
import {
  UaiKitProvider,
  Container, Row, Col,          // layout
  BdsCard, BdsCardHeader,        // containers visuais
  BdsCardTitle, BdsCardBody,
  BdsCardFooter,
  BdsTypo, BdsButton, BdsIcon,  // elementos
  BdsBadge, BdsDivider,
} from 'blip-uai-ds';

export default function App() {
  return (
    <UaiKitProvider theme="light">
      <Container>
        <Row>
          <Col xs={12}>
            <BdsTypo variant="fs-32" bold="bold" tag="h1" margin={false}>
              Título da página
            </BdsTypo>
          </Col>
        </Row>
        <BdsDivider />
        <Row gutterWidth={24} style={{ marginTop: 24 }}>
          <Col xs={12} md={4}>
            <BdsCard>
              <BdsCardHeader>
                <BdsIcon name="chart-bar" />
                <BdsCardTitle>Métrica</BdsCardTitle>
              </BdsCardHeader>
              <BdsCardBody>
                <BdsTypo variant="fs-24" bold="bold" margin={false}>84%</BdsTypo>
                <BdsBadge color="success" label="+2% esta semana" />
              </BdsCardBody>
              <BdsCardFooter>
                <BdsButton variant="tertiary" size="short">Ver detalhes</BdsButton>
              </BdsCardFooter>
            </BdsCard>
          </Col>
        </Row>
      </Container>
    </UaiKitProvider>
  );
}
```

---

## O que o kit NÃO resolve (limitações conhecidas)

- **Gráficos reais** (bar chart, line chart, pizza) — `BdsIcon` tem ícones de chart mas não renderiza dados
- **Drag-and-drop de cards** (kanban)
- **Player de vídeo/áudio** customizado
- **Color picker**
- **Tree view com checkbox** — só navegação simples via `BdsNavTree`
- **Editor de código** inline
- **Mapas / geolocalização**

---

## Perguntas úteis para pedir ao notebook LLM

- "Baseado nos problemas do `BdsGrid`, quais outros componentes Stencil podem ter
  o mesmo bug com `@lit/react`? Como detectar antecipadamente?"

- "Como melhorar as guidelines para que o LLM do Make acerte na primeira tentativa
  sem precisar de correção iterativa?"

- "Qual estratégia de versionamento usar para o kit conforme o `blip-ds` evolui?"

- "Como estruturar um smoke test mais robusto que valide não apenas o import mas
  a renderização real dos componentes?"

- "Quais padrões de prompt engineering são mais eficazes para LLMs que geram UI
  com design systems baseados em web components?"

- "Como medir a aderência do código gerado pelo Make às guidelines do kit?"

- "Quais componentes do UAI têm maior risco de serem mal usados pelo Make, baseado
  nos padrões de erro observados?"
