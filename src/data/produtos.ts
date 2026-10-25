import nexusCover from "@/assets/produtos/nexus-capa.jpg.asset.json";
import nexusCulture from "@/assets/produtos/nexus-nosso-jeito.jpg.asset.json";
import chlorumCompass from "@/assets/produtos/chlorum-bussola.jpg.asset.json";
import chlorumJobs from "@/assets/produtos/chlorum-job-hub.jpg.asset.json";

export type Product = {
  name: string; category: string; summary: string; concept: string; functions: string[];
  specimen?: "outfit"; note?: string;
};
export type Suite = {
  id: "nexus" | "people"; label: string; description: string; accent: string;
  images: { src: string; alt: string; caption: string }[];
  architecture: { name: string; count: number; support: string; branch?: string }[];
  palette: { name: string; hex: string }[];
  typography: { family: string; weight: number; role: string; italic?: boolean }[];
  grammarNote: string; products: Product[];
};

function product(name: string, category: string, summary: string, concept: string, functions: string[], extra: Partial<Product> = {}): Product {
  return { name, category, summary, concept, functions, ...extra };
}

export const suites: Suite[] = [
  {
    id: "nexus", label: "SUÍTE 01 · HYNDRA | NEWE · URBANISMO INTEGRATIVO", accent: "#9DCA79",
    description: "Sistema operacional da cultura. Doze produtos para um grupo de urbanismo e participações que decide, forma e se organiza por princípio.",
    images: [
      { src: nexusCover.url, alt: "Capa do NEXUS, sistema operacional da cultura Hyndra e Newe, com título em Plus Jakarta Sans e verde Newe.", caption: "CAPA DO NEXUS · PLUS JAKARTA SANS 200" },
      { src: nexusCulture.url, alt: "Tela Nosso Jeito de Ser, com metodologia, propósito, valores, rituais e manifesto do grupo Hyndra e Newe.", caption: "NOSSO JEITO DE SER" },
    ],
    architecture: [
      { name: "Cultura", count: 1, support: "Identidade, propósito e o que une o grupo" },
      { name: "Pessoas", count: 4, support: "Jornada, desenvolvimento, remuneração e trajetória" },
      { name: "Conhecimento", count: 2, support: "Aprendizagem e trilhas" },
      { name: "Comunidade", count: 2, support: "Conexão e pertencimento" },
      { name: "Governança", count: 3, support: "Políticas, compliance e estrutura" },
    ],
    palette: [
      { name: "Preto", hex: "#0A0A0A" }, { name: "Grafite profundo", hex: "#1C1C1C" },
      { name: "Grafite", hex: "#2E2E2E" }, { name: "Prata escura", hex: "#6B6B6B" },
      { name: "Prata clássica", hex: "#C0C0C0" }, { name: "Branco quente", hex: "#F7F6F4" },
      { name: "Verde Newe", hex: "#9DCA79" },
    ],
    typography: [
      { family: "Plus Jakarta Sans", weight: 200, role: "Display" },
      { family: "Outfit", weight: 300, role: "Corpo · 300/400" },
      { family: "Space Mono", weight: 400, role: "Labels" },
    ],
    grammarNote: "REGRA DO VERDE: SÓ EM BARRAS DE CHEGADA, RÉGUAS E LABELS.",
    products: [
      product("Nosso Jeito de Ser", "CULTURA", "A cultura do grupo destilada em método, propósito, valores, rituais e manifesto.", "Não é um manual. É a destilação de quem somos.", ["Três camadas de identidade (essência, comportamento, narrativa)", "Seis valores fundadores", "Cinco rituais vivos", "Porta de entrada para todo o Nexus"]),
      product("All Aboard", "JORNADA", "Onboarding em que a pessoa escolhe a empresa e embarca na própria jornada.", "Chegar bem é a primeira decisão de pertencer.", ["Seleção de jornada por empresa (Hyndra ou Newe)", "Trilha de integração com etapas guiadas", "Mesmo padrão de experiência, conteúdo de cada casa"]),
      product("PAR 2026", "REMUNERAÇÃO", "O programa de participação nos resultados, conduzido com clareza e simulação.", "Bônus é consequência de meta clara, não de negociação.", ["Dashboard executivo do programa", "Metas corporativas e painéis individuais", "Simulador de bônus por cenário", "Glossário e regras do jogo"], { note: "Ambiente confidencial, por isso sem tela." }),
      product("Decidir com Intenção", "DECISÃO", "Sistema que compara propostas em estratégia, custo, capacidade e risco.", "Detalhes substituem adjetivos.", ["Placar com pesos ajustáveis", "Matriz de critérios", "Leitura financeira", "Veredito ao vivo"], { note: "Decisão de alto valor sustentada por curadoria, não por convicção vazia. Ambiente confidencial, por isso sem tela." }),
      product("Ciclo de Gente", "DESEMPENHO", "Avaliação integrativa em dois eixos e nove leituras.", "Uma empresa é feita de escolhas sobre pessoas.", ["Eixo de competências e eixo de entregas medidas pelo PAR", "Matriz 9-box com leitura de cada posição", "Calibragem em que dado encontra julgamento humano", "Valores traduzidos em comportamentos"]),
      product("Academia de Líderes Newe", "FORMAÇÃO", "Universidade corporativa para quem lidera construindo cidade.", "Líderes que constroem mais do que projetos.", ["Quatro trilhas em doze meses", "Painel do aluno, módulos e jornada", "Certificação", "Autoconhecimento, conversas que transformam, cultura e liderança sistêmica"]),
      product("Academia de Vendas Newe", "FORMAÇÃO", "Formação editorial para vender alto padrão a partir do urbanismo.", "Vender alto padrão é, antes, habitar uma forma de pensar.", ["Nove módulos em três trilhas (Produto, Cliente, Experiência)", "Cinco estações de evolução", "Selos Associate, Expert e Master", "Método É, FAZ e FALA"]),
      product("HYNstaNewe", "COMUNIDADE", "A rede social interna do grupo.", "Pertencimento também se constrói em rede.", ["Acesso por e-mail corporativo com link mágico", "Feed e conexões entre as pessoas do grupo", "Diretório interno"], { specimen: "outfit" }),
      product("Habitar a Estrutura", "ESTRUTURA", "O organograma como mapa de relações, em cinco camadas.", "Um organograma não é uma pirâmide.", ["Conselho, Hyndra interna, Newe Operações, Newe Comercial e estrutura matricial", "Sumário navegável", "Edição datada"]),
      product("Plataforma de Marca", "MARCA", "O brandbook da Newe como sistema vivo, em quinze capítulos.", "Marca é uma plataforma que se governa.", ["Contexto, É·FAZ·FALA, propósito e posicionamento", "Arquétipo, identidade visual e arquitetura de marca", "KPIs e governança", "Universo de assets para consulta"]),
      product("HUB Hyndra", "GOVERNANÇA", "Políticas e procedimentos numa fonte única, viva e auditável.", "O que sustenta o grupo precisa ser achável.", ["Repositório por domínio (Pessoas e Cultura, Financeiro, Jurídico, Operações, Compliance)", "Workflow de submissão e aprovação", "Backlog de governança", "Versionamento"]),
      product("OKRs 2026", "RESULTADOS", "Objetivos e resultados-chave, do planejado ao realizado.", "Meta que ninguém vê não move ninguém.", ["Sete objetivos e vinte e oito key results", "Visão por área, trimestre e responsável", "Roadmap e playbook", "Real contra planejado"]),
    ],
  },
  {
    id: "people", label: "SUÍTE 02 · CHLORUM SOLUTIONS · GENTE E REMUNERAÇÃO", accent: "#79B7E5",
    description: "Dado, metodologia, comunicação e governança numa única suíte. Doze produtos para uma indústria de operação contínua que decide com números e com gente.",
    images: [
      { src: chlorumCompass.url, alt: "Tela Bússola Chlorum de People Intelligence, com posicionamento de mercado, alertas de retenção e equidade interna.", caption: "BÚSSOLA CHLORUM · PEOPLE INTELLIGENCE" },
      { src: chlorumJobs.url, alt: "Tela do Hub de Job Descriptions Chlorum, com apresentação do hub e painel de consolidação de cargos.", caption: "HUB DE JOB DESCRIPTIONS" },
    ],
    architecture: [
      { name: "Dado", branch: "Payroll Intelligence", count: 2, support: "Resultado orçamentário, realizado contra planejado" },
      { name: "Metodologia", branch: "People Intelligence", count: 6, support: "Leitura, pesagem e dimensionamento da força de trabalho" },
      { name: "Comunicação", branch: "People Docs", count: 2, support: "Padronização dos documentos de remuneração" },
      { name: "Governança", branch: "People Ops", count: 2, support: "Execução e prazo do que sustenta as demais frentes" },
    ],
    palette: [
      { name: "Azul Chlorum", hex: "#2A4999" }, { name: "Navy", hex: "#202848" },
      { name: "Azul institucional", hex: "#1B57A6" }, { name: "Azul claro", hex: "#79B7E5" },
      { name: "Índigo (People Intelligence)", hex: "#242F8E" }, { name: "Coral (People Docs)", hex: "#B93553" },
      { name: "Verde operacional (People Ops)", hex: "#0F7A5A" }, { name: "Branco", hex: "#FFFFFF" },
    ],
    typography: [
      { family: "Nunito", weight: 300, role: "Corpo" },
      { family: "Nunito", weight: 800, role: "Títulos" },
      { family: "Fraunces", weight: 400, italic: true, role: "Lockups · Itálico / 600" },
    ],
    grammarNote: "UMA COR DE MARCA POR FRENTE; AZUL COMO TRONCO.",
    products: [
      product("Payroll Intelligence", "PAYROLL", "Resultado de payroll, realizado contra orçado, por unidade e diretoria.", "Desvio de orçamento é uma conversa, não um relatório.", ["Abre macro-contas até a conta", "Justificativas, ações e plano de ação por unidade", "Visão do CEO", "Relatório consolidado para o FP&A, exportável em PDF, Excel e PPTX"]),
      product("Payroll Academy", "CAPACITAÇÃO", "Treinamento facilitado para entender e apropriar o orçamento de payroll.", "Treinar substitui apresentar.", ["Modos facilitador e participante", "Navegação sequencial com checkpoints", "Quizzes e simuladores", "Progresso salvo"]),
      product("Bússola Chlorum", "REMUNERAÇÃO", "Decisões de remuneração, mérito, retenção e equidade com leitura de mercado.", "Remuneração justa se orienta; não se adivinha.", ["Posicionamento salarial contra mercado", "Alertas de retenção", "Equidade interna", "Apoio à decisão de mérito"]),
      product("BI Gente e Gestão", "INDICADORES", "O painel executivo de gente em sete áreas.", "Indicador bom faz a conversa começar no ponto certo.", ["Saúde Ocupacional, Remuneração, Produtividade, Diversidade e Inclusão e demais áreas", "Gráficos interativos e KPIs", "Acesso autenticado para liderança e time de gente"]),
      product("Pesagem de Cargos", "METODOLOGIA", "Modelo de pontos por fator para pesar cargos novos.", "Cargo se mede por fatores, não por opinião.", ["Avaliação por fatores calibrados", "Pontuação que se converte em enquadramento", "Benchmarking salarial"]),
      product("Workforce Planning", "DIMENSIONAMENTO", "Dimensionamento da força de trabalho e decisão de parceiro.", "Planejar gente é decidir com restrição.", ["Metodologia OBZ de dimensionamento", "Sistema de decisão que compara parceiros por metodologia, custo e governança", "Matriz comparativa, risco e recomendação"], { note: "Dados de propostas ficam fora da tela." }),
      product("Job Hub", "CARGOS", "Todas as descrições de cargo, com governança e lacunas visíveis.", "Cargo bem descrito é o começo de toda decisão de gente.", ["Dashboard de lacunas por headcount", "Busca e filtros", "Comparação de cargos semelhantes", "Evolução e governança das job descriptions por unidade"]),
      product("Calculadora de RV", "REMUNERAÇÃO VARIÁVEL", "Simulador executivo de pagamento variável do ciclo 2026–2028.", "Quem entende o gatilho decide melhor a meta.", ["Simula payout por EBITDA corporativo, metas individuais e avaliação comportamental", "Elegibilidade proporcional", "Gates cruzados de desempenho", "Cenários antes do fechamento anual"]),
      product("People Docs", "DOCUMENTOS", "Modelos padrão de remuneração, prontos para gerar.", "Padrão institucional se parece com cuidado.", ["Carta de mérito, offer letter, carta de promoção, enquadramento e adequação salarial", "Geração com os dados da pessoa", "Acesso autenticado"]),
      product("Org & Design", "ESTRUTURA", "O organograma navegável, do N0 ao N3.", "Estrutura que se consulta é estrutura que se cumpre.", ["Diretorias e unidades operacionais", "Navegação por níveis", "Atualização mensal por Gente e Remuneração"]),
      product("People Ops", "OPERAÇÃO", "Painel em tempo real das quatro áreas de operação de gente.", "Governança é entregar no prazo o que sustenta o resto.", ["Saúde Ocupacional, Benefícios, Sindical, Remuneração e Orçamento", "Oito unidades operacionais", "Acesso por papel", "Alertas por e-mail em D-1 e em atraso"]),
      product("Matriz Sindical", "RELAÇÕES SINDICAIS", "Convenções, acordos e prazos das unidades, com o que pede atenção primeiro.", "Prazo sindical perdido custa caro; visível, custa nada.", ["Mandatos, acordos coletivos e metas por unidade (Brasil e Uruguai)", "Alertas proativos", "Histórico de auditoria", "Visões por papel"]),
    ],
  },
];