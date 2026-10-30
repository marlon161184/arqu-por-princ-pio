export type ProdutoFrente = { name: string; descricao: string; digital?: true };
export type Frente = { name: string; produtos: ProdutoFrente[] };

export const frentes: Frente[] = [
  { name: "Estratégia", produtos: [
    { name: "Planejamento estratégico e governança", descricao: "Direção, prioridades e regras de decisão da companhia, do conselho à liderança." },
    { name: "OKRs e desdobramento de metas", descricao: "Da estratégia às metas por área e por líder, com ritos de acompanhamento e ambiente de gestão.", digital: true },
    { name: "Escritório de transformação", descricao: "Estrutura que conduz as iniciativas estratégicas, com cadência, responsáveis e painel de acompanhamento.", digital: true },
    { name: "Processos e indicadores", descricao: "Mapeamento de processos e indicadores que sustentam a gestão, em ambiente de consulta e acompanhamento.", digital: true },
    { name: "Gestão da mudança", descricao: "Preparação das pessoas e dos ritos para que a decisão tomada vire prática." },
  ] },
  { name: "Pessoas", produtos: [
    { name: "Cultura e proposta de valor ao colaborador", descricao: "Propósito, valores e promessa ao colaborador, traduzidos em práticas e em plataforma de cultura.", digital: true },
    { name: "Cargos, salários e remuneração estratégica", descricao: "Estrutura de cargos, faixas e incentivos, com simulador e ambiente de consulta.", digital: true },
    { name: "Programa de liderança", descricao: "Trilha de formação e acompanhamento para quem lidera pessoas e resultados." },
    { name: "Universidade corporativa e onboarding", descricao: "Trilhas de formação e jornada de entrada que transformam cultura e método em hábito, com ambiente digital de acompanhamento.", digital: true },
    { name: "People analytics", descricao: "Dados de pessoas organizados em painéis para apoiar decisões de gestão.", digital: true },
  ] },
  { name: "Marcas", produtos: [
    { name: "Plataforma de marca e posicionamento", descricao: "Propósito, posicionamento e voz que orientam todas as escolhas da marca." },
    { name: "Brandbook e design system", descricao: "Regras e componentes da marca documentados em ambiente de consulta e download.", digital: true },
    { name: "Enxoval e aplicação de marca", descricao: "Do brandbook ao objeto: papelaria, sinalização, vestuário, brindes e peças digitais, entregues em arquivos prontos para gráfica e fornecedores.", digital: true },
    { name: "Employer branding", descricao: "Proposta de valor e presença da empresa como lugar para trabalhar." },
    { name: "Plano de marketing e comunicação", descricao: "Canais, calendário e mensagens em linha com a plataforma de marca." },
  ] },
  { name: "Negócios", produtos: [
    { name: "Modelo e oferta", descricao: "Desenho do que a empresa vende, para quem e em que condições." },
    { name: "Estratégia comercial e pipeline", descricao: "Funil, metas e rotinas comerciais, com ambiente de acompanhamento do pipeline.", digital: true },
    { name: "Funil e nutrição de clientes", descricao: "Jornada comercial do primeiro contato à decisão, com nutrição, indicadores e painel, desenhada para vendas consultivas de alto valor.", digital: true },
    { name: "Estruturação de operação", descricao: "Papéis, rotinas e fluxos para que a operação entregue com previsibilidade." },
    { name: "Painel de performance", descricao: "Indicadores comerciais e operacionais reunidos num painel de decisão.", digital: true },
  ] },
];
