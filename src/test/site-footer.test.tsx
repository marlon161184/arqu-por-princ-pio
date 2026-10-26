import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

// The footer's only router dependency is the client-area link; Link is replaced by a
// plain anchor so the footer renders without a router instance.
vi.mock("@tanstack/react-router", () => ({
  Link: ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => (
    <a href={to} className={className}>{children}</a>
  ),
}));

import { SiteFooter } from "@/components/site/SiteFooter";

const PDF_HREF = "/downloads/arque-brandbook-design-system.pdf";

afterEach(cleanup);

describe("Site footer", () => {
  it("offers the brandbook as a discreet PDF download in ultramar-claro", () => {
    render(<SiteFooter />);
    const link = screen.getByRole("link", {
      name: "Baixar o brandbook e design system da Arquê (PDF, 22 páginas)",
    });
    expect(link).toHaveAttribute("href", PDF_HREF);
    expect(link).toHaveAttribute("download", "arque-brandbook-design-system.pdf");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link.getAttribute("rel")).toContain("noopener");
    expect(link).toHaveTextContent("BRANDBOOK E DESIGN SYSTEM · PDF");
    expect(link.className).toContain("text-ultramar-claro");
  });

  it("keeps the enxoval and client-area links pointing where they did", () => {
    render(<SiteFooter />);
    expect(screen.getByRole("link", { name: "Enxoval" })).toHaveAttribute("href", "/enxoval");
    expect(screen.getByRole("link", { name: "Conceito · Área do cliente" })).toHaveAttribute(
      "href",
      "/conceito/area-do-cliente",
    );
  });

  it("serves a real 22-page PDF from the project's static downloads", () => {
    const file = path.join(process.cwd(), "public", "downloads", "arque-brandbook-design-system.pdf");
    expect(existsSync(file)).toBe(true);
    const bytes = readFileSync(file);
    expect(bytes.subarray(0, 5).toString()).toBe("%PDF-");
    expect(bytes.length).toBeGreaterThan(400_000);
    expect(bytes.toString("latin1")).toContain("/Count 22");
  });
});
