import type { ClienteGrupo, ClienteItem } from "@/data/clientes";
import { Button } from "@/components/ui/button";
import { Chevron } from "@/components/site/primitives";

export function ClientePasta({ grupo, item, onVerEmUso }: { grupo: ClienteGrupo; item: ClienteItem; onVerEmUso: () => void }) {
  return <div className="text-branco">
    <p className="label-mono mt-8">{grupo.nome} · {item.num}</p>
    <h2 id="pasta-title" tabIndex={-1} className="h1-style mt-6">{item.nome}</h2>
    <p className="body-l measure mt-8">{item.descricao}</p>
    <Button asChild variant="portfolioCta" className="mt-10"><a href="#contato" onClick={onVerEmUso}>Ver em uso <Chevron rotate={90} /></a></Button>
  </div>;
}