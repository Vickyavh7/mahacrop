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
    <div ref={counterRef} className="text-4xl font-bold text-green-700">
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-green-200/20 to-green-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Our Impact in Numbers</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-orange-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Building trust through consistent quality and service excellence across the agricultural industry
          </p>
        </div>

        {/* Stats Grid - Updated to show 3 in one line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-50"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/30 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>

              <CardContent className="relative p-8 text-center">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden border-4 border-green-100">
                    {/* Icon Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-green-100/50 rounded-2xl"></div>
                    <div className="relative z-10 flex items-center justify-center">{stat.icon}</div>
                  </div>

                  {/* Floating Ring Animation */}
                  <div className="absolute inset-0 w-24 h-24 mx-auto border-2 border-green-300/30 rounded-2xl animate-ping opacity-75"></div>
                </div>

                {/* Animated Counter */}
                <div className="mb-4">
                  <AnimatedCounter target={stat.value} duration={2500} suffix={stat.suffix} prefix={stat.prefix} />
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-gray-800 leading-tight">{stat.label}</h3>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-green-200 px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-800 font-semibold">Growing Every Day</span>
          </div>
        </div>
      </div>
    </section>
  )
}
