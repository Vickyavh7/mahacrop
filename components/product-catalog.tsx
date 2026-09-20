"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PDFViewer } from "./pdf-viewer"
import { Sparkles, TrendingUp, Award, Globe } from "lucide-react"

export function ProductCatalog() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const productCategories = [
    {
      name: "Frozen Vegetables",
      items: ["Sweet Corn", "Green Peas", "Mixed Vegetables", "Carrots", "Green Beans", "Broccoli"],
      icon: "🥕",
      gradient: "from-green-400 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      count: "12+ varieties",
      popular: true,
    },
    {
      name: "Frozen Fruits",
      items: ["Mango Pulp", "Strawberry", "Mixed Fruit", "Pineapple", "Guava", "Pomegranate"],
      icon: "🍓",
      gradient: "from-red-400 to-pink-600",
      bgGradient: "from-red-50 to-pink-100",
      count: "15+ varieties",
      popular: false,
    },
    {
      name: "Fruit Pulps",
      items: ["Mango Pulp", "Guava Pulp", "Mixed Fruit Pulp", "Organic Pulps"],
      icon: "🥭",
      gradient: "from-orange-400 to-yellow-600",
      bgGradient: "from-orange-50 to-yellow-100",
      count: "8+ varieties",
      popular: false,
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-green-50"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200/20 to-green-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-green-200 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold">Premium Product Range</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-800 via-green-600 to-green-800 bg-clip-text text-transparent">
              Product Catalog
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-orange-500 mx-auto mb-8 rounded-full"></div>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive range of premium frozen foods and agricultural products, crafted with excellence
            and delivered with care to customers worldwide.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12">
            {[
              { icon: Award, label: "Premium Quality", value: "ISO Certified" },
              { icon: Globe, label: "Global Reach", value: "15+ Countries" },
              { icon: TrendingUp, label: "Growing Fast", value: "500+ Clients" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-sm font-semibold text-gray-800">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Product Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {productCategories.map((category, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br ${category.bgGradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular Badge */}
              {category.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Popular
                  </div>
                </div>
              )}

              <CardContent className="p-6 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full transform translate-x-10 -translate-y-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full transform -translate-x-8 translate-y-8"></div>
                </div>

                <div className="relative z-10">
                  {/* Icon with Animation */}
                  <div className="text-center mb-6">
                    <div
                      className={`text-6xl mb-4 transform transition-all duration-500 ${hoveredCard === index ? "scale-125 rotate-12" : ""}`}
                    >
                      {category.icon}
                    </div>
                    <div
                      className={`w-16 h-1 bg-gradient-to-r ${category.gradient} mx-auto rounded-full mb-4 transition-all duration-500 ${hoveredCard === index ? "w-24" : ""}`}
                    ></div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600 font-medium">{category.count}</p>
                  </div>

                  {/* Items List with Stagger Animation */}
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className={`flex items-center gap-3 transform transition-all duration-300 ${hoveredCard === index ? "translate-x-2" : ""}`}
                        style={{ transitionDelay: `${itemIndex * 50}ms` }}
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-300 ${hoveredCard === index ? "scale-150" : ""}`}
                        ></div>
                        <span className="text-sm text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Button */}
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`w-full bg-white/80 backdrop-blur-sm border-white/50 hover:bg-white transition-all duration-300`}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced PDF Viewer Section */}
        <div className="mb-12">
          <PDFViewer
            pdfUrl="/documents/mahacrop-brochure.pdf"
            title="Complete Product Brochure"
            description="Download our comprehensive product catalog containing detailed information about all our frozen foods, specifications, packaging options, and nutritional information."
            fileSize="2.5 MB"
          />
        </div>
      </div>
    </section>
  )
}
