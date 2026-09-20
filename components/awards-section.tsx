import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

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
    <section className="py-20 bg-icefield relative">
      <div className="container mx-auto px-6 relative z-10 lg:pr-28">
        <p className="section-kicker mb-3">Marks of work</p>
        <h2 className="font-display text-4xl sm:text-5xl uppercase text-chamber mb-10">Awards</h2>

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
