export const MET = ["Compreender", "Estruturar", "Transformar", "Sustentar"] as const;

export type Produto = { num: string; name: string; descricao: string; digital?: true };
export type Frente = { name: string; card: string; titulo: string; lead: string; quando: string; met: [string, string, string, string]; resultado: string; produtos: Produto[] };
export type ProdutoDigital = { num: string; name: string; titulo: string; descricao: string; paraQuem: string; noLugarDe: string; entrega: string };

export const frentes: Frente[] = [
  { name: "Estratégia", card: "Direção, prioridades e regras de decisão.", titulo: "Estratégia é a decisão que cabe em uma rotina.",
    lead: "Planejamento estratégico, governança, processos, gestão da mudança, indicadores, inovação e transformação, tratados como um só sistema de decisão.",
    quando: "Quando a direção existe, mas não chega à operação, ou quando cada área lê a prioridade de um jeito.",
    met: ["Ler o contexto, os dados e os conflitos de prioridade até chegar ao princípio da decisão.", "Desenhar direção, metas e regras de decisão em uma única estrutura.", "Conduzir as iniciativas com cadência, responsáveis e marcos.", "Acompanhar indicadores e deixar a rotina de gestão com a equipe."],
    resultado: "Direção clara, metas desdobradas por líder e uma cadência de gestão que sobrevive ao projeto.",
    produtos: [
      { num: "1.1", name: "Planejamento estratégico e governança", descricao: "Define direção, prioridades e regras de decisão." },
      { num: "1.2", name: "OKRs e desdobramento de metas", descricao: "Desdobra a estratégia em metas por área e líder.", digital: true },
      { num: "1.3", name: "Escritório de transformação", descricao: "Conduz iniciativas com cadência, responsáveis e painel.", digital: true },
      { num: "1.4", name: "Processos e indicadores", descricao: "Mapeia processos e indicadores que sustentam a gestão.", digital: true },
      { num: "1.5", name: "Gestão da mudança", descricao: "Prepara pessoas e ritos para que decisões virem prática." },
    ] },
  { name: "Pessoas", card: "Cultura, liderança e experiência do colaborador.", titulo: "Cultura nasce de princípios, não de campanhas.",
    lead: "RH estratégico, cultura, liderança, remuneração, desenvolvimento organizacional, talentos e experiência do colaborador, a partir do que a empresa decidiu ser.",
    quando: "Quando a cultura declarada e a vivida se afastam, ou quando crescer exige estrutura de cargos, líderes e remuneração.",
    met: ["Entender cultura, dados e expectativas de lideranças e equipes.", "Integrar cultura, cargos, remuneração e liderança em uma estrutura coerente.", "Implantar programas, trilhas e rituais com as lideranças à frente.", "Medir com painéis e formar capacidade interna para seguir sem a consultoria."],
    resultado: "Cultura descrita em comportamentos, estrutura de cargos e remuneração defensável, e lideranças preparadas.",
    produtos: [
      { num: "2.1", name: "Cultura e proposta de valor ao colaborador", descricao: "Propósito, valores e promessa ao colaborador.", digital: true },
      { num: "2.2", name: "Cargos, salários e remuneração estratégica", descricao: "Estrutura de cargos, faixas e incentivos, com simulador.", digital: true },
      { num: "2.3", name: "Programa de liderança", descricao: "Trilha de formação e acompanhamento para líderes." },
      { num: "2.4", name: "Universidade corporativa e onboarding", descricao: "Trilhas de formação e jornada de entrada.", digital: true },
      { num: "2.5", name: "People analytics", descricao: "Dados de pessoas em painéis para decisões de gestão.", digital: true },
    ] },
  { name: "Marcas", card: "Posicionamento, voz e aplicação da marca.", titulo: "Marca é o princípio tornado visível.",
    lead: "Branding, posicionamento, comunicação, experiência de marca, planejamento e gestão de marketing, com regras que qualquer pessoa consegue aplicar.",
    quando: "Quando a empresa mudou, mas a marca não acompanhou, ou quando cada peça sai com uma interpretação.",
    met: ["Investigar a empresa, o público e o território que a marca pode ocupar.", "Definir essência, posicionamento, voz e sistema visual.", "Aplicar a marca em peças, canais e pontos de contato.", "Documentar em ambiente de consulta e acompanhar o uso."],
    resultado: "Marca com posicionamento escrito, regras de uso e peças aplicadas sem retrabalho.",
    produtos: [
      { num: "3.1", name: "Plataforma de marca e posicionamento", descricao: "Propósito, posicionamento e voz da marca." },
      { num: "3.2", name: "Brandbook e design system", descricao: "Regras e componentes da marca em ambiente de consulta.", digital: true },
      { num: "3.3", name: "Enxoval e aplicação de marca", descricao: "Marca aplicada em papelaria, sinalização, vestuário e peças digitais.", digital: true },
      { num: "3.4", name: "Employer branding", descricao: "Proposta de valor da empresa como lugar para trabalhar." },
      { num: "3.5", name: "Plano de marketing e comunicação", descricao: "Canais, calendário e mensagens alinhados à marca." },
    ] },
  { name: "Negócios", card: "Oferta, vendas e operação previsíveis.", titulo: "Receita previsível começa em uma oferta clara.",
    lead: "Estratégia comercial, desenvolvimento de negócios, estruturação de operações e performance, para vender melhor e entregar com previsibilidade.",
    quando: "Quando o negócio cresce, mas vendas e operação dependem de pessoas específicas e não de rotina.",
    met: ["Entender oferta, mercado, funil e gargalos da operação.", "Estruturar modelo, papéis, rotinas e metas comerciais.", "Implantar pipeline, nutrição e fluxos operacionais.", "Acompanhar performance e ajustar a rotina com os responsáveis."],
    resultado: "Oferta definida, funil acompanhado, operação com papéis e rotinas, e indicadores em um único painel.",
    produtos: [
      { num: "4.1", name: "Modelo e oferta", descricao: "Define o que a empresa vende, para quem e em que condições." },
      { num: "4.2", name: "Estratégia comercial e pipeline", descricao: "Funil, metas e rotinas comerciais, com acompanhamento.", digital: true },
      { num: "4.3", name: "Funil e nutrição de clientes", descricao: "Jornada do primeiro contato à decisão, para vendas consultivas.", digital: true },
      { num: "4.4", name: "Estruturação de operação", descricao: "Papéis, rotinas e fluxos para previsibilidade." },
      { num: "4.5", name: "Painel de performance", descricao: "Indicadores comerciais e operacionais em painel de decisão.", digital: true },
    ] },
];

