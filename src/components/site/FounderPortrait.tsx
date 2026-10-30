import { ArqueMonogram } from "@/components/ArqueWordmark";

type FounderPortraitProps = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy";
};

export function FounderPortrait({ src, alt = "Marlon Silva", width, height, loading = "lazy" }: FounderPortraitProps) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-carvao">
      {src ? (
        <>
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 flex aspect-square w-[22%] items-center justify-center bg-carvao text-branco [--wm-accent:var(--ultramar-claro)]"
          >
            <ArqueMonogram className="w-[55%]" />
          </div>
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-branco [--wm-accent:var(--ultramar-claro)]">
          <ArqueMonogram className="w-[40%]" />
        </div>
      )}
    </div>
  );
}
