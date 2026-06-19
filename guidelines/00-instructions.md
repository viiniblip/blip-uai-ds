# 00 — Instruções do Make kit do UAI (LER PRIMEIRO)

Você está gerando telas com o design system UAI (`@blip/uai-make-kit`, que embute `blip-ds`).
Siga estes passos NA ORDEM, antes de escrever qualquer código.

## Passo 1 — Leia antes de codar (obrigatório)
- `overview-setup.md` — como montar a base (provider, fonte, imports).
- `design-tokens.md` — os tokens reais (cores). Use só estes.
- `allowed-icons.md` — os nomes de ícone válidos. Use só estes.
- `design-principles.md` — princípios de design a respeitar em toda tela.

## Passo 2 — Regras inegociáveis
- **Componentes:** use EXCLUSIVAMENTE os do kit (`BdsButton`, `BdsInput`, `BdsGrid`,
  `BdsTypo`, `BdsSelect`, `BdsCard`, `BdsModal`, `BdsIcon`, etc.).
- **NUNCA** use Tailwind, classes utilitárias, CSS próprio, `styled-components`,
  nem elementos HTML crus (`<button>`, `<input>`, `<div>` estilizado) para algo
  que o UAI já cobre. Se existe componente do UAI, use o componente.
- **Estilo:** só `var(--token)` do `design-tokens.md`. NUNCA hex, rgb ou px hardcoded.
- **Ícones:** só nomes do `allowed-icons.md`. Se não estiver na lista, NÃO use ícone.
- **Raiz:** envolva o app no `UaiKitProvider` (ou `BdsThemeProvider`). Os tokens só
  existem dentro dele.
- **Layout:** use `BdsGrid` com `gap`; não use margin nos filhos para espaçar.

## Passo 3 — Se faltar algo
Se o UAI não tiver um componente para o que foi pedido, **avise** em vez de inventar
um componente próprio ou cair em HTML/Tailwind. Não improvise um "parecido".

## Passo 4 — Antes de entregar
Valide a tela contra os princípios (`design-principles.md`) e confirme:
componentes do kit, tokens reais, ícones da lista, tudo dentro do provider.

---
<!-- Estas guidelines pressupõem docs GERADOS da fonte (blip-tokens + manifesto).
     Não substitua por listas escritas à mão. -->
