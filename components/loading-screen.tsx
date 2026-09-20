"use client"

import { useEffect } from "react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  useEffect(() => {
    const t = setTimeout(() => onLoadingComplete(), 900)
    return () => clearTimeout(t)
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-chamber text-kernel">
      <div className="text-center px-6">
        <p className="crate-stamp text-[11px] mb-3">Chamber coming to temp</p>
        <p className="font-display text-7xl leading-none">−18°</p>
        <p className="crate-stamp mt-4 text-icefield/70">Mahacrop · Shirur IQF</p>
      </div>
    </div>
  )
}
