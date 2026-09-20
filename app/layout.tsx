import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AppWrapper } from "@/components/app-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mahacrop Agrofoods LLP - Farmer's Identity",
  description:
    "Premium frozen foods and agricultural products from Mahacrop Agrofoods LLP. Quality, innovation, and sustainability in every product.",
  keywords: "frozen foods, agriculture, organic, export, mahacrop, agrofoods",
  metadataBase: new URL("https://mahacrop.com"),
  openGraph: {
    title: "Mahacrop Agrofoods LLP - Farmer's Identity",
    description:
      "Premium frozen foods and agricultural products from Pune. Quality, innovation, and sustainability in every product.",
    url: "https://mahacrop.com",
    siteName: "Mahacrop Agrofoods LLP",
    locale: "en_IN",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#166534",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-3 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-green-800"
        >
          Skip to content
        </a>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}
