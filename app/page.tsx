"use client" // Added 'use client' directive as we are using client-side interactivity

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { TechnologySection } from "@/components/technology-section"
import { ProductCatalog } from "@/components/product-catalog"
import { WhatsAppFloatingButton, WhatsAppButton } from "@/components/whatsapp-integration" // Import WhatsAppButton
import { Testimonials } from "@/components/testimonials"
import { Certifications } from "@/components/certifications"
import { AnimatedStats } from "@/components/animated-stats"
import { FAQSection } from "@/components/faq-section"
import { TeamSection } from "@/components/team-section" // Import new TeamSection
import { AwardsSection } from "@/components/awards-section" // Import new AwardsSection
import { ParallaxImage } from "@/components/parallax-image" // Import ParallaxImage
import { Linkedin } from "lucide-react"

export default function HomePage() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/tractor-field-aerial.png"
            alt="Agricultural field with modern farming"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 animate-premium-text-reveal"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="text-green-400">Food & Healthy Ingredients</span>
            <br />
            <span className="text-white">at Healthy Environments</span>
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 text-green-300 animate-premium-text-reveal"
            style={{ animationDelay: "1s" }}
          >
            Empowering farmers with eco-friendly practices and tools
          </p>
          <div className="flex justify-center gap-4">
            {" "}
            {/* Added flex and gap for button alignment */}
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
              onClick={() => handleScrollTo("products")}
            >
              Explore Our Services
            </Button>
            {/* Changed to WhatsApp Button */}
            <WhatsAppButton
              phoneNumber="919075978141" // Your WhatsApp number
              message="Hello! I'm interested in partnering with Mahacrop Agrofoods LLP."
              className="bg-transparent border-white text-white hover:bg-white/20 px-8 py-3 text-lg"
            >
              Partner With Us
            </WhatsAppButton>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">About Mahacrop Agro Foods</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <ParallaxImage
                  src="/images/agricultural-growth-data.png"
                  alt="Agricultural growth with data visualization"
                  fill
                  className="object-cover"
                  speed={0.1} // Adjust speed as needed
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our unique <strong>Integrated Business Model (IBM)</strong> has generated cost efficiencies and high
                levels of food safety. Our aim is to create sustainable competitive advantages through innovation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Inspired by the bountiful richness of encompassing nature and the desire to nourish communities,{" "}
                <strong>MAHACROP AGRO FOOD'S LLP</strong> began with a humble vision in Pune. Rooted in the ethos of
                sustainability and quality, our journey sprouted from the fertile soils of local farms.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Now we have blossomed into a beacon of innovation and excellence in the frozen food industry.
              </p>
            </div>
          </div>

          {/* Integrated Business Model Diagram */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-green-800 mb-8">Our Crop Specific Integrated Business Model</h3>
            <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl border border-gray-200 bg-white p-4">
              <Image
                src="/images/integrated-business-model.png"
                alt="Crop Specific Integrated Business Model Diagram"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-sm text-gray-600 mt-4">
              A visual representation of our end-to-end agricultural process, from cultivation to market.
            </p>
          </div>

          {/* CEO Section - Integrated into About */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-green-800 text-center mb-12">Meet Our Founder & CEO</h3>
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden p-8 md:p-12">
              <div className="flex flex-col items-center text-center mb-8">
                {/* Photo */}
                <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-green-100 bg-gradient-to-br from-gray-100 to-gray-200 mb-6">
                  <Image
                    src="/images/akshay-satav-photo.jpg"
                    alt="Dr. Akshay Satav, CEO of Mahacrop Agrofoods LLP"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                {/* Name and Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-green-800 leading-tight mb-2">Dr. Akshay Satav</h2>
                <p className="text-green-600 text-xl font-semibold mb-4">Founder & CEO</p>
                <div className="flex items-center justify-center gap-3">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                  <Link
                    href="https://www.linkedin.com/in/dr-akshay-satav-3a2b98263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium text-lg"
                  >
                    LinkedIn Profile
                  </Link>
                </div>
              </div>
              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-center md:text-left">
                Dr. Akshay Satav, the dynamic CEO of Mahacrop Agro Foods LLP, is a visionary leader committed to
                transforming Indian agriculture through innovation, sustainability, and farmer-centric solutions. With a
                deep-rooted understanding of agro-sciences and rural development, he has positioned Mahacrop as a
                trusted name in the agricultural ecosystem, empowering farming communities and promoting environmentally
                responsible practices with a global impact.
              </p>
            </div>
          </div>

          {/* Team Section (CFO & COO) */}
          <TeamSection />

          {/* History Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-green-800 mb-6">Our History</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The journey of <strong>MAHACROP AGRO FOOD'S LLP</strong> started in the year <strong>2021</strong>,
                  with the commitment to satisfy the customer's needs with the best quality products.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With veteran agricultural experts being at the core of our team along with the workers, the work is
                  made simple and convenient. MAHACROP AGRO FOOD'S LLP Founded by <strong>Dr. Akshay Satav</strong>.
                </p>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/plant-nurturing.png"
                  alt="Nurturing plant growth representing company development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedStats />

      <TechnologySection />

      {/* Products Section */}
      <section id="products">
        {" "}
        {/* Added id="products" here */}
        <ProductCatalog />
      </section>

      {/* Quality Standards Section */}
      <section id="quality" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Quality Standards</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/innovation-concept.png"
                alt="Agricultural innovation and technology"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At <strong>MAHACROP AGRO FOOD'S LLP</strong>, we uphold stringent international quality and food safety
                benchmarks. Tailoring our offerings to clients worldwide, our state-of-the-art laboratory ensures
                precise, consistent and rigorous testing.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This guarantees the unwavering quality and consistency of our products throughout the year.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">International Standards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Advanced Testing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Consistent Quality</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Food Safety</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Certifications />

      <Testimonials />

      <FAQSection />

      {/* Awards Section */}
      <AwardsSection />

      {/* Footer */}
      <footer id="contact" className="relative py-12 text-white overflow-hidden">
        {" "}
        {/* Added id="contact" here */}
        <Image
          src="/images/footer-background.jpeg"
          alt="Tea plantation background"
          fill
          className="object-cover object-center"
          quality={80}
          priority
        />
        <div className="absolute inset-0 bg-green-800/80"></div> {/* Dark overlay for readability */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10">
                  <Image src="/images/llp-logo.png" alt="Mahacrop Logo" fill className="object-contain" />
                </div>
                <div>
                  <div className="font-bold">MAHACROP</div>
                  <div className="text-orange-300 text-sm">AGROFOODS LLP</div>
                </div>
              </div>
              <p className="text-green-100 text-sm">
                Farmer's Identity - Committed to agricultural excellence and sustainable farming practices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-green-100">
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#quality" className="hover:text-white transition-colors">
                    Quality
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-green-100">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Frozen Vegetables
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Frozen Fruits
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Fruit Pulps
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-green-100 text-sm">
                <p>📧 mahacropagrofoodsllp@gmail.com</p> {/* Updated email address */}
                <p>📞 +91 9075978141 / 9168766051</p>
                <p>📍 WADHU BK, TAL - SHIRUR, DIST- PUNE 412216</p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-500 mt-8 pt-8 text-center text-green-100 text-sm">
            <p>Copyright © 2025 mahacropagrofoodsllp.com - All Rights Reserved.</p>
          </div>
        </div>
      </footer>
      <WhatsAppFloatingButton />
    </div>
  )
}
