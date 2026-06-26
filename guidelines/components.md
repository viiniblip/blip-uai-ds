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

**Quando usar**
Use `BdsTypo` para todo e qualquer texto da interface. Defina sempre o `tag` semântico correto (h1, h2, h3…) para que a hierarquia de títulos faça sentido no DOM — isso afeta acessibilidade e leitores de tela.

**Quando NÃO usar**
Não use `fs-32` ou `fs-24` em mais de um elemento por seção sem justificativa clara — títulos grandes em excesso eliminam hierarquia visual. Não use `fs-10` para conteúdo que o usuário precisa ler ativamente; reserve para informações verdadeiramente secundárias.

**Boas práticas de UX**
- Mantenha no máximo três tamanhos de texto distintos por tela para evitar ruído visual.
- Use `bold="bold"` com parcimônia — negrito em excesso perde o poder de ênfase.
- Nunca use apenas cor para diferenciar texto importante: combine cor e peso (`bold`).
- Defina sempre `margin={false}` e controle o espaçamento via layout — margens padrão causam inconsistências em composições complexas.

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

**Quando usar**
Use `BdsButton` para toda ação que o usuário pode executar. Siga a hierarquia: `primary` para a ação principal, `secondary` para a alternativa imediata, `tertiary` para ações de suporte ou navegação. Use `delete` exclusivamente para ações destrutivas e irreversíveis — nunca use `primary` para excluir algo.

**Quando NÃO usar**
Nunca coloque dois botões `primary` no mesmo contexto visual — isso anula a hierarquia e confunde o usuário sobre o que fazer. Não use `disabled` sem explicar ao usuário o motivo e o que ele precisa fazer para habilitar a ação. Não use `BdsButton` apenas para navegar entre páginas — prefira links textuais (`tertiary`) ou elementos de navegação dedicados.

**Boas práticas de UX**
- Textos de botão sempre no infinitivo e específicos: "Salvar alterações", "Excluir contato" — nunca "OK", "Sim", "Confirmar" genéricos.
- Em pares de ação (ex: modal), coloque o `secondary` ("Cancelar") antes do `primary` ("Salvar") — esquerda para desfazer, direita para confirmar.
- Quando uma ação dispara uma operação assíncrona, mostre estado de loading no botão para confirmar que o sistema recebeu o comando.
- Use `icon` junto com texto para reforçar semântica (ícone de lixeira + "Excluir"), nunca apenas para decoração.
- Hierarquia visual: `primary` > `secondary` > `tertiary`. Nunca inverta.

---

### `BdsButtonIcon`

Botão só com ícone, sem texto. Use quando o espaço é limitado.

```tsx
<BdsButtonIcon icon="edit" variant="secondary" />
<BdsButtonIcon icon="delete" variant="delete" />
```

**Quando usar**
Use em toolbars densas, tabelas e contextos onde o espaço horizontal é muito restrito e a ação é suficientemente óbvia pelo ícone (editar, deletar, fechar).

**Quando NÃO usar**
Não use `BdsButtonIcon` para ações ambíguas — se o ícone sozinho não deixa claro o que acontece, adicione texto com `BdsButton`. Nunca use como ação principal de uma tela inteira, apenas como ação contextual dentro de um item.

**Boas práticas de UX**
- Sempre envolva com `BdsTooltip` para descrever a ação — usuários que dependem de leitores de tela e usuários novos precisam do texto.
- Use o mesmo ícone consistentemente para a mesma ação em toda a interface (ex: `edit` sempre para editar, `delete` sempre para excluir).

---

### `BdsButtonGroup`

Agrupa botões relacionados (ex: toolbar, segmented control).

```tsx
<BdsButtonGroup>
  <BdsButton variant="secondary">Semana</BdsButton>
  <BdsButton variant="primary">Mês</BdsButton>
  <BdsButton variant="secondary">Ano</BdsButton>
</BdsButtonGroup>
```

**Quando usar**
Use para agrupar opções mutuamente exclusivas de visualização ou filtro rápido (segmented control), onde o usuário alterna entre modos e um deles sempre está ativo.

**Quando NÃO usar**
Não use `BdsButtonGroup` para ações independentes que não se alternam — prefira botões avulsos. Não use para mais de 4–5 opções; acima disso, use `BdsSelect` ou `BdsTabs`.

**Boas práticas de UX**
- Sempre deixe uma opção selecionada por padrão — um grupo sem seleção ativa é ambíguo.
- Mantenha os rótulos curtos (1–2 palavras) para que o grupo caiba no espaço sem quebrar.

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

**Quando usar**
Use para qualquer entrada de texto livre: nomes, e-mails, URLs, números, buscas. Sempre defina `label` — o label é obrigatório, não opcional.

**Quando NÃO usar**
Não use `BdsInput` quando as opções são fixas e conhecidas — prefira `BdsSelect`, `BdsRadio` ou `BdsCheckbox`. Não use apenas `placeholder` como substituto do label: o placeholder some quando o usuário começa a digitar, deixando o campo sem contexto.

**Boas práticas de UX**
- O `label` deve sempre estar visível, mesmo com `placeholder` definido.
- Use `helper-message` para instruções de formato ("Ex: (11) 99999-9999") — não esconda regras de validação para depois do erro.
- Exiba erros de validação inline, logo abaixo do campo, no momento certo (ao sair do campo ou ao tentar enviar o formulário).
- Campos `required` devem ser marcados visualmente — não esconda a obrigatoriedade.
- Ordene os campos na sequência lógica que o usuário pensa, não na sequência que o banco de dados armazena.

---

### `BdsInputPassword`

Campo de senha com toggle de visibilidade.

```tsx
<BdsInputPassword label="Senha" required />
```

**Quando usar**
Use exclusivamente para campos de senha. O toggle de visibilidade é padrão de acessibilidade — não o remova.

**Quando NÃO usar**
Não use para outros campos que você quer "ocultar" por estética — o mascaramento tem semântica de segurança e cria fricção desnecessária em outros contextos.

**Boas práticas de UX**
- Nunca peça confirmação de senha em formulários de login — apenas em cadastro ou redefinição.
- Dê dicas de requisitos de senha com `helper-message` antes do erro, não só depois.

---

### `BdsInputPhoneNumber`

Campo de telefone com máscara e seletor de DDD/país.

```tsx
<BdsInputPhoneNumber label="Telefone" />
```

**Quando usar**
Sempre que precisar de um número de telefone. A máscara automática evita erros de formatação.

**Quando NÃO usar**
Não use `BdsInput` comum para telefone — sem máscara, o dado chega em formatos inconsistentes.

