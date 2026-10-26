import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { routeTree } from "@/routeTree.gen";
import { EnxovalRedirect } from "@/routes/enxoval";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("preserves /enxoval with a visible standalone destination before client redirection", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes("/enxoval").at(-1)?.routeId).toBe("/enxoval");
    const fallback = renderToStaticMarkup(createElement(EnxovalRedirect));
    expect(fallback).toContain('href="/enxoval/enxoval.html"');
  });

  it("serves the version 2 attachment byte-for-byte", () => {
    const bytes = readFileSync("public/enxoval/enxoval.html");
    expect(createHash("sha256").update(bytes).digest("hex")).toBe(
      "f4de13d10c81cddb900dba86e5717ab111002383049edf66a9dc469334f24eb9",
    );
  });

  it("removes all seven obsolete boards and the catalog render pointer", () => {
    for (const file of ["00-visao-geral", "01-papelaria", "02-sinalizacao-impressos", "03-vestuario-brindes", "04-telas", "05-linkedin", "06-instagram"]) {
      expect(existsSync(`public/enxoval/${file}.html`)).toBe(false);
    }
    expect(existsSync("src/assets/enxoval/catalogo-render.png.asset.json")).toBe(false);
  });

  it("matches the standalone client area concept", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes("/conceito/area-do-cliente").at(-1)?.routeId).toBe("/conceito/area-do-cliente");
  });
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
