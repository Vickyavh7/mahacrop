import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { WhatsAppFloatingButton } from "@/components/whatsapp-integration"

export default function PartnerWithUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 pt-28 sm:pt-32">
        {" "}
        {/* Added border and rounded-lg, adjusted mt */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">Partner With Us</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore collaboration opportunities and connect with us for business inquiries.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </main>
      <WhatsAppFloatingButton />
    </div>
  )
}
