# Página Enxoval
- [x] Extrair as 7 pranchas do documento anexado e servir em `public/enxoval/`.
- [x] Criar a rota `/enxoval` com pranchas em escala, cabeçalho e rodapé próprios.
- [x] Link discreto "Enxoval" no rodapé do site e verificação desktop/mobile.

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

# Enxoval de marca · Versão 1.0
- [x] Salvar o HTML original byte a byte em `public/enxoval/enxoval.html` e excluir as sete pranchas e o render antigos.
- [x] Reduzir `/enxoval` a redirecionamento no cliente com link visível e apontar o rodapé diretamente ao HTML.
- [x] Registrar geração externa com um motor vetorial único a partir dos tokens: 34 peças em Papelaria, Sinalização, Clubinho Arquê, Digital e social, Kit de onboarding gamificado e Kit cliente novo, com SVG, PNG e PDF nos tamanhos finais.
- [x] Verificar acesso, downloads, testes e preservação do PDF do brandbook.

# Seção 05 Produtos
- [x] Capítulos 05.1 Por frente e 05.2 IA & Inovação, menções no hero e fundador, testes e verificação 375/1280px.
- [x] Retirar links de versão digital e portfólio de suítes, seus componentes, dados, fontes e assets sem uso; preservar produtosPorFrente.
- [x] Atualizar o texto de IA & Inovação e incluir 05.3 Clientes com o logo original da Newe, sem placeholder Hyndra.
- [ ] Verificar testes, 375/1280px e assinatura intacta do enxoval, sem publicar.
- [ ] Incluir logo Hyndra — aguardando envio do arquivo pelo usuário.

# Autenticação e área do cliente real
- [x] Habilitar e-mail/senha e Google; página pública `/auth` com entrar, criar conta e confirmação de e-mail.
- [x] Gate `_authenticated` (ssr: false, redireciona a `/auth`) e área real em `/area-do-cliente` com saudação e sair.
- [x] Cabeçalho com "Entrar"/"Área do cliente" conforme a sessão; link discreto no rodapé; ouvinte único de auth na raiz.
- [ ] Modelar dados reais da área do cliente (projetos, entregas, documentos por cliente) — próxima etapa.

# Bastidores na home
- [x] Adicionar cartões do enxoval e conceito entre Fundador e Contato, com imagem Arquê e miniatura fictícia em código.
- [x] Incluir Bastidores nos menus e renumerar Contato para 08, preservando rodapé e enxoval.
- [x] Verificar testes, links e ausência de scroll horizontal em 375px e 1280px, sem publicar.
