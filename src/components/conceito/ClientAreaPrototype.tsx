import { useEffect, useRef, useState } from "react";
import { ArqueWordmark } from "@/components/ArqueWordmark";
import { Button } from "@/components/ui/button";
import { conceptProjects, filterConceptDocuments, phases, type ConceptScreen, type DocumentFilter } from "@/data/area-do-cliente";

const tabs: { screen: ConceptScreen; label: string }[] = [
  { screen: "home", label: "Início" }, { screen: "detalhe", label: "Projeto" },
  { screen: "docs", label: "Documentos" }, { screen: "perfil", label: "Conta" },
];
const shortcuts: { screen: ConceptScreen; label: string }[] = [{ screen: "capa", label: "Capa" }, ...tabs.slice(0, 3)];

export function ClientAreaPrototype() {
  const [screen, setScreen] = useState<ConceptScreen>("capa");
  const [projectIndex, setProjectIndex] = useState(0);
  const [filter, setFilter] = useState<DocumentFilter>("Todos");
  const [scale, setScale] = useState(1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const project = conceptProjects[projectIndex] ?? conceptProjects[0];

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;
    const update = () => setScale(Math.min(1, element.clientWidth / 390));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => { contentRef.current?.scrollTo?.({ top: 0 }); }, [screen, projectIndex]);

  return (
    <div className="client-concept-layout">
      <div ref={wrapperRef} className="client-phone-space" style={{ height: 844 * scale }}>
        <div className={`client-phone ${screen === "capa" ? "client-phone-cover" : ""}`} style={{ transform: `scale(${scale})` }} role="region" aria-label="Protótipo de celular · Área do cliente">
          <div className="client-status" aria-hidden="true"><span>9:41</span><span>5G ▮▮▮</span></div>
          {screen === "capa" ? (
            <Button variant="ghost" className="client-cover" aria-label="Entrar no protótipo da área do cliente" onClick={() => setScreen("home")}>
              <ArqueWordmark className="client-cover-wordmark" />
              <div className="client-cover-middle">
                <p className="client-label text-ultramar-claro">Protótipo · Conceito</p>
                <h2>Por princípio.</h2>
                <p className="client-cover-description">Acompanhe fases, entregas e documentos dos seus projetos com a Arquê.</p>
              </div>
              <p className="client-cover-footer client-label">Estratégia · Pessoas · Marcas · Negócios</p>
            </Button>
          ) : (
            <>
              <div ref={contentRef} className="client-content" key={screen}>
                {screen === "home" && (
                  <>
                    <ArqueWordmark className="client-small-wordmark" />
                    <p className="client-label mt-7 text-grafite">Olá, Helena · Empresa Exemplo Logística</p>
                    <h2 className="client-title mt-4">2 projetos em andamento.</h2>
                    <div className="client-projects mt-7">
                      {conceptProjects.map((item, index) => (
                        <Button variant="ghost" className="client-project" key={item.number} aria-label={`Abrir projeto ${item.number}: ${item.name}`} onClick={() => { setProjectIndex(index); setScreen("detalhe"); }}>
                          <div className="flex w-full items-center justify-between gap-3"><span className="client-label">{item.number} · {item.phase}</span><span className="client-label text-brand">{item.progress}%</span></div>
                          <h3>{item.name}</h3>
                          <p className="client-project-description">{item.description}</p>
                          <div className="client-progress" role="progressbar" aria-label={`Progresso de ${item.name}`} aria-valuenow={item.progress} aria-valuemin={0} aria-valuemax={100}><span className={item.progress === 45 ? "w-[45%]" : "w-[70%]"} /></div>
                          <p className="client-label text-grafite">Próxima entrega · {item.nextDelivery}</p>
                        </Button>
                      ))}
                    </div>
                  </>
                )}
                {screen === "detalhe" && (
                  <>
                    <Button variant="ghost" className="client-back client-label" onClick={() => setScreen("home")}>← Projetos</Button>
                    <p className="client-label mt-6 text-grafite">{project.number} · {project.phase}</p>
                    <h2 className="client-title client-detail-title mt-4">{project.name}</h2>
                    <div className="client-phases mt-7" aria-label={`Fase atual: ${project.phase}`}>
                      {phases.map((phase, index) => <div key={phase} className={index <= phases.findIndex((p) => p === project.phase) ? "client-phase-current" : "client-phase-future"}><div /><p>{phase}</p></div>)}
                    </div>
                    <section className="client-list-section mt-9" aria-label="Entregas">
                      <h3 className="client-label">Entregas</h3>
                      <ul>{project.deliveries.map((delivery) => <li className="client-delivery" key={delivery.title}><span>{delivery.title}</span><span className={`client-label ${delivery.status === "Em revisão" ? "text-brand" : delivery.status === "Pendente" ? "text-grafite" : "text-carvao"}`}>{delivery.status}</span></li>)}</ul>
                    </section>
                    <section className="client-list-section mt-8" aria-label="Próximos passos">
                      <h3 className="client-label">Próximos passos</h3>
                      <ol>{project.steps.map((step, index) => <li className="client-step" key={step.title}><span className="client-label text-brand">0{index + 1}</span><div><h4>{step.title}</h4><p>{step.detail}</p></div></li>)}</ol>
                    </section>
                  </>
                )}
                {screen === "docs" && (
                  <>
                    <p className="client-label text-grafite">Empresa Exemplo Logística</p>
                    <h2 className="client-title mt-4">Documentos.</h2>
                    <div className="client-filters mt-6" role="group" aria-label="Filtrar documentos">{(["Todos", "Contratos", "Relatórios"] as const).map((value) => <Button variant="ghost" className={`client-filter client-label ${value === filter ? "client-filter-active" : ""}`} key={value} aria-pressed={value === filter} onClick={() => setFilter(value)}>{value}</Button>)}</div>
                    <ul className="client-documents mt-7" aria-label="Documentos fictícios">{filterConceptDocuments(filter).map((doc) => <li key={doc.title}><div><h3>{doc.title}</h3><p className="client-label text-grafite">{doc.type} · {doc.date} · {doc.size}</p></div><Button variant="ghost" className="client-download client-label" aria-disabled="true" aria-label={`Baixar ${doc.title} (indisponível no conceito)`}>Baixar</Button></li>)}</ul>
                  </>
                )}
                {screen === "perfil" && (
                  <>
                    <p className="client-label text-grafite">Conta</p>
                    <h2 className="client-title mt-4">Helena Prado.</h2>
                    <ul className="client-account mt-7"><li>Diretora de Operações · Empresa Exemplo Logística</li><li>helena@exemplo.com.br</li><li>Consultor responsável: Consultor Arquê</li></ul>
                  </>
                )}
                <p className="client-fiction client-label">Dados 100% fictícios · Conceito</p>
              </div>
              <nav className="client-bottom-nav" aria-label="Navegação do protótipo">{tabs.map((tab) => <Button variant="ghost" className={`client-tab client-label ${screen === tab.screen ? "client-tab-active" : ""}`} key={tab.screen} aria-current={screen === tab.screen ? "page" : undefined} onClick={() => setScreen(tab.screen)}>{tab.label}</Button>)}</nav>
            </>
          )}
        </div>
      </div>
      <aside className="client-shortcuts" aria-label="Atalhos do protótipo">
        <p className="label-mono text-ink-muted">Conceito · Navegação</p>
        <div className="mt-6 flex flex-wrap gap-3">{shortcuts.map((shortcut) => <Button variant="ghost" className="client-shortcut label-mono" key={shortcut.screen} aria-pressed={screen === shortcut.screen} onClick={() => setScreen(shortcut.screen)}>{shortcut.label}</Button>)}</div>
        <p className="mt-8 max-w-[32ch] text-sm text-ink-muted">Dados 100% fictícios. Este conceito não oferece acesso a projetos reais nem download de arquivos.</p>
      </aside>
    </div>
  );
}