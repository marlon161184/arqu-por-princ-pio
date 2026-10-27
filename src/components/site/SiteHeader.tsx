import { useEffect, useState } from "react";
import { ArqueWordmark } from "@/components/ArqueWordmark";
import { supabase } from "@/integrations/supabase/client";
import { Chevron } from "./primitives";

function useSignedIn() {
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSignedIn(!!data.session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => setSignedIn(!!session));
    return () => subscription.unsubscribe();
  }, []);
  return signedIn;
}

function SessionLink({ className, onClick }: { className: string; onClick?: () => void }) {
  const signedIn = useSignedIn();
  return (
    <a href={signedIn ? "/area-do-cliente" : "/auth"} onClick={onClick} className={className}>
      {signedIn ? "Área do cliente" : "Entrar"}
    </a>
  );
}

const links = [
  { href: "#praticas", label: "Práticas" },
  { href: "#metodo", label: "Método" },
  { href: "#produtos", label: "Produtos" },
  { href: "#fundador", label: "Fundador" },
  { href: "#bastidores", label: "Bastidores" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-surface">
      <div className="container-x flex h-[72px] items-center justify-between">
        <a href="/" className="flex min-h-11 items-center text-carvao [--wm-accent:var(--ultramar)]">
          <ArqueWordmark style={{ height: 22, width: "auto" }} />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="label-mono text-ink hover:text-brand">{l.label}</a>
          ))}
          <SessionLink className="label-mono text-ink hover:text-brand" />
          <a href="#contato" className="label-mono inline-flex items-center gap-2 text-brand">
            Conversar <Chevron rotate={90} />
          </a>
        </nav>
        <button
          type="button"
          className="label-mono min-h-11 px-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>
      {open && (
        <div id="menu-mobile" className="section-dark fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="container-x flex h-[72px] items-center justify-between border-b border-linha-escura">
            <span className="text-branco [--wm-accent:var(--ultramar-claro)]"><ArqueWordmark style={{ height: 22, width: "auto" }} /></span>
            <button type="button" className="label-mono min-h-11 px-2" onClick={() => setOpen(false)} autoFocus>Fechar</button>
          </div>
          <nav aria-label="Principal móvel" className="container-x flex flex-col pt-8">
            {[...links, { href: "#contato", label: "Conversar" }].map((l, i) => (
              <a key={i} href={l.href} onClick={() => setOpen(false)} className="h1-style flex min-h-16 items-center border-b border-linha-escura text-concreto">
                {l.label}
              </a>
            ))}
            <SessionLink onClick={() => setOpen(false)} className="h1-style flex min-h-16 items-center border-b border-linha-escura text-concreto" />
          </nav>
        </div>
      )}
    </header>
  );
}
