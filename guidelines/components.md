# Guia de componentes UAI — quando usar cada um

> Use EXCLUSIVAMENTE estes componentes. Se existe um aqui para o que você precisa,
> não use `div`, `button`, `input` ou qualquer HTML cru no lugar.

---

## Tipografia

### `BdsTypo`
Todo texto da interface. Nunca use `<p>`, `<h1>`–`<h6>`, `<span>` diretamente.

```tsx
<BdsTypo variant="fs-32" bold="bold" tag="h1" margin={false}>Título</BdsTypo>
<BdsTypo variant="fs-16" margin={false}>Parágrafo normal</BdsTypo>
<BdsTypo variant="fs-12" bold="semi-bold" margin={false}>Label</BdsTypo>
```

| Variante | Uso típico |
|---|---|
| `fs-32` | Títulos de página (H1) |
| `fs-24` | Títulos de seção (H2) |
| `fs-20` | Subtítulos (H3) |
| `fs-16` | Corpo de texto principal |
| `fs-14` | Texto secundário, labels |
| `fs-12` | Captions, metadados, badges de texto |
| `fs-10` | Micro texto, rodapés |

Props: `bold="bold"` / `bold="semi-bold"`, `tag="h1"..."h6"`, `margin={false}`

---

## Botões e ações

### `BdsButton`
Ação principal ou secundária. Nunca use `<button>`.

```tsx
<BdsButton variant="primary">Salvar</BdsButton>
<BdsButton variant="secondary">Cancelar</BdsButton>
<BdsButton variant="tertiary">Ver mais</BdsButton>
<BdsButton variant="delete">Excluir</BdsButton>
<BdsButton variant="primary" size="short">Compacto</BdsButton>
<BdsButton variant="primary" icon="add">Com ícone</BdsButton>
<BdsButton variant="primary" disabled>Desabilitado</BdsButton>
```

| Variant | Quando usar |
|---|---|
| `primary` | Ação principal da tela (1 por contexto) |
| `secondary` | Ação secundária, alternativa |
| `tertiary` | Ação de menor destaque, links de ação |
| `delete` | Ações destrutivas (excluir, remover) |
| `ghost` | Ação em fundos coloridos |

### `BdsButtonIcon`
Botão só com ícone, sem texto. Use quando o espaço é limitado.

```tsx
<BdsButtonIcon icon="edit" variant="secondary" />
<BdsButtonIcon icon="delete" variant="delete" />
```

### `BdsButtonGroup`
Agrupa botões relacionados (ex: toolbar, segmented control).

```tsx
<BdsButtonGroup>
  <BdsButton variant="secondary">Semana</BdsButton>
  <BdsButton variant="primary">Mês</BdsButton>
  <BdsButton variant="secondary">Ano</BdsButton>
</BdsButtonGroup>
```

---

## Formulários e entradas

### `BdsInput`
Campo de texto genérico. Nunca use `<input>`.

```tsx
<BdsInput label="Nome" placeholder="Digite seu nome" required />
<BdsInput label="Email" type="email" helper-message="Será usado para login" />
<BdsInput label="Busca" icon="search" />
<BdsInput label="Valor" disabled value="somente leitura" />
```

### `BdsInputPassword`
Campo de senha com toggle de visibilidade.

```tsx
<BdsInputPassword label="Senha" required />
```

### `BdsInputPhoneNumber`
Campo de telefone com máscara e seletor de DDD/país.

```tsx
<BdsInputPhoneNumber label="Telefone" />
```

### `BdsInputChips`
Campo que transforma entradas em chips (tags). Use para emails, palavras-chave.

```tsx
<BdsInputChips label="Tags" />
```

### `BdsInputEditable`
Texto que vira campo ao clicar. Use para edição inline.

```tsx
<BdsInputEditable value="Clique para editar" />
```

### `BdsSelect`
Dropdown de seleção simples. Nunca use `<select>`.

```tsx
<BdsSelect label="Status">
  <BdsSelectOption value="active">Ativo</BdsSelectOption>
  <BdsSelectOption value="inactive">Inativo</BdsSelectOption>
</BdsSelect>
```

### `BdsSelectChips`
Seleção múltipla que exibe os selecionados como chips.

```tsx
<BdsSelectChips label="Canais" />
```

### `BdsAutocomplete`
Campo de texto com sugestões enquanto digita.

```tsx
<BdsAutocomplete label="Buscar contato" options={options} />
```

### `BdsCheckbox`
Seleção múltipla de opções. Nunca use `<input type="checkbox">`.

```tsx
<BdsCheckbox label="Aceito os termos" />
<BdsCheckbox label="Notificações" checked />
```

### `BdsRadio` + `BdsRadioGroup`
Seleção única entre opções. Nunca use `<input type="radio">`.

