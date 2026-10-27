import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { DigitalProducts } from "@/components/produtos/DigitalProducts";
import { SiteHeader } from "@/components/site/SiteHeader";
import { frentes } from "@/data/produtosPorFrente";

afterEach(cleanup);

describe("Seção 05 Produtos", () => {
  it("renders both chapters", () => {
    render(<DigitalProducts />);
    expect(screen.getByText("05.1 Por frente")).toBeInTheDocument();
    expect(screen.getByText("05.2 IA & Inovação")).toBeInTheDocument();
    expect(document.getElementById("ia-inovacao")).not.toBeNull();
    expect(document.getElementById("produtos")).not.toBeNull();
  });

  it("lists four fronts with four products each", () => {
    expect(frentes.map((f) => f.name)).toEqual(["Estratégia", "Pessoas", "Marcas", "Negócios"]);
    render(<DigitalProducts />);
    for (const f of frentes) {
      expect(within(screen.getByRole("list", { name: `Produtos de ${f.name}` })).getAllByRole("listitem")).toHaveLength(4);
    }
  });

  it("keeps the sixteen consultancy products without digital-version navigation", () => {
    render(<DigitalProducts />);
    expect(frentes.flatMap((frente) => frente.produtos)).toHaveLength(16);
    for (const frente of frentes) {
      expect(within(screen.getByRole("list", { name: `Produtos de ${frente.name}` })).queryAllByRole("link")).toHaveLength(0);
    }
  });

  it("removes digital product accordions and retains the contact invitation", () => {
    render(<DigitalProducts />);
    expect(screen.queryAllByRole("button", { expanded: false })).toHaveLength(0);
    expect(screen.queryAllByRole("button", { expanded: true })).toHaveLength(0);
    expect(screen.getByRole("link", { name: "Conversar sobre um produto" })).toHaveAttribute("href", "#contato");
  });

  it("shows only the supplied Newe client logo without a Hyndra placeholder", () => {
    render(<DigitalProducts />);
    expect(screen.getAllByRole("img")).toHaveLength(1);
    expect(screen.getByRole("img", { name: "Newe Urbanismo" })).toHaveAttribute("src", expect.stringContaining("newe-logo-negativo.png"));
    expect(screen.queryByRole("img", { name: /Hyndra/ })).not.toBeInTheDocument();
  });

  it("keeps Produtos in the menu", () => {
    render(<SiteHeader />);
    expect(screen.getByRole("link", { name: "Produtos" })).toHaveAttribute("href", "#produtos");
  });
});
