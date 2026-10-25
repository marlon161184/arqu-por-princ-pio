import type { Product, Suite } from "@/data/produtos";

export function ProductName({ product, suiteId }: { product: Product; suiteId: Suite["id"] }) {
  if (suiteId === "nexus") return <span className={product.specimen === "outfit" ? "specimen-outfit" : "specimen-nexus"}>{product.name}</span>;
  const words = product.name.split(" ");
  return <span className="specimen-people">{words.length === 2 ? <>{words[0]} <em className="specimen-fraunces">{words[1]}</em></> : product.name}</span>;
}

export function TypeSpecimen({ typography }: { typography: Suite["typography"] }) {
  return <div className="space-y-5">{typography.map((type, i) => (
    <div key={i} className="flex items-center gap-6">
      <span aria-hidden="true" className="type-sample" style={{ fontFamily: `"${type.family}"`, fontWeight: type.weight, fontStyle: type.italic ? "italic" : "normal" }}>Aa</span>
      <p className="label-mono text-nevoa">{type.family}<br />{type.weight} · {type.role}</p>
    </div>
  ))}</div>;
}