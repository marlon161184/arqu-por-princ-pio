import { MET, type Frente } from "@/data/produtos";

export function FrentePasta({ frente, index, onProduto }: { frente: Frente; index: number; onProduto: (num: string) => void }) {
  return <div>
    <p className="label-mono text-brand">05.1 · Frente {index + 1} · {frente.name}</p>
    <h3 id="pasta-title" tabIndex={-1} className="h1-style mt-6 text-ink outline-none">{frente.titulo}</h3>
    <p className="body-l mt-6 text-ink-muted">{frente.lead}</p>
    <h4 className="label-mono mt-12 text-ink">Quando procurar</h4>
    <p className="mt-3 text-ink-muted">{frente.quando}</p>
    <h4 className="label-mono mt-12 text-ink">Como o método se aplica</h4>
    <dl className="mt-3">{MET.map((m, i) => <div key={m} className="grid grid-cols-[120px_1fr] gap-4 border-t border-rule py-3">
      <dt className="text-sm font-semibold text-ink">{m}</dt><dd className="text-sm text-ink-muted">{frente.met[i]}</dd></div>)}</dl>
    <h4 className="label-mono mt-12 text-ink">Resultado esperado</h4>
    <p className="mt-3 text-ink-muted">{frente.resultado}</p>
    <h4 className="label-mono mt-12 text-ink">Cinco produtos</h4>
    <ul className="mt-3" aria-label={`Produtos de ${frente.name}`}>{frente.produtos.map((p) => {
      const body = <><span className="label-mono text-ink-muted">{p.num}</span><span className="min-w-0"><span className="block font-semibold text-ink">{p.name}</span><span className="mt-1 block text-sm text-ink-muted">{p.descricao}</span></span>{p.digital && <span className="chip-digital">Digital</span>}</>;
      return <li key={p.num} className="border-t border-rule">{p.digital
        ? <button type="button" className="pasta-produto pasta-produto-link" onClick={() => onProduto(p.num)}>{body}</button>
        : <div className="pasta-produto">{body}</div>}</li>;
    })}</ul>
  </div>;
}
