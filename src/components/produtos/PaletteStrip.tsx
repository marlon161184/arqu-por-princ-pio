import type { Suite } from "@/data/produtos";

export function PaletteStrip({ palette }: { palette: Suite["palette"] }) {
  return <ul className="palette-grid">{palette.map((color) => (
    <li key={color.hex} className="min-w-0">
      <div className="palette-square" style={{ backgroundColor: color.hex }} aria-hidden="true" />
      <p className="label-mono mt-3 break-words text-nevoa">{color.name}</p>
      <p className="palette-hex mt-1 text-nevoa">{color.hex}</p>
    </li>
  ))}</ul>;
}