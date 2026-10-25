import { suites } from "@/data/produtos";
import { Button } from "@/components/ui/button";
import { Chevron } from "@/components/site/primitives";
import { ProductSuite } from "./ProductSuite";

export function DigitalProducts() {
  return <section id="produtos" aria-labelledby="produtos-title" className="section-dark">
    <div className="container-x py-24 lg:py-32">
      <p className="label-mono text-ultramar-claro">05 Produtos digitais</p>
      <h2 id="produtos-title" className="display-l mt-6 max-w-[22ch] text-concreto">Vinte e quatro produtos. Duas gramáticas. Uma autoria.</h2>
      <p className="body-l measure mt-8 text-nevoa">Cada empresa fala uma língua. Construímos, com IA, os sistemas que fazem essa língua funcionar, e deixamos que cada um fale a sua. O método é o que não muda.</p>
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
  </section>;
}