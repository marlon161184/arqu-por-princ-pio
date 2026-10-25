import { Button } from "@/components/ui/button";
import { Chevron } from "@/components/site/primitives";
import type { Product, Suite } from "@/data/produtos";
import { ProductName } from "./TypeSpecimen";

export function ProductRow({ product, suiteId, index, open, onToggle }: {
  product: Product; suiteId: Suite["id"]; index: number; open: boolean; onToggle: () => void;
}) {
  const id = `${suiteId}-product-${index + 1}`;
  return <li className={`product-row ${open ? "product-row-open" : ""}`}>
    <Button variant="product" id={`${id}-trigger`} aria-label={product.name} aria-expanded={open} aria-controls={`${id}-panel`} onClick={onToggle}>
      <span className="label-mono product-number">{String(index + 1).padStart(2, "0")}</span>
      <span className="product-name text-concreto"><ProductName product={product} suiteId={suiteId} /></span>
      <span className="product-category label-mono text-nevoa">{product.category}</span>
      <span className="product-summary measure text-nevoa">{product.summary}</span>
      <span className="product-toggle text-ultramar-claro" aria-hidden="true">{open ? "−" : "+"}</span>
    </Button>
    <div id={`${id}-panel`} role="region" aria-labelledby={`${id}-trigger`} hidden={!open} className="product-panel">
      <div>
        <p className="label-mono text-ultramar-claro">Conceito</p>
        <p className="product-concept mt-5 text-concreto">“{product.concept}”</p>
      </div>
      <div>
        <p className="label-mono text-ultramar-claro">Função</p>
        <ul className="mt-5 space-y-3">{product.functions.map((item) => <li key={item} className="flex gap-3 text-nevoa"><Chevron rotate={90} className="mt-2 shrink-0 text-ultramar-claro" /><span>{item}</span></li>)}</ul>
        {product.note && <p className="mt-6 text-nevoa">{product.note}</p>}
      </div>
    </div>
  </li>;
}