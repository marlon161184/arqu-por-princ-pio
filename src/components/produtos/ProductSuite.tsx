import type { CSSProperties } from "react";
import type { Suite } from "@/data/produtos";
import { PaletteStrip } from "./PaletteStrip";
import { TypeSpecimen } from "./TypeSpecimen";
import { ProductIndex } from "./ProductIndex";

export function ProductSuite({ suite }: { suite: Suite }) {
  return <article className="suite-plate border-t border-linha-escura py-16 lg:py-24" aria-labelledby={`${suite.id}-title`} style={{ "--suite-accent": suite.accent } as CSSProperties}>
    <div className="suite-identification">
      <div className="suite-heading min-w-0">
        <p className="label-mono text-ultramar-claro">{suite.label}</p>
        <h3 id={`${suite.id}-title`} className="suite-title mt-6 text-concreto">{suite.id === "nexus" ? <span className="specimen-nexus">NEXUS</span> : <><span className="specimen-people">People</span> <em className="specimen-fraunces suite-title-accent">Analytics</em></>}</h3>
        <p className="measure mt-6 text-nevoa">{suite.description}</p>
      </div>
      {suite.images.map((image, index) => <figure key={image.src} className={index === 0 ? "suite-image-main min-w-0" : "suite-image-secondary min-w-0"}>
        <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="aspect-[16/10] w-full border border-linha-escura object-contain" />
        <figcaption className="label-mono mt-3 text-nevoa">{image.caption}</figcaption>
      </figure>)}
    </div>
    <div className={`suite-architecture mt-12 border-y border-linha-escura ${suite.id === "nexus" ? "suite-architecture-five" : "suite-architecture-four"}`}>
      {suite.architecture.map((cell) => <div key={cell.name} className="architecture-cell py-6">
        <h4 className="h3-style text-concreto">{cell.name}</h4>
        {cell.branch && <p className="mt-2 text-nevoa">{cell.branch}</p>}
        <p className="label-mono mt-4 text-ultramar-claro">{cell.count} {cell.count === 1 ? "produto" : "produtos"}</p>
        <p className="mt-3 text-nevoa">{cell.support}</p>
      </div>)}
    </div>
    <div className="suite-grammar mt-12">
      <div><PaletteStrip palette={suite.palette} /><p className="label-mono mt-6 text-nevoa">{suite.grammarNote}</p></div>
      <TypeSpecimen typography={suite.typography} />
    </div>
    <ProductIndex suite={suite} />
  </article>;
}