import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FounderPortrait } from "@/components/site/FounderPortrait";

describe("FounderPortrait", () => {
  it("com src, renderiza a foto com o alt e mantém o monograma sobre o retrato", () => {
    const { container } = render(
      <FounderPortrait src="/foto.webp" alt="Marlon Silva, fundador da Arquê" width={1087} height={1446} />,
    );
    const img = screen.getByAltText("Marlon Silva, fundador da Arquê");
    expect(img).toHaveAttribute("src", "/foto.webp");
    expect(img).toHaveAttribute("width", "1087");
    expect(img).toHaveAttribute("height", "1446");
    expect(img.className).toContain("object-top");
    expect(container.querySelector("svg")).not.toBeNull();
  });

  it("sem src, mantém o monograma grande como fallback e não renderiza img", () => {
    const { container } = render(<FounderPortrait />);
    expect(container.querySelector("img")).toBeNull();
    expect(container.querySelector("svg")).not.toBeNull();
  });
});
