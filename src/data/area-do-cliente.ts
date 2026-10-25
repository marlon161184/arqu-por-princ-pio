export type ConceptScreen = "capa" | "home" | "detalhe" | "docs" | "perfil";
export type DocumentFilter = "Todos" | "Contratos" | "Relatórios";
export const phases = ["Início", "Diagnóstico", "Desenho", "Entrega"] as const;

export const conceptProjects = [
  {
    number: "01", name: "Estratégia de expansão regional", phase: "Diagnóstico", progress: 45,
    description: "Mapeamento de mercado e modelo de atuação nas regiões Sul e Centro-Oeste.", nextDelivery: "12 nov",
    deliveries: [
      { title: "Relatório de mercado", status: "Entregue" },
      { title: "Entrevistas com liderança", status: "Entregue" },
      { title: "Mapa de capacidades", status: "Em revisão" },
      { title: "Modelo de atuação", status: "Pendente" },
    ],
    steps: [
      { title: "Validar o mapa de capacidades", detail: "Reunião com a diretoria · 05 nov" },
      { title: "Fechar escopo do desenho", detail: "Aprovação do cliente · 12 nov" },
      { title: "Iniciar oficina de desenho", detail: "Equipe Arquê e gestores · 19 nov" },
    ],
  },
  {
    number: "02", name: "Cultura e lideranças", phase: "Desenho", progress: 70,
    description: "Programa de desenvolvimento para 24 gestores, com trilhas e acompanhamento.", nextDelivery: "08 nov",
    deliveries: [
      { title: "Pesquisa de clima", status: "Entregue" },
      { title: "Perfil de liderança", status: "Entregue" },
      { title: "Trilhas de desenvolvimento", status: "Em revisão" },
      { title: "Guia do gestor", status: "Pendente" },
    ],
    steps: [
      { title: "Aprovar trilhas de desenvolvimento", detail: "Retorno do RH · 08 nov" },
      { title: "Agendar turmas", detail: "Calendário com 24 gestores · 15 nov" },
      { title: "Redigir guia do gestor", detail: "Equipe Arquê · 29 nov" },
    ],
  },
] as const;

export const conceptDocuments = [
  { title: "Proposta de atuação", type: "PDF", date: "03 set", size: "1,2 MB", category: "Contratos" },
  { title: "Contrato de prestação de serviços", type: "PDF", date: "12 set", size: "420 KB", category: "Contratos" },
  { title: "Relatório de mercado", type: "PDF", date: "14 out", size: "3,8 MB", category: "Relatórios" },
  { title: "Roteiro das entrevistas", type: "DOCX", date: "21 out", size: "86 KB", category: "Relatórios" },
  { title: "Pesquisa de clima · resultados", type: "PDF", date: "24 out", size: "2,1 MB", category: "Relatórios" },
  { title: "Nota fiscal · outubro", type: "PDF", date: "25 out", size: "64 KB", category: "Contratos" },
] as const;

export function filterConceptDocuments(filter: DocumentFilter) {
  return conceptDocuments.filter((doc) => filter === "Todos" || doc.category === filter);
}