**Boas práticas de UX**
- Se o contexto for apenas nacional, defina o DDI padrão para o Brasil para reduzir o passo de seleção.
- Valide o número antes de enviar e informe o usuário com mensagem específica ("Número de telefone inválido"), não genérica ("Campo inválido").

---

### `BdsInputChips`

Campo que transforma entradas em chips (tags). Use para emails, palavras-chave.

```tsx
<BdsInputChips label="Tags" />
```

**Quando usar**
Use quando o usuário precisa inserir múltiplos valores do mesmo tipo (e-mails de destinatários, palavras-chave, categorias livres). Cada entrada vira um chip removível.

**Quando NÃO usar**
Não use para selecionar opções pré-definidas — prefira `BdsSelectChips`. Não use quando há limite de 1 valor; use `BdsInput` comum.

**Boas práticas de UX**
- Deixe claro como o usuário confirma cada entrada (Enter, vírgula, espaço) via `helper-message`.
- Mostre um limite se houver (ex: "máximo 10 tags") antes de o usuário atingi-lo.

---

### `BdsInputEditable`

Texto que vira campo ao clicar. Use para edição inline.

```tsx
<BdsInputEditable value="Clique para editar" />
```

**Quando usar**
Use em títulos ou valores que o usuário edita diretamente no lugar, sem navegar para outra tela (ex: renomear um item de lista, editar um título de card).

**Quando NÃO usar**
Não use em formulários estruturados — a edição inline é para contextos onde o dado já está visível e o usuário quer ajustá-lo rapidamente. Não use para campos que exigem validação complexa.

**Boas práticas de UX**
- Dê feedback visual claro de que o texto é editável (cursor diferente, sublinhado sutil) antes do clique.
- Salve automaticamente ao sair do campo (blur) e confirme com um toast discreto.

---

### `BdsSelect`

Dropdown de seleção simples. Nunca use `<select>`.

```tsx
<BdsSelect label="Status">
  <BdsSelectOption value="active">Ativo</BdsSelectOption>
  <BdsSelectOption value="inactive">Inativo</BdsSelectOption>
</BdsSelect>
```

**Quando usar**
Use quando o usuário precisa escolher uma opção entre 4 ou mais alternativas pré-definidas. Abaixo de 4 opções, prefira `BdsRadio` que mostra todas de uma vez.

**Quando NÃO usar**
Não use para 2–3 opções — `BdsRadio` é mais rápido de ler e selecionar. Não use quando o usuário pode não saber de memória as opções disponíveis e precisa ver todas antes de decidir (considere `BdsRadio` visível).

**Boas práticas de UX**
- Inclua uma opção vazia/placeholder ("Selecione um status") quando o campo for opcional — nunca pré-selecione uma opção que possa ser enviada por engano.
- Ordene as opções de forma lógica para o usuário: alfabética, por frequência de uso ou por ordem cronológica — nunca pela ordem do banco de dados.

---

### `BdsSelectChips`

Seleção múltipla que exibe os selecionados como chips.

```tsx
<BdsSelectChips label="Canais" />
```

**Quando usar**
Use quando o usuário pode selecionar múltiplas opções de uma lista pré-definida e precisa ver as seleções ativas no campo.

**Quando NÃO usar**
Não use para seleção única — use `BdsSelect`. Não use quando as opções são inseridas livremente pelo usuário — use `BdsInputChips`.

**Boas práticas de UX**
- Mostre quantas opções estão selecionadas quando os chips não couberem no campo (ex: "+3 selecionados").
- Permita remover cada seleção pelo chip, sem precisar abrir o dropdown.

---

### `BdsAutocomplete`

Campo de texto com sugestões enquanto digita.

```tsx
<BdsAutocomplete label="Buscar contato" options={options} />
```

**Quando usar**
Use quando a lista de opções é grande demais para um `BdsSelect` e o usuário provavelmente sabe parte do que está buscando. Ideal para busca de contatos, produtos ou cidades.

**Quando NÃO usar**
Não use quando a lista é pequena (menos de 10 itens) e o usuário precisa ver todas as opções para decidir — use `BdsSelect`. Não use quando não há dados para sugerir.

**Boas práticas de UX**
- Mostre sugestões a partir de 2 caracteres digitados, não desde o primeiro.
- Exiba um estado de "Nenhum resultado encontrado" quando não houver match — nunca deixe o dropdown vazio sem explicação.
- Se a busca for assíncrona, mostre um `BdsLoadingSpinner` dentro do dropdown enquanto carrega.

---

### `BdsCheckbox`

Seleção múltipla de opções. Nunca use `<input type="checkbox">`.

```tsx
<BdsCheckbox label="Aceito os termos" />
<BdsCheckbox label="Notificações" checked />
```

**Quando usar**
Use para confirmar consentimentos (termos, políticas) ou para selecionar múltiplos itens de uma lista independente — onde marcar um não desmarca outro.

**Quando NÃO usar**
Não use `BdsCheckbox` para escolhas mutuamente exclusivas — use `BdsRadio`. Não use como substituto de `BdsSwitch` para configurações on/off que têm efeito imediato.

**Boas práticas de UX**
- O label deve descrever o estado "marcado", não a ação de marcar (escreva "Receber notificações", não "Marcar para receber notificações").
- Em listas longas de checkboxes, ofereça um "Selecionar todos" / "Desmarcar todos".
- Nunca pré-marque checkboxes de opt-in (newsletters, consentimentos) — o padrão deve ser desmarcado.

---

### `BdsRadio` + `BdsRadioGroup`

Seleção única entre opções. Nunca use `<input type="radio">`.

```tsx
<BdsRadioGroup>
  <BdsRadio label="Masculino" value="m" />
  <BdsRadio label="Feminino" value="f" />
  <BdsRadio label="Outro" value="o" />
</BdsRadioGroup>
```

**Quando usar**
Use para escolhas mutuamente exclusivas entre 2–5 opções visíveis. Quando o número de opções é pequeno e o usuário se beneficia de ver todas ao mesmo tempo antes de decidir.

**Quando NÃO usar**
Não use `BdsRadio` para mais de 5–6 opções — use `BdsSelect`. Não use quando a seleção é múltipla — use `BdsCheckbox`.

**Boas práticas de UX**
- Sempre pré-selecione a opção mais comum ou segura como padrão — nunca deixe o grupo sem seleção em formulários onde o campo é obrigatório.
- Mantenha as opções verticalmente alinhadas para facilitar a leitura e a seleção.
- Nunca ordene as opções de forma que induza o usuário a escolher a primeira por comodidade (ex: não coloque "Sim" sempre antes de "Não" em contextos onde "Não" é o mais seguro).

---

### `BdsSwitch`

Toggle on/off para configurações booleanas.

