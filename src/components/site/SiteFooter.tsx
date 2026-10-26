import { Link } from "@tanstack/react-router";
import { ArqueWordmark } from "@/components/ArqueWordmark";
import { Chevron, Label } from "@/components/site/primitives";

const PDF_HREF = "/downloads/arque-brandbook-design-system.pdf";

export function SiteFooter() {
  return (
    <footer className="section-dark">
      <div className="container-x py-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <span className="text-branco [--wm-accent:var(--ultramar-claro)]"><ArqueWordmark style={{ height: 28, width: "auto" }} /></span>
          <Label className="text-nevoa">Estratégia · Pessoas · Marcas · Negócios</Label>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-linha-escura pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Label className="text-nevoa">© 2026 Arquê · MBS DHO Ltda · CNPJ [00.000.000/0000-00]</Label>
          <a href="/enxoval" className="label-mono text-nevoa underline-offset-4 hover:text-branco hover:underline">Enxoval</a>
          <Link to="/conceito/area-do-cliente" className="label-mono text-nevoa underline-offset-4 hover:text-branco hover:underline">Conceito · Área do cliente</Link>
          <Label className="text-branco">Por princípio.</Label>
        </div>
        <div className="mt-6">
          <a
            href={PDF_HREF}
            download="arque-brandbook-design-system.pdf"
            target="_blank"
            rel="noopener"
            aria-label="Baixar o brandbook e design system da Arquê (PDF, 22 páginas)"
            className="label-mono inline-flex items-center gap-2 whitespace-nowrap text-ultramar-claro underline-offset-4 hover:underline"
          >
            <Chevron size={10} className="shrink-0" />
            BRANDBOOK E DESIGN SYSTEM · PDF
          </a>
        </div>
      </div>
    </footer>
  );
}
