"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  className?: string
  children?: React.ReactNode // Added children prop to allow custom content
}

export function WhatsAppButton({
  phoneNumber,
  message = "Hello! I'm interested in your products.",
  className,
  children, // Destructure children
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    // Format phone number (remove any non-digits and add country code if needed)
    const formattedNumber = phoneNumber.replace(/\D/g, "")
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`

    // Open WhatsApp in a new window/tab
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button onClick={handleWhatsAppClick} className={`bg-green-600 hover:bg-green-700 text-white ${className}`}>
      {children || <><MessageCircle className="w-5 h-5 mr-2" />Message us on WhatsApp</>} {/* Render children or default content */}
    </Button>
  )
}

export function WhatsAppFloatingButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-[max(1.5rem,env(safe-area-inset-right))] z-50">
            <WhatsAppButton
              phoneNumber="919075978141"
              message="Hello! I'm interested in Mahacrop Agrofoods products. Can you please provide more information?"
              className="rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <MessageCircle className="w-6 h-6" /> {/* Only the icon is rendered here */}
            </WhatsAppButton>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Chat on WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
