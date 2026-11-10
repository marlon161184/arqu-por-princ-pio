import { useEffect, useRef, useState } from "react";
import { frentes } from "@/data/produtos";
import { activeIndex, isFront, stackOpacity, stackPos, stackTransform } from "@/lib/stackMath";
import { Chevron } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";

const CORES = ["carvao", "branco", "noite", "concreto"] as const;
const N = frentes.length;

function useReducedMotion() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setR(m.matches);
    const on = () => setR(m.matches);
    m.addEventListener?.("change", on);
    return () => m.removeEventListener?.("change", on);
  }, []);
  return r;
}

export function FrentesStack({ paused, onOpen }: { paused: boolean; onOpen: (i: number) => void }) {
  const [t, setT] = useState(0);
  const tRef = useRef(0);
  const [hover, setHover] = useState(false);
  const [drag, setDrag] = useState(false);
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const [stageW, setStageW] = useState(520);
  const stageRef = useRef<HTMLDivElement>(null);
  const anim = useRef<{ from: number; to: number; start: number } | null>(null);
  const dragRef = useRef<{ y: number; t0: number; moved: boolean } | null>(null);
  const reduced = useReducedMotion();
  const stopAuto = paused || manuallyPaused || hover || drag || reduced;
  const stopRef = useRef(stopAuto);
  stopRef.current = stopAuto;

  const set = (v: number) => { tRef.current = v; setT(v); };

  useEffect(() => {
    const el = stageRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver((es) => setStageW(es[0]?.contentRect.width ?? 520));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let raf = 0, last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000); last = now;
      const a = anim.current;
      if (a) {
        const k = Math.min(1, (now - a.start) / 240);
        const e = 1 - Math.pow(1 - k, 3);
        set(a.from + (a.to - a.from) * e);
        if (k >= 1) anim.current = null;
      } else if (!stopRef.current && !document.hidden) set(tRef.current + dt * 0.1);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const goTo = (target: number) => {
    if (reduced) { anim.current = null; set(target); return; }
    anim.current = { from: tRef.current, to: target, start: performance.now() };
  };
  const goIndex = (i: number) => {
    const cur = tRef.current;
    goTo(cur + stackPos(i, cur, N));
  };
  const step = Math.round(Math.min(stageW * 0.72, 380) * 0.66 * 0.82);
  const w = Math.min(stageW * 0.72, 380);
  const ativa = activeIndex(t, N);

  return <div className="frentes grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-6">
    <div>
      <ol className="frentes-lista" aria-label="Frentes">
        {frentes.map((f, i) => <li key={f.name}>
          <button type="button" className="frentes-item" aria-current={ativa === i ? "true" : undefined} onClick={() => goIndex(i)}>
            <span className="label-mono">{String(i + 1).padStart(2, "0")}</span><span className="h3-style">{f.name}</span>
          </button>
        </li>)}
      </ol>
      <div className="mt-8 flex gap-2">
        <button type="button" className="stack-btn" aria-label="Frente anterior" onClick={() => goTo(Math.round(tRef.current) - 1)}><Chevron /></button>
        <button type="button" className="stack-btn" aria-label="Próxima frente" onClick={() => goTo(Math.round(tRef.current) + 1)}><Chevron rotate={180} /></button>
      </div>
      <p className="sr-only" aria-live="polite">Frente ativa: {frentes[ativa]?.name}</p>
    </div>
    <div ref={stageRef} className="stack-stage" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onPointerDown={(e) => { dragRef.current = { y: e.clientY, t0: tRef.current, moved: false }; anim.current = null; }}
      onPointerMove={(e) => {
        const d = dragRef.current; if (!d) return;
        const dy = e.clientY - d.y;
        if (!d.moved && Math.abs(dy) > 6) { d.moved = true; setDrag(true); (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId); }
        if (d.moved) set(d.t0 - dy / step);
      }}
      onPointerUp={() => { const d = dragRef.current; dragRef.current = null; if (d?.moved) { setDrag(false); goTo(Math.round(tRef.current)); } }}
      onPointerCancel={() => { dragRef.current = null; setDrag(false); goTo(Math.round(tRef.current)); }}>
      <div className="stack-tilt">
        {frentes.map((f, i) => {
          const p = stackPos(i, t, N);
          const front = isFront(p);
          const op = stackOpacity(p);
          const cor = front ? "ultramar" : CORES[i];
          return <button key={f.name} type="button" data-cor={cor} className="stack-card"
            tabIndex={front ? 0 : -1} aria-hidden={op === 0 ? true : undefined}
            aria-label={front ? `Abrir a pasta de ${f.name}` : `Trazer ${f.name} para a frente`}
            style={{ width: w, height: w * 0.66, marginLeft: -w / 2, marginTop: (-w * 0.66) / 2, transform: stackTransform(p, step), opacity: op, zIndex: 10 - Math.round(Math.abs(p) * 2) }}
            onClick={() => { if (dragRef.current?.moved) return; if (front) onOpen(i); else goIndex(i); }}>
            <span className="label-mono">05.1 · {String(i + 1).padStart(2, "0")}</span>
            <span><span className="h1-style block">{f.name}</span><span className="mt-3 block text-sm">{f.card}</span></span>
          </button>;
        })}
      </div>
      <Button type="button" variant="ghost" className="stack-pause"
        aria-pressed={manuallyPaused || reduced} disabled={reduced}
        onPointerDown={(e) => e.stopPropagation()}
        onClick={() => setManuallyPaused((value) => !value)}>
        {manuallyPaused || reduced ? "Continuar" : "Pausar"}
      </Button>
    </div>
  </div>;
}
