import { useLayoutEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArqueWordmark } from "@/components/ArqueWordmark";
import { Chevron, Reveal } from "@/components/site/primitives";
import catalogoRender from "@/assets/enxoval/catalogo-render.png.asset.json";

const TITLE = "Enxoval Arquê — pranchas da marca";
const DESC = "O enxoval de marca da Arquê: 24 peças em seis grupos, com medida, sangria, material e arquivo de entrega em cada prancha.";

/** Largura fixa das pranchas do enxoval (canvas original do documento). */
const BOARD_W = 1760;

const boards = [
  { n: "00", label: "Visão geral", src: "/enxoval/00-visao-geral.html", h: 1700 },
  { n: "01", label: "Papelaria", src: "/enxoval/01-papelaria.html", h: 1500 },
  { n: "02", label: "Sinalização e impressos", src: "/enxoval/02-sinalizacao-impressos.html", h: 1500 },
  { n: "03", label: "Vestuário e brindes", src: "/enxoval/03-vestuario-brindes.html", h: 2080 },
  { n: "04", label: "Telas", src: "/enxoval/04-telas.html", h: 1500 },
  { n: "05", label: "LinkedIn", src: "/enxoval/05-linkedin.html", h: 1960 },
  { n: "06", label: "Instagram", src: "/enxoval/06-instagram.html", h: 1560 },
];

export const Route = createFileRoute("/enxoval")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/enxoval" }],
  }),
  component: EnxovalPage,
});

/** Prancha em escala: iframe de 1760px reduzido à largura da coluna. */
function BoardFrame({ src, label, h }: { src: string; label: string; h: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / BOARD_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ height: h * scale }}>
      <iframe
        src={src}
        title={`Prancha do enxoval: ${label}`}
        loading="lazy"
        className="block bg-surface"
        style={{
          width: BOARD_W,
          height: h,
          border: 0,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      />
    </div>
  );
}

function EnxovalPage() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-rule bg-surface">
        <div className="container-x flex h-[72px] items-center justify-between">
          <a href="/" className="flex min-h-11 items-center text-carvao [--wm-accent:var(--ultramar)]">
            <ArqueWordmark style={{ height: 22, width: "auto" }} />
          </a>
          <a href="/" className="label-mono inline-flex min-h-11 items-center gap-2 text-brand">
            <Chevron rotate={270} /> Voltar ao site
          </a>
        </div>
      </header>

      <main>
        <section className="bg-surface">
          <div className="container-x py-16 lg:py-24">
            <Reveal>
              <p className="label-mono text-ink-muted">Marca · Documento interno</p>
              <h1 className="display-l mt-8 text-ink">Enxoval de marca.</h1>
              <p className="body-l measure mt-8 text-ink-muted">
                O enxoval Arquê reúne 24 peças em seis grupos. Cada peça tem uma medida proposta, escolhida pelo padrão de gráfica ou de plataforma; em cada prancha, o botão + abre formato, sangria, material e arquivo. Versão 1 · 25.10.2026.
              </p>
            </Reveal>
          </div>
        </section>

        <div className="border-y border-rule bg-surface-alt">
          <div className="container-x flex flex-col gap-16 py-16 lg:gap-24 lg:py-24">
            {boards.map((b) => (
              <section key={b.n} aria-label={`Prancha ${b.n} · ${b.label}`}>
                <div className="mb-6 flex items-baseline gap-6 border-b-2 border-carvao pb-3">
                  <p className="label-mono text-brand">{b.n}</p>
                  <h2 className="label-mono text-ink">{b.label}</h2>
                </div>
                <div className="border border-rule bg-surface">
                  <BoardFrame src={b.src} label={b.label} h={b.h} />
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="section-dark">
        <div className="container-x py-16">
          <span className="text-branco [--wm-accent:var(--ultramar-claro)]"><ArqueWordmark style={{ height: 28, width: "auto" }} /></span>
          <div className="mt-12 flex flex-col gap-4 border-t border-linha-escura pt-6 sm:flex-row sm:justify-between">
            <p className="label-mono text-nevoa">Enxoval de marca · Versão 1 · 25.10.2026</p>
            <p className="label-mono text-branco">Por princípio.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
