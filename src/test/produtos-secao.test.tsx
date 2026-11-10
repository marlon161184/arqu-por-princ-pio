import { act, cleanup, waitFor, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { FrentesStack } from "@/components/produtos/FrentesStack";
import { DigitalProducts } from "@/components/produtos/DigitalProducts";
import { SiteHeader } from "@/components/site/SiteHeader";
import { frentes, produtosDigitais, comoEntregue } from "@/data/produtos";
import { clientes } from "@/data/clientes";
import { stackPos, stackOpacity, isFront, activeIndex } from "@/lib/stackMath";

afterEach(() => { cleanup(); vi.restoreAllMocks(); });

describe("Seção 05 Produtos", () => {
  it("stops automatic rotation until the manual pause is toggled off", () => {
    let frame: FrameRequestCallback | undefined;
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => { frame = callback; return 1; });
    vi.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});
    render(<FrentesStack paused={false} onOpen={() => {}} />);
    const card = screen.getByRole("button", { name: "Abrir a pasta de Estratégia" });
    const control = screen.getByRole("button", { pressed: false });
    const start = performance.now();
    const tick = (time: number) => act(() => { frame?.(time); });
    const initial = card.style.transform;
    tick(start + 100);
    expect(card.style.transform).not.toBe(initial);
    fireEvent.click(control);
    expect(control).toHaveAttribute("aria-pressed", "true");
    const stopped = card.style.transform;
    tick(start + 200);
    tick(start + 300);
    expect(card.style.transform).toBe(stopped);
    fireEvent.mouseEnter(card.parentElement?.parentElement ?? card);
    fireEvent.mouseLeave(card.parentElement?.parentElement ?? card);
    tick(start + 400);
    expect(card.style.transform).toBe(stopped);
    fireEvent.click(control);
    expect(control).toHaveAttribute("aria-pressed", "false");
    tick(start + 500);
    expect(card.style.transform).not.toBe(stopped);
  });

  it("disables resuming automatic rotation when reduced motion is requested", () => {
    const original = window.matchMedia;
    vi.spyOn(window, "matchMedia").mockImplementation((query) => ({ ...original(query), matches: true }));
    render(<FrentesStack paused={false} onOpen={() => {}} />);
    const control = screen.getByRole("button", { pressed: true });
    expect(control).toBeDisabled();
    fireEvent.click(control);
    expect(control).toHaveAttribute("aria-pressed", "true");
  });

  it("keeps anchors and chapter labels", () => {
    render(<DigitalProducts />);
    for (const l of ["05 Produtos", "05.1 Por frente", "05.2 IA & Inovação", "05.3 Clientes"]) expect(screen.getByText(l)).toBeInTheDocument();
    expect(document.getElementById("produtos")).not.toBeNull();
    expect(document.getElementById("ia-inovacao")).not.toBeNull();
    expect(screen.getByRole("heading", { name: "Doze produtos digitais que continuam em uso." })).toBeInTheDocument();
  });

  it("has four fronts with five products, twenty in total", () => {
    expect(frentes.map((f) => f.name)).toEqual(["Estratégia", "Pessoas", "Marcas", "Negócios"]);
    expect(frentes.every((f) => f.produtos.length === 5 && f.met.length === 4)).toBe(true);
  });

  it("keeps the twelve digital products with site numbering", () => {
    const nums = ["1.2", "1.3", "1.4", "2.1", "2.2", "2.4", "2.5", "3.2", "3.3", "4.2", "4.3", "4.5"];
    expect(frentes.flatMap((f) => f.produtos).filter((p) => p.digital).map((p) => p.num)).toEqual(nums);
    expect(produtosDigitais.map((p) => p.num)).toEqual(nums);
  });

  it("computes stack positions in [-2, 2) with a single front card", () => {
    expect(stackPos(0, 0)).toBe(0);
    expect(stackPos(3, 0)).toBe(-1);
    expect(stackPos(2, 0)).toBe(-2);
    expect(stackOpacity(2)).toBe(0);
    expect(stackOpacity(1)).toBe(1);
    for (const t of [0, 0.3, 1.7, 5.2]) expect([0, 1, 2, 3].filter((i) => isFront(stackPos(i, t)))).toHaveLength(1);
    expect(activeIndex(-1)).toBe(3);
  });

  it("opens the front folder from the front card and closes with Esc returning focus", () => {
    render(<DigitalProducts />);
    const card = screen.getByRole("button", { name: "Abrir a pasta de Estratégia" });
    card.focus();
    fireEvent.click(card);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    for (const h of ["Quando procurar", "Como o método se aplica", "Resultado esperado", "Cinco produtos"]) expect(within(dialog).getByText(h)).toBeInTheDocument();
    expect(within(within(dialog).getByRole("list", { name: "Produtos de Estratégia" })).getAllByRole("listitem")).toHaveLength(5);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(document.activeElement).toBe(card);
  });

  it("opens a digital product from the front folder with a back button", () => {
    render(<DigitalProducts />);
    fireEvent.click(screen.getByRole("button", { name: "Abrir a pasta de Estratégia" }));
    fireEvent.click(within(screen.getByRole("dialog")).getByRole("button", { name: /OKRs e desdobramento de metas/ }));
    expect(screen.getByRole("heading", { name: "Meta só orienta quando chega a cada líder." })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Voltar para a frente" }));
    expect(screen.getByRole("heading", { name: "Estratégia é a decisão que cabe em uma rotina." })).toBeInTheDocument();
  });

  it("lists twelve index rows and opens a product folder with three delivery lines", () => {
    render(<DigitalProducts />);
    const rows = frentes.flatMap((f) => within(screen.getByRole("list", { name: `Produtos digitais de ${f.name}` })).getAllByRole("button"));
    expect(rows).toHaveLength(12);
    fireEvent.click(rows[11]!);
    const dialog = screen.getByRole("dialog");
    expect(within(within(dialog).getByRole("list", { name: "Como é entregue" })).getAllByRole("listitem")).toHaveLength(3);
    expect(within(dialog).getByRole("link", { name: "Ver em uso" })).toHaveAttribute("href", "#contato");
    expect(comoEntregue(produtosDigitais[0]!)).toHaveLength(3);
  });

  it("brings a front chosen in the list forward", async () => {
    render(<DigitalProducts />);
    const marcas = within(screen.getByRole("list", { name: "Frentes" })).getByRole("button", { name: /Marcas/ });
    fireEvent.click(marcas);
    await waitFor(() => expect(screen.getByRole("button", { name: "Abrir a pasta de Marcas" })).toBeInTheDocument(), { timeout: 1500 });
  });

  it("retains the contact invitation", () => {
    render(<DigitalProducts />);
    expect(screen.getByRole("link", { name: "Conversar sobre um produto" })).toHaveAttribute("href", "#contato");
  });

  it("shows the supplied white logos in their company groups", () => {
    render(<DigitalProducts />);
    expect(screen.getAllByRole("img")).toHaveLength(4);
    for (const logo of screen.getAllByRole("img", { name: "Newe Urbanismo" })) {
      expect(logo).toHaveAttribute("src", expect.stringContaining("newe-logo-branco.png"));
      expect(logo).toHaveAttribute("height", "72");
    }
    for (const logo of screen.getAllByRole("img", { name: "Hyndra Participações" })) {
      expect(logo).toHaveAttribute("src", expect.stringContaining("hyndra-logo-branco.png"));
      expect(logo).toHaveAttribute("height", "64");
    }
    expect(clientes.map((grupo) => [grupo.id, grupo.itens.length])).toEqual([["hyndra-e-newe", 7], ["hyndra", 1], ["newe", 4]]);
  });

  it("renders all twelve client items with their full descriptions", () => {
    render(<DigitalProducts />);
    expect(screen.getAllByRole("term")).toHaveLength(12);
    for (const grupo of clientes) for (const item of grupo.itens) {
      expect(screen.getByText(item.nome, { selector: "dt" }).nextElementSibling?.textContent).toBe(item.descricao);
    }
  });

  it("keeps Produtos in the menu", () => {
    render(<SiteHeader />);
    expect(screen.getByRole("link", { name: "Produtos" })).toHaveAttribute("href", "#produtos");
  });
});
