<!-- GERADO do theme-provider.css do blip-ds (tema light). Não editar à mão. -->
# Tokens do UAI — quando e como usar cada grupo

> Use SEMPRE `var(--token)`. Nunca hex, rgb ou px hardcoded.
> Os tokens só existem dentro do `UaiKitProvider` (que envolve o `BdsThemeProvider`).
> Temas: `light`, `dark`, `high-contrast`.

---

## Regra geral

**Prefira as props dos componentes antes de usar tokens diretamente.**
A maioria dos componentes UAI já aplica os tokens corretos internamente.
Só use `var(--token)` em CSS quando não houver prop equivalente no componente.

```tsx
// ✅ correto — deixa o componente aplicar os tokens
<BdsButton variant="primary">Salvar</BdsButton>

// ❌ errado — aplicar token manualmente onde o componente já cuida
<button style={{ background: 'var(--color-primary)' }}>Salvar</button>
```

---

## Cores de marca

| Token | Valor (light) | Quando usar |
|---|---|---|
| `var(--color-brand)` | rgb(0, 150, 250) | Elementos de identidade de marca (logos, acentos de branding) |
| `var(--color-primary)` | rgb(30, 107, 241) | Ação principal, links, elementos interativos de destaque |
| `var(--color-secondary)` | rgb(41, 41, 41) | Elementos secundários de identidade |

**Quando usar `--color-primary`**
Fundos de seções de destaque, indicadores ativos, bordas de foco customizadas.
Nunca use para texto sobre fundo branco — o contraste pode ser insuficiente em tamanhos pequenos.

**Quando NÃO usar**
Não use `--color-brand` e `--color-primary` juntos no mesmo elemento — são cores distintas e criam ruído. Não use `--color-primary` como cor de texto em tamanhos menores que `fs-16`.

---

## Superfícies (backgrounds)

| Token | Valor (light) | Quando usar |
|---|---|---|
| `var(--color-surface-0)` | rgb(255, 255, 255) | Fundo principal da página, cards, modais |
| `var(--color-surface-1)` | rgb(246, 246, 246) | Fundo de seções secundárias, inputs, áreas de conteúdo aninhado |
| `var(--color-surface-2)` | rgb(237, 237, 237) | Hover de itens de lista, linhas alternadas de tabela |
| `var(--color-surface-3)` | rgb(227, 227, 227) | Bordas sutis, separadores visuais sem usar `BdsDivider` |
| `var(--color-surface-4)` | rgb(20, 20, 20) | Fundo de overlays escuros, tooltips, dark elements |
| `var(--color-surface-positive)` | rgb(1, 114, 62) | Fundo de alertas de sucesso intensos |
| `var(--color-surface-negative)` | rgb(138, 0, 0) | Fundo de alertas de erro intensos |
| `var(--color-surface-primary)` | rgb(30, 107, 241) | Fundo de elementos selecionados ou ativos |

**Hierarquia de superfícies**
Use as superfícies em ordem crescente de profundidade:
- `surface-0` → camada mais externa (página)
- `surface-1` → camada intermediária (cards, painéis)
- `surface-2` → camada interna (inputs dentro de cards, itens de lista)

**Quando NÃO usar**
Não pule camadas (ex: `surface-0` dentro de `surface-0` sem distinguir visualmente). Não use `surface-4` (quase preto) como fundo de conteúdo longo — dificulta leitura.

---

## Texto (content)

| Token | Valor (light) | Quando usar |
|---|---|---|
| `var(--color-content-default)` | rgb(40, 40, 40) | Texto principal, corpo de texto, labels |
| `var(--color-content-disable)` | rgb(89, 89, 89) | Texto de elementos desabilitados |
| `var(--color-content-ghost)` | rgb(140, 140, 140) | Placeholder, texto de apoio, metadados de baixa prioridade |
| `var(--color-content-bright)` | rgb(255, 255, 255) | Texto sobre fundos escuros ou primários |
| `var(--color-content-din)` | rgb(0, 0, 0) | Texto de máximo contraste (uso raro, acessibilidade) |

**Hierarquia de texto**
- `content-default` → texto que o usuário precisa ler ativamente
- `content-ghost` → texto de suporte, não essencial para a tarefa
- `content-disable` → texto de elementos com interação desabilitada
- `content-bright` → sempre sobre fundo escuro (`surface-4`, `color-primary`)

**Quando NÃO usar**
Nunca use `content-ghost` para informações que o usuário precisa notar — o contraste é baixo intencionalmente. Não use `content-bright` sobre `surface-0` (branco sobre branco — invisível). Não use `content-din` como cor padrão de texto — reservado para casos de acessibilidade de alto contraste.

---

## Bordas

| Token | Valor (light) | Quando usar |
|---|---|---|
| `var(--color-border-1)` | rgba(0, 0, 0, 0.2) | Bordas de containers com mais destaque (cards selecionados, inputs com foco) |
| `var(--color-border-2)` | rgba(0, 0, 0, 0.16) | Bordas padrão de cards, painéis, inputs |
| `var(--color-border-3)` | rgba(0, 0, 0, 0.06) | Bordas sutíssimas, separadores de baixíssimo contraste |

**Quando usar bordas diretamente**
Só aplique `border` com tokens quando o componente não tem prop de borda equivalente. `BdsCard` já aplica `border-2` internamente — não sobreponha.

