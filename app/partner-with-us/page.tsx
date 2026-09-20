import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { WhatsAppFloatingButton } from "@/components/whatsapp-integration"
import { ColdChainRail } from "@/components/cold-chain-rail"

export default function PartnerWithUsPage() {
  return (
    <div className="min-h-screen bg-icefield pb-10 lg:pb-0">
      <Navigation />
      <ColdChainRail />
      <main className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 pt-28 sm:pt-32 lg:pr-28">
        <p className="section-kicker mb-3">New lot</p>
        <h1 className="font-display text-4xl sm:text-5xl uppercase text-chamber mb-4">Open a lot with us</h1>
        <p className="text-lg text-ink/80 max-w-2xl mb-12">
          Bulk, export, private label, or a first trial pallet. Write the spec; we answer from the packhouse.
        </p>
        <div className="max-w-3xl">
          <ContactForm />
        </div>
      </main>
      <WhatsAppFloatingButton />
    </div>
  )
}
