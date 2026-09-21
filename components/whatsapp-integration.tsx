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
    <Button onClick={handleWhatsAppClick} className={`bg-kernel hover:bg-chamber text-chamber hover:text-kernel ${className}`}>
      {children || <><MessageCircle className="w-5 h-5 mr-2" />Message us on WhatsApp</>} {/* Render children or default content */}
    </Button>
  )
}

export function WhatsAppFloatingButton() {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(
      "Hello! I'm interested in Mahacrop Agrofoods products. Can you please provide more information?",
    )
    window.open(`https://wa.me/919075978141?text=${encodedMessage}`, "_blank")
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={handleWhatsAppClick}
            aria-label="Chat on WhatsApp"
            className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 bg-transparent p-0 shadow-none hover:scale-110 transition-transform"
          >
            <svg viewBox="0 0 24 24" className="h-14 w-14 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]" aria-hidden="true">
              <path
                fill="#F0C75E"
                d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z"
              />
              <path
                fill="#12382C"
                d="M17.47 14.38c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-1.73-.87-2.86-1.55-4-3.51.3-.52.3-.44.85-1.49.09-.2.05-.36-.02-.51l-.86-2.03c-.22-.51-.45-.44-.66-.45h-.56c-.2 0-.52.07-.8.36-.79.79-1.05 1.96-.07 3.85 1.13 2.15 2.58 3.59 5.3 4.49.7.3 1.35.39 1.81.31.73-.09 1.73-.71 1.97-1.4.24-.69.24-1.28.17-1.4-.07-.12-.26-.2-.55-.34z"
              />
            </svg>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Chat on WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