```tsx
<BdsSwitch label="Notificações ativas" checked />
<BdsSwitch label="Modo escuro" />
```

**Quando usar**
Use para configurações que têm efeito imediato ao alternar, sem necessidade de salvar explicitamente. O estado atual deve ser sempre óbvio (ligado/desligado).

**Quando NÃO usar**
Não use `BdsSwitch` dentro de formulários que precisam de um botão "Salvar" para confirmar — a expectativa do switch é de efeito imediato. Não use para aceitar termos ou confirmar ações — use `BdsCheckbox`.

**Boas práticas de UX**
- O label deve descrever o que acontece quando está ligado: "Receber notificações por e-mail", não apenas "E-mail".
- Se a mudança disparar uma operação assíncrona (ex: chamada de API), mostre um estado de loading no switch e reverta se houver erro.
- Confirme a mudança com um toast discreto quando o efeito não for imediatamente visível na tela.

---

### `BdsSlider`

Seleção de valor numérico em um intervalo.

```tsx
<BdsSlider min={0} max={100} value={50} label="Volume" />
```

**Quando usar**
Use quando o valor exato é menos importante do que a posição relativa no intervalo (volume, opacidade, tolerância). O usuário deve ser capaz de estimar o valor pela posição visual.

**Quando NÃO usar**
Não use quando o usuário precisa de um valor preciso — prefira `BdsInput` com `type="number"`. Não use para intervalos muito grandes com pouca granularidade (ex: selecionar um ano entre 1900–2024 — use `BdsSelect` ou `BdsDatepicker`).

**Boas práticas de UX**
- Exiba o valor atual numericamente ao lado ou abaixo do slider enquanto o usuário arrasta.
- Defina um valor padrão sensato — nunca inicie no zero se zero não for uma opção válida ou esperada.

---

### `BdsDatepicker`

Seletor de data única.

```tsx
<BdsDatepicker label="Data de nascimento" />
```

**Quando usar**
Use para selecionar uma data específica: nascimento, agendamento, vencimento.

**Quando NÃO usar**
Não use quando o usuário só precisa de mês e ano (ex: validade de cartão) — um `BdsSelect` duplo é mais rápido. Não use para selecionar intervalos — use `BdsDatepickerPeriod`.

**Boas práticas de UX**
- Defina restrições de data quando fizer sentido (ex: não permitir datas futuras para data de nascimento; não permitir datas passadas para agendamentos).
- Mostre o formato esperado no label ou `helper-message` ("DD/MM/AAAA") para reduzir erros de entrada manual.

---

### `BdsDatepickerPeriod`

Seletor de intervalo de datas (início e fim).

```tsx
<BdsDatepickerPeriod label="Período" />
```

**Quando usar**
Use para filtros de relatórios, busca por período, configurações de vigência com início e fim.

**Quando NÃO usar**
Não use quando apenas uma data é necessária — use `BdsDatepicker`.

**Boas práticas de UX**
- Ofereça atalhos de período pré-definidos quando possível ("Últimos 7 dias", "Este mês") para agilizar a seleção mais comum.
- Valide que a data de fim é sempre posterior à data de início e informe o erro claramente.

---

### `BdsUpload`

Upload de arquivos com drag-and-drop.

```tsx
<BdsUpload label="Enviar arquivo" accept=".pdf,.png" />
```

**Quando usar**
Use sempre que o usuário precisar enviar arquivos. O drag-and-drop é o padrão esperado em interfaces modernas.

**Quando NÃO usar**
Não use para captura de foto via câmera em mobile — o comportamento nativo do sistema é mais adequado.

**Boas práticas de UX**
- Informe os formatos aceitos e o tamanho máximo antes do upload, não só após o erro.
- Mostre progresso do upload com barra de progresso — nunca deixe o usuário sem feedback durante o envio.
- Exiba preview do arquivo enviado (nome, tipo, tamanho) para confirmação visual.
- Permita remover e substituir o arquivo enviado sem recarregar a página.

---

### `BdsRichText`

Editor de texto rico (bold, italic, listas). Use para campos de conteúdo longo.

```tsx
<BdsRichText label="Descrição" />
```

**Quando usar**
Use quando o usuário precisa formatar texto longo: descrições de produtos, respostas de FAQ, templates de mensagem. O rich text é justificado quando a formatação agrega valor real ao conteúdo.

**Quando NÃO usar**
Não use para campos curtos (nome, e-mail, título) — a toolbar de formatação cria ruído desnecessário. Não use se o conteúdo será exibido em um contexto que não renderiza HTML/Markdown.

**Boas práticas de UX**
- Limite a toolbar às ferramentas realmente necessárias para o contexto — um editor com 20 botões intimida e raramente é usado todo.
- Mostre a contagem de caracteres se houver limite.
- Salve rascunhos automaticamente em edições longas para evitar perda de conteúdo.

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

**Quando usar**
Use para agrupar informações logicamente relacionadas que formam uma unidade coesa: métricas, perfis de contato, resumos de item. O card cria um bloco visual que o usuário percebe como uma entidade única.

**Quando NÃO usar**
Não use cards para tudo — excesso de cards em uma tela cria "card soup" onde nenhum elemento tem destaque. Não use card para separar seções verticais de uma página — use `BdsDivider` ou espaçamento.

**Boas práticas de UX**
- Mantenha cards com densidade consistente — não misture cards muito densos com muito espaçosos na mesma grade.
- Se o card inteiro for clicável, deixe isso claro com hover visual; se só parte é clicável, não torne o card inteiro interativo.
- Em grids de cards, mantenha altura consistente para criar alinhamento visual — evite alturas livres que quebram o grid.

---

### `BdsCardColor` — ⛔ PROIBIDO

`BdsCardColor` é um **swatch de cor interno do design system** (240×140px fixo, sem slot de children). Não é um container utilizável para conteúdo.

**Nunca use `BdsCardColor` em telas.** Para card com fundo colorido, use `BdsCard` com a prop `bgColor`:

```tsx
// ✅ correto — BdsCard com fundo colorido
<BdsCard bgColor="var(--color-surface-primary)">
  <BdsCardBody>
    <BdsTypo variant="fs-16" margin={false}>Conteúdo</BdsTypo>
  </BdsCardBody>
</BdsCard>

// ❌ proibido
<BdsCardColor color="primary">...</BdsCardColor>
```

---

### `BdsPaper`

Superfície elevada sem estrutura interna definida. Use quando `BdsCard` é muito rígido.

```tsx
<BdsPaper elevation="static">
  <BdsTypo variant="fs-14" margin={false}>Conteúdo livre</BdsTypo>
</BdsPaper>
```

