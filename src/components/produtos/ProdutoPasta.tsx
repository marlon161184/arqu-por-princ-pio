import { comoEntregue, type ProdutoDigital } from "@/data/produtos";
import { Chevron } from "@/components/site/primitives";

export function ProdutoPasta({ produto, onVoltar, onVerEmUso }: { produto: ProdutoDigital; onVoltar?: () => void; onVerEmUso: () => void }) {
  return <div>
    {onVoltar && <button type="button" className="pasta-close label-mono mb-8" onClick={onVoltar}>Voltar para a frente</button>}
    <p className="label-mono text-brand">{produto.num} · {produto.name} <span className="chip-digital ml-2 align-middle">Digital</span></p>
    <h3 id="pasta-title" tabIndex={-1} className="h1-style mt-6 text-ink outline-none">{produto.titulo}</h3>
    <p className="body-l mt-6 text-ink-muted">{produto.descricao}</p>
    <dl className="mt-12 grid gap-6 sm:grid-cols-2">
      <div><dt className="label-mono text-ink">Para quem</dt><dd className="mt-3 text-ink-muted">{produto.paraQuem}</dd></div>
      <div><dt className="label-mono text-ink">No lugar de</dt><dd className="mt-3 text-ink-muted">{produto.noLugarDe}</dd></div>
    </dl>
    <h4 className="label-mono mt-12 text-ink">Como é entregue</h4>
    <ul className="mt-3" aria-label="Como é entregue">{comoEntregue(produto).map((e) => <li key={e} className="flex items-start gap-3 border-t border-rule py-3 text-ink-muted"><Chevron rotate={90} className="mt-2 shrink-0 text-brand" />{e}</li>)}</ul>
    <a href="#contato" className="portfolio-cta mt-12 inline-flex items-center" onClick={onVerEmUso}>Ver em uso</a>
  </div>;
}
