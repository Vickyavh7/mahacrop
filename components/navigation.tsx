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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-kernel/30 bg-chamber pt-[env(safe-area-inset-top)]">
      <div className="container mx-auto px-4 py-3">
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
            <span className="hidden sm:inline crate-stamp text-[10px] text-kernel/90">LOT · MH-SRU · IQF</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.id)}
                className="crate-stamp text-[11px] text-icefield/80 hover:text-kernel transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/partner-with-us"
              className="crate-stamp bg-kernel px-4 py-2 text-[11px] text-chamber hover:bg-icefield"
            >
              Open a lot
            </Link>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-icefield min-h-11 min-w-11 hover:bg-white/10 hover:text-kernel"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-kernel/20 pt-4">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.id)}
                  className="crate-stamp text-icefield min-h-11 flex items-center px-1 hover:text-kernel"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/partner-with-us"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex min-h-11 items-center justify-center bg-kernel px-4 crate-stamp text-chamber"
              >
                Open a lot
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
