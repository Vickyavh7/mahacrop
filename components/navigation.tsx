"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const targetElement = document.getElementById(id)
    if (targetElement) {
      e.preventDefault()
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const links = [
    { href: "/#home", id: "home", label: "Home" },
    { href: "/#about", id: "about", label: "About" },
    { href: "/#products", id: "products", label: "Products" },
    { href: "/#quality", id: "quality", label: "Quality" },
    { href: "/#contact", id: "contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10 pt-[env(safe-area-inset-top)]">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3 min-w-0" onClick={() => setIsOpen(false)}>
            <div className="relative w-32 h-10 sm:w-40 sm:h-12 shrink-0">
              <Image
                src="/images/mahacrop logo.png"
                alt="Mahacrop Agrofoods LLP Logo"
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.id)}
                className="text-white hover:text-green-400 transition-colors text-sm lg:text-base"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/partner-with-us"
              className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              Partner With Us
            </Link>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white min-h-11 min-w-11"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.id)}
                  className="text-white hover:text-green-400 transition-colors min-h-11 flex items-center px-1"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/partner-with-us"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex min-h-11 items-center justify-center rounded-md bg-green-600 px-4 text-white hover:bg-green-700"
              >
                Partner With Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
