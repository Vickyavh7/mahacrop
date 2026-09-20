"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { TechnologySection } from "@/components/technology-section"
import { ProductCatalog } from "@/components/product-catalog"
import { WhatsAppFloatingButton } from "@/components/whatsapp-integration"
import { Testimonials } from "@/components/testimonials"
import { Certifications } from "@/components/certifications"
import { AnimatedStats } from "@/components/animated-stats"
import { FAQSection } from "@/components/faq-section"
import { TeamSection } from "@/components/team-section"
import { AwardsSection } from "@/components/awards-section"
import { ColdChainRail } from "@/components/cold-chain-rail"
import { Linkedin } from "lucide-react"

export default function HomePage() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-icefield pb-10 lg:pb-0">
      <Navigation />
      <ColdChainRail />

      <section id="home" className="relative min-h-[100dvh] pt-20 lg:pr-24">
        <div className="grid min-h-[calc(100dvh-5rem)] lg:grid-cols-12">
          <div className="relative z-10 flex flex-col justify-center px-4 py-12 sm:px-8 lg:col-span-6 lg:px-12 bg-chamber text-icefield overflow-hidden">
            <Image
              src="/images/frozen-vegetables.png"
              alt=""
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-chamber/90 via-chamber/78 to-chamber/65" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent 0, transparent 47px, #F0C75E 47px, #F0C75E 48px)",
              }}
            />
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 hidden sm:flex flex-col justify-between py-16 crate-stamp text-[9px] text-kernel/70">
              <span>0°</span>
              <span>−8°</span>
              <span>−18°</span>
            </div>
            <div className="relative z-10">
            <p className="crate-stamp text-kernel mb-6">IQF · Sweet corn · Export hold</p>
            <p className="font-display text-[4.5rem] sm:text-8xl leading-none text-kernel">−18°</p>
            <h1 className="font-display mt-4 text-4xl sm:text-5xl md:text-6xl leading-[0.95] uppercase">
              Held from the farm
              <span className="block text-icefield">to the port.</span>
            </h1>
            <p className="mt-6 max-w-md text-base sm:text-lg text-icefield/80">
              IQF sweet corn, vegetables, fruits, and pulps. Cold chain locked at minus eighteen from Shirur packhouse
              to your dock.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                className="min-h-12 bg-kernel px-6 crate-stamp text-sm text-chamber hover:bg-icefield"
                onClick={() => handleScrollTo("products")}
              >
                Read the lots
              </button>
              <Link
                href="/partner-with-us"
                className="min-h-12 inline-flex items-center justify-center border border-kernel/60 px-6 crate-stamp text-sm text-kernel hover:bg-kernel hover:text-chamber"
              >
                Open a lot
              </Link>
            </div>
            <p className="mt-10 crate-stamp text-[10px] text-steel">LOT MH-SRU · IQF · IBM · FSSAI</p>
            </div>
          </div>
          <div className="relative min-h-[42vh] lg:col-span-6 lg:min-h-full">
            <Image
              src="/images/farm-aerial.jpg"
              alt="Aerial view of agricultural farmland in Shirur"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-chamber/20" />
            <div className="absolute bottom-4 left-4 right-4 border border-kernel/50 bg-chamber/80 px-3 py-2 crate-stamp text-[10px] text-kernel backdrop-blur-sm">
              Crate window · harvest still in the field · freeze in hours
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-icefield">
        <div className="container mx-auto px-6 lg:pr-28">
          <p className="section-kicker mb-3">House</p>
          <h2 className="font-display text-4xl sm:text-5xl uppercase text-chamber mb-10">Mahacrop Agro Foods</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="relative h-80 overflow-hidden border border-steel/40 bg-chamber">
              <Image
                src="/images/agricultural-growth-data.png"
                alt="Agricultural growth with data visualization"
                fill
                className="object-cover object-[center_70%]"
              />
            </div>
            <div className="space-y-5 text-lg text-ink/90 leading-relaxed">
              <p>
                Our <strong>Integrated Business Model (IBM)</strong> is the lot card: farm, packhouse, IQF, and export
                under one roof so food safety and cost stay in the same column.
              </p>
              <p>
                Mahacrop started in Pune on local farms. The work is still soil-first — Shirur taluka, Wadhu Bk — then
                the freeze.
              </p>
              <p>What leaves the chamber is meant for kitchens and importers who read specs, not slogans.</p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="font-display text-3xl uppercase text-chamber mb-6">Crop-specific IBM</h3>
            <div className="relative w-full aspect-[16/9] max-w-5xl border border-steel/40 bg-white p-3">
              <Image
                src="/images/integrated-business-model.png"
                alt="Crop Specific Integrated Business Model Diagram"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="crate-stamp text-[10px] text-steel mt-3">Field → process → freeze → market</p>
          </div>

          <div className="mb-16 grid md:grid-cols-2 gap-0 border border-chamber/20 bg-white">
            <div className="p-8 md:p-12 space-y-4">
              <p className="section-kicker">Founder</p>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-chamber leading-tight">Dr. Akshay Satav</h2>
              <p className="crate-stamp text-[11px] text-pulp">Founder & CEO</p>
              <Link
                href="https://www.linkedin.com/in/dr-akshay-satav-3a2b98263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-chamber hover:text-pulp font-medium"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Link>
              <p className="text-ink/80 leading-relaxed">
                Agro-sciences and rural work, turned into an export packhouse: farmer lots in, IQF lots out, with a
                laboratory in the middle.
              </p>
            </div>
            <div className="flex items-center justify-center bg-icefield p-4 md:p-6">
              <img
                src="/images/akshay-satav-photo.jpg"
                alt="Dr. Akshay Satav, CEO of Mahacrop Agrofoods LLP"
                className="max-h-[28rem] w-full object-contain"
              />
            </div>
          </div>

          <TeamSection />

          <div className="grid lg:grid-cols-2 gap-8 items-center border border-steel/30 bg-white p-8">
            <div>
              <p className="section-kicker mb-2">Since 2021</p>
              <h3 className="font-display text-3xl uppercase text-chamber mb-4">The house</h3>
              <p className="text-lg text-ink/80 leading-relaxed mb-4">
                Mahacrop Agro Foods LLP opened in 2021 to pack what Shirur already grew — then freeze it hard enough
                for a ship.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed">Founded by Dr. Akshay Satav, with farm people at the core of the line.</p>
            </div>
            <div className="relative h-64 overflow-hidden bg-icefield">
              <Image
                src="/images/plant-nurturing.png"
                alt="Nurturing plant growth representing company development"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <AnimatedStats />
      <TechnologySection />

      <section id="products">
        <ProductCatalog />
      </section>

      <section id="quality" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:pr-28">
          <p className="section-kicker mb-3">Lab</p>
          <h2 className="font-display text-4xl sm:text-5xl uppercase text-chamber mb-10">Quality hold</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-56 sm:h-80 lg:h-96 overflow-hidden border border-steel/40">
              <Image
                src="/images/innovation-concept.png"
                alt="Agricultural innovation and technology"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-5">
              <p className="text-lg text-ink/80 leading-relaxed">
                International food-safety marks, a lab on site, and the same spec in January as in June. That is the
                hold.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 crate-stamp text-[11px] text-chamber">
                <li className="border-l-2 border-kernel pl-3">International standards</li>
                <li className="border-l-2 border-kernel pl-3">In-house testing</li>
                <li className="border-l-2 border-kernel pl-3">Year-round spec</li>
                <li className="border-l-2 border-kernel pl-3">Food safety</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Certifications />
      <Testimonials />
      <FAQSection />
      <AwardsSection />

      <footer id="contact" className="relative py-14 text-icefield overflow-hidden bg-chamber">
        <div className="relative z-10 container mx-auto px-6 lg:pr-28">
          <p className="section-kicker text-kernel mb-8">Dock</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="font-display text-2xl uppercase">Mahacrop</div>
              <div className="crate-stamp text-[10px] text-kernel mt-1">Agrofoods LLP</div>
              <p className="mt-4 text-sm text-icefield/70">Farmer&apos;s identity. Shirur freeze. Export hold.</p>
            </div>
            <div>
              <h4 className="crate-stamp text-[11px] text-kernel mb-4">On this lot</h4>
              <ul className="space-y-2 text-icefield/80 text-sm">
                <li>
                  <Link href="#about" className="hover:text-kernel">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-kernel">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#quality" className="hover:text-kernel">
                    Quality
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="crate-stamp text-[11px] text-kernel mb-4">In the chamber</h4>
              <ul className="space-y-2 text-icefield/80 text-sm">
                <li>Frozen vegetables</li>
                <li>Frozen fruits</li>
                <li>Fruit pulps</li>
              </ul>
            </div>
            <div>
              <h4 className="crate-stamp text-[11px] text-kernel mb-4">Reach the dock</h4>
              <div className="space-y-2 text-sm text-icefield/80">
                <p>
                  <a className="hover:text-kernel break-all" href="mailto:mahacropagrofoodsllp@gmail.com">
                    mahacropagrofoodsllp@gmail.com
                  </a>
                </p>
                <p>
                  <a className="hover:text-kernel" href="tel:+919075978141">
                    +91 9075978141
                  </a>
                  {" / "}
                  <a className="hover:text-kernel" href="tel:+919168766051">
                    9168766051
                  </a>
                </p>
                <p>Wadhu Bk, Tal - Shirur, Dist - Pune 412216</p>
              </div>
            </div>
          </div>
          <div className="border-t border-kernel/20 mt-10 pt-6 crate-stamp text-[10px] text-steel">
            © 2026 mahacrop.com · All rights reserved
          </div>
        </div>
      </footer>
      <WhatsAppFloatingButton />
    </div>
  )
}
