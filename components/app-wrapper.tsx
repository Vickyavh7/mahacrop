"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { LoadingScreen } from "./loading-screen"

interface AppWrapperProps {
  children: React.ReactNode
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showApp, setShowApp] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowApp(true)
    }, 100)
  }

  // Prevent flash of content
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isLoading])

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div className={`transition-opacity duration-500 ${showApp ? "opacity-100" : "opacity-0"}`}>{children}</div>
    </>
  )
}
