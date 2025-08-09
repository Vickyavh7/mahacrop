import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Trophy } from 'lucide-react'

interface AwardItem {
  title: string
  description: string
  imageSrc: string
  year?: string
}

export function AwardsSection() {
  const awards: AwardItem[] = [
    {
      title: "Maharashtra Udyog Gaurav Puraskar 2025",
      description: "Leadership in Agro Food Industry",
      imageSrc: "/images/award-maharashtra-udhyog-gaurav.jpeg",
      year: "2025",
    },
    {
      title: "INDIA 5000 BEST MSME AWARDS",
      description: "Nomination for Quality Excellence",
      imageSrc: "/images/award-msme-nomination.jpeg",
      year: "2024",
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-200 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-200 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 rounded-full mb-6">
            <Trophy className="w-5 h-5 text-yellow-600" />
            <span className="text-orange-800 font-semibold">Our Achievements</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-800">Recognized for </span>
            <span className="text-yellow-600">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Proudly acknowledged for our contributions to the agricultural and food industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
            >
              <CardContent className="p-6 text-center">
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center">
                  <Image
                    src={award.imageSrc || "/placeholder.svg"}
                    alt={award.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-800 transition-colors duration-300">
                  {award.title}
                </h3>
                <p className="text-sm font-medium text-gray-600 mb-3">
                  {award.description}
                </p>
                {award.year && (
                  <p className="text-xs text-gray-500">Awarded: {award.year}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