**Quando usar**
Use quando você precisa de uma superfície com elevação (sombra) para separar um bloco do fundo, mas sem a estrutura de header/body/footer do `BdsCard`. Ideal para painéis de configuração, seções de formulário agrupadas, containers de composição livre.

**Quando NÃO usar**
Não use `BdsPaper` como substituto preguiçoso de `BdsCard` — se o conteúdo tem título, corpo e ação, use `BdsCard`. Não empilhe múltiplos `BdsPaper` com elevações diferentes sem propósito claro — elevação comunica hierarquia.

**Boas práticas de UX**
- Reserve elevação mais alta para elementos que sobrepõem outros (dropdowns, modais). Em superfícies de conteúdo, prefira `elevation="static"`.

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

**Quando usar**
Use para comunicar status de um item (ativo, inativo, pendente, erro) ou contagem de itens (notificações não lidas, itens em fila). O badge deve sempre ter contexto — o usuário precisa entender o que aquele número ou status representa.

**Quando NÃO usar**
Não use badge apenas para decoração ou para colorir a interface sem transmitir informação real. Não use cores de badge sem consistência — `error` deve sempre significar erro, `success` deve sempre significar sucesso, em toda a interface.

**Boas práticas de UX**
- Mantenha um mapa de cores consistente em toda a aplicação: success = verde, warning = amarelo, error = vermelho, info = azul.
- Para contadores, exiba o número real até 99 e use "99+" acima disso — nunca oculte a contagem sem razão.
- Atualize badges em tempo real quando o dado mudar — um badge desatualizado é pior do que nenhum badge.

---

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

**Quando usar**
Use para mensagens contextuais que se relacionam a uma seção específica da tela: erro de validação de formulário, aviso sobre estado do sistema, confirmação de ação dentro de uma seção. O alert fica fixo na página enquanto a condição persistir.

**Quando NÃO usar**
Não use `BdsAlert` para confirmações passageiras de ações que o usuário acabou de fazer — use `BdsToast`. Não use para bloquear totalmente o fluxo — use `BdsModal`. Não use `type="success"` de forma permanente — sucesso é transitório, remova o alert após alguns segundos ou na próxima interação.

**Boas práticas de UX**
- Coloque o alert próximo ao contexto que ele descreve — um alert de erro de formulário deve aparecer no topo do formulário, não no topo da página.
- Use linguagem direta e específica: "E-mail já cadastrado" é melhor do que "Erro de validação".
- Inclua uma ação quando possível — diga ao usuário o que fazer para resolver o problema.

---

### `BdsWarning`

Aviso simples e compacto (menos estruturado que `BdsAlert`).

```tsx
<BdsWarning icon="info">Campo obrigatório.</BdsWarning>
```

**Quando usar**
Use para avisos curtos e simples que não precisam de título nem ações — mensagens de validação de campo, dicas contextuais breves.

**Quando NÃO usar**
Não use quando o aviso requer ação do usuário ou explicação mais longa — use `BdsAlert`. Não use múltiplos `BdsWarning` empilhados — agrupe em um `BdsAlert` se houver mais de um aviso relacionado.

**Boas práticas de UX**
- Mantenha o texto em 1–2 linhas. Se precisar de mais, use `BdsAlert`.
- Posicione sempre próximo ao elemento que o aviso descreve.

---

### `BdsBanner`

Aviso de destaque no topo da página ou seção.

```tsx
<BdsBanner type="warning" text="Manutenção programada para amanhã." />
```

**Quando usar**
Use para comunicados que afetam toda a sessão ou página: manutenção programada, degradação de serviço, prazo importante, atualização de termos. O banner deve ser visível sem ação do usuário.

**Quando NÃO usar**
Não use banner para erros de ações específicas do usuário — use `BdsAlert` ou `BdsToast`. Não use para marketing ou promoções dentro de um produto operacional — o banner tem semântica de alerta de sistema. Não use múltiplos banners simultaneamente.

**Boas práticas de UX**
- Permita que o usuário feche o banner quando a informação for informativa (não crítica).
- Mantenha o texto curto e direto. Se precisar de mais contexto, inclua um link "Saiba mais".
- Posicione sempre no topo da área de conteúdo, antes de qualquer interação.

---

### `BdsToast`

Notificação temporária (snackbar). Aparece e some automaticamente.

```tsx
// Via BdsToastContainer no topo da árvore
<BdsToastContainer />

// Disparado via JS:
// toast.create({ type: 'success', message: 'Salvo com sucesso!' })
```

**Quando usar**
Use exclusivamente para confirmar ações que o usuário acabou de executar com sucesso: "Contato salvo", "Arquivo excluído", "Configurações atualizadas". O toast é a confirmação de que o sistema processou a ação.

**Quando NÃO usar**
Não use toast para erros que exigem ação do usuário — o toast some e o usuário perde a informação. Não use para anúncios ou avisos de sistema que o usuário não provocou — use `BdsBanner`. Não dispare múltiplos toasts em sequência rápida — empilhe ou consolide as mensagens.

**Boas práticas de UX**
- O toast de `success` deve ser breve: 3–4 segundos são suficientes.
- Use linguagem no passado para confirmações: "Salvo com sucesso", "Excluído", "Enviado" — o usuário acabou de fazer a ação.
- Para ações destrutivas (excluir), ofereça um toast com botão "Desfazer" durante os primeiros segundos antes de efetivar a operação no servidor.
- Nunca use toast para erros de validação — o usuário precisa ver o erro enquanto corrige o formulário.

---

### `BdsTooltip`

Dica de texto ao passar o mouse. Nunca use `title` HTML.

```tsx
<BdsTooltip tooltip="Exportar como CSV" position="top">
  <BdsButtonIcon icon="download" />
</BdsTooltip>
```

**Quando usar**
Use para revelar o significado de ícones sem rótulo, explicar abreviações, ou dar informações adicionais sobre um elemento que não cabem na interface principal.

**Quando NÃO usar**
Não use tooltip para informações críticas ao fluxo — o tooltip só aparece ao passar o mouse e não funciona em touch. Não use para mensagens longas — se precisar de mais de 2 linhas, use `BdsAlert` ou `helper-message`. Não duplique o texto que já está visível na interface.

**Boas práticas de UX**
- Sempre use `BdsTooltip` em `BdsButtonIcon` — ícone sem label requer tooltip obrigatoriamente.
- Mantenha o texto do tooltip conciso: máximo 1 frase, sem pontuação final.
- Escolha `position` para evitar que o tooltip seja cortado pela borda da tela.

---

### `BdsLoadingSpinner`

Indicador de carregamento circular inline.

