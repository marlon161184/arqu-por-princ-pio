import neweLogo from "@/assets/newe-logo-negativo.png.asset.json";
import { frentes } from "@/data/produtosPorFrente";
import { Button } from "@/components/ui/button";
import { Chevron } from "@/components/site/primitives";

export function DigitalProducts() {
  return <section id="produtos" aria-labelledby="produtos-title">
    <div className="bg-surface-alt">
      <div className="container-x py-24 lg:py-32">
        <p className="label-mono text-ink-muted">05 Produtos</p>
        <p className="measure mt-4 text-ink-muted">Produto é o que entregamos como consultoria, por frente. Produto digital é o sistema que construímos.</p>
        <p className="label-mono mt-16 text-brand">05.1 Por frente</p>
        <h2 id="produtos-title" className="h1-style mt-6 max-w-[22ch] text-ink">O que contratar, frente a frente.</h2>
        <ul className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {frentes.map((frente) => <li key={frente.name} className="border-t-2 border-carvao pt-6">
            <h3 className="h3-style text-ink">{frente.name}</h3>
            <ul className="mt-6 space-y-5" aria-label={`Produtos de ${frente.name}`}>
              {frente.produtos.map((p) => <li key={p.name} className="min-w-0">
                <p className="text-ink">{p.name}</p>
              </li>)}
            </ul>
          </li>)}
        </ul>
      </div>
    </div>
    <div id="ia-inovacao" className="section-dark" aria-labelledby="ia-inovacao-title" role="region">
      <div className="container-x py-24 lg:py-32">
        <p className="label-mono text-ultramar-claro">05.2 IA &amp; Inovação</p>
        <h2 id="ia-inovacao-title" className="display-l mt-6 max-w-[22ch] text-concreto">Iniciativas que viram sistema.</h2>
        <div className="body-l measure mt-8 space-y-6 text-nevoa">
          <p>Estratégia, cultura e governança costumam parar no documento. Nós as levamos até a tela que alguém usa na segunda-feira.</p>
          <p>Arquitetamos, com IA e ferramentas no-code, sistemas de gestão, governança e people analytics. Não são vitrines de tecnologia. São iniciativas, governanças e movimentos que ganharam forma operacional.</p>
          <p>Como cada sistema nasce: parte de um problema de gestão, passa pelo método e termina em um sistema em uso.</p>
        </div>
        <section aria-labelledby="clientes-title" className="my-16">
          <p className="label-mono text-ultramar-claro">05.3 Clientes</p>
          <h3 id="clientes-title" className="h3-style mt-6 text-concreto">Quem constrói conosco.</h3>
          <div className="mt-8 grid grid-cols-1 border-t border-linha-escura sm:grid-cols-2">
            <div className="flex min-h-40 min-w-0 items-center border border-linha-escura px-8 py-10">
              <img src={neweLogo.url} alt="Newe Urbanismo" className="h-16 w-auto max-w-full object-contain object-left sm:h-20" loading="lazy" decoding="async" />
            </div>
            {/* TODO: logo Hyndra */}
          </div>
        </section>
        <div className="grid-12 gap-y-8 border-t border-linha-escura pt-16">
          <h3 className="h1-style col-span-12 text-concreto lg:col-span-6">O seu sistema também pode falar a sua língua.</h3>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <p className="text-nevoa">Estratégia, pessoas e marca viram produto quando alguém assume a responsabilidade de construir. Contamos o desafio; devolvemos o sistema.</p>
            <Button asChild variant="portfolioCta" className="mt-8"><a href="#contato">Conversar sobre um produto <Chevron rotate={90} /></a></Button>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