```tsx
<BdsRadioGroup>
  <BdsRadio label="Masculino" value="m" />
  <BdsRadio label="Feminino" value="f" />
  <BdsRadio label="Outro" value="o" />
</BdsRadioGroup>
```

### `BdsSwitch`
Toggle on/off para configurações booleanas.

```tsx
<BdsSwitch label="Notificações ativas" checked />
<BdsSwitch label="Modo escuro" />
```

### `BdsSlider`
Seleção de valor numérico em um intervalo.

```tsx
<BdsSlider min={0} max={100} value={50} label="Volume" />
```

### `BdsDatepicker`
Seletor de data única.

```tsx
<BdsDatepicker label="Data de nascimento" />
```

### `BdsDatepickerPeriod`
Seletor de intervalo de datas (início e fim).

```tsx
<BdsDatepickerPeriod label="Período" />
```

### `BdsUpload`
Upload de arquivos com drag-and-drop.

```tsx
<BdsUpload label="Enviar arquivo" accept=".pdf,.png" />
```

### `BdsRichText`
Editor de texto rico (bold, italic, listas). Use para campos de conteúdo longo.

```tsx
<BdsRichText label="Descrição" />
```

---

## Cards e contêineres

### `BdsCard`
Contêiner visual padrão para agrupar conteúdo relacionado. Nunca use `div` com `border-radius` e `background` no lugar.

```tsx
<BdsCard>
  <BdsCardHeader>
    <BdsIcon name="chart-bar" />
    <BdsCardTitle>Métricas</BdsCardTitle>
    <BdsCardSubtitle>Últimos 30 dias</BdsCardSubtitle>
  </BdsCardHeader>
  <BdsCardBody>
    <BdsTypo variant="fs-24" bold="bold" margin={false}>2.341</BdsTypo>
  </BdsCardBody>
  <BdsCardFooter>
    <BdsButton variant="tertiary" size="short">Ver mais</BdsButton>
  </BdsCardFooter>
</BdsCard>
```

Subcomponentes: `BdsCardHeader`, `BdsCardTitle`, `BdsCardSubtitle`, `BdsCardBody`, `BdsCardFooter`

### `BdsCardColor`
Variante de card com fundo colorido (token de cor).

```tsx
<BdsCardColor color="primary">
  <BdsTypo variant="fs-16" margin={false}>Destaque</BdsTypo>
</BdsCardColor>
```

### `BdsPaper`
Superfície elevada sem estrutura interna definida. Use quando `BdsCard` é muito rígido.

```tsx
<BdsPaper elevation="static">
  <BdsTypo variant="fs-14" margin={false}>Conteúdo livre</BdsTypo>
</BdsPaper>
```

---

## Feedback e status

### `BdsBadge`
Indicador numérico ou de status. Nunca use `span` estilizado.

```tsx
<BdsBadge color="success" label="Ativo" />
<BdsBadge color="warning" label="Pendente" />
<BdsBadge color="error" label="Erro" />
<BdsBadge color="info" label="12" />
```

### `BdsAlert`
Mensagem de feedback contextual inline (não bloqueia a tela).

```tsx
<BdsAlert type="warning">
  <BdsAlertHeader>Atenção</BdsAlertHeader>
  <BdsAlertBody>Você tem alterações não salvas.</BdsAlertBody>
  <BdsAlertActions>
    <BdsButton variant="secondary" size="short">Descartar</BdsButton>
    <BdsButton variant="primary" size="short">Salvar</BdsButton>
  </BdsAlertActions>
</BdsAlert>
```

| Type | Quando usar |
|---|---|
| `system` | Informação neutra |
| `warning` | Alerta, atenção necessária |
| `error` | Erro, ação bloqueada |
| `success` | Confirmação de sucesso |

### `BdsWarning`
Aviso simples e compacto (menos estruturado que `BdsAlert`).

```tsx
<BdsWarning icon="info">Campo obrigatório.</BdsWarning>
```

### `BdsBanner`
Aviso de destaque no topo da página ou seção.

```tsx
<BdsBanner type="warning" text="Manutenção programada para amanhã." />
```

### `BdsToast`
Notificação temporária (snackbar). Aparece e some automaticamente.

```tsx
// Via BdsToastContainer no topo da árvore
<BdsToastContainer />

// Disparado via JS:
// toast.create({ type: 'success', message: 'Salvo com sucesso!' })
```

### `BdsTooltip`
Dica de texto ao passar o mouse. Nunca use `title` HTML.

```tsx
<BdsTooltip tooltip="Exportar como CSV" position="top">
  <BdsButtonIcon icon="download" />
</BdsTooltip>
```

### `BdsLoadingSpinner`
Indicador de carregamento circular inline.

