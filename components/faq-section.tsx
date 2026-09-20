"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is your minimum order quantity for bulk purchases?",
      answer:
        "Our minimum order quantity varies by product. For frozen vegetables, it's typically 1000 kg, while for fruit pulps, it's 500 kg. We're flexible for regular customers and can discuss custom requirements.",
    },
    {
      question: "Do you provide international shipping and export services?",
      answer:
        "Yes, we export to 15+ countries worldwide. We handle all export documentation, customs clearance, and provide temperature-controlled shipping to ensure product quality during transit.",
    },
    {
      question: "What certifications do your products have?",
      answer:
        "Our products are certified with ISO 22000:2018, HACCP, Organic (NPOP & NOP), and we have government export licenses. All products undergo rigorous quality testing in our state-of-the-art laboratory.",
    },
    {
      question: "How do you maintain the quality of frozen products?",
      answer:
        "We use advanced IQF (Individual Quick Freezing) technology, maintain cold chain from farm to delivery, and conduct regular quality checks. Our products retain nutritional value and natural taste.",
    },
    {
      question: "Can you provide custom packaging and private labeling?",
      answer:
        "We offer custom packaging solutions, private labeling, and can adapt our products to meet specific market requirements and customer preferences.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:pr-28">
        <p className="section-kicker mb-3">Spec questions</p>
        <h2 className="font-display text-4xl sm:text-5xl uppercase text-chamber mb-10">Ask the packhouse</h2>

        <div className="max-w-4xl space-y-px bg-chamber/10">
          {faqs.map((faq, index) => (
            <Card key={index} className="rounded-none border-0 shadow-none bg-white">
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-icefield transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-chamber pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-kernel flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-kernel flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
