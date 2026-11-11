import neweLogo from "@/assets/newe-logo-branco.png.asset.json";
import hyndraLogo from "@/assets/hyndra-logo-branco.png.asset.json";

type ClienteLogo = { src: string; alt: string; height: 72 | 64 };
export type ClienteItem = { num: string; nome: string; descricao: string };
export type ClienteGrupo = {
  id: string;
  nome: "Hyndra e Newe" | "Hyndra" | "Newe";
  logos: ClienteLogo[];
  itens: ClienteItem[];
};

const newe: ClienteLogo = { src: neweLogo.url, alt: "Newe Urbanismo", height: 72 };
const hyndra: ClienteLogo = { src: hyndraLogo.url, alt: "Hyndra Participações", height: 64 };

export const clientes: ClienteGrupo[] = [
  {
    id: "hyndra-e-newe",
    nome: "Hyndra e Newe",
    logos: [newe, hyndra],
    itens: [
      { num: "A.1", nome: "Nosso Jeito de Ser", descricao: "Plataforma que materializa o projeto de Cultura." },
      { num: "A.2", nome: "All Aboard", descricao: "Plataforma de oferta da experiência do novo colaborador no onboarding institucional." },
      { num: "A.3", nome: "PAR 2026", descricao: "Ambiente com desdobramento de metas e objetivos para os líderes elegíveis ao Bônus Executivo." },
      { num: "A.4", nome: "Decidir com Intenção", descricao: "Mesa digital que permite à companhia comparar propostas técnicas e comerciais de players candidatos nos processos de concorrência de produtos e serviços." },
      { num: "A.5", nome: "Ciclo de Gente", descricao: "Ambiente de avaliação de competências e performance, com ferramentas como 9box e gestão de PDI." },
      { num: "A.6", nome: "HynstaNewe", descricao: "Rede social interna com dados e conteúdos voltados para a identificação e a interação dos colaboradores da Hyndra e da Newe." },
      { num: "A.7", nome: "Habitar a Estrutura", descricao: "Organograma da Hyndra e da Newe com a estrutura organizacional do grupo." },
    ],
  },
  {
    id: "hyndra",
    nome: "Hyndra",
    logos: [hyndra],
    itens: [
      { num: "B.1", nome: "Hub Hyndra", descricao: "Repositório de instrumentos regulatórios, como políticas, processos, procedimentos e fluxogramas." },
    ],
  },
  {
    id: "newe",
    nome: "Newe",
    logos: [newe],
    itens: [
      { num: "C.1", nome: "Academia de Líderes Newe", descricao: "Hub com trilhas de formação focadas no desenvolvimento das lideranças." },
      { num: "C.2", nome: "Academia de Vendas", descricao: "Hub de formação para corretores parceiros e profissionais das áreas de Marketing e Comercial." },
      { num: "C.3", nome: "Branding", descricao: "Projeto de estratégia e posicionamento da marca Newe." },
      { num: "C.4", nome: "Marketing e Comercial", descricao: "Frentes de estratégia de comunicação, inteligência comercial e relacionamento pós-venda. Projeto contínuo que contempla a definição, a contratação e a implementação de CRM; a definição, por RFP, dos parceiros responsáveis por criativos, performance, dados e jornada da experiência do cliente, assim como do parceiro responsável por formatar o time comercial, criar e conceber o pitch comercial, realizar role plays, criar e implementar playbooks e estruturar a Comunidade de Clientes da Newe." },
    ],
  },
];