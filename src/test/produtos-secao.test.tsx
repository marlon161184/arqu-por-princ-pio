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

  it("shows eight digital badges, all linking to #ia-inovacao", () => {
    render(<DigitalProducts />);
    const badges = screen.getAllByRole("link", { name: /Versão digital/i });
    expect(badges).toHaveLength(8);
    badges.forEach((b) => expect(b).toHaveAttribute("href", "#ia-inovacao"));
  });

  it("still renders the 24 digital products", () => {
    render(<DigitalProducts />);
    expect(screen.getAllByRole("button", { expanded: false }).length + screen.getAllByRole("button", { expanded: true }).length).toBe(24);
  });

  it("keeps Produtos in the menu", () => {
    render(<SiteHeader />);
    expect(screen.getByRole("link", { name: "Produtos" })).toHaveAttribute("href", "#produtos");
  });
});
