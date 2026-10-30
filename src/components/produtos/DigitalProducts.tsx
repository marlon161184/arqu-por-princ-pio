import { useState } from "react";
import { clientes } from "@/data/clientes";
import { frentes } from "@/data/produtosPorFrente";
import { Button } from "@/components/ui/button";
import { Chevron } from "@/components/site/primitives";

export function DigitalProducts() {
  const [frenteAberta, setFrenteAberta] = useState<number | null>(0);
  return <section id="produtos" aria-labelledby="produtos-title">
    <div className="bg-surface-alt">
      <div className="container-x py-24 lg:py-32">
        <p className="label-mono text-ink-muted">05 Produtos</p>
        <p className="measure mt-4 text-ink-muted">Produto é o que entregamos como consultoria, por frente. Produto digital é o sistema que construímos.</p>
        <p className="label-mono mt-16 text-brand">05.1 Por frente</p>
        <h2 id="produtos-title" className="h1-style mt-6 max-w-[22ch] text-ink">O que contratar, frente a frente.</h2>
        <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-muted"><span className="product-digital-badge">Digital</span><span>sistema que segue evoluindo com você</span></p>
        <div className="products-menu mt-16">
          {frentes.map((frente, frenteIndex) => <div key={frente.name} className="products-front min-w-0 border-t-2 border-carvao">
            <h3 className="products-front-heading">
              <span className="h3-style hidden text-ink lg:block">{frente.name}</span>
              <Button variant="ghost" className="products-front-toggle lg:hidden" aria-expanded={frenteAberta === frenteIndex} aria-controls={`produtos-frente-${frenteIndex}`} onClick={() => setFrenteAberta(frenteAberta === frenteIndex ? null : frenteIndex)}>
                <span className="h3-style">{frente.name}</span><span className="product-indicator" aria-hidden="true">{frenteAberta === frenteIndex ? "−" : "+"}</span>
              </Button>
            </h3>
            <ul id={`produtos-frente-${frenteIndex}`} className={frenteAberta === frenteIndex ? "contents" : "hidden lg:contents"} aria-label={`Produtos de ${frente.name}`}>
              {frente.produtos.map((p, produtoIndex) => <li key={p.name} className="min-w-0 border-t border-rule">
                <details className="product-entry">
                  <summary className="product-summary">
                    <span className="product-number text-ink-muted" aria-hidden="true">{frenteIndex + 1}.{produtoIndex + 1}</span>
                    <span className="product-name text-ink">{p.name}</span>
                    {p.digital && <span className="product-digital-badge">Digital</span>}
                    <span className="product-indicator product-entry-indicator text-ink-muted" aria-hidden="true" />
                  </summary>
                  <p className="product-description text-ink-muted">{p.descricao}</p>
                </details>
              </li>)}
            </ul>
          </div>)}
        </div>
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
          <p>Depois da entrega, o sistema continua. Versões, ajustes e novas funções acompanham a empresa, e os dados e a documentação são sempre do cliente.</p>
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
