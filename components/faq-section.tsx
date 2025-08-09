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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get answers to common questions about our products and services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white shadow-md">
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
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
