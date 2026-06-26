# 00 — Instruções do Make kit do UAI (LER PRIMEIRO)

Você está gerando telas com o design system UAI (`blip-uai-ds`).
Siga estes passos NA ORDEM, antes de escrever qualquer código.

## Passo 1 — Leia antes de codar (obrigatório)
- `overview-setup.md` — como montar a base (provider, fonte, imports, grid).
- `design-tokens.md` — os tokens reais (cores e quando usar cada grupo).
- `allowed-icons.md` — os nomes de ícone válidos. Use só estes.
- `components.md` — quando usar cada componente UAI (com orientações de UX).

## Passo 2 — Regras inegociáveis

### Layout — Container/Row/Col (react-grid-system)
- **`BdsGrid` está PROIBIDO para layout de colunas e breakpoints.** Tem bug estrutural com `@lit/react` que causa `xs--undefined` no DOM.
- Use **`Container`**, **`Row`** e **`Col`** do `react-grid-system` — já exportados pelo kit — para toda estrutura de página.
- `Col` props são **number**: `xs={12}` `md={4}`. `Row` usa `gutterWidth={24}` para espaçamento.
- `BdsGrid` só é permitido para `padding` e `margin` via props em elementos internos, nunca para breakpoints (`xs`, `md`, `lg`).

```tsx
// ✅ correto
import { Container, Row, Col, BdsCard } from 'blip-uai-ds';
<Container>
  <Row gutterWidth={24}>
    <Col xs={12} md={4}><BdsCard>...</BdsCard></Col>
    <Col xs={12} md={4}><BdsCard>...</BdsCard></Col>
  </Row>
</Container>

// ❌ proibido
<BdsGrid container gap="3">
  <BdsGrid xs="12" md="4">...</BdsGrid>
</BdsGrid>
```

### Componentes — tabela de substituição obrigatória

**Nunca use HTML cru.** Para cada elemento HTML existe um componente UAI equivalente:

| ❌ Nunca use | ✅ Use no lugar |
|---|---|
| `<div>` como container visual | `<BdsCard>` + `<BdsCardBody>` |
| `<div>` como seção sem título | `<BdsPaper>` |
| `<div>` como layout de colunas | `<Container><Row><Col>` |
| `<p>`, `<span>`, `<h1>`–`<h6>` | `<BdsTypo variant="fs-XX">` |
| `<button>` | `<BdsButton variant="...">` |
| `<input>` | `<BdsInput label="...">` |
| `<select>` | `<BdsSelect>` |
| `<img>` | `<BdsImage>` |
| `<table>` | `<BdsTable>` |
| `<ul>` / `<li>` | `<BdsList>` + `<BdsListItem>` |
| `<hr>` | `<BdsDivider>` |
| `<nav>` | `<BdsNavbar>` ou `<BdsSidebar>` |

- Consulte `components.md` para detalhes de cada componente.
- **Se não existe componente UAI para o que precisa, avise o usuário — não improvise com HTML.**

### Estilo
- Só `var(--token)` do `design-tokens.md`. **NUNCA** hex, rgb ou px hardcoded.
- **NUNCA** use `style={{ color: ... }}` ou `style={{ background: ... }}` em componentes UAI — as cores vêm das props do componente (`variant`, `color`, `bgColor`) ou do contexto do tema.
- Tokens só existem dentro do `UaiKitProvider`. Nada fora dele terá as cores.

### Ícones
- Só nomes do `allowed-icons.md`. Se não estiver na lista, **não use ícone**.

### Raiz obrigatória
```tsx
import { UaiKitProvider } from 'blip-uai-ds';
<UaiKitProvider theme="light">
  {/* toda a aplicação aqui */}
</UaiKitProvider>
```

## Passo 3 — Se faltar algo
Se o UAI não tiver um componente para o que foi pedido, **avise** em vez de
inventar um componente próprio ou cair em HTML/CSS. Não improvise um "parecido".
Componentes ausentes estão listados no final de `components.md`.

## Passo 4 — Antes de entregar
Valide e confirme:
- [ ] Toda a árvore dentro do `UaiKitProvider`
- [ ] Layout usando `Container`/`Row`/`Col` — sem `BdsGrid` com breakpoints
- [ ] Nenhum `div` estilizado onde existe componente UAI
- [ ] Nenhum `style` inline com cor ou background em componente UAI
- [ ] Só tokens `var(--color-*)` — sem hex ou rgb
- [ ] Só ícones da lista do `allowed-icons.md`
- [ ] Props dos componentes UAI usadas corretamente (sem overrides de estilo)

---
<!-- blip-uai-ds v0.2.0 — react-grid-system para layout, blip-ds para componentes -->
