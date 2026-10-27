import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Enxoval Arquê — versão 1.0";
const DESC = "34 peças em seis coleções, com downloads em SVG, PNG e PDF nos tamanhos finais.";
const ENXOVAL_HREF = "/enxoval/enxoval.html";

export const Route = createFileRoute("/enxoval")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: ENXOVAL_HREF }],
  }),
  component: EnxovalRedirect,
});

export function EnxovalRedirect() {
  useEffect(() => {
    window.location.replace(ENXOVAL_HREF);
  }, []);

  return (
    <main className="container-x py-16">
      <a href={ENXOVAL_HREF} className="label-mono text-brand underline underline-offset-4">
        Enxoval de marca · Versão 1.0
      </a>
    </main>
  );
}