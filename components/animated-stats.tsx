"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface StatItem {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  prefix?: string
}

interface AnimatedCounterProps {
  target: number
  duration?: number
  suffix?: string
  prefix?: string
}

function AnimatedCounter({ target, duration = 2000, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp

      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * target)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, target, duration])

  const formatNumber = (num: number) => {
    return num.toLocaleString()
  }

  return (
    <div ref={counterRef} className="font-display text-4xl text-kernel">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </div>
  )
}

export function AnimatedStats() {
  const stats: StatItem[] = [
    {
      icon: <img src="/images/stats-farmers.png" alt="Farmers" className="w-12 h-12" />,
      value: 18000,
      label: "Registered farmers",
      suffix: "+",
    },
    {
      icon: <img src="/images/stats-farmland.png" alt="Farmland" className="w-12 h-12" />,
      value: 30000,
      label: "Acres of land",
      suffix: "+",
    },
    {
      icon: <img src="/images/stats-villages.png" alt="Villages" className="w-12 h-12" />,
      value: 252,
      label: "Villages covered",
      suffix: "+",
    },
    {
      icon: <img src="/images/stats-globe.png" alt="Global reach" className="w-12 h-12" />,
      value: 42,
      label: "Countries served",
      suffix: "+",
    },
    {
      icon: <img src="/images/stats-customers.png" alt="Customers" className="w-12 h-12" />,
      value: 110,
      label: "Customers worldwide",
      suffix: "+",
    },
    {
      icon: <img src="/images/years-in-industry-map.png" alt="Years in Industry Map" className="w-12 h-12" />,
      value: 4, // Changed from 12 to 4
      label: "Years in the industry",
      suffix: "+",
    },
  ]

  return (
    <section className="py-20 bg-chamber text-icefield relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <p className="section-kicker text-kernel mb-3">Scale</p>
        <h2 className="font-display text-4xl sm:text-5xl uppercase mb-4">What the line already holds</h2>
        <p className="text-icefield/75 max-w-2xl mb-12">
          Farmers, acres, villages, and ports — the network behind every crate.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-kernel/20 border border-kernel/20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-chamber border-0 rounded-none shadow-none"
            >
              <CardContent className="relative p-8">
                <div className="mb-4 flex items-center gap-3">{stat.icon}</div>
                <div className="mb-2">
                  <AnimatedCounter target={stat.value} duration={2500} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <h3 className="crate-stamp text-[11px] text-icefield/70 leading-tight">{stat.label}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="crate-stamp text-[11px] text-kernel mt-10">Hold is active</p>
      </div>
    </section>
  )
}
