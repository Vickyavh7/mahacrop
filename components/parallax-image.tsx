"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"

interface ParallaxImageProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  speed?: number // Controls how fast the image moves relative to scroll
}

export function ParallaxImage({ src, alt, fill = true, className, speed = 0.2 }: ParallaxImageProps) {
  const [offsetY, setOffsetY] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      // Calculate scroll position relative to the element's visibility
      const scrollPosition = window.scrollY - (rect.top + window.scrollY - window.innerHeight / 2)
      setOffsetY(scrollPosition * speed)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={ref} className={`relative w-full h-full overflow-hidden ${className}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill={fill}
        className="object-cover"
        style={{ transform: `translateY(${offsetY}px)` }}
        priority
      />
    </div>
  )
}
