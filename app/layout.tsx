import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AppWrapper } from "@/components/app-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mahacrop Agrofoods LLP - Farmer's Identity",
  description:
    "Premium frozen foods and agricultural products from Mahacrop Agrofoods LLP. Quality, innovation, and sustainability in every product.",
  keywords: "frozen foods, agriculture, organic, export, mahacrop, agrofoods",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}
