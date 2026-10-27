import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ArqueWordmark } from "@/components/ArqueWordmark";
import { Chevron, Label } from "@/components/site/primitives";

export const Route = createFileRoute("/_authenticated/area-do-cliente")({
  head: () => ({
    meta: [
      { title: "Área do cliente · Arquê" },
      { name: "description", content: "Área do cliente Arquê: projetos, entregas e documentos." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Área do cliente · Arquê" },
      { property: "og:description", content: "Área do cliente Arquê: projetos, entregas e documentos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ClientAreaHome,
});

function ClientAreaHome() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setEmail(data.user?.email ?? null));
  }, []);

  async function handleSignOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", search: { redirect: "/area-do-cliente" }, replace: true });
  }

  return (
    <main className="section-dark min-h-screen">
      <div className="container-x flex h-[72px] items-center justify-between border-b border-linha-escura">
        <a href="/" className="flex min-h-11 items-center text-branco [--wm-accent:var(--ultramar-claro)]" aria-label="Voltar ao site">
          <ArqueWordmark style={{ height: 22, width: "auto" }} />
        </a>
        <button
          type="button"
          onClick={handleSignOut}
          className="label-mono inline-flex min-h-11 items-center gap-2 text-nevoa underline-offset-4 hover:text-branco hover:underline"
        >
          Sair
        </button>
      </div>
      <div className="container-x py-20">
        <Label className="text-nevoa">Área do cliente</Label>
        <h1 className="h1-style mt-4 text-branco">Bem-vindo.</h1>
        <p className="mt-8 max-w-[52ch] text-concreto">
          Você entrou com <span className="text-branco">{email ?? "sua conta"}</span>. Os projetos, entregas e documentos da sua empresa aparecerão aqui, nesta mesma estrutura, à medida que forem publicados pela equipe Arquê.
        </p>
        <a href="/" className="label-mono mt-12 inline-flex min-h-11 items-center gap-2 text-ultramar-claro underline-offset-4 hover:underline">
          Voltar ao site <Chevron rotate={90} />
        </a>
      </div>
    </main>
  );
}
