import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

/** Painel lateral modal: wipe reto, Esc/fundo/botão fecham, foco preso e devolvido à origem. */
export function PastaPanel({ titleId, onClose, children }: { titleId: string; onClose: () => void; children: ReactNode }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    const origem = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("h2, h3")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); closeRef.current(); return; }
      if (e.key !== "Tab" || !panelRef.current) return;
      const f = panelRef.current.querySelectorAll<HTMLElement>("button, a[href], [tabindex]:not([tabindex='-1'])");
      if (!f.length) return;
      const first = f[0]!, last = f[f.length - 1]!;
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = overflow; origem?.focus?.(); };
  }, []);
  return createPortal(
    <div className="pasta-root">
      <button type="button" className="pasta-backdrop" aria-label="Fechar pasta" tabIndex={-1} onClick={onClose} />
      <div ref={panelRef} role="dialog" aria-modal="true" aria-labelledby={titleId} className="pasta-panel">
        <div className="flex justify-end"><button type="button" className="pasta-close label-mono" onClick={onClose}>Fechar</button></div>
        {children}
      </div>
    </div>, document.body);
}
