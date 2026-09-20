"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [loadingPhase, setLoadingPhase] = useState(0)

  useEffect(() => {
    // Multi-phase loading animation
    const phases = [
      { duration: 400, phase: 0 },
      { duration: 500, phase: 1 },
      { duration: 400, phase: 2 },
      { duration: 300, phase: 3 },
    ]

    let currentPhase = 0
    const phaseInterval = setInterval(() => {
      if (currentPhase < phases.length - 1) {
        currentPhase++
        setLoadingPhase(currentPhase)
      } else {
        clearInterval(phaseInterval)
        setTimeout(() => {
          setIsVisible(false)
          setTimeout(() => {
            onLoadingComplete()
          }, 1000)
        }, 500)
      }
    }, phases[currentPhase]?.duration || 800)

    return () => clearInterval(phaseInterval)
  }, [onLoadingComplete])

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-50 bg-white flex items-center justify-center animate-premium-fade-out">
        {/* Premium fade out animation */}
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden">
      {/* Advanced Background System */}
      <div className="absolute inset-0">
        {/* Premium Particle System */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-green-300 rounded-full animate-premium-float"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 8}s`,
            }}
          />
        ))}

        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-orange-600/10 rounded-full blur-3xl animate-premium-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-green-400/5 to-green-600/5 rounded-full blur-3xl animate-premium-pulse-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-white/2 to-white/5 rounded-full blur-3xl animate-premium-rotate"></div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-green-200/20 rotate-45 animate-premium-spin"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-green-200/20 rotate-12 animate-premium-spin-reverse"></div>
          <div className="absolute top-1/2 right-20 w-16 h-16 border border-green-200/20 rotate-45 animate-premium-spin"></div>
        </div>
      </div>

      {/* Premium Logo System */}
      <div className="relative z-10 text-center">
        {/* Main Logo Container */}
        <div className="relative w-24 h-24 mx-auto bg-white/98 backdrop-blur-sm rounded-full p-3 shadow-2xl border-2 border-white/40 overflow-hidden animate-premium-logo">
          {/* Inner Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-premium-shimmer"></div>

          {/* Logo */}
          <div className="relative w-full h-full animate-premium-breathe">
            <Image
              src="/images/mahacrop-logo-full.png"
              alt="Mahacrop Logo"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>

        {/* Premium Typography */}
        <div className="text-center space-y-3 animate-premium-text-reveal mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-800 tracking-wider drop-shadow-2xl">
            <span className="bg-gradient-to-r from-green-800 to-green-900 bg-clip-text text-transparent">MAHACROP</span>
          </h1>
          <h2 className="text-xl font-semibold bg-gradient-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
            AGROFOOD'S LLP
          </h2>
          <p className="text-sm text-gray-600 font-medium tracking-[0.3em] opacity-90">FARMER'S IDENTITY</p>
        </div>
      </div>

      {/* Premium Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  )
}
