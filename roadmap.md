# Página Enxoval
- [x] Extrair as 7 pranchas do documento anexado e servir em `public/enxoval/`.
- [x] Criar a rota `/enxoval` com pranchas em escala, cabeçalho e rodapé próprios.
- [x] Link discreto "Enxoval" no rodapé do site e verificação desktop/mobile.

# Identidade visual v1.1
- [x] Aplicar os paths oficiais, símbolo circunflexo, versões ópticas e favicon sem alterar cores ou layout.
- [x] Migrar SVGs inline do Enxoval e conferir domínio oficial; 30 testes passaram e a marca foi verificada em 1440/390px.
- [x] Receber e aplicar og-image.jpg (1200×630) e apple-touch-icon.png (180×180) oficiais; sem placeholders.

# Conceito · Área do cliente
- [x] Criar página própria e protótipo local com cinco telas e filtros.
- [x] Adicionar somente o link discreto no rodapé institucional.
- [x] Verificar navegação, dados fictícios, filtros e celular em desktop/mobile.

# Brandbook em PDF
- [x] Servir o PDF em `public/downloads/arque-brandbook-design-system.pdf`.
- [x] Link discreto no rodapé, em ultramar-claro, abrindo em nova aba com download.
- [x] Teste do rodapé e verificação do link em desktop/mobile.

# Slides do site em PDF
- [x] Servir o PDF em `public/downloads/arque-site-slides.pdf`.
- [x] Segundo link discreto no rodapé, em ultramar-claro, abrindo em nova aba com download.
- [x] Teste do rodapé e verificação do link em desktop/mobile.

# Enxoval de marca · Versão 1.1
- [x] Salvar o HTML original byte a byte em `public/enxoval/enxoval.html` e excluir as sete pranchas e o render antigos.
- [x] Reduzir `/enxoval` a redirecionamento no cliente com link visível e apontar o rodapé diretamente ao HTML.
- [x] Registrar geração externa com um motor vetorial único a partir dos tokens: 34 peças em 6 coleções — Papelaria, Sinalização, Clubinho Arquê, Digital e social, Kit de onboarding e Kit cliente novo.
- [x] Registrar que o botão principal baixa o arquivo real (PNG, PDF ou ZIP nas dimensões descritas); a imagem do mockup fica como link secundário no "+".
- [x] Verificar acesso, downloads, testes e preservação do PDF do brandbook.

# Seção 05 Produtos
- [x] Capítulos 05.1 Por frente e 05.2 IA & Inovação, menções no hero e fundador, testes e verificação 375/1280px.
- [x] Retirar links de versão digital e portfólio de suítes, seus componentes, dados, fontes e assets sem uso; preservar produtosPorFrente.
- [x] Atualizar o texto de IA & Inovação e incluir 05.3 Clientes com o logo original da Newe, sem placeholder Hyndra.
- [x] Verificar 24 testes, logo e botão de contato em 375/1280px, sem rolagem horizontal; assinatura do enxoval intacta, sem publicar.
- [x] Incluir logo Hyndra na célula 2 de 05.3 Clientes, com alt, altura 64px e o mesmo tratamento da Newe (72px), sem recolorir.

# Autenticação e área do cliente real
- [x] Habilitar e-mail/senha e Google; página pública `/auth` com entrar, criar conta e confirmação de e-mail.
- [x] Gate `_authenticated` (ssr: false, redireciona a `/auth`) e área real em `/area-do-cliente` com saudação e sair.
- [x] Cabeçalho com "Entrar"/"Área do cliente" conforme a sessão; link discreto no rodapé; ouvinte único de auth na raiz.
- [ ] Modelar dados reais da área do cliente (projetos, entregas, documentos por cliente) — próxima etapa.

# Bastidores na home
- [x] Adicionar cartões do enxoval e conceito entre Fundador e Contato, com imagem Arquê e miniatura fictícia em código.
- [x] Incluir Bastidores nos menus e renumerar Contato para 08, preservando rodapé e enxoval.
- [x] Verificar testes, links e ausência de scroll horizontal em 375px e 1280px, sem publicar.

