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
    e.preventDefault()
    const targetElement = document.getElementById(id)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false) // Close mobile menu after clicking
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Updated to new full logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-40 h-12">
              {" "}
              {/* Adjusted size for the new logo */}
              <Image
                src="/images/mahacrop logo.png"
                alt="Mahacrop Agrofoods LLP Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-white hover:text-green-400 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-white hover:text-green-400 transition-colors">
              About
            </Link>
            <Link
              href="#products"
              onClick={(e) => handleNavLinkClick(e, "products")}
              className="text-white hover:text-green-400 transition-colors"
            >
              Products
            </Link>
            <Link href="#quality" className="text-white hover:text-green-400 transition-colors">
              Quality
            </Link>
            <Link
              href="#contact"
              onClick={(e) => handleNavLinkClick(e, "contact")}
              className="text-white hover:text-green-400 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col gap-4">
              <Link href="#home" className="text-white hover:text-green-400 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-white hover:text-green-400 transition-colors">
                About
              </Link>
              <Link
                href="#products"
                onClick={(e) => handleNavLinkClick(e, "products")}
                className="text-white hover:text-green-400 transition-colors"
              >
                Products
              </Link>
              <Link href="#quality" className="text-white hover:text-green-400 transition-colors">
                Quality
              </Link>
              <Link
                href="#contact"
                onClick={(e) => handleNavLinkClick(e, "contact")}
                className="text-white hover:text-green-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
