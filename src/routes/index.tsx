import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { ContactForm } from "@/components/site/ContactForm";
import { FounderPortrait } from "@/components/site/FounderPortrait";
import { Chevron, Label, Reveal } from "@/components/site/primitives";
import { DigitalProducts } from "@/components/produtos/DigitalProducts";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "Arquê — Por princípio.";
const DESC = "Consultoria de estratégia, pessoas, marcas e negócios. Por princípio.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "Organization",
        name: "Arquê", legalName: "MBS DHO Ltda", founder: { "@type": "Person", name: "Marlon Silva" }, description: DESC,
      }),
    }],
  }),
  component: Index,
});

const praticas = [
  ["Estratégia", "Planejamento estratégico, governança, processos, gestão da mudança, indicadores, inovação e transformação."],
  ["Pessoas", "RH estratégico, cultura, liderança, remuneração, desenvolvimento organizacional, talentos e experiência do colaborador."],
  ["Marcas", "Branding, posicionamento, comunicação, experiência de marca, planejamento e gestão de marketing."],
  ["Negócios", "Estratégia comercial, desenvolvimento de negócios, estruturação de operações e performance."],
];
const metodo = [
  ["Compreender", "Investigar contexto, desafios, cultura, dados, stakeholders e oportunidades. Chegar ao princípio do problema."],
  ["Estruturar", "Integrar conhecimentos, perspectivas e competências para desenhar a solução e sua estrutura de decisão."],
  ["Transformar", "Liderar projetos, implementar decisões, mobilizar recursos e acompanhar marcos de entrega."],
  ["Sustentar", "Monitorar indicadores, desenvolver capacidades internas e apoiar a evolução contínua."],
];
const como = [
  ["Integração multidisciplinar", "Estratégia, pessoas, marcas e negócios na mesma mesa."],
  ["Senioridade na interlocução", "Quem conduz a conversa é quem conduz o trabalho."],
  ["Atuação próxima da liderança", "Decisões tomadas junto de quem responde por elas."],
  ["Método com indicadores", "Cada etapa tem marcos claros e medidas acompanhadas."],
  ["Equilíbrio entre cultura, marca e performance", "Resultados que preservam a identidade da organização."],
];