# Clientes · Produtos por empresa
- [x] Registrar que a Chlorum fica fora do site e que 05.3 Clientes tem autorização de Newe e Hyndra; título, nomes e descrições em branco puro (#FFFFFF), sem opacidade ou filtros, com label preservado e logos sem opacity, filter ou mix-blend.
- [x] Substituir logos negativos pelos anexos brancos originais como Lovable Assets.
- [x] Organizar três grupos e 12 itens com descrições revisadas em dados tipados, preservando 05.2 e fechamento.
- [x] Verificar 25 testes, layout em 375/1280px sem rolagem horizontal, logos íntegros, botão de contato e assinatura do enxoval intacta, sem publicar.

# Produtos · Índice editorial
- [x] Atualizar 05.1 com 20 produtos (12 digitais), descrições expansíveis, quatro colunas alinhadas e sanfona de frentes no celular; acrescentar o quarto parágrafo de 05.2, verificar 28 testes e screenshots em 1440/390px sem desalinhamento ou rolagem horizontal, preservando 05.3 e o Enxoval, sem publicar.

# Fundador · Foto do Marlon
- [x] Incluir a foto marlon-fundador.webp (Lovable Asset) no FounderPortrait com o símbolo em quadrado carvão rente ao canto inferior esquerdo, fallback do símbolo grande, testes e verificação em 1440/390px, sem publicar.
- [x] 05.1 pilha 3D de frentes com pasta lateral; 05.2 índice vivo dos 12 produtos digitais com pasta do produto.

# Alinhamento v1.1 e Clientes · Índice vivo
- [x] Alinhar textos, tamanhos mínimos, símbolo e cantos retos ao v1.1, preservando exports.
- [x] Transformar 05.3 em índice vivo por grupo com pasta escura compartilhada, preservando dados e logos.
- [x] Atualizar testes e verificar computador, celular, teclado e movimento reduzido, sem publicar.
- [x] Receber e aplicar o avatar atualizado (`foto.webp`) do lote 2, substituindo o render antigo sem alterar os exports.

# Renders do Enxoval · v1.1
- [x] Substituir o render do kit na home e 19 entradas IMGDATA com correspondência inequívoca; preservar todo o restante do HTML e não publicar.
- [x] Atualizar o hash de integridade; 35 testes passaram e imagens/modelos foram conferidos no preview; listar 28 chaves sem correspondente e quatro arquivos sem chave própria.

# Renders do Enxoval · v1.1 · Lote 2
- [x] Substituir somente o base64 das 23 chaves IMGDATA pelos WebP de mesmo nome; manter as outras 24 entradas e todo o HTML externo ao objeto byte a byte, sem publicar.
- [x] Atualizar o hash SHA-256 de integridade para `604e2a335e4b9b99c885e6014c02483092a53f6db06d466fdf95d6a32b46188b`.
- [x] Conferir 35 testes, as 23 imagens byte a byte no preview e ausência de imagens quebradas; auditar identidade e downloads sem alterá-los.
- [x] Receber e substituir o brandbook pelo PDF v1.1 de 30 páginas, byte a byte.
- [x] Gerar slides atualizados em 48 páginas com identidade v1.1, conteúdo atual das frentes, produtos digitais e clientes, render novo do kit e domínio oficial; substituir o PDF no preview, sem publicar.

# Pendências da auditoria · Assets v1.1
- [x] Copiar imagens oficiais para public/ e substituir o brandbook no caminho existente; atualizar a indicação acessível para 30 páginas.
- [x] Configurar og:image e twitter:image na home, com domínio oficial e dimensões 1200×630; manter tags de imagem fora da raiz para não afetar outras páginas.
- [x] Alterar apenas a abertura do Clubinho; preservar IMGDATA, artes e exports.
- [x] Atualizar integridade do Enxoval: `2ef09363f5322de9d3c4ab929293e930092d93d8757a7a33cf86f016c6191225`.
- [x] Conferir 35 testes, imagens e tags no preview, download do PDF byte a byte e alteração única no texto do HTML; sem publicar.
