import { useEffect, useRef, type ReactNode, type ElementType } from "react";

/** Chevron "^" de traço reto. rotate: 0 = para cima, 90 = para a direita. */
export function Chevron({ size = 12, rotate = 0, className = "" }: { size?: number; rotate?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      aria-hidden="true"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <polyline points="1,9 6,3 11,9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter" />
    </svg>
  );
}

export function Reveal({ children, as: Tag = "div", className = "" }: { children: ReactNode; as?: ElementType; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } }),
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>;
}

export function Label({ children, className = "text-ink-muted" }: { children: ReactNode; className?: string }) {
  return <p className={`label-mono ${className}`}>{children}</p>;
}
