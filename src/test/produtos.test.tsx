import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { suites } from "@/data/produtos";
import { ProductIndex } from "@/components/produtos/ProductIndex";

afterEach(cleanup);

function renderIndexes() {
  render(<>{suites.map((suite) => <ProductIndex key={suite.id} suite={suite} />)}</>);
}

describe("Digital product portfolio rules", () => {
  it("contains two suites of twelve products, twenty-four total", () => {
    expect(suites).toHaveLength(2);
    expect(suites.map((suite) => suite.products.length)).toEqual([12, 12]);
    expect(suites.flatMap((suite) => suite.products)).toHaveLength(24);
  });

  it("starts with the first product open in each suite", () => {
    renderIndexes();
    expect(screen.getByRole("button", { name: "Nosso Jeito de Ser" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: "Payroll Intelligence" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getAllByRole("button", { expanded: true })).toHaveLength(2);
  });

  it("keeps at most one product open per suite without closing the other suite", () => {
    renderIndexes();
    fireEvent.click(screen.getByRole("button", { name: "All Aboard" }));
    expect(screen.getByRole("button", { name: "Nosso Jeito de Ser" })).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByRole("button", { name: "All Aboard" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: "Payroll Intelligence" })).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(screen.getByRole("button", { name: "Job Hub" }));
    expect(screen.getByRole("button", { name: "Payroll Intelligence" })).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByRole("button", { name: "Job Hub" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: "All Aboard" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getAllByRole("button", { expanded: true })).toHaveLength(2);
  });
});