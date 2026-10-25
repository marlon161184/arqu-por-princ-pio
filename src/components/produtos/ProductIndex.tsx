import { useState } from "react";
import type { Suite } from "@/data/produtos";
import { ProductRow } from "./ProductRow";

export function ProductIndex({ suite }: { suite: Suite }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return <ol aria-label={`Produtos ${suite.id === "nexus" ? "NEXUS" : "People Analytics"}`} className="mt-12 border-b border-linha-escura">
    {suite.products.map((product, index) => <ProductRow key={product.name} product={product} suiteId={suite.id} index={index} open={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? null : index)} />)}
  </ol>;
}