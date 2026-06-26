# blip-uai-ds — Guidelines

Leia os arquivos abaixo NA ORDEM antes de escrever qualquer código.
Todos estão em `node_modules/blip-uai-ds/guidelines/`.

1. `guidelines/00-instructions.md` — regras inegociáveis e checklist de validação
2. `guidelines/overview-setup.md` — setup, grid system, armadilhas
3. `guidelines/design-tokens.md` — tokens de cor e quando usar cada grupo
4. `guidelines/components.md` — quando usar cada componente (com orientações de UX)
5. `guidelines/allowed-icons.md` — nomes de ícone válidos

---

## Regras críticas (resumo)

### Layout
- **`BdsGrid` está PROIBIDO para layout.** Use `Container`, `Row`, `Col` do `react-grid-system`.
- `Col` props são **number**: `xs={12}` `md={4}`. Nunca string.
- `Row` usa `gutterWidth={24}` para espaçamento entre colunas.

### Componentes — substituição obrigatória de HTML

**Nunca use HTML cru.** Substitua sempre:

| ❌ Nunca use | ✅ Use no lugar |
|---|---|
| `<div>` container visual | `<BdsCard>` + `<BdsCardBody>` |
| `<div>` seção sem título | `<BdsPaper>` |
| `<div>` layout de colunas | `<Container><Row><Col>` |
| `<p>`, `<span>`, `<h1>`–`<h6>` | `<BdsTypo variant="fs-XX">` |
| `<button>` | `<BdsButton variant="...">` |
| `<input>` | `<BdsInput label="...">` |
| `<select>` | `<BdsSelect>` |
| `<img>` | `<BdsImage>` |
| `<table>` | `<BdsTable>` |
| `<ul>` / `<li>` | `<BdsList>` + `<BdsListItem>` |
| `<hr>` | `<BdsDivider>` |
| `<nav>` | `<BdsNavbar>` ou `<BdsSidebar>` |

- `BdsCardColor` **está proibido** — é um swatch interno, não um container.
- Para container com fundo colorido use `<BdsCard bgColor="var(--color-...)">`.
- Se não existe componente UAI equivalente, **avise o usuário** — não improvise.

### Estilo
- Só `var(--color-*)`. Nunca hex, rgb ou px hardcoded.
- **Nunca** `style={{ color: ... }}` ou `style={{ background: ... }}` em componentes UAI.
- As cores vêm das props do componente (`variant`, `color`, `bgColor`) — nunca de `style` inline.

### Raiz obrigatória
```tsx
import { UaiKitProvider } from 'blip-uai-ds';
<UaiKitProvider theme="light">
  {/* toda a aplicação aqui */}
</UaiKitProvider>
```

### Exemplo de layout correto
```tsx
import { UaiKitProvider, Container, Row, Col, BdsCard, BdsCardBody, BdsTypo, BdsButton } from 'blip-uai-ds';

export default function App() {
  return (
    <UaiKitProvider theme="light">
      <Container>
        <Row gutterWidth={24}>
          <Col xs={12} md={4}>
            <BdsCard>
              <BdsCardBody>
                <BdsTypo variant="fs-16" margin={false}>Conteúdo</BdsTypo>
                <BdsButton variant="primary">Ação</BdsButton>
              </BdsCardBody>
            </BdsCard>
          </Col>
        </Row>
      </Container>
    </UaiKitProvider>
  );
}
```

### Checklist antes de entregar
- [ ] Toda a árvore dentro do `UaiKitProvider`
- [ ] Layout usando `Container`/`Row`/`Col` — sem `BdsGrid` com breakpoints
- [ ] Nenhum `div` estilizado onde existe componente UAI
- [ ] Nenhum `style` inline com cor ou background em componente UAI
- [ ] Só tokens `var(--color-*)` — sem hex ou rgb
- [ ] Só ícones da lista do `allowed-icons.md`
