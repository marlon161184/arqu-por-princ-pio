import { clientes } from "@/data/clientes";
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
          <h3 id="clientes-title" className="h3-style mt-6 text-white">Quem constrói conosco.</h3>
          <div className="mt-8">
            {clientes.map((grupo) => <div key={grupo.id} className="grid-12 gap-y-8 border-t border-linha-escura py-10 lg:py-12" data-cliente-grupo={grupo.id}>
              <div className="col-span-12 flex min-w-0 flex-col items-start gap-8 lg:col-span-4">
                {grupo.logos.map((logo) => <img key={logo.alt} src={logo.src} alt={logo.alt} height={logo.height} className={`${logo.height === 72 ? "h-[72px]" : "h-[64px]"} w-auto max-w-full object-contain object-left`} loading="lazy" decoding="async" />)}
              </div>
              <dl className="col-span-12 min-w-0 lg:col-span-8">
                {grupo.itens.map((item) => <div key={item.nome} className="border-b border-linha-escura py-5 first:pt-0">
                  <dt className="text-lg font-semibold text-white">{item.nome}</dt>
                  <dd className="mt-2 max-w-[60ch] text-white">{item.descricao}</dd>
                </div>)}
              </dl>
            </div>)}
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
