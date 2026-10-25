import { useState, type FormEvent } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Chevron } from "./primitives";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome (mínimo 2 caracteres).").max(100, "Nome muito longo."),
  company: z.string().trim().max(150, "Nome da empresa muito longo.").optional(),
  email: z.string().trim().email("Informe um e-mail válido.").max(255, "E-mail muito longo."),
  message: z.string().trim().min(10, "Escreva ao menos 10 caracteres.").max(2000, "Máximo de 2000 caracteres."),
});
type Field = keyof z.infer<typeof schema>;

export function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<Field | "form", string>>>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) { setDone(true); return; }
    const parsed = schema.safeParse({
      name: fd.get("name"), company: fd.get("company") || undefined, email: fd.get("email"), message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Partial<Record<Field, string>> = {};
      for (const i of parsed.error.issues) errs[i.path[0] as Field] ??= i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    const { error } = await supabase.from("contact_requests").insert({
      name: parsed.data.name, company: parsed.data.company ?? null, email: parsed.data.email, message: parsed.data.message,
    });
    setSending(false);
    if (error) { setErrors({ form: "Não foi possível enviar agora. Tente novamente em instantes." }); return; }
    setDone(true);
  }

  if (done) {
    return <p role="status" className="h3-style text-branco">Mensagem recebida. Entraremos em contato.</p>;
  }

  const fields: { id: Field; label: string; type?: string; textarea?: boolean; auto?: string }[] = [
    { id: "name", label: "Nome", auto: "name" },
    { id: "company", label: "Empresa", auto: "organization" },
    { id: "email", label: "E-mail", type: "email", auto: "email" },
    { id: "message", label: "Mensagem", textarea: true },
  ];

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-8">
      {fields.map((f) => {
        const err = errors[f.id];
        const errId = `${f.id}-error`;
        const common = {
          id: f.id, name: f.id, placeholder: f.label, className: "field",
          "aria-invalid": !!err, "aria-describedby": err ? errId : undefined, autoComplete: f.auto,
        };
        return (
          <div key={f.id}>
            <label htmlFor={f.id} className="sr-only">{f.label}</label>
            {f.textarea ? <textarea rows={4} {...common} /> : <input type={f.type ?? "text"} {...common} />}
            {err && <p id={errId} className="mt-2 text-sm text-branco"><span className="label-mono mr-2">Erro:</span>{err}</p>}
          </div>
        );
      })}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {errors.form && <p role="alert" className="text-sm text-branco"><span className="label-mono mr-2">Erro:</span>{errors.form}</p>}
      <div>
        <button type="submit" disabled={sending} className="btn-inverse label-mono">
          {sending ? "Enviando" : "Enviar"} <Chevron rotate={90} />
        </button>
      </div>
    </form>
  );
}
