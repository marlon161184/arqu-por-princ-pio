# Seção 05 Produtos — pilha 3D (05.1) e índice vivo (05.2)

Escopo: só 05.1 e 05.2. Menu, hero, demais seções, 05.3 Clientes, fundador, Bastidores, contato, rodapé e enxoval.html ficam intactos. Sem publicar.

## O que é preservado
- Âncoras `#produtos` (seção) e `#ia-inovacao` (05.2); link "Produtos" do menu continua apontando para `#produtos`.
- Rótulos "05 Produtos", "05.1 Por frente", "05.2 IA & Inovação", "05.3 Clientes".
- 05.3 Clientes inteira (mesmo markup, texto branco puro, logos sem filtro) e o bloco final "O seu sistema também pode falar a sua língua." com o link `#contato`.
- Nomes dos 20 produtos e os 12 digitais (iguais aos atuais; numeração já bate).

## O que é substituído
- 05.1: o menu editorial de 4 colunas/sanfona (details/summary) sai e entra a pilha 3D + lista de frentes + pasta da frente.
- 05.2: os quatro parágrafos saem e entram o título "Doze produtos digitais que continuam em uso." e o índice vivo dos 12 produtos. (Atenção: o 4º parágrafo que você pediu recentemente some junto; posso mantê-lo como texto curto acima do índice, se preferir.)
- Descrições curtas: passam a ser as do protótipo (mais curtas que as atuais). Como você pediu "mantenha o do site em conflito", vou usar as do protótipo apenas como "descrição curta" na pasta e manter as atuais como `d` longa onde o protótipo não traz uma — confirmo cada caso na entrega.

## Possíveis conflitos com o site atual (a confirmar)
- Token "noite" #131B20 não existe hoje: será adicionado (nenhuma cor existente muda).
- Chip "Digital" com raio de pílula conflita com o selo atual de cantos retos e com a regra "cantos retos". Vou seguir o seu pedido (pílula) só no chip.
- "Ver em uso": não há páginas por produto. Proposta: link para `#contato` (ou para `/conceito/area-do-cliente` nos casos aplicáveis). Sem decisão, uso `#contato`.
- Chevron por linha no índice e na lista "Como é entregue" foi vetado antes ("não usar chevron como ícone de item"); o novo pedido autoriza chevron como marcador de lista — sigo o novo.

## Estrutura de componentes
```text
DigitalProducts (seção #produtos, mantém 05.3 e CTA)
├─ FrentesStack      lista de frentes + palco 3D + botões anterior/próxima
│   └─ FrentePasta   conteúdo da pasta da frente (dentro de PastaPanel)
├─ DigitalIndex      05.2: 12 linhas agrupadas por frente, reveal
│   └─ ProdutoPasta  conteúdo da pasta do produto (dentro de PastaPanel)
└─ PastaPanel        painel lateral: role=dialog, aria-modal, wipe clip-path 240ms,
                     fecha por botão/fundo/Esc, prende e devolve o foco
```
Uma única pasta aberta por vez (estado no DigitalProducts): `{tipo:'frente'|'produto', id, origem}`. Produto digital aberto a partir de uma frente mostra "Voltar" para a frente.

## Arquivos
Criados:
- `src/data/produtos.ts` — tipos + MET, 4 frentes (card, t, lead, quando, met, res, produtos com número) e 12 produtos digitais (n, t, d, q, s, e); "Como é entregue" monta e + duas linhas fixas.
- `src/components/produtos/FrentesStack.tsx`, `FrentePasta.tsx`, `DigitalIndex.tsx`, `ProdutoPasta.tsx`, `PastaPanel.tsx`.
- `src/lib/stackMath.ts` — funções puras: posição p normalizada em [-2,2), transform, opacidade, frente ativa.
- `src/test/produtos-pilha.test.tsx` — novos testes.

Alterados:
- `src/components/produtos/DigitalProducts.tsx` — compõe os novos componentes, mantém 05.3 e CTA.
- `src/styles.css` — token `--noite`, tokens de movimento (fast/base/slow/ease/step/stagger), classes da pilha, painel, índice; bloco reduced-motion. Remove as classes antigas do menu editorial.
- `src/test/produtos-secao.test.tsx` — remove asserções do menu antigo (sanfona, contagem de selos), mantém as de âncoras, 20/12 produtos, 05.3 e menu.
- `src/data/produtosPorFrente.ts` — removido (substituído por `produtos.ts`); o teste de dados passa a ler o novo arquivo.
- `AGENTS.md`, `roadmap.md`, nota de design do portfólio — registrar a nova regra da 05.1/05.2.

## Comportamento (técnico)
- Pilha: `t` contínuo em requestAnimationFrame, +0,1/s; pausa em hover, arraste, pasta aberta, aba oculta e reduced-motion. Fórmulas do protótipo: largura min(72% palco, 380px), altura 0,66·w, step 0,82·h, perspective 1500px, palco min(78vh, 620px), inclinação rotateX 16° rotateY -20° rotateZ -4°; cor da frente ultramar quando |p|<0,5, demais ciclam carvão/branco/noite/concreto.
- Navegação: botões anterior/próxima (animam t até o inteiro mais próximo em 240ms), arraste vertical por pointer events (sem lib), clique na lista. Cartão da frente abre a pasta; outro cartão vem para a frente. Cartões são `button`; atrás com `tabIndex=-1` e `aria-hidden` quando opacidade 0. Região `aria-live=polite` anuncia a frente ativa.
- SSR: render inicial determinístico (t=0); animação só após hidratação.
- Índice 05.2: linhas `button`, bloco ultramar via pseudo-elemento com clip-path/scaleX 180ms, nome translateX 32px, chevron avança; reveal com IntersectionObserver e stagger 50ms.
- Painel: portal no body, scroll da página travado, foco no título ao abrir, trap de Tab, retorno ao elemento de origem.

## Testes
- Matemática da pilha: p normalizado, opacidade nos limites, cartão da frente.
- 4 frentes, 20 produtos, 12 digitais com a numeração 1.2…4.5.
- Clique na frente da lista ativa; cartão da frente abre dialog com as 5 seções; Esc fecha e devolve foco.
- Produto digital na pasta da frente abre pasta do produto com "Voltar"; "Como é entregue" tem 3 itens.
- Índice 05.2: título e 12 botões; clique abre a pasta.
- reduced-motion: sem rotação automática.
- Verificação visual em 1440px e 390px (sem rolagem horizontal, pasta em tela cheia no celular).

## Riscos
- Desempenho/legibilidade da animação 3D contínua em celulares fracos (mitigado: pausa fora da tela, transform apenas).
- Acessibilidade de conteúdo em movimento (WCAG 2.2.2): botão de pausa explícito recomendado; incluo um "Pausar" discreto em mono.
- Arraste vertical no celular disputa com a rolagem da página: `touch-action: none` só no palco.
- Ultramar no teto de 10%: cartão da frente + blocos de hover; aceitável, mas a conferir visualmente.
- Perda de conteúdo atual: descrições longas e o 4º parágrafo da 05.2 (ver acima).
