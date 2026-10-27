export type ProdutoFrente = { name: string; digital?: true };
export type Frente = { name: string; produtos: ProdutoFrente[] };

export const frentes: Frente[] = [
  { name: "Estratégia", produtos: [
    { name: "Planejamento estratégico e governança" },
    { name: "Escritório de transformação", digital: true },
    { name: "Processos e indicadores", digital: true },
    { name: "Gestão da mudança" },
  ] },
  { name: "Pessoas", produtos: [
    { name: "Cultura e proposta de valor ao colaborador", digital: true },
    { name: "Cargos, salários e remuneração estratégica", digital: true },
    { name: "Programa de liderança" },
    { name: "People analytics", digital: true },
  ] },
  { name: "Marcas", produtos: [
    { name: "Plataforma de marca e posicionamento" },
    { name: "Brandbook e design system", digital: true },
    { name: "Employer branding" },
    { name: "Plano de marketing e comunicação" },
  ] },
  { name: "Negócios", produtos: [
    { name: "Modelo e oferta" },
    { name: "Estratégia comercial e pipeline", digital: true },
    { name: "Estruturação de operação" },
    { name: "Painel de performance", digital: true },
  ] },
];
