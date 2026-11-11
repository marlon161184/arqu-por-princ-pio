import { useEffect, useRef } from "react";
import { clientes, type ClienteGrupo, type ClienteItem } from "@/data/clientes";
import { Button } from "@/components/ui/button";
import { Chevron } from "@/components/site/primitives";

export function ClientesIndex({ onOpen }: { onOpen: (grupo: ClienteGrupo, item: ClienteItem) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const rows = ref.current?.querySelectorAll<HTMLElement>(".index-row");
    if (!rows) return;
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      rows.forEach((row) => row.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }), { threshold: 0.1 });
    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="clientes-index mt-8">
    {clientes.map((grupo) => <div key={grupo.id} className="grid-12 gap-y-8 border-t border-linha-escura py-10 lg:py-12" data-cliente-grupo={grupo.id}>
      <div className="col-span-12 flex min-w-0 flex-col items-start gap-8 lg:col-span-4">
        {grupo.logos.map((logo) => <img key={logo.alt} src={logo.src} alt={logo.alt} height={logo.height} className={`${logo.height === 72 ? "h-[72px]" : "h-[64px]"} w-auto max-w-full object-contain object-left`} loading="lazy" decoding="async" />)}
        <p className="label-mono text-branco">{grupo.nome}</p>
      </div>
      <ul className="col-span-12 min-w-0 lg:col-span-8" aria-label={`Produtos de ${grupo.nome}`}>
        {grupo.itens.map((item, index) => <li key={item.num} className="index-row" style={{ transitionDelay: `${index * 50}ms` }}>
          <Button type="button" variant="ghost" className="index-btn cliente-index-btn" aria-label={`${item.num} ${item.nome}`} onClick={() => onOpen(grupo, item)}>
            <span className="index-num label-mono">{item.num}</span>
            <span className="cliente-index-copy">
              <span className="index-name">{item.nome}</span>
              <span className="cliente-index-resumo">{item.descricao.split(/(?<=\.)\s/)[0]}</span>
            </span>
            <span className="index-chev"><Chevron rotate={90} size={16} /></span>
          </Button>
        </li>)}
      </ul>
    </div>)}
  </div>;
}