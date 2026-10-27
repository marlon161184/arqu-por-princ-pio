import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { ArqueWordmark } from "@/components/ArqueWordmark";
import { Chevron, Label } from "@/components/site/primitives";

const credentials = z.object({
  email: z.string().trim().email("Informe um e-mail válido.").max(255, "E-mail muito longo."),
  password: z.string().min(6, "A senha precisa de ao menos 6 caracteres.").max(72, "Senha muito longa."),
});
type Field = keyof z.infer<typeof credentials>;
type Mode = "entrar" | "criar";

function sanitizeRedirect(value: unknown): string {
  return typeof value === "string" && value.startsWith("/") && !value.startsWith("//") ? value : "/area-do-cliente";
}

export const Route = createFileRoute("/auth")({
  validateSearch: (search: Record<string, unknown>) => ({ redirect: sanitizeRedirect(search["redirect"]) }),
  head: () => ({
    meta: [
      { title: "Área do cliente — Entrar · Arquê" },
      { name: "description", content: "Acesso da área do cliente Arquê, com e-mail e senha ou conta Google." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Área do cliente — Entrar · Arquê" },
      { property: "og:description", content: "Acesso da área do cliente Arquê." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { redirect: intended } = Route.useSearch();
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("entrar");
  const [errors, setErrors] = useState<Partial<Record<Field | "form", string>>>({});
  const [sending, setSending] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: intended, replace: true });
    });
  }, [intended, navigate]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = credentials.safeParse({ email: fd.get("email"), password: fd.get("password") });
    if (!parsed.success) {
      const errs: Partial<Record<Field, string>> = {};
      for (const i of parsed.error.issues) errs[i.path[0] as Field] ??= i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    if (mode === "entrar") {
      const { error } = await supabase.auth.signInWithPassword(parsed.data);
      setSending(false);
      if (error) { setErrors({ form: "E-mail ou senha não conferem." }); return; }
      navigate({ to: intended });
      return;
    }
    const { data, error } = await supabase.auth.signUp({
      ...parsed.data,
      options: { emailRedirectTo: window.location.origin },
    });
    setSending(false);
    if (error) { setErrors({ form: "Não foi possível criar a conta agora. Tente novamente em instantes." }); return; }
    if (!data.session) { setConfirmEmail(parsed.data.email); return; }
    navigate({ to: intended });
  }

  async function onGoogle() {
    setErrors({});
    sessionStorage.setItem("arque.auth.redirect", intended);
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (result.error) { setErrors({ form: "Não foi possível entrar com o Google agora." }); return; }
    if (result.redirected) return;
    navigate({ to: intended });
  }

  return (
    <main className="section-dark min-h-screen">
      <div className="container-x flex h-[72px] items-center justify-between border-b border-linha-escura">
        <a href="/" className="flex min-h-11 items-center text-branco [--wm-accent:var(--ultramar-claro)]" aria-label="Voltar ao site">
          <ArqueWordmark style={{ height: 22, width: "auto" }} />
        </a>
        <a href="/" className="label-mono inline-flex min-h-11 items-center gap-2 text-nevoa underline-offset-4 hover:text-branco hover:underline">
          Voltar ao site
        </a>
      </div>
      <div className="container-x max-w-[520px] py-20">
        <Label className="text-nevoa">Área do cliente</Label>
        <h1 className="h1-style mt-4 text-branco">{confirmEmail ? "Confirme seu e-mail." : mode === "entrar" ? "Entrar." : "Criar conta."}</h1>

        {confirmEmail ? (
          <div className="mt-10">
            <p className="max-w-[52ch] text-concreto">
              Enviamos um link de confirmação para <span className="text-branco">{confirmEmail}</span>. Abra o e-mail e confirme para acessar a área do cliente.
            </p>
            <button
              type="button"
              className="label-mono mt-10 inline-flex min-h-11 items-center gap-2 text-ultramar-claro underline-offset-4 hover:underline"
              onClick={() => { setConfirmEmail(null); setMode("entrar"); }}
            >
              Já confirmei, quero entrar <Chevron rotate={90} />
            </button>
          </div>
        ) : (
          <>
            <div role="tablist" aria-label="Modo de acesso" className="mt-10 flex border-b border-linha-escura">
              {(["entrar", "criar"] as const).map((m) => (
                <button
                  key={m}
                  role="tab"
                  aria-selected={mode === m}
                  type="button"
                  onClick={() => { setMode(m); setErrors({}); }}
                  className={`label-mono min-h-11 px-4 ${mode === m ? "text-branco underline underline-offset-8" : "text-nevoa hover:text-branco"}`}
                >
                  {m === "entrar" ? "Entrar" : "Criar conta"}
                </button>
              ))}
            </div>

            <form onSubmit={onSubmit} noValidate className="mt-10 flex flex-col gap-8">
              {(
                [
                  { id: "email", label: "E-mail", type: "email", auto: "email" },
                  { id: "password", label: "Senha", type: "password", auto: mode === "entrar" ? "current-password" : "new-password" },
                ] as const
              ).map((f) => {
                const err = errors[f.id];
                const errId = `${f.id}-error`;
                return (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="sr-only">{f.label}</label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      placeholder={f.label}
                      className="field"
                      aria-invalid={!!err}
                      aria-describedby={err ? errId : undefined}
                      autoComplete={f.auto}
                    />
                    {err && <p id={errId} className="mt-2 text-sm text-branco"><span className="label-mono mr-2">Erro:</span>{err}</p>}
                  </div>
                );
              })}
              {errors.form && <p role="alert" className="text-sm text-branco"><span className="label-mono mr-2">Erro:</span>{errors.form}</p>}
              <div>
                <button type="submit" disabled={sending} className="btn-inverse label-mono">
                  {sending ? "Aguarde" : mode === "entrar" ? "Entrar" : "Criar conta"} <Chevron rotate={90} />
                </button>
              </div>
            </form>

            <div className="mt-10 border-t border-linha-escura pt-10">
              <button type="button" onClick={onGoogle} className="label-mono inline-flex min-h-11 items-center gap-2 text-branco underline-offset-4 hover:underline">
                Entrar com Google <Chevron rotate={90} />
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