const d = (num: string, name: string, titulo: string, descricao: string, paraQuem: string, noLugarDe: string, entrega: string): ProdutoDigital => ({ num, name, titulo, descricao, paraQuem, noLugarDe, entrega });

export const produtosDigitais: ProdutoDigital[] = [
  d("1.2", "OKRs e desdobramento de metas", "Meta só orienta quando chega a cada líder.", "Desdobra a estratégia em metas por área e por líder, com ritos de acompanhamento e um ambiente de gestão.", "Diretorias e lideranças", "Planilhas de metas paralelas", "Ambiente de gestão com ritos e visão por líder"),
  d("1.3", "Escritório de transformação", "Iniciativa sem cadência vira intenção.", "Conduz as iniciativas estratégicas com cadência, responsáveis e painel de acompanhamento.", "Diretoria e escritório de projetos", "Status reports em slides", "Painel de iniciativas e calendário de ritos"),
  d("1.4", "Processos e indicadores", "Gestão começa no que se consegue medir.", "Mapeia os processos e os indicadores que sustentam a gestão, em um ambiente de consulta e acompanhamento.", "Gestores de área", "Fluxos em arquivos soltos", "Ambiente de consulta com processos e indicadores"),
  d("2.1", "Cultura e proposta de valor ao colaborador", "Cultura precisa de um lugar onde ser consultada.", "Propósito, valores e promessa ao colaborador, traduzidos em práticas e em uma plataforma de cultura.", "RH e lideranças", "Manual de cultura em PDF", "Plataforma de cultura com práticas e rituais"),
  d("2.2", "Cargos, salários e remuneração estratégica", "Remuneração clara reduz a negociação caso a caso.", "Estrutura de cargos, faixas e incentivos, com simulador e ambiente de consulta.", "RH e finanças", "Tabelas de faixas em planilha", "Simulador e ambiente de consulta"),
  d("2.4", "Universidade corporativa e onboarding", "Cultura e método viram hábito ao longo da jornada.", "Trilhas de formação e jornada de entrada, com acompanhamento em ambiente digital.", "RH e lideranças", "Treinamentos avulsos", "Trilhas, jornada de entrada e acompanhamento"),
  d("2.5", "People analytics", "Dado de pessoas só vale quando vira decisão.", "Dados de pessoas organizados em painéis para apoiar as decisões de gestão.", "RH e diretoria", "Relatórios mensais montados à mão", "Painéis com indicadores definidos"),
  d("3.2", "Brandbook e design system", "A marca consultável evita improviso.", "Regras e componentes da marca documentados em um ambiente de consulta e download.", "Marketing, design e fornecedores", "PDF enviado por e-mail", "Ambiente de consulta e download"),
  d("3.3", "Enxoval e aplicação de marca", "Peça pronta dispensa interpretação.", "A marca aplicada em papelaria, sinalização, vestuário, brindes e peças digitais, entregue em arquivos prontos para produção.", "Marketing e fornecedores", "Artes refeitas a cada pedido", "Arquivos prontos para produção"),
  d("4.2", "Estratégia comercial e pipeline", "Funil acompanhado vira rotina comercial.", "Funil, metas e rotinas comerciais, com acompanhamento do pipeline.", "Direção comercial", "Pipeline em planilha", "Ambiente de pipeline com rotinas"),
  d("4.3", "Funil e nutrição de clientes", "Venda consultiva é relacionamento com método.", "A jornada comercial do primeiro contato à decisão, com nutrição, indicadores e painel, pensada para vendas consultivas de alto valor.", "Comercial e marketing", "Follow-ups feitos de memória", "Painel e réguas de nutrição"),
  d("4.5", "Painel de performance", "Decidir rápido pede os indicadores no mesmo lugar.", "Indicadores comerciais e operacionais reunidos em um painel de decisão.", "Diretoria", "Reuniões só para consolidar números", "Painel de decisão"),
];

export const entregaFixa = ["Construído com IA, com o método documentado", "Acompanhamento depois da entrega"];
export const comoEntregue = (p: ProdutoDigital) => [p.entrega, ...entregaFixa];
export const produtoDigital = (num: string) => produtosDigitais.find((p) => p.num === num);