```tsx
<BdsLoadingSpinner size="small" />
<BdsLoadingSpinner size="medium" />
```

**Quando usar**
Use para indicar carregamento de um componente específico: conteúdo de uma seção, resultado de uma busca, dados de um card. O spinner é localizado — aparece onde o conteúdo vai surgir.

**Quando NÃO usar**
Não use `BdsLoadingSpinner` para carregamento de página inteira — use `BdsLoadingPage`. Não use para carregamentos que demoram mais de 3–4 segundos — prefira `BdsSkeleton` que dá uma noção da estrutura do conteúdo que está por vir.

**Boas práticas de UX**
- Mostre o spinner imediatamente ao iniciar a operação — delay de feedback causa duplo clique e confusão.
- Nunca mostre um spinner sem limite de tempo — sempre tenha um timeout com mensagem de erro como fallback.

---

### `BdsLoadingBar`

Barra de progresso indeterminada. Use no topo da página durante carregamento.

```tsx
<BdsLoadingBar />
```

**Quando usar**
Use no topo da aplicação para indicar navegação entre páginas ou operações globais em andamento. É discreto e não bloqueia a interface.

**Quando NÃO usar**
Não use para carregamento de seções internas — use `BdsLoadingSpinner` ou `BdsSkeleton`. Não use quando a duração é conhecida — use `BdsProgressBar` com percentual real.

**Boas práticas de UX**
- Exiba a barra assim que a navegação começar e remova assim que o conteúdo estiver pronto.
- Não use em paralelo com `BdsLoadingPage` — escolha um mecanismo por operação.

---

### `BdsLoadingPage`

Loading de página inteira (overlay).

```tsx
<BdsLoadingPage />
```

**Quando usar**
Use apenas para operações que bloqueiam toda a interação: autenticação inicial, carregamento de dados críticos sem os quais nenhuma parte da interface faz sentido.

**Quando NÃO usar**
Não use `BdsLoadingPage` para operações parciais ou secundárias — o overlay total é a experiência mais bloqueante possível e deve ser reservado para casos extremos. Prefira `BdsSkeleton` para a maioria dos carregamentos.

**Boas práticas de UX**
- Adicione uma mensagem de status quando o carregamento puder demorar mais de 3 segundos ("Carregando seus dados...").
- Se o carregamento falhar, substitua o overlay por uma tela de erro com opção de tentar novamente — nunca deixe o overlay preso.

---

### `BdsSkeleton`

Placeholder de conteúdo durante carregamento. Use no lugar do conteúdo real.

```tsx
<BdsSkeleton shape="rect" width="100%" height="48px" />
<BdsSkeleton shape="circle" width="40px" height="40px" />
```

**Quando usar**
Use como substituto visual do conteúdo durante o carregamento assíncrono. O skeleton deve ter a mesma forma e tamanho aproximado do conteúdo real — isso reduz o "layout shift" e prepara o usuário para o que vai aparecer.

**Quando NÃO usar**
Não use skeleton para ações rápidas (menos de 300ms) — aparece e some rápido demais e causa flash indesejado. Não use formatos genéricos — um skeleton de linha única para um card que tem imagem, título e três linhas de texto não prepara o usuário adequadamente.

**Boas práticas de UX**
- Crie skeletons que espelham a estrutura real do conteúdo: se o card tem avatar + título + subtítulo, o skeleton deve ter `circle` + dois `rect` de alturas diferentes.
- Use animação de shimmer (padrão do componente) — ela sinaliza que é um estado temporário, não um erro.

---

### `BdsProgressBar`

Barra de progresso determinada (0–100%).

```tsx
<BdsProgressBar percent={72} />
```

**Quando usar**
Use quando o progresso pode ser medido com precisão: upload de arquivo, etapas concluídas de um onboarding, capacidade de uso de um recurso.

**Quando NÃO usar**
Não use com percentual falso que "cresce" artificialmente apenas para parecer que algo está acontecendo — use `BdsLoadingBar` para progresso indeterminado.

**Boas práticas de UX**
- Exiba o percentual numericamente ao lado da barra quando a precisão for importante.
- Contextualize o que a barra representa: "72% do armazenamento utilizado", não apenas "72%".
- Use cor para comunicar estado: normal, próximo do limite (warning), atingido (error).

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

**Quando usar**
Use como container da barra superior global da aplicação: logo, nome do produto, ações globais (perfil, notificações, configurações).

**Quando NÃO usar**
Não use múltiplas navbars em uma mesma tela. Não use a navbar para ações específicas de uma página — ações contextuais pertencem ao conteúdo da página, não à navegação global.

**Boas práticas de UX**
- Mantenha a navbar limpa: logo + no máximo 3–4 ações globais à direita.
- O item ativo do menu (se houver) deve ter indicação visual clara de onde o usuário está.
- Ações destrutivas ou sensíveis nunca devem estar expostas diretamente na navbar — coloque em sub-menus.

---

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

**Quando usar**
Use para navegação principal de aplicações com múltiplas seções de nível superior. O sidebar é adequado quando há mais de 3–4 destinos principais e o usuário alterna entre eles com frequência.

**Quando NÃO usar**
Não use sidebar em interfaces simples com 2–3 seções — `BdsTabs` ou uma navbar são suficientes. Não use o sidebar para navegação de conteúdo dentro de uma mesma seção.

**Boas práticas de UX**
- Mantenha no máximo 7 itens de nível superior — listas maiores devem ser agrupadas com `BdsNavTreeGroup`.
- Sempre indique visualmente o item ativo para o usuário saber onde está.
- Use ícones consistentes e reconhecíveis — o sidebar com ícones ajuda a reconhecer seções mesmo em modo compacto.
- Agrupe itens relacionados semanticamente, não por ordem de implementação.

---

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

**Quando usar**
Use quando o conteúdo de uma mesma entidade pode ser organizado em seções mutuamente exclusivas com peso equivalente — o usuário escolhe qual seção ver, e as seções não dependem umas das outras para fazer sentido. Ex: abas "Visão geral", "Histórico", "Configurações" de um contato.

**Quando NÃO usar**
Não use tabs para navegação entre páginas diferentes — use `BdsSidebar` ou `BdsNavbar`. Não use mais de 5–6 tabs — acima disso, a barra fica congestionada; reorganize a arquitetura de informação. Não use tabs quando as seções têm peso muito diferente (uma com conteúdo extenso, outra com 3 linhas) — isso cria expectativa frustrada.

**Boas práticas de UX**
- A primeira tab deve ser a mais importante ou a mais usada — é a que o usuário vê por padrão.
- Rótulos de tabs devem ser curtos (1–2 palavras) e distintos entre si.
- Não oculte tabs com base em permissões — prefira desabilitá-las com explicação de por que o usuário não tem acesso.
- O conteúdo da tab ativa deve carregar imediatamente — use skeleton se houver dados assíncronos.

