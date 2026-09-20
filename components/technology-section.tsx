import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function TechnologySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">Modern Agricultural Technology</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Leveraging cutting-edge technology and AI-driven solutions to revolutionize farming practices and ensure
            optimal crop yields.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-56 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/ai-farming-interface.png"
              alt="AI-powered agricultural interface"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-green-800">Smart Farming Solutions</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our advanced agricultural technology platform integrates AI, IoT sensors, and data analytics to provide
              farmers with real-time insights and automated solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-white shadow-md">
                <CardContent className="p-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">AI Analytics</h4>
                  <p className="text-sm text-gray-600">Data-driven crop monitoring and yield prediction</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md">
                <CardContent className="p-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Smart Irrigation</h4>
                  <p className="text-sm text-gray-600">Automated water management systems</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
