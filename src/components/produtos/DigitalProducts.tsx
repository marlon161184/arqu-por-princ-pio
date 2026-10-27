import { suites } from "@/data/produtos";
import { frentes } from "@/data/produtosPorFrente";
import { Button } from "@/components/ui/button";
import { Chevron } from "@/components/site/primitives";
import { ProductSuite } from "./ProductSuite";

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
                {p.digital && <a href="#ia-inovacao" className="label-mono mt-2 inline-flex min-h-6 items-center gap-2 text-brand underline-offset-4 hover:underline">
                  <Chevron size={10} /> Versão digital
                </a>}
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
          <p>Os vinte e quatro produtos a seguir foram arquitetados com IA e ferramentas no-code. São duas suítes, de duas empresas, com duas linguagens. A primeira organiza a gestão e a governança de um ecossistema de urbanismo e real estate. A segunda traduz people analytics em decisão. Não são vitrines de tecnologia. São iniciativas, governanças e movimentos que ganharam forma operacional.</p>
          <p>Como ler: cada produto parte de um problema de gestão, passa pelo método e termina em um sistema em uso.</p>
        </div>
        <h3 className="h3-style mt-16 max-w-[30ch] text-concreto">Vinte e quatro produtos. Duas gramáticas. Uma autoria.</h3>
        <p className="measure mt-6 text-nevoa">Cada empresa fala uma língua. Construímos, com IA, os sistemas que fazem essa língua funcionar, e deixamos que cada um fale a sua. O método é o que não muda.</p>
        <p className="label-mono mb-12 mt-12 border-t border-linha-escura pt-6 text-nevoa">24 PRODUTOS · 2 SUÍTES · 2 EMPRESAS · 1 MÉTODO</p>
        {suites.map((suite) => <ProductSuite key={suite.id} suite={suite} />)}
        <div className="grid-12 gap-y-8 border-t border-linha-escura pt-16">
          <h3 className="h1-style col-span-12 text-concreto lg:col-span-6">O seu sistema também pode falar a sua língua.</h3>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <p className="text-nevoa">Estratégia, pessoas e marca viram produto quando alguém assume a responsabilidade de construir. Contamos o desafio; devolvemos o sistema.</p>
            <Button asChild variant="portfolioCta" className="mt-8"><a href="#contato">Conversar sobre um produto <Chevron rotate={90} /></a></Button>
          </div>
        </div>
        <p className="label-mono mt-12 text-nevoa">TELAS ILUSTRATIVAS. DADOS, PROPOSTAS E PROGRAMAS INTERNOS NÃO SÃO EXIBIDOS.</p>
      </div>
    </div>
  </section>;
}