---

### `BdsBreadcrumb`

Indicador de localização hierárquica.

```tsx
<BdsBreadcrumb>
  <BdsTypo>Home</BdsTypo>
  <BdsTypo>Configurações</BdsTypo>
  <BdsTypo bold="bold">Perfil</BdsTypo>
</BdsBreadcrumb>
```

**Quando usar**
Use em páginas com hierarquia de navegação de 3 ou mais níveis, onde o usuário pode precisar voltar para um nível intermediário. Ex: Home > Contatos > João Silva > Histórico.

**Quando NÃO usar**
Não use breadcrumb em hierarquias rasas (1–2 níveis) — o componente de voltar do browser ou um botão "Voltar" é suficiente. Não use como navegação primária — é um auxiliar de orientação, não um menu.

**Boas práticas de UX**
- O último item (página atual) deve estar em destaque (`bold`) e não deve ser clicável.
- Mantenha os rótulos iguais aos títulos reais das páginas — evite abreviações que confundem.
- Em mobile, considere mostrar apenas o nível anterior (ex: "← Contatos") ao invés do caminho completo.

---

### `BdsPagination`

Navegação entre páginas de uma lista ou tabela.

```tsx
<BdsPagination pages={10} startedPage={1} />
```

**Quando usar**
Use quando uma lista de dados é grande demais para carregar de uma vez e o usuário navega por páginas. Adequado para tabelas, listas de histórico, resultados de busca.

**Quando NÃO usar**
Não use paginação quando o scroll infinito é mais adequado (feeds, timelines, listas exploratórias). Não use para listas com menos de 20–30 itens — exiba todos sem paginação.

**Boas práticas de UX**
- Informe o total de itens e a posição atual: "Mostrando 1–20 de 347 resultados".
- Permita que o usuário defina o tamanho da página (10, 25, 50 por página) quando a lista for muito longa.
- Ao mudar de página, leve o scroll para o topo da lista automaticamente.
- Mantenha o número da página na URL para que o usuário possa compartilhar ou voltar ao mesmo ponto.

---

### `BdsStepper` + `BdsStep`

Indicador de progresso em fluxos com múltiplas etapas.

```tsx
<BdsStepper>
  <BdsStep active>Dados pessoais</BdsStep>
  <BdsStep>Endereço</BdsStep>
  <BdsStep>Pagamento</BdsStep>
</BdsStepper>
```

**Quando usar**
Use em fluxos lineares com 3–6 etapas distintas, onde o usuário precisa completar cada passo em sequência: onboarding, wizard de configuração, checkout, formulário em múltiplas telas.

**Quando NÃO usar**
Não use stepper para 2 etapas — é sobrecarga visual desnecessária. Não use para fluxos não lineares onde o usuário pode pular ou reordenar etapas livremente.

**Boas práticas de UX**
- Mostre claramente em qual etapa o usuário está e quantas etapas restam.
- Permita que o usuário volte a etapas anteriores para corrigir informações — nunca bloqueie a navegação para trás sem motivo.
- Cada etapa deve ser coesa e ter um objetivo claro — se uma etapa tem mais de 5–6 campos, considere dividir em duas.
- Ao final de cada etapa, valide os dados antes de avançar — não deixe a validação para o submit final.

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

**Quando usar**
Use para listas de itens com estrutura uniforme: opções de menu, resultados de busca, histórico de atividades, notificações.

**Quando NÃO usar**
Não use `BdsList` quando os dados têm múltiplas colunas comparáveis — use `BdsTable`. Não use para exibir apenas 1–2 itens sem estrutura de lista — use cards ou tipografia direta.

**Boas práticas de UX**
- Sempre mostre um estado vazio quando a lista não tem itens: use `BdsIllustration` com `type="empty-state"` e uma mensagem explicando o que fazer para popular a lista.
- Itens clicáveis devem ter hover visual claro — o usuário precisa saber que pode interagir.
- Ordene a lista de forma útil por padrão (mais recente primeiro, mais relevante primeiro) e permita reordenação se for um caso de uso real.

---

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

**Quando usar**
Use quando o usuário precisa comparar múltiplos atributos de múltiplos itens ao mesmo tempo. Tabelas são ideais para dados tabulares reais: contatos, transações, configurações de itens.

**Quando NÃO usar**
Não use tabela para exibir uma única linha de dados — use um card ou detalhe. Não use tabela para estruturar layout de página (erro clássico de HTML antigo).

**Boas práticas de UX**
- Limite o número de colunas ao que é realmente necessário — tabelas com mais de 7–8 colunas ficam difíceis de ler; considere esconder colunas secundárias por padrão.
- A coluna de ações deve ser sempre a última (à direita) e ter largura fixa.
- Cabeçalhos de coluna devem ser substantivos precisos ("Data de criação", não "Data").
- Sempre mostre um estado vazio com orientação quando não há dados.
- Permita ordenação por colunas relevantes com indicador visual de qual coluna está ordenada e em qual direção.

---

### `BdsDataTable`

Tabela com funcionalidades avançadas (ordenação, busca).

```tsx
<BdsDataTable columns={columns} data={rows} />
```

**Quando usar**
Use quando o volume de dados é grande e o usuário precisa ordenar, buscar ou filtrar sem sair da página. Substitui `BdsTable` + lógica manual de ordenação.

**Quando NÃO usar**
Não use para listas simples com poucos dados e sem necessidade de manipulação — `BdsTable` ou `BdsList` são mais leves e diretos.

**Boas práticas de UX**
- Defina a ordenação padrão mais útil para o usuário (geralmente mais recente primeiro).
- A busca deve ser responsiva enquanto o usuário digita, com debounce para não sobrecarregar.
- Exiba o total de resultados filtrados: "12 de 347 contatos".

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

**Quando usar**
Use modais exclusivamente para decisões críticas ou ações irreversíveis que exigem confirmação explícita do usuário: confirmar exclusão, aceitar termos, alertar sobre consequências sérias. O modal é justificado quando interromper o fluxo é necessário para proteger o usuário.

**Quando NÃO usar**
Não use modal para exibir informações — use `BdsAlert`, `BdsTooltip` ou uma seção da própria página. Não use para formulários longos — crie uma página ou drawer dedicado. Não use modais em cascata (modal sobre modal) — isso indica um problema de arquitetura de informação. Não use para confirmações triviais ("Tem certeza que deseja salvar?") — confie no usuário.