```tsx
<BdsLoadingSpinner size="small" />
<BdsLoadingSpinner size="medium" />
```

### `BdsLoadingBar`
Barra de progresso indeterminada. Use no topo da página durante carregamento.

```tsx
<BdsLoadingBar />
```

### `BdsLoadingPage`
Loading de página inteira (overlay).

```tsx
<BdsLoadingPage />
```

### `BdsSkeleton`
Placeholder de conteúdo durante carregamento. Use no lugar do conteúdo real.

```tsx
<BdsSkeleton shape="rect" width="100%" height="48px" />
<BdsSkeleton shape="circle" width="40px" height="40px" />
```

### `BdsProgressBar`
Barra de progresso determinada (0–100%).

```tsx
<BdsProgressBar percent={72} />
```

---

## Navegação

### `BdsNavbar`
Barra de navegação superior da aplicação.

```tsx
<BdsNavbar>
  <BdsNavbarContent slot="left">
    <BdsTypo variant="fs-16" bold="bold" margin={false}>UAI</BdsTypo>
  </BdsNavbarContent>
  <BdsNavbarContent slot="right">
    <BdsAvatar name="João" />
  </BdsNavbarContent>
</BdsNavbar>
```

### `BdsSidebar`
Menu lateral de navegação.

```tsx
<BdsSidebar>
  <BdsNavTree>
    <BdsNavTreeItem text="Dashboard" icon="home" />
    <BdsNavTreeItem text="Contatos" icon="contact" />
    <BdsNavTreeGroup text="Configurações" icon="settings-general">
      <BdsNavTreeItem text="Perfil" />
      <BdsNavTreeItem text="Segurança" />
    </BdsNavTreeGroup>
  </BdsNavTree>
</BdsSidebar>
```

### `BdsTabs` + `BdsTab`
Navegação entre seções dentro de uma mesma página.

```tsx
<BdsTabs>
  <BdsTab label="Visão geral" group="tab1" />
  <BdsTab label="Detalhes" group="tab2" />
</BdsTabs>
<BdsTabPanel group="tab1">Conteúdo da aba 1</BdsTabPanel>
<BdsTabPanel group="tab2">Conteúdo da aba 2</BdsTabPanel>
```

### `BdsBreadcrumb`
Indicador de localização hierárquica.

```tsx
<BdsBreadcrumb>
  <BdsTypo>Home</BdsTypo>
  <BdsTypo>Configurações</BdsTypo>
  <BdsTypo bold="bold">Perfil</BdsTypo>
</BdsBreadcrumb>
```

### `BdsPagination`
Navegação entre páginas de uma lista ou tabela.

```tsx
<BdsPagination pages={10} startedPage={1} />
```

### `BdsStepper` + `BdsStep`
Indicador de progresso em fluxos com múltiplas etapas.

```tsx
<BdsStepper>
  <BdsStep active>Dados pessoais</BdsStep>
  <BdsStep>Endereço</BdsStep>
  <BdsStep>Pagamento</BdsStep>
</BdsStepper>
```

---

## Listas e tabelas

### `BdsList` + `BdsListItem`
Lista de itens com estrutura padrão.

```tsx
<BdsList>
  <BdsListItem>
    <BdsListItemContent slot="content">
      <BdsTypo variant="fs-14" margin={false}>Item da lista</BdsTypo>
    </BdsListItemContent>
  </BdsListItem>
</BdsList>
```

### `BdsTable`
Tabela de dados estruturada. Nunca use `<table>` HTML.

```tsx
<BdsTable>
  <BdsTableHeader>
    <BdsTableRow>
      <BdsTableTh>Nome</BdsTableTh>
      <BdsTableTh>Status</BdsTableTh>
      <BdsTableTh>Ações</BdsTableTh>
    </BdsTableRow>
  </BdsTableHeader>
  <BdsTableBody>
    <BdsTableRow>
      <BdsTableCell>João Silva</BdsTableCell>
      <BdsTableCell><BdsBadge color="success" label="Ativo" /></BdsTableCell>
      <BdsTableCell><BdsButtonIcon icon="edit" /></BdsTableCell>
    </BdsTableRow>
  </BdsTableBody>
</BdsTable>
```

### `BdsDataTable`
Tabela com funcionalidades avançadas (ordenação, busca).

```tsx
<BdsDataTable columns={columns} data={rows} />
```

---

## Overlays e modais

### `BdsModal`
Diálogo modal que bloqueia a interação com o fundo.

```tsx
<BdsModal open={isOpen}>
  <BdsModalCloseButton slot="close-button" />
  <BdsTypo slot="header" variant="fs-20" bold="bold" margin={false}>
    Confirmar exclusão
  </BdsTypo>
  <BdsTypo slot="body" variant="fs-16" margin={false}>
    Esta ação não pode ser desfeita.
  </BdsTypo>
  <BdsModalAction slot="footer">
    <BdsButton variant="secondary">Cancelar</BdsButton>
    <BdsButton variant="delete">Excluir</BdsButton>
  </BdsModalAction>
</BdsModal>
```

