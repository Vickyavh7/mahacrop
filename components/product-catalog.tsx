"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PDFViewer } from "./pdf-viewer"

export function ProductCatalog() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const productCategories = [
    {
      name: "Frozen Vegetables",
      items: ["Sweet Corn", "Green Peas", "Mixed Vegetables", "Carrots", "Green Beans", "Broccoli"],
      lot: "VEG",
      count: "12+ varieties",
      popular: true,
    },
    {
      name: "Frozen Fruits",
      items: ["Mango Pulp", "Strawberry", "Mixed Fruit", "Pineapple", "Guava", "Pomegranate"],
      lot: "FRT",
      count: "15+ varieties",
      popular: false,
    },
    {
      name: "Fruit Pulps",
      items: ["Mango Pulp", "Guava Pulp", "Mixed Fruit Pulp", "Organic Pulps"],
      lot: "PLP",
      count: "8+ varieties",
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-icefield relative">
      <div className="container mx-auto px-6 relative z-10">
        <p className="section-kicker mb-3">Chamber inventory</p>
        <h2 className="font-display text-4xl sm:text-5xl uppercase text-chamber mb-4">Product lots</h2>
        <p className="text-lg text-ink/80 max-w-2xl mb-12">
          IQF lines packed for export kitchens. Specs live in the brochure; the freeze lives in the chamber.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {productCategories.map((category, index) => (
            <article
              key={category.lot}
              className="border border-chamber/20 bg-white p-6"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="crate-stamp text-[11px] text-kernel bg-chamber px-2 py-1">LOT {category.lot}</span>
                {category.popular && <span className="crate-stamp text-[10px] text-pulp">Lead SKU</span>}
              </div>
              <h3 className="font-display text-2xl uppercase text-chamber mb-1">{category.name}</h3>
              <p className="crate-stamp text-[10px] text-steel mb-6">{category.count}</p>
              <ul className="space-y-2 mb-6">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink/80">
                    <span className="h-px w-4 bg-kernel" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                size="sm"
                className={`w-full rounded-none border-chamber/30 crate-stamp text-[11px] ${hoveredCard === index ? "bg-chamber text-kernel" : "bg-icefield text-chamber"}`}
              >
                View details
              </Button>
            </article>
          ))}
        </div>

        <PDFViewer
          pdfUrl="/documents/mahacrop-brochure.pdf"
          title="Complete Product Brochure"
          description="Download the catalog: specifications, packing, and nutrition for the frozen line."
          fileSize="2.5 MB"
        />
      </div>
    </section>
  )
}