**Boas práticas de UX**
- O título do modal deve descrever a decisão, não a ação: "Excluir contato?" é melhor que "Confirmação".
- Sempre ofereça uma saída clara: botão de fechar (X) no topo e botão "Cancelar" no footer.
- O botão de ação destrutiva deve ter `variant="delete"` e nunca ser o primeiro botão — o "Cancelar" vem antes.
- Fechar o modal clicando no backdrop (fundo escuro) deve ser o mesmo que cancelar — nunca execute a ação ao fechar.
- O corpo do modal deve ser conciso: uma frase explicando a consequência da ação é suficiente.

---

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

**Quando usar**
Use para menus contextuais com 3 ou mais ações secundárias de um item, quando exibir todos os botões consumiria muito espaço. Também adequado para o menu de perfil do usuário na navbar.

**Quando NÃO usar**
Não use dropdown para 1–2 ações — exiba os botões diretamente. Não use dropdown para navegação principal — use `BdsSidebar` ou `BdsNavbar`.

**Boas práticas de UX**
- Agrupe ações relacionadas com `BdsMenuSeparation` — ações destrutivas (Excluir, Remover) devem ser sempre o último grupo, separadas das ações normais.
- Use ícones em todos os itens ou em nenhum — misturar itens com e sem ícone cria desalinhamento visual.
- A ação mais usada deve aparecer primeiro na lista, a mais perigosa por último.
- Feche o dropdown automaticamente após a seleção de qualquer item.

---

### `BdsMenu`

Menu de navegação com itens e submenus.

```tsx
<BdsMenu>
  <BdsMenuAction text="Perfil" icon="user-default" />
  <BdsMenuSeparation />
  <BdsMenuAction text="Sair" icon="logout" />
</BdsMenu>
```

**Quando usar**
Use para o menu de usuário (perfil, configurações, sair) ou outros menus de contexto global. Geralmente disparado pelo avatar ou ícone de perfil na navbar.

**Quando NÃO usar**
Não use `BdsMenu` para navegação estrutural da aplicação — use `BdsSidebar`. Não use para ações contextuais de itens de lista — use `BdsDropdown`.

**Boas práticas de UX**
- "Sair" deve ser sempre o último item, separado dos demais por `BdsMenuSeparation`.
- Itens de configuração crítica ("Excluir conta") devem ser sinalizados visualmente (texto em vermelho ou ícone de alerta).
- O menu deve fechar ao clicar fora dele ou ao selecionar qualquer item.

---

## Chips e tags

### `BdsChip`

Tag de informação estática (não clicável).

```tsx
<BdsChip label="React" />
<BdsChip label="TypeScript" color="primary" />
```

**Quando usar**
Use para exibir categorias, tecnologias, habilidades ou atributos de um item de forma compacta e visualmente distinta do texto corrido.

**Quando NÃO usar**
Não use `BdsChip` quando a tag precisa de interação (filtro, toggle, remoção) — use `BdsChipClickable`, `BdsChipSelected` ou `BdsChipTag`. Não use chips em excesso — mais de 5–6 chips em um único item criam ruído visual.

**Boas práticas de UX**
- Use cor com significado consistente: chips da mesma categoria devem ter a mesma cor em toda a interface.
- Mantenha os rótulos curtos (1–3 palavras) — chips não são o lugar para frases.

---

### `BdsChipClickable`

Chip interativo — funciona como botão de filtro ou toggle.

```tsx
<BdsChipClickable label="Ativo" onBdsClick={handleClick} />
```

**Quando usar**
Use em sistemas de filtro onde o usuário ativa/desativa categorias clicando nas tags. Cada clique alterna o estado do filtro.

**Quando NÃO usar**
Não use para ações que produzem um efeito imediato e irreversível — use `BdsButton`. Não use para exibição de informação sem interação — use `BdsChip`.

**Boas práticas de UX**
- O estado ativo/inativo deve ser visualmente claro — a diferença entre selecionado e não selecionado não pode depender só de cor.
- Exiba quantos resultados cada filtro retorna quando possível: "Ativo (24)".

---

### `BdsChipSelected`

Chip com estado selecionado. Use em filtros múltiplos.

```tsx
<BdsChipSelected label="WhatsApp" selected />
```

**Quando usar**
Use em grupos de filtro onde múltiplos chips podem estar selecionados simultaneamente e o estado selecionado precisa de destaque visual explícito.

**Quando NÃO usar**
Não use para seleção única — prefira `BdsRadio` ou `BdsSelect` que comunicam melhor a exclusividade.

**Boas práticas de UX**
- Sempre ofereça uma forma de limpar todos os filtros de uma vez ("Limpar filtros") quando múltiplos chips puderem estar selecionados.
- Chips selecionados devem persistir mesmo se a lista de filtros disponíveis for rolada — o usuário precisa ver o que está ativo.

---

### `BdsChipTag`

Chip com ícone de remover. Use em campos de tags.

```tsx
<BdsChipTag label="design" onBdsDelete={handleDelete} />
```

**Quando usar**
Use dentro de `BdsInputChips` ou em contextos onde o usuário adicionou tags e pode removê-las individualmente.

**Quando NÃO usar**
Não use `BdsChipTag` fora de um contexto de entrada de dados — para tags de exibição sem remoção, use `BdsChip`.

**Boas práticas de UX**
- O botão de remover (X) deve ser acessível via teclado (Tab + Delete).
- Confirme a remoção visualmente — o chip deve desaparecer imediatamente ao clicar em X, sem confirmação adicional (a ação não é destrutiva permanente).

---

## Avatares e mídia

### `BdsAvatar`

Representação visual de usuário (inicial, foto ou ícone).

```tsx
<BdsAvatar name="João Silva" />
<BdsAvatar thumbnail="https://..." />
<BdsAvatar icon="user-default" />
```

**Quando usar**
Use para identificar usuários, contatos, autores de comentários ou qualquer entidade humana na interface.

**Quando NÃO usar**
Não use avatar para representar entidades não-humanas (organizações, bots, integrações) — use ícone ou logo. Não use `<img>` direto para fotos de perfil.

**Boas práticas de UX**
- Quando a foto não carrega, o fallback deve ser a inicial do nome (`name`) — nunca um ícone genérico quebrado.
- Em contextos onde o avatar é clicável (leva ao perfil), sinalize com cursor pointer e hover visual.
- Use tamanho consistente com o contexto: avatar em comentários é menor do que avatar na navbar.

---

### `BdsAvatarGroup`

Grupo de avatares empilhados.

```tsx
<BdsAvatarGroup>
  <BdsAvatar name="João" />
  <BdsAvatar name="Maria" />
  <BdsAvatar name="+3" />
</BdsAvatarGroup>
```

