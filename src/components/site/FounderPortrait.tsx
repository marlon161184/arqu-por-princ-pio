import { ArqueMonogram } from "@/components/ArqueWordmark";

export function FounderPortrait({ src, alt = "Marlon Silva" }: { src?: string; alt?: string }) {
  return (
    <div className="relative aspect-[4/5] w-full bg-carvao">
      {src ? (
        <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-branco [--wm-accent:var(--ultramar-claro)]">
          <ArqueMonogram className="w-[40%]" />
        </div>
      )}
    </div>
  );
}
