import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { DigitalProducts } from "@/components/produtos/DigitalProducts";
import { SiteHeader } from "@/components/site/SiteHeader";
import { frentes } from "@/data/produtosPorFrente";
import { clientes } from "@/data/clientes";

afterEach(cleanup);

describe("Seção 05 Produtos", () => {
  it("renders both chapters", () => {
    render(<DigitalProducts />);
    expect(screen.getByText("05.1 Por frente")).toBeInTheDocument();
    expect(screen.getByText("05.2 IA & Inovação")).toBeInTheDocument();
    expect(document.getElementById("ia-inovacao")).not.toBeNull();
    expect(document.getElementById("produtos")).not.toBeNull();
  });

  it("lists four fronts with five products each", () => {
    expect(frentes.map((f) => f.name)).toEqual(["Estratégia", "Pessoas", "Marcas", "Negócios"]);
    render(<DigitalProducts />);
    for (const f of frentes) {
      expect(within(screen.getByRole("list", { name: `Produtos de ${f.name}` })).getAllByRole("listitem")).toHaveLength(5);
    }
  });

  it("keeps the twenty consultancy products without digital-version navigation", () => {
    render(<DigitalProducts />);
    expect(frentes.flatMap((frente) => frente.produtos)).toHaveLength(20);
    for (const frente of frentes) {
      expect(within(screen.getByRole("list", { name: `Produtos de ${frente.name}` })).queryAllByRole("link")).toHaveLength(0);
    }
  });

  it("keeps exactly the twelve designated digital products", () => {
    expect(frentes.flatMap((frente) => frente.produtos).filter((produto) => produto.digital).map((produto) => produto.name)).toEqual([
      "OKRs e desdobramento de metas", "Escritório de transformação", "Processos e indicadores",
      "Cultura e proposta de valor ao colaborador", "Cargos, salários e remuneração estratégica",
      "Universidade corporativa e onboarding", "People analytics", "Brandbook e design system",
      "Enxoval e aplicação de marca", "Estratégia comercial e pipeline", "Funil e nutrição de clientes", "Painel de performance",
    ]);
  });

  it("starts with the first mobile front open and opens only one at a time", () => {
    render(<DigitalProducts />);
    const estrategia = screen.getByRole("button", { name: "Estratégia" });
    const pessoas = screen.getByRole("button", { name: "Pessoas" });
    expect(estrategia).toHaveAttribute("aria-expanded", "true");
    expect(screen.getAllByRole("button", { expanded: true })).toHaveLength(1);
    fireEvent.click(pessoas);
    expect(estrategia).toHaveAttribute("aria-expanded", "false");
    expect(pessoas).toHaveAttribute("aria-expanded", "true");
    expect(screen.getAllByRole("button", { expanded: true })).toHaveLength(1);
    fireEvent.click(pessoas);
    expect(screen.queryAllByRole("button", { expanded: true })).toHaveLength(0);
  });

  it("retains the contact invitation without restoring suite navigation", () => {
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
    expect(clientes.map((grupo) => [grupo.id, grupo.itens.length])).toEqual([
      ["hyndra-e-newe", 7], ["hyndra", 1], ["newe", 4],
    ]);
  });

  it("renders all twelve client items with their full descriptions", () => {
    render(<DigitalProducts />);
    expect(screen.getAllByRole("term")).toHaveLength(12);
    expect(screen.getAllByRole("definition")).toHaveLength(12);
    for (const grupo of clientes) {
      for (const item of grupo.itens) {
        const term = screen.getByText(item.nome, { selector: "dt" });
        expect(term.nextElementSibling?.textContent).toBe(item.descricao);
      }
    }
  });

  it("keeps Produtos in the menu", () => {
    render(<SiteHeader />);
    expect(screen.getByRole("link", { name: "Produtos" })).toHaveAttribute("href", "#produtos");
  });
});