### `BdsDropdown`
Menu flutuante acionado por clique (popover/menu contextual).

```tsx
<BdsDropdown>
  <BdsButton slot="trigger" variant="secondary" icon="more-options-vertical" />
  <BdsMenuList>
    <BdsMenuListItem value="edit" text="Editar" icon="edit" />
    <BdsMenuSeparation />
    <BdsMenuListItem value="delete" text="Excluir" icon="delete" />
  </BdsMenuList>
</BdsDropdown>
```

### `BdsMenu`
Menu de navegação com itens e submenus.

```tsx
<BdsMenu>
  <BdsMenuAction text="Perfil" icon="user-default" />
  <BdsMenuSeparation />
  <BdsMenuAction text="Sair" icon="logout" />
</BdsMenu>
```

---

## Chips e tags

### `BdsChip`
Tag de informação estática (não clicável).

```tsx
<BdsChip label="React" />
<BdsChip label="TypeScript" color="primary" />
```

### `BdsChipClickable`
Chip interativo — funciona como botão de filtro ou toggle.

```tsx
<BdsChipClickable label="Ativo" onBdsClick={handleClick} />
```

### `BdsChipSelected`
Chip com estado selecionado. Use em filtros múltiplos.

```tsx
<BdsChipSelected label="WhatsApp" selected />
```

### `BdsChipTag`
Chip com ícone de remover. Use em campos de tags.

```tsx
<BdsChipTag label="design" onBdsDelete={handleDelete} />
```

---

## Avatares e mídia

### `BdsAvatar`
Representação visual de usuário (inicial, foto ou ícone).

```tsx
<BdsAvatar name="João Silva" />
<BdsAvatar thumbnail="https://..." />
<BdsAvatar icon="user-default" />
```

### `BdsAvatarGroup`
Grupo de avatares empilhados.

```tsx
<BdsAvatarGroup>
  <BdsAvatar name="João" />
  <BdsAvatar name="Maria" />
  <BdsAvatar name="+3" />
</BdsAvatarGroup>
```

### `BdsIcon`
Ícone do sistema. Use apenas nomes da lista em `allowed-icons.md`.

```tsx
<BdsIcon name="add" size="medium" />
<BdsIcon name="check" size="small" color="var(--color-positive)" />
```

Tamanhos: `xxx-small` `xx-small` `x-small` `small` `medium` `large` `x-large`

### `BdsImage`
Imagem com fallback de erro. Nunca use `<img>` diretamente.

```tsx
<BdsImage src="https://..." alt="Descrição" />
```

### `BdsIllustration`
Ilustrações do sistema UAI.

```tsx
<BdsIllustration type="empty-state" />
```

### `BdsCarousel`
Carrossel de itens deslizáveis.

```tsx
<BdsCarousel>
  <BdsCarouselItem><BdsCard>...</BdsCard></BdsCarouselItem>
  <BdsCarouselItem><BdsCard>...</BdsCard></BdsCarouselItem>
</BdsCarousel>
```

---

## Separadores e estrutura

### `BdsDivider`
Linha divisória horizontal entre seções.

```tsx
<BdsDivider />
```

### `BdsAccordion`
Seção expansível/recolhível.

```tsx
<BdsAccordionGroup>
  <BdsAccordion>
    <BdsAccordionHeader>Pergunta frequente</BdsAccordionHeader>
    <BdsAccordionBody>
      <BdsTypo variant="fs-14" margin={false}>Resposta aqui.</BdsTypo>
    </BdsAccordionBody>
  </BdsAccordion>
</BdsAccordionGroup>
```

### `BdsExpansionPanel`
Painel expansível com header personalizado.

```tsx
<BdsExpansionPanel>
  <BdsExpansionPanelHeader>Configurações avançadas</BdsExpansionPanelHeader>
  <BdsExpansionPanelBody>
    <BdsInput label="Timeout" />
  </BdsExpansionPanelBody>
</BdsExpansionPanel>
```

---

## O que NÃO existe no kit (avise em vez de improvisar)

Se precisar de algo abaixo, **avise o usuário** — não crie com HTML/CSS próprio:

- Mapa / geolocalização
- Gráficos (bar chart, line chart, pizza) — `BdsIcon` tem ícones de chart mas não gráficos reais
- Editor de código (code editor)
- Drag-and-drop de cards entre colunas (kanban)
- Player de vídeo/áudio com controles customizados
- Color picker
- Tree view com checkbox (só navegação simples via `BdsNavTree`)
