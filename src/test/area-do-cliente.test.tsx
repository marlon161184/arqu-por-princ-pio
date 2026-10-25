import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ClientAreaPrototype } from "@/components/conceito/ClientAreaPrototype";
import { conceptProjects, filterConceptDocuments } from "@/data/area-do-cliente";

afterEach(() => { cleanup(); vi.unstubAllGlobals(); });
function renderPrototype() {
  vi.stubGlobal("ResizeObserver", class { observe() {} disconnect() {} });
  render(<ClientAreaPrototype />);
}

describe("Client concept rules", () => {
  it("has the two specified project completion values", () => {
    expect(conceptProjects.map((project) => project.progress)).toEqual([45, 70]);
  });
  it("filters all six documents into three contracts and three reports", () => {
    expect(filterConceptDocuments("Todos")).toHaveLength(6);
    expect(filterConceptDocuments("Contratos").map((doc) => doc.title)).toEqual(["Proposta de atuação", "Contrato de prestação de serviços", "Nota fiscal · outubro"]);
    expect(filterConceptDocuments("Relatórios").map((doc) => doc.title)).toEqual(["Relatório de mercado", "Roteiro das entrevistas", "Pesquisa de clima · resultados"]);
  });
  it("opens the first project by default and remembers the last selected project", () => {
    renderPrototype();
    fireEvent.click(screen.getByRole("button", { name: "Entrar no protótipo da área do cliente" }));
    const nav = within(screen.getByRole("navigation", { name: "Navegação do protótipo" }));
    fireEvent.click(nav.getByRole("button", { name: "Projeto" }));
    expect(screen.getByRole("heading", { level: 2, name: conceptProjects[0].name })).toBeInTheDocument();
    fireEvent.click(nav.getByRole("button", { name: "Início" }));
    fireEvent.click(screen.getByRole("button", { name: "Abrir projeto 02: Cultura e lideranças" }));
    fireEvent.click(nav.getByRole("button", { name: "Documentos" }));
    fireEvent.click(nav.getByRole("button", { name: "Projeto" }));
    expect(screen.getByRole("heading", { level: 2, name: "Cultura e lideranças" })).toBeInTheDocument();
  });
});