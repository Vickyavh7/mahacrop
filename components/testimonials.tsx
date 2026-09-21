import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Patel",
      company: "Global Foods Import Ltd.",
      location: "Mumbai",
      text: "Mahacrop's frozen vegetables are of exceptional quality. Their consistency in supply and adherence to international standards makes them our preferred supplier.",
    },
    {
      name: "Sarah Johnson",
      company: "Fresh Market Chain",
      location: "Dubai, UAE",
      text: "We've been importing from Mahacrop for 2 years. Their frozen fruits maintain perfect texture and taste. Excellent packaging and timely delivery.",
    },
    {
      name: "Amit Sharma",
      company: "Restaurant Chain Owner",
      location: "Delhi",
      text: "MAHA FRESH ready meals have transformed our kitchen operations. Authentic taste, consistent quality, and great shelf life. Highly recommended!",
    },
  ]

  return (
    <section className="py-20 bg-icefield">
      <div className="container mx-auto px-6">
        <p className="section-kicker mb-3">Buyers</p>
        <h2 className="font-display text-4xl sm:text-5xl uppercase text-chamber mb-10">From the other dock</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="rounded-none border-chamber/15 shadow-none bg-white">
              <CardContent className="p-6">
                <p className="text-ink/80 mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-display uppercase text-chamber">{testimonial.name}</p>
                <p className="text-sm text-ink/60">{testimonial.company}</p>
                <p className="crate-stamp text-[10px] text-kernel mt-2">{testimonial.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
