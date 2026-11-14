import { Link } from "@tanstack/react-router";
import { ArqueWordmark } from "@/components/ArqueWordmark";
import { Chevron, Label } from "@/components/site/primitives";

const PDF_HREF = "/downloads/arque-brandbook-design-system.pdf";
const SLIDES_HREF = "/downloads/arque-site-slides.pdf";

export function SiteFooter() {
  return (
    <footer className="section-dark">
      <div className="container-x py-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <span className="text-branco [--wm-accent:var(--ultramar-claro)]"><ArqueWordmark optical style={{ height: 28, width: "auto" }} /></span>
          <Label className="text-nevoa">Estratégia · Pessoas · Marcas · Negócios</Label>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-linha-escura pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Label className="min-w-0 break-words text-nevoa">© 2026 Arquê · MBS Desenvolvimento Humano Organizacional Ltda · CNPJ 50.036.577/0001-21</Label>
          <a href="/enxoval/enxoval.html" className="label-mono text-nevoa underline-offset-4 hover:text-branco hover:underline">Enxoval</a>
          <Link to="/conceito/area-do-cliente" className="label-mono text-nevoa underline-offset-4 hover:text-branco hover:underline">Conceito · Área do cliente</Link>
          <Label className="text-branco">Por princípio.</Label>
        </div>
        <div className="mt-6 flex flex-col items-start gap-4">
          <Link to="/area-do-cliente" className="label-mono text-nevoa underline-offset-4 hover:text-branco hover:underline">
            Área do cliente
          </Link>
          <a
            href={PDF_HREF}
            download="arque-brandbook-design-system.pdf"
            target="_blank"
            rel="noopener"
            aria-label="Baixar o brandbook e design system da Arquê (PDF, 30 páginas)"
            className="label-mono inline-flex items-center gap-2 whitespace-nowrap text-ultramar-claro underline-offset-4 hover:underline"
          >
            <Chevron size={10} className="shrink-0" />
            BRANDBOOK E DESIGN SYSTEM · PDF
          </a>
          <a
            href={SLIDES_HREF}
            download="arque-site-slides.pdf"
            target="_blank"
            rel="noopener"
            aria-label="Baixar os slides do site da Arquê (PDF, 31 páginas)"
            className="label-mono inline-flex items-center gap-2 whitespace-nowrap text-ultramar-claro underline-offset-4 hover:underline"
          >
            <Chevron size={10} className="shrink-0" />
            SITE EM SLIDES · PDF
          </a>
        </div>
      </div>
    </footer>
  );
}