**Quando usar**
Use para mostrar de forma compacta que múltiplos usuários estão associados a um item: membros de um time, participantes de uma conversa, colaboradores de um documento.

**Quando NÃO usar**
Não use para exibir todos os usuários — mostre no máximo 3–4 avatares e indique o restante com "+N". Para listas completas, abra um dropdown ou modal.

**Boas práticas de UX**
- Use `BdsTooltip` com os nomes ao passar o mouse sobre cada avatar.
- O indicador "+N" deve ser clicável e mostrar a lista completa de usuários.

---

### `BdsIcon`

Ícone do sistema. Use apenas nomes da lista em `allowed-icons.md`.

```tsx
<BdsIcon name="add" size="medium" />
<BdsIcon name="check" size="small" color="var(--color-positive)" />
```

Tamanhos: `xxx-small` `xx-small` `x-small` `small` `medium` `large` `x-large`

**Quando usar**
Use ícones para reforçar o significado de ações e elementos — nunca como único meio de comunicação. O ícone acompanha texto, não o substitui (exceto em `BdsButtonIcon` com tooltip).

**Quando NÃO usar**
Não use ícones que não estão em `allowed-icons.md` — improvise com SVG inline só se aprovado pela equipe de design. Não use ícones apenas para decorar — cada ícone deve ter uma função semântica.

**Boas práticas de UX**
- Use ícones com significado universal e consistente: `edit` sempre para editar, `delete` sempre para excluir, `add` sempre para adicionar — em toda a interface.
- Não misture estilos: todos os ícones de uma mesma interface devem ser da mesma família (o kit UAI já resolve isso).
- Em ações, o ícone deve sempre acompanhar o texto — nunca confie que o ícone sozinho é autoexplicativo para todos os usuários.

---

### `BdsImage`

Imagem com fallback de erro. Nunca use `<img>` diretamente.

```tsx
<BdsImage src="https://..." alt="Descrição" />
```

**Quando usar**
Use para toda imagem de conteúdo (fotos, thumbnails, imagens de produto). O componente trata erros de carregamento automaticamente.

**Quando NÃO usar**
Não use para ícones — use `BdsIcon`. Não use para ilustrações do sistema — use `BdsIllustration`.

**Boas práticas de UX**
- Sempre defina `alt` com descrição real do conteúdo da imagem — nunca deixe vazio a não ser que a imagem seja puramente decorativa.
- Defina dimensões fixas para evitar layout shift durante o carregamento.
- Em imagens de conteúdo gerado pelo usuário, mostre um `BdsSkeleton` enquanto carrega.

---

### `BdsIllustration`

Ilustrações do sistema UAI.

```tsx
<BdsIllustration type="empty-state" />
```

**Quando usar**
Use em estados vazios, erros e onboarding para humanizar a interface e dar contexto visual ao estado da tela. Ilustrações transformam páginas em branco em experiências com orientação.

**Quando NÃO usar**
Não use ilustrações em cada tela — reserve para momentos de transição, erro e empty states. Não use ilustrações decorativas sem relação com o conteúdo da tela.

**Boas práticas de UX**
- Sempre combine a ilustração com texto explicativo e, quando aplicável, uma ação ("Criar primeiro contato").
- Empty states são oportunidades de orientação, não apenas "nada aqui" — diga ao usuário o que fazer a seguir.

---

### `BdsCarousel`

Carrossel de itens deslizáveis.

```tsx
<BdsCarousel>
  <BdsCarouselItem><BdsCard>...</BdsCard></BdsCarouselItem>
  <BdsCarouselItem><BdsCard>...</BdsCard></BdsCarouselItem>
</BdsCarousel>
```

**Quando usar**
Use quando há múltiplos itens de igual importância que não cabem lado a lado na tela, e a exploração sequencial faz sentido: destaques, planos, cards de onboarding passo a passo.

**Quando NÃO usar**
Não use carrossel para conteúdo que o usuário precisa comparar — a comparação exige ver os itens ao mesmo tempo. Não use para conteúdo principal de uma tela — carrosséis têm baixa taxa de interação e o usuário tende a não avançar além do primeiro item.

**Boas práticas de UX**
- Indique visualmente quantos itens existem e em qual o usuário está (dots ou numeração).
- Permita navegação por teclado (setas) além dos controles visuais.
- Não inicie com autoplay — o movimento automático é disruptivo e inacessível.

---

## Separadores e estrutura

### `BdsDivider`

Linha divisória horizontal entre seções.

```tsx
<BdsDivider />
```

**Quando usar**
Use para separar visualmente seções de conteúdo distintas dentro de um mesmo container (card, formulário, dropdown).

**Quando NÃO usar**
Não use divider para criar espaçamento — use `margin` ou `padding` via CSS. Não use múltiplos dividers seguidos — isso indica que o conteúdo deveria ser reorganizado em componentes separados.

**Boas práticas de UX**
- O divider é um auxílio visual discreto — não o use em excesso. Prefira espaçamento generoso para separar seções antes de recorrer a linhas.

---

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

**Quando usar**
Use quando o conteúdo é opcional ou avançado — o usuário só precisa ver se quiser saber mais. Ideal para FAQs, configurações avançadas, detalhes técnicos, seções que a maioria dos usuários não usa com frequência.

**Quando NÃO usar**
Não use accordion para esconder conteúdo principal que a maioria dos usuários vai precisar — coloque-o visível. Não use para substituir tabs quando as seções têm peso equivalente — o accordion sugere hierarquia (principal + detalhes opcionais).

**Boas práticas de UX**
- O header do accordion deve ser claro o suficiente para o usuário decidir se quer expandir antes de expandir — nunca use "Mais informações" genérico.
- Em FAQs, permita que múltiplos accordions sejam abertos ao mesmo tempo — o usuário pode querer comparar respostas.
- Em configurações, feche automaticamente outros accordions ao abrir um novo para manter o foco.
- Indique o estado (aberto/fechado) com ícone de seta de forma clara.

---

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

**Quando usar**
Use para agrupar configurações avançadas ou conteúdo secundário que pode ser recolhido para simplificar a interface. Diferente do `BdsAccordion`, o `BdsExpansionPanel` tem header mais personalizável e é mais adequado para contextos de formulário.

**Quando NÃO usar**
Não use para conteúdo que o usuário precisa ver para prosseguir no fluxo — se é obrigatório, deixe visível. Não use como substituto de tabs ou seções de página.

**Boas práticas de UX**
- Recolha por padrão quando o conteúdo for avançado ou raramente acessado.
- Expanda por padrão quando o conteúdo for relevante para a maioria dos usuários.
- O header deve resumir o que está dentro do painel para o usuário decidir se precisa expandir.

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
