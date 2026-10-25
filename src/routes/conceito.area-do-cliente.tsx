import { createFileRoute, Link } from "@tanstack/react-router";
import { ArqueWordmark } from "@/components/ArqueWordmark";
import { Chevron, Reveal } from "@/components/site/primitives";
import { ClientAreaPrototype } from "@/components/conceito/ClientAreaPrototype";
import "@/components/conceito/client-area.css";

const TITLE = "Área do cliente — conceito | Arquê";
const DESC = "Protótipo conceitual de um app para o cliente acompanhar fases, entregas e documentos dos projetos com a Arquê.";

export const Route = createFileRoute("/conceito/area-do-cliente")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/conceito/area-do-cliente" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/conceito/area-do-cliente" }],
  }),
  component: ClientConceptPage,
});

function ClientConceptPage() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-rule bg-surface">
        <div className="container-x flex h-[72px] items-center justify-between">
          <Link to="/" className="flex min-h-11 items-center text-carvao [--wm-accent:var(--ultramar)]" aria-label="Arquê · Voltar ao site"><ArqueWordmark className="h-[22px] w-auto" /></Link>
          <Link to="/" className="label-mono inline-flex min-h-11 items-center gap-2 text-brand"><Chevron rotate={270} /> Voltar ao site</Link>
        </div>
      </header>
      <main>
        <section className="bg-surface">
          <div className="container-x py-16 lg:py-24">
            <Reveal>
              <p className="label-mono text-ink-muted">Conceito · Protótipo</p>
              <h1 className="display-l mt-8 text-ink">Área do cliente.</h1>
              <p className="body-l measure mt-8 text-ink-muted">Um protótipo de como a Arquê poderia dar ao cliente uma visão clara de cada projeto: fases, entregas, próximos passos e documentos em um só lugar. É um conceito de design, não um produto disponível. Toque no celular para navegar.</p>
            </Reveal>
          </div>
        </section>
        <section className="border-y border-rule bg-surface-alt" aria-label="Protótipo clicável da área do cliente">
          <div className="container-x py-16 lg:py-24">
            <ClientAreaPrototype />
            <div className="mt-16 flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2 border-t border-rule pt-8">
              <p className="text-ink-muted">Quer algo assim para o seu projeto?</p>
              <Link to="/" hash="contato" className="label-mono inline-flex min-h-11 items-center gap-2 text-brand underline-offset-4 hover:underline">Conversar com a Arquê <Chevron rotate={90} /></Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="section-dark">
        <div className="container-x py-16">
          <span className="text-branco [--wm-accent:var(--ultramar-claro)]"><ArqueWordmark className="h-7 w-auto" /></span>
          <div className="mt-12 flex flex-col gap-4 border-t border-linha-escura pt-6 sm:flex-row sm:justify-between">
            <p className="label-mono text-nevoa">Conceito · Área do cliente · 25.10.2026</p>
            <p className="label-mono text-branco">Por princípio.</p>
          </div>
        </div>
      </footer>
    </>
  );
}