**Quando NÃO usar**
Não misture tokens de borda com cores sólidas hardcoded. Não use `border-1` para separação de seções — prefira `BdsDivider` ou `surface-2` como fundo.

---

## Semântica (feedback e status)

| Token | Valor (light) | Quando usar |
|---|---|---|
| `var(--color-positive)` | rgb(0, 122, 66) | Texto ou ícone de estado positivo/sucesso |
| `var(--color-negative)` | rgb(168, 11, 11) | Texto ou ícone de estado negativo/erro |
| `var(--color-success)` | rgb(132, 235, 188) | Fundo de badges ou chips de sucesso |
| `var(--color-warning)` | rgb(253, 233, 155) | Fundo de badges ou chips de aviso |
| `var(--color-error)` | rgb(250, 190, 190) | Fundo de badges ou chips de erro |
| `var(--color-info)` | rgb(128, 227, 235) | Fundo de badges ou chips informativos |
| `var(--color-system)` | rgb(178, 223, 253) | Mensagens de sistema, notificações neutras |
| `var(--color-focus)` | rgb(194, 38, 251) | Anel de foco para acessibilidade (não altere este token) |
| `var(--color-delete)` | rgb(230, 15, 15) | Ações e estados destrutivos |

**Regra de pares: texto + fundo**
Tokens de status vêm em pares — texto escuro sobre fundo claro:
- Sucesso: `--color-positive` (texto) sobre `--color-success` (fundo)
- Erro: `--color-negative` (texto) sobre `--color-error` (fundo)
- Aviso: `--color-secondary` (texto) sobre `--color-warning` (fundo)
- Info: `--color-secondary` (texto) sobre `--color-info` (fundo)

**Quando NÃO usar**
Nunca use `--color-success` (verde claro) como cor de texto — contraste insuficiente. Não use `--color-delete` para avisos não destrutivos — o vermelho sinaliza perigo e cria alarme desnecessário. Não altere `--color-focus` — é usado pelo browser para acessibilidade de teclado.

---

## Interação (estados)

| Token | Valor (light) | Quando usar |
|---|---|---|
| `var(--color-hover)` | rgba(0, 0, 0, 0.08) | Overlay de hover em elementos interativos |
| `var(--color-pressed)` | rgba(0, 0, 0, 0.16) | Overlay de pressed/active em elementos interativos |
| `var(--color-shadow-0)` | rgba(0, 0, 0, 0.04) | Sombra suave (elevação mínima) |
| `var(--color-shadow-1)` | rgba(0, 0, 0, 0.16) | Sombra padrão de cards e dropdowns |

**Quando usar**
Use `--color-hover` e `--color-pressed` como overlay sobre o fundo existente (via `background` ou `::after`) para criar estados interativos em elementos customizados que não são componentes UAI. Os componentes UAI já aplicam esses estados internamente.

**Quando NÃO usar**
Não aplique esses tokens em elementos estáticos (sem interação). Não use `--color-shadow-1` em todos os elementos — sombra em excesso elimina a hierarquia de elevação.

---

## Cores estendidas (extended)

Use apenas para visualizações de dados, gráficos, tags e categorizações onde você precisa de mais cores além das semânticas. **Nunca use para substituir tokens semânticos.**

| Token | Par (fundo + texto sugerido) | Uso típico |
|---|---|---|
| `--color-extended-blue` + `--color-extended-blue-bright` | texto + fundo | Categoria A, canal Web |
| `--color-extended-ocean` + `--color-extended-ocean-bright` | texto + fundo | Categoria B, canal Chat |
| `--color-extended-green` + `--color-extended-green-bright` | texto + fundo | Categoria C, canal WhatsApp |
| `--color-extended-yellow` + `--color-extended-yellow-bright` | texto + fundo | Categoria D, canal Email |
| `--color-extended-orange` + `--color-extended-orange-bright` | texto + fundo | Categoria E, alertas não críticos |
| `--color-extended-red` + `--color-extended-red-bright` | texto + fundo | Categoria F (não use para erros — use semântico) |
| `--color-extended-pink` + `--color-extended-pink-bright` | texto + fundo | Categoria G |
| `--color-extended-gray` + `--color-extended-gray-bright` | texto + fundo | Itens inativos, arquivados |

**Quando NÃO usar**
Não use cores extended para feedback de sistema (sucesso, erro, aviso) — use os tokens semânticos. Não misture extended com semânticos no mesmo contexto visual — cria ambiguidade de significado.

---

## Antipadrões — o que nunca fazer

```tsx
// ❌ hex hardcoded
style={{ color: '#1e6bf1' }}

// ❌ rgb hardcoded
style={{ background: 'rgb(30, 107, 241)' }}

// ❌ token fora do UaiKitProvider (não existe no escopo)
// (renderizará em branco ou cor padrão do browser)
<div style={{ color: 'var(--color-primary)' }} /> // fora do provider

// ❌ token de texto sobre fundo errado (contraste insuficiente)
style={{ background: 'var(--color-success)', color: 'var(--color-content-bright)' }}

// ✅ correto — par semântico com contraste adequado
style={{ background: 'var(--color-success)', color: 'var(--color-positive)' }}

// ✅ correto — deixar o componente aplicar os tokens
<BdsBadge color="success" label="Ativo" />
```
