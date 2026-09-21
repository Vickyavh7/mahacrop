"use client"

import { useEffect } from "react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

const LOGO = "/images/mahacrop logo.png"

const PARTS = [
  {
    id: "leaf-top-left",
    clip: "ellipse(8% 14% at 7.4% 12%)",
    delay: "0.05s",
    fromX: "0px",
    fromY: "-200px",
    kind: "petal",
  },
  {
    id: "leaf-top-right",
    clip: "ellipse(8% 14% at 15.2% 13%)",
    delay: "0.2s",
    fromX: "170px",
    fromY: "-160px",
    kind: "petal",
  },
  {
    id: "leaf-mid-left",
    clip: "ellipse(8% 13% at 6.8% 30%)",
    delay: "0.35s",
    fromX: "-200px",
    fromY: "-10px",
    kind: "petal",
  },
  {
    id: "leaf-low-left",
    clip: "ellipse(8% 13% at 8.2% 45%)",
    delay: "0.5s",
    fromX: "-140px",
    fromY: "190px",
    kind: "petal",
  },
  {
    id: "leaf-right",
    clip: "ellipse(7.5% 13% at 21.4% 41%)",
    delay: "0.65s",
    fromX: "210px",
    fromY: "90px",
    kind: "petal",
  },
  {
    id: "trunk",
    clip: "polygon(1% 100%, 0% 86%, 7% 70%, 12% 46%, 16% 26%, 20% 12%, 23% 14%, 19% 30%, 16% 52%, 15% 72%, 20% 90%, 24% 100%, 17% 94%, 11% 100%)",
    delay: "0.12s",
    fromX: "0px",
    fromY: "80px",
    kind: "trunk",
  },
  {
    id: "wordmark",
    clip: "inset(0 0 0 25.5%)",
    delay: "0s",
    fromX: "40px",
    fromY: "0px",
    kind: "word",
  },
] as const

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  useEffect(() => {
    const reduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const t = setTimeout(() => onLoadingComplete(), reduced ? 400 : 3600)
    return () => clearTimeout(t)
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-chamber text-kernel">
      <div className="flex flex-col items-center px-6">
        <div className="relative h-[5.75rem] w-[15rem] sm:h-[7.5rem] sm:w-[19.5rem]">
          {PARTS.map((part) => (
            <div
              key={part.id}
              className={
                part.kind === "petal" ? "loader-petal" : part.kind === "trunk" ? "loader-trunk" : "loader-word"
              }
              style={{
                clipPath: part.clip,
                animationDelay: part.delay,
                ["--from-x" as string]: part.fromX,
                ["--from-y" as string]: part.fromY,
              }}
            >
              <img src={LOGO} alt="" className="h-full w-full object-contain" />
            </div>
          ))}
          <img src={LOGO} alt="Mahacrop Agrofoods LLP" className="loader-logo-final h-full w-full object-contain" />
        </div>
        <p className="loader-hold crate-stamp mt-6 text-[11px] text-icefield/70">Farm · Packhouse · IQF · Port</p>
      </div>
    </div>
  )
}
