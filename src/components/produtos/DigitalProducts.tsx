import { useState } from "react";
import { clientes } from "@/data/clientes";
import { frentes, produtoDigital } from "@/data/produtos";
import { FrentesStack } from "./FrentesStack";
import { FrentePasta } from "./FrentePasta";
import { DigitalIndex } from "./DigitalIndex";
import { ProdutoPasta } from "./ProdutoPasta";
import { PastaPanel } from "./PastaPanel";
import { ClientesIndex } from "./ClientesIndex";
import { ClientePasta } from "./ClientePasta";
import { Button } from "@/components/ui/button";
import { Chevron } from "@/components/site/primitives";

type Pasta = { tipo: "frente"; idx: number } | { tipo: "produto"; num: string; from?: number } | { tipo: "cliente"; grupoId: string; num: string };

export function DigitalProducts() {
  const [pasta, setPasta] = useState<Pasta | null>(null);
  const fechar = () => setPasta(null);
  const produto = pasta?.tipo === "produto" ? produtoDigital(pasta.num) : undefined;
  const frente = pasta?.tipo === "frente" ? frentes[pasta.idx] : undefined;
  const grupo = pasta?.tipo === "cliente" ? clientes.find((g) => g.id === pasta.grupoId) : undefined;
  const clienteItem = pasta?.tipo === "cliente" ? grupo?.itens.find((item) => item.num === pasta.num) : undefined;
  const from = pasta?.tipo === "produto" ? pasta.from : undefined;
  return <section id="produtos" aria-labelledby="produtos-title">
    {pasta && <PastaPanel titleId="pasta-title" onClose={fechar} variant={pasta.tipo === "cliente" ? "dark" : "light"}>
      {pasta.tipo === "frente" && frente && <FrentePasta key={`f${pasta.idx}`} frente={frente} index={pasta.idx} onProduto={(num) => setPasta({ tipo: "produto", num, from: pasta.idx })} />}
      {pasta.tipo === "produto" && produto && <ProdutoPasta key={produto.num} produto={produto} onVerEmUso={fechar} {...(from !== undefined ? { onVoltar: () => setPasta({ tipo: "frente", idx: from }) } : {})} />}
      {grupo && clienteItem && <ClientePasta grupo={grupo} item={clienteItem} onVerEmUso={fechar} />}
    </PastaPanel>}
    <div className="bg-surface-alt">
      <div className="container-x py-24 lg:py-32">
        <p className="label-mono text-ink-muted">05 Produtos</p>
        <p className="measure mt-4 text-ink-muted">Produto é o que entregamos como consultoria, por frente. Produto digital é o sistema que construímos.</p>
        <p className="label-mono mt-16 text-brand">05.1 Por frente</p>
        <h2 id="produtos-title" className="h1-style mt-6 max-w-[22ch] text-ink">O que contratar, frente a frente.</h2>
        <div className="mt-16"><FrentesStack paused={pasta !== null} onOpen={(i) => setPasta({ tipo: "frente", idx: i })} /></div>
      </div>
    </div>
    <div id="ia-inovacao" className="section-dark" aria-labelledby="ia-inovacao-title" role="region">
      <div className="container-x py-24 lg:py-32">
        <p className="label-mono text-ultramar-claro">05.2 IA &amp; Inovação</p>
        <h2 id="ia-inovacao-title" className="display-l mt-6 max-w-[22ch] text-concreto">Doze produtos digitais que continuam em uso.</h2>
        <p className="body-l measure mt-8 text-nevoa">Depois da entrega, o sistema continua. Versões, ajustes e novas funções acompanham a empresa, e os dados e a documentação são sempre do cliente.</p>
        <DigitalIndex onOpen={(num) => setPasta({ tipo: "produto", num })} />
        <section aria-labelledby="clientes-title" className="my-16">
          <p className="label-mono text-ultramar-claro">05.3 Clientes</p>
          <h3 id="clientes-title" className="h3-style mt-6 text-branco">Quem constrói conosco.</h3>
          <ClientesIndex onOpen={(grupo, item) => setPasta({ tipo: "cliente", grupoId: grupo.id, num: item.num })} />
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
