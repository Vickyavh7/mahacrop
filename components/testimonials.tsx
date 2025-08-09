import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Patel",
      company: "Global Foods Import Ltd.",
      location: "Mumbai",
      rating: 5,
      text: "Mahacrop's frozen vegetables are of exceptional quality. Their consistency in supply and adherence to international standards makes them our preferred supplier.",
    },
    {
      name: "Sarah Johnson",
      company: "Fresh Market Chain",
      location: "Dubai, UAE",
      rating: 5,
      text: "We've been importing from Mahacrop for 2 years. Their frozen fruits maintain perfect texture and taste. Excellent packaging and timely delivery.",
    },
    {
      name: "Amit Sharma",
      company: "Restaurant Chain Owner",
      location: "Delhi",
      rating: 5,
      text: "MAHA FRESH ready meals have transformed our kitchen operations. Authentic taste, consistent quality, and great shelf life. Highly recommended!",
    },
  ]

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Trusted by businesses worldwide for quality, reliability, and exceptional service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                  <p className="text-sm text-green-600">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
