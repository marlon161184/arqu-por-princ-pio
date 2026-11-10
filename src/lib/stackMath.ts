/** Posição relativa do cartão i na pilha de n cartões, normalizada em [-2, 2). */
export function stackPos(i: number, t: number, n = 4): number {
  const half = n / 2;
  return ((((i - t) % n) + n + half) % n) - half;
}
export const stackOpacity = (p: number) => Math.min(1, Math.max(0, (2 - Math.abs(p)) / 0.6));
export const isFront = (p: number) => Math.abs(p) < 0.5;
export function stackTransform(p: number, step: number): string {
  const a = Math.abs(p);
  return `translate3d(${p * -18}px, ${p * step}px, ${-a * 70}px) rotateZ(${p * -3}deg) scale(${1 - a * 0.05})`;
}
export const activeIndex = (t: number, n = 4) => ((Math.round(t) % n) + n) % n;
