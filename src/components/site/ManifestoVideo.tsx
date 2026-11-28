import { useRef, useState } from "react";
import { Chevron } from "@/components/site/primitives";
import manifestoVideo from "@/assets/arque-manifesto-v6-referencia-pin-62s.mp4.asset.json";
import manifestoPoster from "@/assets/arque-manifesto-poster.webp.asset.json";

const TRANSCRICAO = "Antes da estratégia, existe um princípio. arquê vem do grego, arché. O princípio, aquilo de onde algo parte, e o que o sustenta. Quando ele está claro, decidir é mais rápido. Quando está implícito, vira ruído. Nenhuma frente se sustenta sozinha. Estratégia sem pessoas não se move. Pessoas sem marca não se reconhecem. Marca sem negócio não se sustenta. Negócio sem estratégia não escolhe. Por isso integramos estratégia, pessoas, marcas e negócios. Compreender o princípio. Conectar pessoas e estrutura. Transformar em resultado. E deixamos produtos digitais que continuam em uso. Estrutura é a forma que o princípio assume. Por princípio.";

export function ManifestoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const assistir = async () => {
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    try {
      await video.play();
    } catch {
      setStarted(false);
    }
  };

  return (
    <div className="w-full max-w-80 lg:ml-auto">
      <div className="relative aspect-[9/16] w-full overflow-hidden border border-concreto bg-carvao">
        <video
          ref={videoRef}
          className="manifesto-video h-full w-full object-cover"
          src={manifestoVideo.url}
          poster={manifestoPoster.url}
          width={1080}
          height={1920}
          preload="none"
          controls={started}
          playsInline
          aria-label="Manifesto da Arquê em vídeo"
        />
        {!started && (
          <button
            type="button"
            onClick={assistir}
            className="btn-primary label-mono manifesto-assistir absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            Assistir <Chevron rotate={90} />
          </button>
        )}
      </div>
      <details className="manifesto-transcricao mt-6 border-t border-concreto pt-4">
        <summary className="label-mono flex min-h-11 cursor-pointer items-center justify-between gap-4 text-concreto">
          Ler o texto do vídeo
          <Chevron className="manifesto-transcricao-chevron shrink-0" />
        </summary>
        <p className="mt-4 text-sm leading-6 text-nevoa">{TRANSCRICAO}</p>
      </details>
    </div>
  );
}