function Index() {
  return (
    <>
      <a href="#conteudo" className="label-mono sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ultramar focus:p-3 focus:text-branco">
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo">
        {/* Hero */}
        <section aria-labelledby="hero-title" className="bg-surface">
          <div className="container-x grid-12 gap-y-12 py-16 lg:py-24">
            <Reveal className="col-span-12 flex flex-col justify-center lg:col-span-7">
              <Label>Estratégia · Pessoas · Marcas · Negócios</Label>
              <h1 id="hero-title" className="display-xl mt-8 text-ink">Por princípio.</h1>
              <p className="body-l measure mt-8 text-ink-muted">
                Consultoria de estratégia, pessoas, marcas e negócios. Atuamos junto às lideranças, do princípio à estrutura e da estrutura aos resultados.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <a href="#contato" className="btn-primary label-mono">Conversar <Chevron rotate={90} /></a>
                <a href="#metodo" className="label-mono inline-flex min-h-11 items-center gap-2 text-brand underline-offset-4 hover:underline">
                  Conhecer o método <Chevron rotate={90} />
                </a>
              </div>
            </Reveal>
            <div className="col-span-12 -mr-[clamp(20px,5vw,80px)] h-[200px] lg:col-span-5 lg:h-auto lg:min-h-[320px] min-[1440px]:mr-[calc((1280px-100vw)/2)]">
              <svg viewBox="0 0 480 320" preserveAspectRatio="xMaxYMid slice" aria-hidden="true" className="block h-full w-full">
                <defs><clipPath id="slab"><rect x="0" y="0" width="224" height="320" /></clipPath></defs>
                <rect fill="var(--ultramar)" x="0" y="0" width="224" height="320" />
                <rect fill="var(--carvao)" x="224" y="0" width="256" height="160" />
                <rect fill="var(--ultramar-claro)" x="224" y="160" width="128" height="96" />
                <rect fill="var(--marfim)" x="352" y="160" width="128" height="160" />
                <rect fill="var(--grafite)" x="224" y="256" width="128" height="64" />
                <polyline clipPath="url(#slab)" points="-40,248 112,96 264,248" fill="none" stroke="var(--branco)" strokeWidth="72" strokeLinejoin="miter" strokeMiterlimit="10" />
              </svg>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <section aria-labelledby="manifesto-title" className="section-dark">
          <div className="container-x grid-12 gap-y-8 py-24 lg:py-32">
            <div className="col-span-12 lg:col-span-4"><Label className="text-ultramar-claro">01 Manifesto</Label></div>
            <Reveal className="col-span-12 lg:col-span-8">
              <h2 id="manifesto-title" className="display-l text-concreto">Tudo o que se sustenta começa por um princípio.</h2>
              <div className="body-l measure mt-12 space-y-6 text-nevoa">
                <p>Antes de uma estratégia, existe uma pergunta. Antes de uma marca, uma convicção. Antes de uma equipe, uma razão para estar junta.</p>
                <p>Não acreditamos em soluções prontas para realidades complexas. Acreditamos em começar pelo que vem primeiro, e em dar a isso forma: método, estrutura, responsabilidade.</p>
                <p>Pensamos com profundidade. Construímos com método. Executamos até o fim.</p>
                <p>Porque transformar não é imaginar o futuro. É dar a ele uma fundação.</p>
              </div>
              <Label className="mt-12 text-ultramar-claro">Arquê. Por princípio.</Label>
            </Reveal>
          </div>
        </section>

        {/* Práticas */}
        <section id="praticas" aria-labelledby="praticas-title" className="bg-surface">
          <div className="container-x py-24 lg:py-32">
            <Reveal>
              <Label>02 Práticas</Label>
              <h2 id="praticas-title" className="h1-style mt-6 max-w-[18ch] text-ink">Quatro práticas. Uma visão integrada.</h2>
              <p className="body-l measure mt-6 text-ink-muted">Um mesmo contrato pode combinar práticas. A integração é o ponto.</p>
            </Reveal>
            <ul className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {praticas.map(([t, d], i) => (
                <li key={t} className="border-t-2 border-carvao pt-6 transition-colors hover:border-ultramar">
                  <p className="label-mono text-brand">0{i + 1}</p>
                  <h3 className="h3-style mt-6 text-ink">{t}</h3>
                  <p className="mt-3 text-ink-muted">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Método */}
        <section id="metodo" aria-labelledby="metodo-title" className="bg-surface-alt">
          <div className="container-x py-24 lg:py-32">
            <Reveal>
              <Label>03 Método</Label>
              <h2 id="metodo-title" className="display-l mt-6 text-ink">
                <span className="lg:block">Compreender. </span><span className="lg:block">Estruturar. </span>
                <span className="lg:block">Transformar. </span><span className="lg:block">Sustentar.</span>
              </h2>
            </Reveal>
            <ol className="relative mt-20 grid grid-cols-1 gap-12 border-l border-carvao pl-8 lg:grid-cols-4 lg:gap-6 lg:border-l-0 lg:border-t lg:pl-0">
              {metodo.map(([t, d], i) => (
                <li key={t} className="relative lg:pt-10">
                  <span className="absolute -left-[41px] top-1 bg-surface-alt text-brand lg:left-0 lg:-top-[9px] lg:px-0">
                    <Chevron size={16} />
                  </span>
                  <p className="label-mono text-ink-muted">0{i + 1}</p>
                  <h3 className="h3-style mt-4 text-ink">{t}</h3>
                  <p className="mt-3 text-ink-muted">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Como trabalhamos */}
        <section aria-labelledby="como-title" className="bg-surface">
          <div className="container-x grid-12 gap-y-12 py-24 lg:py-32">
            <Reveal className="col-span-12 lg:col-span-6">
              <Label>04 Como trabalhamos</Label>
              <h2 id="como-title" className="h1-style mt-6 text-ink">Estratégia com responsabilidade de execução.</h2>
              <p className="body-l measure mt-6 text-ink-muted">
                Não nos limitamos a diagnósticos, apresentações ou recomendações desconectadas da operação. Assumimos a liderança de frentes e projetos e construímos relações contínuas com nossos clientes.
              </p>
            </Reveal>
            <ul className="col-span-12 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:col-span-12">
              {como.map(([t, d]) => (
                <li key={t} className="flex gap-4 border-t border-rule py-6">
                  <Chevron rotate={90} className="mt-2 shrink-0 text-brand" />
                  <div>
                    <h3 className="h3-style text-ink">{t}</h3>
                    <p className="mt-2 text-ink-muted">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <DigitalProducts />

        {/* Fundador */}
        <section id="fundador" aria-labelledby="fundador-title" className="bg-surface-alt">
          <div className="container-x grid-12 gap-y-12 py-24 lg:py-32">
            <div className="col-span-12 sm:col-span-8 lg:col-span-5"><FounderPortrait /></div>
            <Reveal className="col-span-12 flex flex-col justify-end lg:col-span-6 lg:col-start-7">
              <Label>06 Fundador</Label>
              <h2 id="fundador-title" className="h1-style mt-6 text-ink">Marlon Silva</h2>
              <p className="body-l measure mt-6 text-ink-muted">
                Mais de 20 anos em recursos humanos, cultura e transformação organizacional. Atua na interseção entre pessoas, estratégia, design organizacional e marca, construindo a infraestrutura institucional que sustenta o crescimento das organizações.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" aria-labelledby="contato-title" className="section-brand">
          <div className="container-x grid-12 gap-y-12 py-24 lg:py-32">
            <Reveal className="col-span-12 lg:col-span-6">
              <Label className="text-marfim">07 Contato</Label>
              <h2 id="contato-title" className="display-l mt-6 text-branco">Vamos começar pelo princípio.</h2>
              <p className="measure mt-6 text-ultramar-tint">Conte o desafio em poucas linhas. Respondemos por e-mail.</p>
            </Reveal>
            <div className="relative col-span-12 lg:col-span-5 lg:col-start-8"><ContactForm /></div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
