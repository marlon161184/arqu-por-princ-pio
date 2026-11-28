import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ManifestoVideo } from "@/components/site/ManifestoVideo";

describe("ManifestoVideo", () => {
  it("só reproduz por ação, sem autoplay ou loop, e oferece a transcrição", async () => {
    const play = vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
    const { container } = render(<ManifestoVideo />);
    const video = container.querySelector("video");

    expect(video).not.toBeNull();
    expect(video).not.toHaveAttribute("autoplay");
    expect(video).not.toHaveAttribute("loop");
    expect(video).not.toHaveAttribute("muted");
    expect(video).toHaveAttribute("preload", "none");
    expect(video).toHaveAttribute("poster");

    const botao = screen.getByRole("button", { name: "Assistir" });
    expect(botao).toBeInTheDocument();
    expect(screen.getByText("Ler o texto do vídeo")).toBeInTheDocument();
    expect(screen.getByText(/Antes da estratégia, existe um princípio/)).toBeInTheDocument();

    fireEvent.click(botao);
    expect(play).toHaveBeenCalledOnce();
    expect(video).toHaveAttribute("controls");
    expect(screen.queryByRole("button", { name: "Assistir" })).not.toBeInTheDocument();
    play.mockRestore();
  });
});
