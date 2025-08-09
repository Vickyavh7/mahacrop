import Image from "next/image"
import { Globe } from 'lucide-react'

export function GlobalReachMap() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-green-200 px-4 py-2 rounded-full mb-6">
            <Globe className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold">Our Global Footprint</span>
          </div>

          <h2 className="text-4xl font-bold text-green-800 mb-4">Reaching Markets Worldwide</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Proudly serving customers and partners across continents, bringing quality agricultural products to tables
            around the globe.
          </p>
        </div>

        <div className="relative w-full aspect-[2/1] max-w-6xl mx-auto rounded-lg overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src="/images/global-reach-map.png"
            alt="Mahacrop Agrofoods Global Reach Map"
            fill
            className="object-contain bg-green-800 p-8 rounded-lg" // Added p-8 and bg-green-800 to make map visible
            priority
          />
          {/* Subtle overlay for visual depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 font-medium">
            Connecting with farmers and consumers in over <span className="text-green-600 font-bold">42+ countries</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
