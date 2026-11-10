import { useEffect, useRef } from "react";
import { frentes, produtosDigitais } from "@/data/produtos";
import { Chevron } from "@/components/site/primitives";

export function DigitalIndex({ onOpen }: { onOpen: (num: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rows = el.querySelectorAll<HTMLElement>(".index-row");
    if (typeof IntersectionObserver === "undefined") { rows.forEach((r) => r.classList.add("is-visible")); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }), { threshold: 0.1 });
    rows.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className="mt-16">
    {frentes.map((f, fi) => {
      const itens = produtosDigitais.filter((p) => p.num.startsWith(`${fi + 1}.`));
      return <div key={f.name} className="border-t border-linha-escura pt-6 first:border-t-0">
        <h3 className="label-mono text-nevoa">{f.name}</h3>
        <ul className="mt-2" aria-label={`Produtos digitais de ${f.name}`}>
          {itens.map((p, i) => <li key={p.num} className="index-row" style={{ transitionDelay: `${i * 50}ms` }}>
            <button type="button" className="index-btn" onClick={() => onOpen(p.num)}>
              <span className="index-num label-mono">{p.num}</span>
              <span className="index-name">{p.name}</span>
              <span className="index-chev"><Chevron rotate={90} size={16} /></span>
            </button>
          </li>)}
        </ul>
      </div>;
    })}
  </div>;
}
