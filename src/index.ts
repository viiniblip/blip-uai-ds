// ── Make kit do UAI — entry autocontido ──────────────────────────────
// Resolve os 2 landmines que faziam o Make cair no Tailwind:
//  (1) blip-ds-react NÃO declara blip-ds → aqui os dois vêm juntos (package.json)
//      e os web components são registrados explicitamente.
//  (2) tokens do UAI só existem dentro do BdsThemeProvider → o UaiKitProvider
//      já envolve tudo, e a fonte da marca é carregada abaixo.

// 1) Registra os Web Components do blip-ds.
//    (Se os componentes já se auto-registrarem, isto é no-op seguro;
//     se nada renderizar, é justamente ISTO que faltava.)
import { defineCustomElements } from 'blip-ds/loader';
defineCustomElements();

// 2) Fonte da marca (Nunito Sans). Sem isto, a tipografia sai errada
//    e o Make tende a "consertar" com estilo próprio.
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/700.css';

// 3) Reexporta TODOS os componentes reais do UAI (BdsButton, BdsInput, ...).
export * from 'blip-ds-react';

// 4) Provider já configurado (tema + tokens). Use SEMPRE como raiz.
export { UaiKitProvider } from './UaiKitProvider';
