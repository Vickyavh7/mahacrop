import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function TechnologySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:pr-28">
        <p className="section-kicker mb-3">Line</p>
        <h2 className="font-display text-4xl sm:text-5xl uppercase text-chamber mb-10">Packhouse intelligence</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-56 sm:h-80 lg:h-96 overflow-hidden border border-steel/40">
            <Image
              src="/images/ai-farming-interface.png"
              alt="AI-powered agricultural interface"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="font-display text-3xl uppercase text-chamber">Sensors on the crop, not just the story</h3>
            <p className="text-lg text-ink/80 leading-relaxed">
              AI, IoT, and yield data sit with the farmer before the IQF tunnel. The freeze is only as honest as the
              field.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="rounded-none border-chamber/15 shadow-none">
                <CardContent className="p-4">
                  <p className="crate-stamp text-[10px] text-kernel mb-2">Field</p>
                  <h4 className="font-semibold text-chamber mb-1">AI analytics</h4>
                  <p className="text-sm text-ink/70">Crop watch and yield prediction</p>
                </CardContent>
              </Card>
              <Card className="rounded-none border-chamber/15 shadow-none">
                <CardContent className="p-4">
                  <p className="crate-stamp text-[10px] text-kernel mb-2">Water</p>
                  <h4 className="font-semibold text-chamber mb-1">Smart irrigation</h4>
                  <p className="text-sm text-ink/70">Timed to the plot, not the calendar</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
