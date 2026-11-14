import { readFileSync } from "node:fs";
import vm from "node:vm";
import { describe, expect, it } from "vitest";

type Art = { w: number; h: number; u: string; inner: string };
type Engine = {
  ART: Record<string, (options: Record<string, string>, face: number) => Art>;
  WMW: (height: number) => number;
  MOW: (height: number) => number;
};

function engine(): Engine {
  const html = readFileSync("public/enxoval/enxoval.html", "utf8");
  const logo = html.match(/const LOGO=(\{.*?\});window.FONTCSS=/)?.[1];
  if (!logo) throw new Error("Official vector paths missing");
  const start = html.indexOf("const C={");
  const end = html.indexOf("/* ===== Mockups planos");
  if (start < 0 || end <= start) throw new Error("Vector engine missing");
  return vm.runInNewContext(`const LOGO=${logo};${html.slice(start, end)};({ART,WMW,MOW})`);
}

const options = {
  nome: "Nome Sobrenome", cargo: "Cargo", frente: "Estratégia",
  dest: "Nome", assina: "Marlon Silva", cor: "carvao", acab: "padrao",
};

describe("Enxoval physical brand sizes", () => {
  const { ART, WMW, MOW } = engine();

  it.each([
    ["timbrado", 0], ["envelope", 0], ["cartao", 0], ["cartao", 2],
    ["cracha", 0], ["ficha", 0], ["ficha", 1], ["ficha", 2], ["ficha", 3],
    ["carta", 0], ["carta", 1],
  ])("keeps every wordmark in %s face %i at least 10 mm high", (key, face) => {
    const render = ART[key];
    if (!render) throw new Error(`Missing artwork ${key}`);
    const art = render(options, face);
    expect(art.u).toBe("mm");
    const marks = [...art.inner.matchAll(/<svg[^>]*height="([\d.]+)"[^>]*viewBox="0 0 2581.0 1071.16"/g)];
    expect(marks.length).toBeGreaterThan(0);
    for (const mark of marks) expect(Number(mark[1])).toBeGreaterThanOrEqual(10);
  });

  it("retains the official standard wordmark and symbol aspect ratios", () => {
    expect(WMW(10)).toBeCloseTo(24.095373, 5);
    expect(MOW(16)).toBeCloseTo(23.495665, 5);
  });

  it("maximizes the pen mark to 9 mm within the 10 mm shaft diameter", () => {
    const render = ART["canetas"];
    if (!render) throw new Error("Missing pen artwork");
    const art = render(options, 0);
    expect(art.h).toBeCloseTo(9, 8);
    expect(art.w).toBeCloseTo(WMW(9), 8);
  });
});